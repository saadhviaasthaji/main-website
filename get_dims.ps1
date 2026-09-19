Add-Type -AssemblyName System.Drawing
$images = Get-ChildItem "public\assets\pages\sanstha\home\hero\*.webp"
foreach ($img in $images) {
    $bmp = New-Object System.Drawing.Bitmap($img.FullName)
    Write-Host "$($img.Name): $($bmp.Width)x$($bmp.Height)"
    $bmp.Dispose()
}
