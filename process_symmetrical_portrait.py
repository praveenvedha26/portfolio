import cv2
import numpy as np
from PIL import Image
from rembg import remove, new_session

def process_symmetrical_portrait():
    input_path = r"C:\Users\PRAVEEN MV\.gemini\antigravity\brain\a978201c-26d4-4c6e-b00c-d28264208c6d\portrait_symmetrical_eyes_1794937032966.jpg"
    output_path = r"C:\Users\PRAVEEN MV\.gemini\antigravity\scratch\portfolio\public\portrait.png"

    print("Step 1: Loading symmetrical eye portrait...")
    img = Image.open(input_path).convert("RGBA")
    w, h = img.size
    print(f"Size: {w}x{h}")

    print("Step 2: Removing background cleanly...")
    session = new_session("u2netp")
    cutout = remove(img, session=session)
    arr = np.array(cutout)

    print("Step 3: Applying smooth bottom ease fade...")
    fade_start = int(h * 0.74)
    fade_end = h
    for y in range(fade_start, fade_end):
        prog = (y - fade_start) / float(fade_end - fade_start)
        factor = 0.5 * (1.0 + np.cos(np.pi * prog))
        arr[y, :, 3] = (arr[y, :, 3].astype(np.float32) * factor).astype(np.uint8)

    final_img = Image.fromarray(arr)
    final_img.save(output_path, "PNG", optimize=True)
    print(f"SUCCESS: Saved symmetrical portrait to {output_path}")

if __name__ == "__main__":
    process_symmetrical_portrait()
