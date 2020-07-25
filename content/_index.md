+++
title = "A Code of Conduct for Open Source Projects"
+++

## A Code of Conduct for Open Source Projects

Open Source has always been a foundation of the Internet, and with the advent of social open source networks this is more true than ever.
But free, libre, and open source projects suffer from a startling lack of diversity, with dramatically low representation by women, people of color, and other marginalized populations.

Often it is the unintentional assumptions and actions of project maintainers and participants that make open source projects unwelcoming (or even hostile) to marginalized people: making assumptions about gender or race, reinforcing stereotypes, using sexualized or otherwise inappropriate language, or demonstrating a lack of regard for the safety and well-being of vulnerable people.

One way to begin addressing this problem is to be overt in our openness, welcoming all people to contribute, and pledging in return to value them as whole human beings and to foster an atmosphere of kindness, cooperation, and understanding.

Adopting the Contributor Covenant can be one way to express and codify these values and signal your intention to make your open source community welcoming, diverse, inclusive, and equitable.

## Contributor Covenant v2.0

You can view and download the latest version of the Contributor Covenant here:

- [English (Markdown version)]({{< ref "/version/2/0/code_of_conduct.md" "markdown" >}})
- [English (HTML version)]({{< ref "/version/2/0/code_of_conduct.md" >}})
- [English (text version)]({{< ref "/version/2/0/code_of_conduct.md" "plaintext" >}})

For translations of the Contributor Covenant, please see our [translations page]({{< ref "translations.md" >}}).

The Contributor Covenant uses semantic versioning for revisions so all URLs are permanent.
{{< previous-versions >}}

## Using the Contributor Covenant

We recommend that you add the Markdown or text version of the
Contributor Covenant to your source code repository at the root level.

Thanks to [Simon Vansintjan](https://github.com/simonv3/covenant-generator) there is an automated way to add Contributor Covenant to your project.
Assuming that you have [Node.js](https://nodejs.org/en/ "Node.js Homepage") installed, simply run the following two commands from your project folder:

```
npm install -g covgen; 
covgen "<your_email_address>";
```

If you have npm 5.x installed you can run `npx covgen <your_email_address>` instead of installing globally.

For subsequent projects, simply repeat the second command.

You may want to add language similar to this to introduce your code of conduct:

> Please note that this project is released with a Contributor Code of
> Conduct. By participating in this project you agree to abide by its
> terms.

You may also use the permalinks given above to reference from your project home page.

<strong class="important">Important!</strong> You must add a contact method to the placeholder in the document so that people know how to report violations.

If you are using a README file in your source code repository, you may want to add a badge like this one ![Contributor Covenant Badge](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg) using the code below.

For a markdown README, add the below code where you would like to insert the badge:
```
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)
```
For a reStructuredText README, place `|Contributor Covenant|` where you would like the badge and add the below to your README file:
```

.. |Contributor Covenant| image:: https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg
   :target: code_of_conduct.md
```


*The Contributor Covenant is released under the [Creative Commons Attribution 4.0 International Public License](https://github.com/ContributorCovenant/contributor_covenant/blob/release/LICENSE.md), which requires that attribution be included.*


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
- [Enforcing Your Code of Conduct: Effective Incident Response](https://www.slideshare.net/aeschright/enforcing-your-code-of-conduct-effective-incident-response)
- [Django Code of Conduct Enforcement Manual](https://www.djangoproject.com/conduct/enforcement-manual/)
- [jQuery Foundation Code of Conduct Enforcement Manual](https://js.foundation/community/code-of-conduct/enforcement)
- [How Mozilla is Making Code of Conduct Enforcement Real - and Scaling It](https://medium.com/mozilla-open-innovation/how-were-making-code-of-conduct-enforcement-real-and-scaling-it-3e382cf94415)


## Adopters of the Contributor Covenant

This code of conduct has already been adopted by over
[200,000 open source projects](https://github.com/search?l=Markdown&q=%22Contributor+Covenant%22+fork%3Afalse&type=Code).
Here are just a few major projects and organizations using the Contributor Covenant.

{{< data-list "static/featured-adopters.csv" >}}

[See this page for more]({{< ref "adopters.md" >}} "Other adopters of the Contributor Covenant").

To add your project to the list, [submit a pull request](https://github.com/ContributorCovenant/contributor_covenant "Contributor Covenant source code").


## How to Contribute

The Contributor Covenant is a living document, and has been [open sourced](https://github.com/ContributorCovenant/contributor_covenant "Contributor Covenant source code").
Contributions in the form of issues and pull requests are welcomed and encouraged.
