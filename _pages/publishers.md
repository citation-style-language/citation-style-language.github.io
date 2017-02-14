---
permalink: /publishers/
title: CSL for Publishers
---

<h1>Working with Publishers and Journal Editors</h1>
Our aim at the CSL project is to offer accurate CSL styles for as many academic journals and style guides as possible. And in pursuing this goal, our volunteers can really use the help of publishers and journal editors. Below we will briefly discuss how we currently create CSL styles, and how you, as publisher or editor, can assist us.

First, there is the issue of capturing your preferred citation format in a CSL style. To create a CSL style, we usually rely on the "instruction to authors" section of a journal, or a publisher's style guide. When instructions aren't clear or detailed enough, we also often take a look at some published articles to see what the references look like in print.

Here we can run into several issues. Sometimes we have a hard time getting our hands onto the style guide (e.g., the Chicago Manual of Style and APA style guides are not freely available online). Instructions to authors are often incomplete, and don't cover all the corner cases that we would like to take into account when writing CSL styles. Furthermore, it's not uncommon for there to be discrepancies between the instructions to authors and published references. Finally, when a publisher publishes multiple journals, it is not always easy to figure out which journals share the same citation style.

Second, once we have correctly captured your citation format in CSL, there is the issue of creating CSL styles for all the journals that use this particular format. Some publishers conveniently publish spreadsheets online with the details of all their journals. In other cases, we have to copy and paste all the journal titles and other journal metadata by hand. Journals are also sometimes being discontinued, renamed, or newly introduced, or they change their citation format, and so we need to keep track of such changes and update our collection of CSL styles accordingly.

With thousands of academic journals in circulation, managing a CSL style repository by hand is a lot of work. Fortunately, as publishers and journal editors, you are in a prime position to help us keep our CSL repository in tip-top shape. We love it when you:
<ul>
	<li>make your "instructions to authors" and style guides freely available online.</li>
	<li>standardize on a single citation style if you have multiple publications.</li>
	<li>use a citation style that is standard in your field (e.g., APA in the social sciences, or ICMJE Vancouver in the medical field), instead of using your own variant.</li>
	<li>make your journal metadata publicly available, or contact us to provide us with the necessary information. We like to have an overview of all your journal titles, an indication of which journals have been discontinued and which journals are new, journal ISSNs (for print and online editions), and, if you use multiple citation formats, the citation format used by each journal.</li>
	<li>let us know when a CSL style doesn't follow your citation format. Nobody knows your citation format better than you, and we can't fix formatting problems if we're not aware of them.</li>
</ul>
Don't hesitate to <a href="http://citationstyles.org/contact/">contact us</a> if you have any questions!
<h2>Capturing your Citation Format</h2>
If no CSL style is available yet for your citation format, see our <a href="http://citationstyles.org/styles/">styles</a> section for information on how to request CSL styles, and on how to create one yourself.

If you identify problems with existing CSL styles, contact us via the website or via the <a href="https://github.com/citation-style-language/styles/issues">issue tracker</a> of our style repository.
<h2>Creating Styles in Bulk</h2>
If you use a single citation format for multiple journals, we can quickly generate CSL styles for all your journals. All we need is a spreadsheet with the title, print ISSN, and electronic ISSN of each journal (if you use multiple citation formats, we also need the citation format used by each journal). We invite publishers to <a href="http://citationstyles.org/contact/">get in touch</a> and help us create CSL styles for your journals, and keep them up to date.

As of June 2014, the vast majority of all our styles, over 5400, have been automatically generated using metadata from the following publishers:

[table id=3 /]

We'd love to add your name to the list! We store our collected journal metadata in our <a href="https://github.com/citation-style-language/journals">journals</a> GitHub repository in tab-delimited format, alongside a Ruby script we use to automatically generate styles from this metadata.
<h2>Linking to CSL Styles</h2>
If you wish to link to a CSL style in your "instructions to authors", we recommend the following:

First, consider linking to the CSL style in our style repository instead of self-hosting the CSL style.  If you already created your own CSL style, <a href="https://github.com/citation-style-language/styles/blob/master/CONTRIBUTING.md">submitting the style</a> to our repository is relatively straightforward. Linking to the style from the repository has several advantages: styles in the repository benefit from our quality control and are actively maintained, kept under version control, and can easily be improved by you as well as by the user community.

Second, if you choose to link to a style from the repository, we recommend linking to the copy in the Zotero Style Repository, which mirrors our GitHub repository (e.g. the APA style at <a href="https://raw.githubusercontent.com/citation-style-language/styles/master/apa.csl">https://raw.githubusercontent.com/citation-style-language/styles/master/apa.csl</a> is also available at <a href="http://www.zotero.org/styles/apa">www.zotero.org/styles/apa</a>). Linking to the style in the Zotero Style Repository provides for a better user experience: users of Zotero for Firefox are automatically prompted to install the style when clicking a style link in Firefox, and the style automatically downloads for all other users. In contrast, web browsers typically present users with the raw XML when visiting the GitHub link, after which users have to manually download the style to their computer, which is more complicated for users.

Finally, make sure to include "CSL" or "Citation Style Language" in the link name. Sometimes we come across journals that link to a CSL style as "Style for Zotero". This can be confusing to users, since CSL styles can also be used with many other reference manager tools that support CSL, such as Mendeley and Papers. Instead, use e.g. "CSL style" or "CSL style (for Zotero, Mendeley, Papers, etc.)".