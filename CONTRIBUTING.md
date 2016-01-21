# Contributing

## Code Style

- Use tabs for indentation, spaces for spacing
- Order properties alphabeticaly

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

```css
.class {
	color: #FEFE89;
	font-size: 1.1rem;
}
.second-class,
.third-class {
	backgound-color: white;
}
```
