# Contributor Covenant 3
Working repository for the new Contributor Covenant builder.

## Core Requirements

- [ ] Start from scratch with prior art from HL3 builder
- [ ] Minimal with Javascript as possible, for accessibility reasons and maintenance
- [ ] Wireframe exists [here](https://github.com/EthicalSource/contributor-covenant-builder/issues/25)
- [ ] Something configurable that would allow for the selection of modules (to be created) in a couple of places for what will be offered as a markdown doc for the end user
- [ ] Concept is that there will be different modules for different CC3 use cases (for example, an event vs an open source community) and different chunks of text per context
  - [ ] Common elements:
    - [ ] The preamble (Our Pledge)
    - [ ] Rest of the document
  - [ ] Modular sections:
    - [ ] Standards
    - [ ] Enforcement (takes form input from the user)
    - [ ] Enforcement Guidelines
  - [ ] Plug all selected modules into a mailer form with URL of their project/community to update the adopters list

## Development concerns
See CONTRIBUTING.md for more information including other ways to contribute.

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

## Code Style
- Use spaces for indentation
- Order properties alphabetically

### HTML
- Include `alt` attribute for all images
- Include `title` attribute for all links

### CSS
- Try to use classes instead of IDs unless things are absolutely unique
- One selector per line
- Use `rem` over `em` or `px`
- Capitalize hexadecimal
- Maintain [contrast](https://webaim.org/resources/contrastchecker/) to WCAG AA on normal text, WCAG AAA on large text

### Markdown
- Do not use fancy quotes, dashes, and such; the Markdown processor will handle that.
