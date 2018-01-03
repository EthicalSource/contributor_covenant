# Logo Info

The file `logo.svg` contains the white-on-transparent SVG logo.
Additionally, `logo-inverted.svg` contains a purple-on-transparent SVG logo.
Finally, `mask-icon.svg` contains a 16×16 monochrome icon, for Safari.

## Creating the Favicon

To convert one of the SVGs to a multiple-size favicon, use the following ImageMagick incantation:

```
convert -background none -density 256x256 logo-inverted.svg -define icon:auto-resize favicon.ico
```

## Creating the Apple Touch Icons

At the time of writing, here are [the sizes](https://developer.apple.com/ios/human-interface-guidelines/graphics/app-icon/#app-icon-sizes).

```
convert -background '#5e0d73' -density 256x256 -gravity center -scale 135x135 -extent 180x180 logo.svg apple-touch-icon-180.png
```

Do this for every desired size with appropriate padding (`scale / extent ≈ 0.75` seems good .)
For good measure, run the PNG files through something like [ImageOptim](https://imageoptim.com).
