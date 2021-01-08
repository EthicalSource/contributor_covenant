Contributor Covenant
====================

The most popular code of conduct for open source projects with over 100,000 adoptions.

## Project Home Page

For an overview and usage instructions, please visit 
[contributor-covenant.org](https://contributor-covenant.org/).

## Contributing

Please feel free to submit pull requests or open issues to improve the language of this document 
or to provide additional [translations](https://www.contributor-covenant.org/translations).

You should also check the [issues](https://github.com/ContributorCovenant/contributor_covenant/issues)
for the latest discussions involving the current and future versions of the Contributor Covenant.

To build the website locally, first [install Hugo](https://gohugo.io/getting-started/installing)
using your package manager of choice.  
For example, on Debian/Ubuntu:
```
apt-get install hugo
```

or using [Homebrew](https://brew.sh) on macOS:
```
brew install hugo
```

Then from the repository's root directory, start the development server:
```
hugo server -D
```

## Translating

We're always looking for new localizations of the Contributor Covenant and
are thankful to the volunteers who spend their time on translations.

If you are interested in doing a translation, please follow these steps:

* Fork the repository and make a branch for your translation.
* If it's a new language, add it to `config.toml`,
  with a localized name and language code/optional region (e.g. `pt` or `pt-br`).
* Create a markdown file with your translation in `version/1/4/code-of-conduct.LANGUAGECODE.md`.
* Open a pull request.
* We will put out a call to have one or more other native speakers review the translation.
* Collaborate until the translation is satisfactory.
* We will merge your translation!
* HTML and plain text versions are automatically generated from your markdown file.
* A link to your translation is automatically added to the translations page.

## Adding a Project to the List of Adopters

* Fork the repository.
* Add a new row to the [adopters.csv](static/adopters.csv) file,
  with the project name in the first column, and the project URL in the second column.
* Open a pull request.

## Examples of Projects Using the Contributor Covenant

This code of conduct has been adopted by 
[more than 100,000 open source projects](https://github.com/search?q=%22This+Code+of+Conduct+is+adapted+from+the+[Contributor+Covenant]%22+fork%3Afalse&type=Code).
For a partial list, see [our adopters page](https://www.contributor-covenant.org/adopters.html).

## License

The Contributor Covenant is open source and free culture released under the terms of the 
[Creative Commons Attribution 4.0 International](LICENSE.md) public license.
