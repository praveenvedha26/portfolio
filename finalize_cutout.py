import numpy as np
from PIL import Image

def finalize_portrait():
    input_cutout = r"C:/Users/PRAVEEN MV/.gemini/antigravity/scratch/portfolio/test_new_cutout.png"
    output_path = r"C:/Users/PRAVEEN MV/.gemini/antigravity/scratch/portfolio/public/portrait.png"

    img = Image.open(input_cutout).convert("RGBA")
    w, h = img.size
    arr = np.array(img)

    # 1. Clean out the small decorative star in the bottom right corner (x > 670, y > 910)
    arr[910:, 670:, 3] = 0

    # 2. Smooth ease-out fade at the bottom (from y = 780 to 1024)
    # This ensures the suit jacket dissolves seamlessly into the #050505 background
    fade_start = int(h * 0.76)  # ~778px
    fade_end = h
    for y in range(fade_start, fade_end):
        prog = (y - fade_start) / float(fade_end - fade_start)
        # Cosine ease-out factor (1.0 down to 0.0)
        factor = 0.5 * (1.0 + np.cos(np.pi * prog))
        arr[y, :, 3] = (arr[y, :, 3].astype(np.float32) * factor).astype(np.uint8)

    # Save to public/portrait.png
    final_img = Image.fromarray(arr)
    final_img.save(output_path, "PNG", optimize=True)
    print(f"Successfully finalized and saved {output_path} ({w}x{h})")

if __name__ == "__main__":
    finalize_portrait()
