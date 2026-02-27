# Contributing

Please feel free to submit pull requests or open issues to improve Contributor Covenant, whether through code, content, design, or [translations](https://www.contributor-covenant.org/translations).

If you're new to contributing to projects hosted on Github, or need a refresher, you may find [How to make your first pull request on GitHub](https://www.freecodecamp.org/news/how-to-make-your-first-pull-request-on-github-3/) a useful resource.

Check the [issues](https://github.com/EthicalSource/contributor_covenant/issues) for the latest discussions involving the current and future versions of the Contributor Covenant. If your question, concern, or suggestion is not already listed, please open a new issue using the **New Issue** button, and select either the **🪲Bug Report** or **💡Feature Request** template.

## Adding Your Community to the List of Adopters

* Fork the repository.
* Edit the `assets/adopters.csv` file
* Add a row with your project or community name in the first column, and its URL in the second column.
* For human readability, please make sure that you've preserved alphabetical order in the list.
* Open a pull request.

## We respect and appreciate different kinds of contributions

Ways that you can contribute:

### Community governance experts

We value collaboration with contributors who bring their experience with code of conduct design or enforcement to continue to improve Contributor Covenant.

### Writers and copy editors

We welcome contributions to improve the language of our site.

### Designers

We welcome improvements to the design elements of our website or other ways that you can use your talents to improve [contributor-covenant.org](https://contributor-covenant.org).

### Translators and native speakers

We're always looking for translations by native speakers are thankful to the dozens of volunteer translators and reviewers who have donated their time and expertise.

If you are a native speaker interested in doing a translation, please follow these steps:

1. Fork the repository and make a branch for your translation.
1. If it's a new language, add it to `config.toml`, with a localized name and language code/optional region (e.g. `pt` or `pt-br`).
1. Create a markdown file with your translation in `version/3/0/code_of_conduct.LANGUAGECODE.md`. (Underscores, not hyphens.) Use the English markdown file as an example.
1. Update the two fields at the top of your new markdown file: `reportingPlaceholder`, which should contain the exact placeholder text in the "how to report" section, and `enforcementPlaceholder`, which should contain the exact placeholder text in the "Addressing and Repairing Harm" section.
1. Open a pull request.
1. We will put out a call to have one or more other native speakers review the translation.
1. Collaborate until the translation is satisfactory.
1. We will merge your translation!
1. HTML and plain text versions are automatically generated from your markdown file.
1. A link to your translation is automatically added to the translations page.

Note that we will not accept machine translations.

### Developers

Code contributions to improve the development or operation of the [contributor-covenant.org](https://contributor-covenant.org) web site are welcome. To do so, first check to make sure your issue is not already listed in the [issues](https://github.com/EthicalSource/contributor_covenant/issues).

#### Build the website locally

1. To build the website locally, first [fork](https://github.com/EthicalSource/contributor_covenant/fork) the repo and then clone it to your local machine.
2. [install Hugo](https://gohugo.io/getting-started/installing) using your package manager of choice.

For example, on Debian/Ubuntu:

```bash
apt-get install hugo
```

If you are using Arch Linux:

```bash
pacman -S hugo
```

If you are using [Homebrew](https://brew.sh) on macOS:

```bash
brew install hugo
```

3. From the repository's root directory, start the development server and then view it at http://localhost:1313/.

```bash
hugo server -D
```

4. Any changes you make will be reflected in the browser.

#### Code Style

- Use spaces for indentation
- Order properties alphabetically

##### HTML

- Include `alt` attribute for all images
- Include `title` attribute for all links
- Close all your tags properly

##### CSS

- Try to use classes instead of IDs unless things are absolutely unique
- One selector per line
- Support all modern browsers
- Use `rem` over `em` or `px`
- Capitalize hexadecimal
- Breaking lines should be `1px solid #CCC`
- Maintain [contrast](https://webaim.org/resources/contrastchecker/) to WCAG AA on normal text, WCAG AAA on large text
- Use colors from [this palette](https://color.adobe.com/Royal-Purples-color-theme-7468845/edit/?copy=true&base=2&rule=Custom&selected=4&name=Copy%20of%20Royal%20Purples&mode=rgb&rgbvalues=0.2980392156862745,0.06666666666666667,0.3803921568627451,0.8,0.14901960784313725,0.1411764705882353,0.403921568627451,0,0.6784313725490196,0.5372549019607843,0.12156862745098039,0.6784313725490196,1,0.7137254901960784,0.08627450980392157&swatchOrder=0,1,2,3,4)

##### Markdown

- Do not use fancy quotes, dashes, and such; the Markdown processor will handle that.

