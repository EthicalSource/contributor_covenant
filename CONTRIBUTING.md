# Contributing

Please feel free to submit pull requests or open issues to improve the language of this document 
or to provide additional [translations](https://www.contributor-covenant.org/translations).

You should also check the [issues](https://github.com/ContributorCovenant/contributor_covenant/issues)
for the latest discussions involving the current and future versions of the Contributor Covenant.

### Build the website locally
To build the website locally, first [install Hugo](https://gohugo.io/getting-started/installing)
using your package manager of choice.  
For example, on Debian/Ubuntu:
```
apt-get install hugo
```

If you are using Arch Linux:
```
pacman -S hugo
```

If you are using [Homebrew](https://brew.sh) on macOS:
```
brew install hugo
```

### Start the server
From the repository's root directory, start the development server:
```
hugo server -D
```

## Translating

We're always looking for new localizations of the Contributor Covenant and are thankful to the volunteers who spend their time on translations.

If you are interested in doing a translation, please follow these steps:

1. Fork the repository and make a branch for your translation.
1. If it's a new language, add it to `config.toml`,
  with a localized name and language code/optional region (e.g. `pt` or `pt-br`).
1. Create a markdown file with your translation in `version/2/0/code_of_conduct.LANGUAGECODE.md`. (Underscores, not hyphens.)
1. Open a pull request.
1. We will put out a call to have one or more other native speakers review the translation.
1. Collaborate until the translation is satisfactory.
1. We will merge your translation!
1. HTML and plain text versions are automatically generated from your markdown file.
1. A link to your translation is automatically added to the translations page.

## Adding a Project to the List of Adopters

* Fork the repository.
* Add a new row to the [adopters.csv](static/adopters.csv) file,
  with the project name in the first column, and the project URL in the second column.
* Open a pull request.

# Site contributions

## Code Style
- Use spaces for indentation
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
- Breaking lines should be `1px solid #CCC`
- Maintain [contrast](https://webaim.org/resources/contrastchecker/) to WCAG AA on normal text, WCAG AAA on large text
- Use colors from [this palette](https://color.adobe.com/Royal-Purples-color-theme-7468845/edit/?copy=true&base=2&rule=Custom&selected=4&name=Copy%20of%20Royal%20Purples&mode=rgb&rgbvalues=0.2980392156862745,0.06666666666666667,0.3803921568627451,0.8,0.14901960784313725,0.1411764705882353,0.403921568627451,0,0.6784313725490196,0.5372549019607843,0.12156862745098039,0.6784313725490196,1,0.7137254901960784,0.08627450980392157&swatchOrder=0,1,2,3,4)
- We also use `#FFF`, `#CCC`, and `#111` for main body text

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
