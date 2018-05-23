+++
title = "A Code of Conduct for Open Source Projects"
+++

## A Code of Conduct for Open Source Projects

Open Source has always been a foundation of the Internet, and with the advent of social open source networks this is more true than ever.
But free, libre, and open source projects suffer from a startling lack of diversity, with dramatically low representation by women, people of color, and other marginalized populations.

Part of this problem lies with the very structure of some projects: the use of insensitive language, thoughtless use of pronouns, assumptions of gender, and even sexualized or culturally insensitive names.

Marginalized people also suffer some of the unintended consequences of dogmatic insistence on meritocratic principles of governance.
Studies have shown that organizational cultures that value meritocracy [often result in greater inequality](http://asq.sagepub.com/content/55/4/543.short).
People with "merit" are often [excused for their bad behavior](https://modelviewculture.com/pieces/the-dehumanizing-myth-of-the-meritocracy) in public spaces based on the value of their technical contributions.
Meritocracy also naively assumes a level playing field, in which everyone has access to the same resources, free time, and common life experiences to draw upon.
These factors and more make contributing to open source a daunting prospect for many people, especially women and other underrepresented people.

(For more critical analysis of meritocracy, refer to [this entry](http://geekfeminism.wikia.com/wiki/Meritocracy) on the Geek Feminism wiki.)


## A Small Step Forward

An easy way to begin addressing this problem is to be overt in our openness, welcoming all people to contribute, and pledging in return to value them as human beings and to foster an atmosphere of kindness, cooperation, and understanding.

The Contributor Covenant can be one way to express these values.
Pledge your respect and appreciation for contributors and participants in your open source project by adding an explicit `CODE_OF_CONDUCT.md` to your project repository.

(While more focused on events and conferences, this [101 + FAQ](https://www.ashedryden.com/blog/codes-of-conduct-101-faq) addresses many of the common questions and concerns around codes of conduct.)


## Contributor Covenant v1.4.1

You can view and download the latest version of the Contributor Covenant here:

- [English (Markdown version)]({{< ref "/version/1/4/code-of-conduct.md" "markdown" >}})
- [English (HTML version)]({{< ref "/version/1/4/code-of-conduct.md" >}})
- [English (text version)]({{< ref "/version/1/4/code-of-conduct.md" "plaintext" >}})

For translations of the Contributor Covenant, please see our [translations page]({{< ref "translations.md" >}}).

The Contributor Covenant uses semantic versioning for revisions so all URLs are permanent.
{{< previous-versions >}}

## Using the Contributor Covenant

We recommend that you add the Markdown or text version of the
Contributor Covenant to your source code repository at the root level.

Thanks to [Simon Vansintjan](https://github.com/simonv3/covenant-generator) there is an automated way to add Contributor Covenant to your project.
Assuming that you have [Node.js](https://nodejs.org/en/ "Node.js Homepage") installed, simply run the following two commands from your project folder:

```
npm install -g covgen
covgen <your_email_address>
```

If you have npm 5.x installed you can run `npx covgen <your_email_address>` instead of installing globally.

For subsequent projects, simply repeat the second command.

You may want to add language similar to this to introduce your code of conduct:

> Please note that this project is released with a Contributor Code of
> Conduct. By participating in this project you agree to abide by its
> terms.

You may also use the permalinks given above to reference from your project home page.

<strong class="important">Important!</strong> You must add a contact method to the placeholder in the document so that people know how to report violations.

*The Contributor Covenant is released under the [Creative Commons Attribution 4.0 International Public License](https://github.com/ContributorCovenant/contributor_covenant/blob/master/LICENSE.md), which requires that attribution be included.*


## Enforcing the Contributor Covenant

> Morality cannot be legislated, but behavior can be regulated.
>
> <cite>Dr. Martin Luther King, Jr.</cite>

**Do not** simply add the Contributor Covenant to your project and assume that any problems with civility, harassment, or discrimination will be solved.
As a project maintainer you must be committed to enforcing the code of conduct.
A code of conduct without enforcement sends a false signal that your project is welcoming and inclusive, and can create a dangerous situation for marginalized people who participate.
Adding the Contributor Covenant to a project places responsibility on the project team that must not be taken lightly.

Before adopting the Contributor Covenant take the time to discuss and decide how to deal with problems as they emerge.
Document the policy and procedure for enforcement, and add it to your README or in another visible, appropriate place.
Consider if your project team has the willingness and maturity to follow through on your enforcement procedures.

Some resources useful for thinking about enforcement:

- [Community Safety and Accountability](http://safetyfirstpdx.org)
- [Enforcing Your Code of Conduct: Effective Incident Response](http://www.slideshare.net/aeschright/enforcing-your-code-of-conduct-effective-incident-response)
- [Django Code of Conduct Enforcement Manual](https://www.djangoproject.com/conduct/enforcement-manual/)
- [jQuery Foundation Code of Conduct Enforcement Manual](https://js.foundation/community/code-of-conduct/enforcement)


## Adopters of the Contributor Covenant

This code of conduct has already been adopted by over [40,000 open source projects](https://github.com/search?l=&q=%22This+Code+of+Conduct+is+adapted+from+the+%5BContributor+Covenant%5D%22+path%3A%22%2F%22+fork%3Afalse&ref=advsearch&type=Code).
Here are just a few major projects using the Contributor Covenant.

{{< data-list "static/featured-adopters.csv" >}}

[See this page for more]({{< ref "adopters.md" >}} "Other adopters of the Contributor Covenant").

To add your project to the list, [submit a pull request](https://github.com/ContributorCovenant/contributor_covenant "Contributor Covenant source code").


## How to Contribute

The Contributor Covenant is a living document, and has been [open sourced](https://github.com/ContributorCovenant/contributor_covenant "Contributor Covenant source code").
Contributions in the form of issues and pull requests are welcomed and encouraged.
