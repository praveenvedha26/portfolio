import cv2
import numpy as np
from PIL import Image, ImageFilter, ImageOps, ImageEnhance
from rembg import remove, new_session

def create_reference_portrait():
    input_path = r"C:/Users/PRAVEEN MV/.gemini/antigravity/brain/a978201c-26d4-4c6e-b00c-d28264208c6d/.user_uploaded/media_1794920270827_2230d2e2.jpg"
    output_path = r"C:/Users/PRAVEEN MV/.gemini/antigravity/scratch/portfolio/public/portrait.png"

    print("Step 1: Loading raw portrait...")
    orig = Image.open(input_path).convert("RGBA")
    w, h = orig.size
    print(f"Original size: {w}x{h}")

    print("Step 2: Clean background removal with u2netp...")
    session = new_session("u2netp")
    cutout = remove(orig, session=session)
    r, g, b, a = cutout.split()
    
    # Convert to numpy for precise pixel manipulation
    r_np = np.array(r, dtype=np.float32) / 255.0
    g_np = np.array(g, dtype=np.float32) / 255.0
    b_np = np.array(b, dtype=np.float32) / 255.0
    a_np = np.array(a, dtype=np.float32) / 255.0

    print("Step 3: Isolating Head/Skin vs Shirt/Clothing...")
    # Calculate luminance
    lum = 0.299 * r_np + 0.587 * g_np + 0.114 * b_np
    
    # Create mask for torso/clothing (below chin, approximately y > 470)
    torso_mask = np.zeros((h, w), dtype=np.float32)
    for y in range(h):
        if y > 450:
            weight = min(1.0, (y - 450) / 40.0)
            torso_mask[y, :] = weight
            
    # Skin tone detection in normalized RGB to protect face/neck/hands
    # Human skin typically has R > G > B
    skin_indicator = (r_np > g_np) & (g_np > b_np) & (r_np - b_np > 0.08)
    # Blend: torso mask but protect skin areas around neck
    shirt_mask = torso_mask * (~skin_indicator).astype(np.float32)
    shirt_mask_smooth = cv2.GaussianBlur(shirt_mask, (21, 21), 0)

    print("Step 4: Transforming shirt to deep executive black/charcoal...")
    # Darken shirt into black blazer tone (like reference image)
    lum_shirt = lum * 0.28  # Deep charcoal blacks
    
    # Face & Skin: high contrast editorial black & white
    # Enhance face contrast using S-curve
    lum_face = 3.0 * (lum ** 2) - 2.0 * (lum ** 3)
    lum_face = np.clip(lum_face * 1.15, 0.0, 1.0)
    
    # Combine face and darkened suit
    final_lum = (1.0 - shirt_mask_smooth) * lum_face + shirt_mask_smooth * lum_shirt
    final_lum = np.clip(final_lum, 0.0, 1.0)
    
    # Sharpness enhancement
    final_gray = (final_lum * 255).astype(np.uint8)
    final_gray_pil = Image.fromarray(final_gray)
    sharp_enhancer = ImageEnhance.Sharpness(final_gray_pil)
    final_gray_pil = sharp_enhancer.enhance(1.4)
    final_gray = np.array(final_gray_pil, dtype=np.float32) / 255.0

    print("Step 5: Applying Red Rim Light & Warm Shadow Aura...")
    # Red-Orange accent: #FF4522 (RGB: 255, 69, 34)
    red_r = 255.0 / 255.0
    red_g = 69.0 / 255.0
    red_b = 34.0 / 255.0

    # Silhouette boundary detection for rim light
    alpha_uint = (a_np * 255).astype(np.uint8)
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (7, 7))
    dilated_alpha = cv2.dilate(alpha_uint, kernel, iterations=1)
    rim_mask = cv2.subtract(dilated_alpha, alpha_uint)
    rim_mask = cv2.GaussianBlur(rim_mask, (5, 5), 0)
    rim_mask_np = (rim_mask.astype(np.float32) / 255.0)

    # Inner edge rim highlight on shoulders & hair
    eroded_alpha = cv2.erode(alpha_uint, kernel, iterations=1)
    inner_rim = cv2.subtract(alpha_uint, eroded_alpha)
    inner_rim = cv2.GaussianBlur(inner_rim, (5, 5), 0)
    inner_rim_np = (inner_rim.astype(np.float32) / 255.0)

    # Base RGB with subtle split tone (crimson warmth in deep shadows)
    shadow_warmth = np.clip(1.0 - (final_gray / 0.4), 0.0, 1.0) ** 2
    
    r_channel = final_gray + shadow_warmth * 0.12 * red_r + inner_rim_np * 0.45 * red_r
    g_channel = final_gray * 0.98 + inner_rim_np * 0.12 * red_g
    b_channel = final_gray * 0.96 + inner_rim_np * 0.05 * red_b

    r_channel = np.clip(r_channel, 0.0, 1.0)
    g_channel = np.clip(g_channel, 0.0, 1.0)
    b_channel = np.clip(b_channel, 0.0, 1.0)

    # Back Shadow Aura (soft diffused crimson shadow directly behind cutout)
    back_shadow = cv2.GaussianBlur(alpha_uint, (45, 45), 0)
    back_shadow_np = (back_shadow.astype(np.float32) / 255.0)

    print("Step 6: Eliminating table & applying smooth bottom bust fade...")
    # The table begins around y = 730 in original image.
    # To match the reference bust portrait, we fade out starting at y = 600 down to y = 740,
    # completely eliminating the table and hands, creating the clean executive bust!
    fade_start = int(h * 0.58)  # ~590px
    fade_end = int(h * 0.74)    # ~750px
    
    fade_curve = np.ones((h, w), dtype=np.float32)
    for y in range(h):
        if y > fade_end:
            fade_curve[y, :] = 0.0
        elif y >= fade_start:
            prog = (y - fade_start) / float(fade_end - fade_start)
            # Smooth cosine ease-out
            fade_curve[y, :] = 0.5 * (1.0 + np.cos(np.pi * prog))

    final_alpha_np = a_np * fade_curve
    final_back_shadow_np = back_shadow_np * fade_curve

    # Composite: Back Shadow + Rim Light + Subject
    # Create final RGBA image
    out_rgba = np.zeros((h, w, 4), dtype=np.uint8)
    
    # 1. Back shadow contribution (where subject alpha is low)
    shadow_alpha = np.clip(final_back_shadow_np * 0.7 * (1.0 - final_alpha_np * 0.8), 0.0, 1.0)
    rim_alpha = np.clip(rim_mask_np * 0.85 * fade_curve, 0.0, 1.0)
    
    # Combine alphas
    total_alpha = np.clip(final_alpha_np + shadow_alpha + rim_alpha, 0.0, 1.0)
    
    # Weighted colors
    comp_r = (r_channel * final_alpha_np + red_r * shadow_alpha + red_r * rim_alpha)
    comp_g = (g_channel * final_alpha_np + red_g * shadow_alpha + red_g * rim_alpha)
    comp_b = (b_channel * final_alpha_np + red_b * shadow_alpha + red_b * rim_alpha)
    
    # Normalize by total_alpha where total_alpha > 0
    safe_alpha = np.where(total_alpha > 0.001, total_alpha, 1.0)
    comp_r = np.clip((comp_r / safe_alpha) * 255.0, 0, 255).astype(np.uint8)
    comp_g = np.clip((comp_g / safe_alpha) * 255.0, 0, 255).astype(np.uint8)
    comp_b = np.clip((comp_b / safe_alpha) * 255.0, 0, 255).astype(np.uint8)
    comp_a = np.clip(total_alpha * 255.0, 0, 255).astype(np.uint8)

    final_img = Image.merge("RGBA", (
        Image.fromarray(comp_r),
        Image.fromarray(comp_g),
        Image.fromarray(comp_b),
        Image.fromarray(comp_a)
    ))

    print(f"Step 7: Saving reference-matched portrait to {output_path}...")
    final_img.save(output_path, "PNG", optimize=True)
    print("SUCCESS: Reference-matched portrait created!")

if __name__ == "__main__":
    create_reference_portrait()
