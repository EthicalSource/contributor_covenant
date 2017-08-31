# Contributing

## Code Style

- Use spaces for indentation,
- Order properties alphabetically

### HTML
- Include `alt` attribute for all images
- Include `title` attribute for all links
- Close all your tags properly

### CSS
- Try to use classes instead of IDs unless things are absolutely unique
- One selector per line
- Support IE 9 and above
- Use `rem` over `em` or `px`
- Capitalize hexadecimal
- Breaking lines should be `1px solid #ccc`
- Maintain [contrast](http://webaim.org/resources/contrastchecker/) to WCAG AA on normal text, WCAG AAA on large text.
- Use colors from [this palette](https://color.adobe.com/Royal-Purples-color-theme-7468845/edit/?copy=true&base=2&rule=Custom&selected=4&name=Copy%20of%20Royal%20Purples&mode=rgb&rgbvalues=0.2980392156862745,0.06666666666666667,0.3803921568627451,0.8,0.14901960784313725,0.1411764705882353,0.403921568627451,0,0.6784313725490196,0.5372549019607843,0.12156862745098039,0.6784313725490196,1,0.7137254901960784,0.08627450980392157&swatchOrder=0,1,2,3,4).
- We also use `#fff`, `#ccc`, and `#111` for main body text.

```css
.class {
	color: #4C1161;
	font-size: 1.1rem;
}
.second-class,
.third-class {
	background-color: white;
}
```

### Markdown
- Do not use fancy quotes, dashes, and such; the Markdown processor will handle that.
