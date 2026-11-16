Add-Type -AssemblyName System.Drawing

$width = 800
$height = 1000
$bmp = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias

# Transparent background
$g.Clear([System.Drawing.Color]::Transparent)

# Ambient crimson radial aura behind silhouette
$glowBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(45, 255, 69, 34))
$g.FillEllipse($glowBrush, 120, 80, 560, 720)

# Torso silhouette
$torsoPath = New-Object System.Drawing.Drawing2D.GraphicsPath
$torsoPoints = @(
    [System.Drawing.Point]::new(100, 1000),
    [System.Drawing.Point]::new(160, 780),
    [System.Drawing.Point]::new(240, 560),
    [System.Drawing.Point]::new(330, 470),
    [System.Drawing.Point]::new(470, 470),
    [System.Drawing.Point]::new(560, 560),
    [System.Drawing.Point]::new(640, 780),
    [System.Drawing.Point]::new(700, 1000)
)
$torsoPath.AddClosedCurve($torsoPoints)
$torsoBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    [System.Drawing.Point]::new(400, 400),
    [System.Drawing.Point]::new(400, 1000),
    [System.Drawing.Color]::FromArgb(240, 26, 26, 28),
    [System.Drawing.Color]::FromArgb(255, 8, 8, 10)
)
$g.FillPath($torsoBrush, $torsoPath)

# Neck
$neckBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(250, 22, 22, 24))
$g.FillRectangle($neckBrush, 360, 390, 80, 100)

# Head silhouette
$headBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    [System.Drawing.Point]::new(400, 140),
    [System.Drawing.Point]::new(400, 420),
    [System.Drawing.Color]::FromArgb(255, 34, 34, 38),
    [System.Drawing.Color]::FromArgb(255, 18, 18, 20)
)
$g.FillEllipse($headBrush, 310, 180, 180, 240)

# Hair contour
$hairBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 12, 12, 14))
$hairPoints = @(
    [System.Drawing.Point]::new(295, 250),
    [System.Drawing.Point]::new(310, 160),
    [System.Drawing.Point]::new(380, 130),
    [System.Drawing.Point]::new(450, 140),
    [System.Drawing.Point]::new(505, 180),
    [System.Drawing.Point]::new(490, 270),
    [System.Drawing.Point]::new(420, 170),
    [System.Drawing.Point]::new(350, 180)
)
$hairPath = New-Object System.Drawing.Drawing2D.GraphicsPath
$hairPath.AddClosedCurve($hairPoints)
$g.FillPath($hairBrush, $hairPath)

# Vermilion rim light on edge
$rimPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(220, 255, 69, 34), 4)
$g.DrawArc($rimPen, 305, 175, 190, 250, 130, 160)
$rimTorsoPoints = @(
    [System.Drawing.Point]::new(240, 560),
    [System.Drawing.Point]::new(160, 780),
    [System.Drawing.Point]::new(100, 1000)
)
$g.DrawCurve($rimPen, $rimTorsoPoints)

# Center graphic badge
$font = New-Object System.Drawing.Font('Arial', 16, [System.Drawing.FontStyle]::Bold)
$strBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(200, 245, 245, 245))
$sf = New-Object System.Drawing.StringFormat
$sf.Alignment = [System.Drawing.StringAlignment]::Center
$g.DrawString('PRAVEEN VEDANAYAGAM', $font, $strBrush, 400, 620, $sf)

$subFont = New-Object System.Drawing.Font('Arial', 11, [System.Drawing.FontStyle]::Bold)
$subBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(220, 255, 69, 34))
$g.DrawString('PORTRAIT PLACEHOLDER', $subFont, $subBrush, 400, 660, $sf)

$bmp.Save('C:\Users\PRAVEEN MV\.gemini\antigravity\scratch\portfolio\public\portrait.png', [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()
Write-Output "Successfully created public/portrait.png"
