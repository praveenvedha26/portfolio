import os
import numpy as np
from PIL import Image, ImageFilter, ImageOps, ImageEnhance
from rembg import remove, new_session

def process_portrait():
    input_path = r"C:/Users/PRAVEEN MV/.gemini/antigravity/brain/a978201c-26d4-4c6e-b00c-d28264208c6d/.user_uploaded/media_1794920270827_2230d2e2.jpg"
    output_path = r"C:/Users/PRAVEEN MV/.gemini/antigravity/scratch/portfolio/public/portrait.png"

    print("Step 1: Loading input image...")
    input_img = Image.open(input_path).convert("RGBA")
    w, h = input_img.size
    print(f"Original size: {w}x{h}")

    print("Step 2: Removing background with u2netp...")
    session = new_session("u2netp")
    cutout = remove(input_img, session=session)
    
    # Split into channels
    r, g, b, a = cutout.split()
    
    print("Step 3: Creating High-Contrast Editorial Black & White...")
    rgb_img = Image.merge("RGB", (r, g, b))
    
    # Custom luminance conversion: emphasize skin tones and eyes
    gray = ImageOps.grayscale(rgb_img)
    
    # Boost contrast and sharpness
    contrast_enhancer = ImageEnhance.Contrast(gray)
    gray_boosted = contrast_enhancer.enhance(1.4)
    
    sharpness_enhancer = ImageEnhance.Sharpness(gray_boosted)
    gray_sharp = sharpness_enhancer.enhance(1.5)
    
    gray_np = np.array(gray_sharp, dtype=np.float32) / 255.0
    
    # Sigmoidal / S-curve tone mapping: crisp whites, deep blacks
    s_curve = 1.0 / (1.0 + np.exp(-9.0 * (gray_np - 0.48)))
    # Normalize s-curve to 0..1
    s_min, s_max = s_curve.min(), s_curve.max()
    s_curve = (s_curve - s_min) / (s_max - s_min)
    
    # Blend 65% S-curve + 35% linear for natural highlights
    bw_np = 0.65 * s_curve + 0.35 * gray_np
    bw_np = np.clip(bw_np, 0.0, 1.0)
    
    print("Step 4: Applying Red Shadow & Rim Aura...")
    # Color definition for the fiery red shadow & rim: #FF4522 (RGB: 255, 69, 34)
    red_r = 255
    red_g = 69
    red_b = 34
    
    # Split-toning: subtle dark crimson warmth in the deepest shadows
    deep_shadow_mask = np.clip(1.0 - (bw_np / 0.35), 0.0, 1.0) ** 2
    out_r = np.clip((bw_np + deep_shadow_mask * 0.12) * 255.0, 0, 255).astype(np.uint8)
    out_g = np.clip((bw_np * 0.98) * 255.0, 0, 255).astype(np.uint8)
    out_b = np.clip((bw_np * 0.96) * 255.0, 0, 255).astype(np.uint8)
    
    bw_subject = Image.merge("RGBA", (
        Image.fromarray(out_r),
        Image.fromarray(out_g),
        Image.fromarray(out_b),
        a
    ))
    
    # Generate the Red Ambient Shadow layer (blurred silhouette behind)
    alpha_img = a
    
    # 1. Broad soft ambient red backlight glow
    ambient_blur = alpha_img.filter(ImageFilter.GaussianBlur(radius=36))
    amb_np = np.array(ambient_blur, dtype=np.float32) / 255.0
    
    ambient_r = np.full((h, w), red_r, dtype=np.uint8)
    ambient_g = np.full((h, w), red_g, dtype=np.uint8)
    ambient_b = np.full((h, w), red_b, dtype=np.uint8)
    ambient_a = np.clip(amb_np * 140, 0, 255).astype(np.uint8)
    ambient_layer = Image.merge("RGBA", (
        Image.fromarray(ambient_r),
        Image.fromarray(ambient_g),
        Image.fromarray(ambient_b),
        Image.fromarray(ambient_a)
    ))
    
    # 2. Tight red rim drop shadow hugging the edges
    tight_blur = alpha_img.filter(ImageFilter.GaussianBlur(radius=12))
    tight_np = np.array(tight_blur, dtype=np.float32) / 255.0
    
    tight_r = np.full((h, w), 255, dtype=np.uint8)
    tight_g = np.full((h, w), 55, dtype=np.uint8)
    tight_b = np.full((h, w), 25, dtype=np.uint8)
    tight_a = np.clip(tight_np * 190, 0, 255).astype(np.uint8)
    tight_layer = Image.merge("RGBA", (
        Image.fromarray(tight_r),
        Image.fromarray(tight_g),
        Image.fromarray(tight_b),
        Image.fromarray(tight_a)
    ))
    
    # 3. Outer rim stroke highlight
    dilated_mask = alpha_img.filter(ImageFilter.MaxFilter(size=5))
    dilated_np = np.array(dilated_mask, dtype=np.float32) / 255.0
    edge_np = np.clip(dilated_np - (np.array(alpha_img, dtype=np.float32)/255.0), 0.0, 1.0)
    edge_blur = Image.fromarray((edge_np * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(radius=2))
    edge_a = np.clip(np.array(edge_blur, dtype=np.float32) * 220, 0, 255).astype(np.uint8)
    
    edge_layer = Image.merge("RGBA", (
        Image.fromarray(np.full((h, w), 255, dtype=np.uint8)),
        Image.fromarray(np.full((h, w), 80, dtype=np.uint8)),
        Image.fromarray(np.full((h, w), 40, dtype=np.uint8)),
        Image.fromarray(edge_a)
    ))
    
    # Compose all layers together
    # Canvas: transparent background
    canvas = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    canvas.paste(ambient_layer, (0, 0), ambient_layer)
    canvas.paste(tight_layer, (0, 0), tight_layer)
    canvas.paste(edge_layer, (0, 0), edge_layer)
    canvas.paste(bw_subject, (0, 0), bw_subject)
    
    print("Step 5: Applying Bottom Linear Gradient Fade...")
    # From y = 68% down to 100%, fade smoothly to 0 alpha
    canv_r, canv_g, canv_b, canv_a = canvas.split()
    canv_a_np = np.array(canv_a, dtype=np.float32)
    
    fade_start = int(h * 0.68)
    for y in range(fade_start, h):
        progress = (y - fade_start) / float(h - fade_start)
        # Cosine / smooth ease-in-out fade
        fade_factor = 0.5 * (1.0 + np.cos(np.pi * progress))
        canv_a_np[y, :] *= fade_factor
        
    final_alpha = Image.fromarray(np.clip(canv_a_np, 0, 255).astype(np.uint8))
    final_portrait = Image.merge("RGBA", (canv_r, canv_g, canv_b, final_alpha))
    
    print(f"Step 6: Saving customized portrait to {output_path}...")
    final_portrait.save(output_path, "PNG", optimize=True)
    print("SUCCESS: Portrait generated and saved cleanly!")

if __name__ == "__main__":
    process_portrait()
