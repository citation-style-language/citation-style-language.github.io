---
permalink: /publishers/
title: Publishers
description: CSL for publishers. Learn how to work with us to get Citation Style Language styles for all your journals and style guides.
---
{% include toc %}

## Working with Publishers and Journal Editors

Our aim at the CSL project is to offer accurate CSL styles for as many academic journals and style guides as possible.
And in pursuing this goal, our volunteers can really use the help of publishers and journal editors.
Below we will briefly discuss how we currently create CSL styles, and how you, as publisher or editor, can assist us.

First, there is the issue of capturing your preferred citation format in a CSL style.
To create a CSL style, we usually rely on the "instruction to authors" section of a journal, or a publisher's style guide.
When instructions aren't clear or detailed enough, we also often take a look at some published articles to see what the references look like in print.

Here we can run into several issues.
Sometimes we have a hard time getting our hands onto the style guide (e.g., the Chicago Manual of Style and APA style guides are not freely available online).
Instructions to authors are often incomplete, and don't cover all the corner cases that we would like to take into account when writing CSL styles.
Furthermore, it's not uncommon for there to be discrepancies between the instructions to authors and published references.
Finally, when a publisher publishes multiple journals, it is not always easy to figure out which journals share the same citation style.

Second, once we have correctly captured your citation format in CSL, there is the issue of creating CSL styles for all the journals that use this particular format.
Some publishers conveniently publish spreadsheets online with the details of all their journals.
In other cases, we have to copy and paste all the journal titles and other journal metadata by hand.
Journals are also sometimes being discontinued, renamed, or newly introduced, or they change their citation format, and so we need to keep track of such changes and update our collection of CSL styles accordingly.

With thousands of academic journals in circulation, managing a CSL style repository by hand is a lot of work.
Fortunately, as publishers and journal editors, you are in a prime position to help us keep our CSL repository in tip-top shape.
We love it when you:

* make your "instructions to authors" and style guides freely available online.
* standardize on a single citation style if you have multiple publications.
* use a citation style that is standard in your field (e.g., APA in the social sciences, or ICMJE Vancouver in the medical field), instead of using your own variant.
* make your journal metadata publicly available, or contact us to provide us with the necessary information.
We like to have an overview of all your journal titles, an indication of which journals have been discontinued and which journals are new, journal ISSNs (for print and online editions), and, if you use multiple citation formats, the citation format used by each journal.
* let us know when a CSL style doesn't follow your citation format.
Nobody knows your citation format better than you, and we can't fix formatting problems if we're not aware of them.

Don't hesitate to [contact us](/contact/) if you have any questions!

### Capturing your Citation Format

If no CSL style is available yet for your citation format, see our [Authors](/authors/) section for information on how to request CSL styles, and on how to create one yourself.

If you identify problems with existing CSL styles, [contact us](/contact/) via the website or via the [issue tracker](https://github.com/citation-style-language/styles/issues) of our style repository.

### Creating Styles in Bulk

If you use a single citation format for multiple journals, we can quickly generate CSL styles for all your journals.
All we need is a spreadsheet with the title, print ISSN, and electronic ISSN of each journal (if you use multiple citation formats, we also need the citation format used by each journal).
We invite publishers to [get in touch](/contact/) and help us create CSL styles for your journals, and keep them up to date.

As of June 2014, the vast majority of all our styles, over 5400, have been automatically generated using metadata from the following publishers:

|Publisher|Number of generated CSL styles|
|--- |--- |
|Elsevier|1806|
|Springer|1408|
|Taylor & Francis|615|
|BioMed Central (BMC)|302|
|Institute of Electrical and Electronics Engineers (IEEE)|203|
|Multidisciplinary Digital Publishing Institute (MDPI)|124|
|American Psychological Association (APA)|96|
|Karger|92|
|IOP Publishing|68|
|Future Science Group|58|
|Copernicus|48|
|BMJ|47|
|Landes Bioscience|45|
|American Chemical Society (ACS)|44|
|Frontiers|43|
|Royal Society of Chemistry (RSC)|41|
|Association for Computing Machinery (ACM)|41|
|Annual Reviews|41|
|Thomson Reuters Legal, Tax and Accounting Australia|26|
|American Society of Mechanical Engineers (ASME)|26|
|Elsevier Current Opinion|16|
|American Institute of Physics (AIP)|15|
|Healio|14|
|Cell Press - Trends Journals|14|
|Cell Press - Research Journals|13|
|American Society for Microbiology (ASM)|13|
|American Physical Society (APS)|12|
|American Meteorological Society (AMS)|12|
|American Sociological Association (ASA)|11|
|Geological Society of America (GSA)|10|
|SPIE|10|
|International Union of Crystallography (IUCr)|9|
|Inter-Research Science Center|9|
|Spandidos Publications|8|
|American Association for Cancer Research (AACR)|8|
|The Royal Society|7|
|Public Library Of Science (PLOS)|7|
|American Institute of Aeronautics and Astronautics (AIAA)|7|
|American Fisheries Society (AFS)|6|
|Federation of European Microbiological Societies (FEMS)|5|
|Modern Humanities Research Association (MHRA)|5|
|Society for General Microbiology (SGM)|5|
|The Company of Biologists|5|
|Oikos Editorial Office|5|
|Endocrine Society|4|
|American Society for Pharmacology and Experimental Therapeutics (ASPET)|4|
|Society for Laboratory Automation and Screening (SLAS)|2|

We'd love to add your name to the list! We store our collected journal metadata in our [journals](https://github.com/citation-style-language/journals) GitHub repository in tab-delimited format, alongside a Ruby script we use to automatically generate styles from this metadata.

### Linking to CSL Styles

If you wish to link to a CSL style in your "instructions to authors", we recommend the following:

First, consider linking to the CSL style in our style repository instead of self-hosting the CSL style.
If you already created your own CSL style, [submitting the style](https://github.com/citation-style-language/styles/blob/master/CONTRIBUTING.md) to our repository is relatively straightforward.
Linking to the style from the repository has several advantages: styles in the repository benefit from our quality control and are actively maintained, kept under version control, and can easily be improved by you as well as by the user community.

Second, if you choose to link to a style from the repository, we recommend linking to the copy in the Zotero Style Repository, which mirrors our GitHub repository (e.g. the APA style at [https://raw.githubusercontent.com/citation-style-language/styles/master/apa.csl](https://raw.githubusercontent.com/citation-style-language/styles/master/apa.csl) is also available at [www.zotero.org/styles/apa](http://www.zotero.org/styles/apa)).
Linking to the style in the Zotero Style Repository provides for a better user experience: users of Zotero for Firefox are automatically prompted to install the style when clicking a style link in Firefox, and the style automatically downloads for all other users.
In contrast, web browsers typically present users with the raw XML when visiting the GitHub link, after which users have to manually download the style to their computer, which is more complicated for users.

Finally, make sure to include "CSL" or "Citation Style Language" in the link name.
Sometimes we come across journals that link to a CSL style as "Style for Zotero".
This can be confusing to users, since CSL styles can also be used with many other reference manager tools that support CSL, such as Mendeley and Papers.
Instead, use e.g. "CSL style" or "CSL style (for Zotero, Mendeley, Papers, etc.)".
