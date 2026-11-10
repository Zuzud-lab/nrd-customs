from pathlib import Path
import re
import shutil

import qrcode
from qrcode.constants import ERROR_CORRECT_H
from qrcode.image.svg import SvgPathImage


URL = "https://zuzud-lab.github.io/nrd-customs/"
ROOT = Path(__file__).resolve().parents[1]
PRINT_DIR = Path(r"C:\Projects\logo-nrd\final\print\qr")


def build_qr() -> None:
    PRINT_DIR.mkdir(parents=True, exist_ok=True)
    svg_path = PRINT_DIR / "qr-nrd-customs-50mm.svg"
    png_path = PRINT_DIR / "qr-nrd-customs-50mm.png"

    qr = qrcode.QRCode(
        version=None,
        error_correction=ERROR_CORRECT_H,
        box_size=24,
        border=4,
    )
    qr.add_data(URL)
    qr.make(fit=True)

    svg = qr.make_image(image_factory=SvgPathImage)
    svg.save(svg_path)
    svg_text = svg_path.read_text(encoding="utf-8")
    svg_text = re.sub(r'width="[^"]+"', 'width="50mm"', svg_text, count=1)
    svg_text = re.sub(r'height="[^"]+"', 'height="50mm"', svg_text, count=1)
    svg_path.write_text(svg_text, encoding="utf-8")

    png = qr.make_image(fill_color="#000000", back_color="#ffffff")
    png.save(png_path, dpi=(600, 600))

    for target in (ROOT / "public" / "nrd-qr.svg", ROOT / "docs" / "nrd-qr.svg"):
        shutil.copy2(svg_path, target)

    print(f"URL={URL}")
    print(f"modules={qr.modules_count}, border={qr.border}")
    print(svg_path)
    print(png_path)


if __name__ == "__main__":
    build_qr()
