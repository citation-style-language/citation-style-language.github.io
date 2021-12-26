---
permalink: /authors/
title: Authors
description: CSL for authors. Learn how to find, install, use, and edit Citation Style Language styles.
layout: single
redirect_from: /styles
---
{% include toc %}

Are you using Citation Style Language-based software?
Here we'll show how you can find and install the CSL citation styles you need, and give some tips for using CSL styles.
We'll also discuss how you can edit styles yourself, or put in a style request.

## Finding and Installing Styles

We recommend first checking your software tool's documentation to learn their recommended way of finding and installing CSL styles.
For instance, some tools like Zotero and Mendeley allow you to install styles directly from within their desktop clients, and Papers comes with all our styles preinstalled.

In general, most software tools use, either directly or indirectly, the styles from our central [CSL style repository](https://github.com/citation-style-language/styles) on GitHub, which hosts over 8500 styles that are all freely available under a Creative Commons [Attribution-ShareAlike (BY-SA) license](http://creativecommons.org/licenses/by-sa/3.0/).

While our GitHub style repository is the best place to contribute styles and download styles in bulk, the [Zotero Style Repository](https://www.zotero.org/styles) offers a more user-friendly way to browse and install styles.
You are welcome to use it, even if you're not a Zotero user.
It offers style previews, and allows you to search styles by title or file name, and filter them by citation format and field of study.
The Zotero style repository is automatically updated within the hour whenever we make changes in our GitHub style repository.

In addition to searching styles by name, you can also search by format by using our [CSL style editor](http://editor.citationstyles.org) ([documentation](https://github.com/citation-style-editor/csl-editor/wiki/User-guide-for-the-CSL-Editor)).
Visit the "Search by example" tab, and change one of the example references into the desired format. 
Clicking "Search" will now show the CSL styles that most closely match your desired format.
Be aware that the styles on this webpage are not regularly updated.

{% capture notice-text %}
* Looking for styles written for a particular language?
  All our non-English CSL styles list their language in the title (in English).
  E.g., "Soziale Welt (German)" and "Archéologie médiévale (French)".
* Are you browsing style previews, and only interested in styles with distinct citation formats?
  Make sure to check the "Show only unique styles" box.
{% endcapture %}

<div class="notice--info">
  <h4>Tips for browsing the <a href="https://www.zotero.org/styles">Zotero Style Repository</a></h4>
  {{ notice-text | markdownify }}
</div>

{% capture notice-text %}
* To quickly search the styles in the GitHub [CSL style repository](https://github.com/citation-style-language/styles) by file name, press "t" to activate GitHub's [File Finder](https://github.com/blog/793-introducing-the-file-finder) and start typing. 
* To download a style, click on the style's file name, then click the "Raw" button.
  To download the contents of the entire repository, click the "Clone or download" button, then click "Download ZIP".
{% endcapture %}

<div class="notice--info">
  <h4>Tips for browsing the GitHub <a href="https://github.com/citation-style-language/styles">CSL Style Repository</a></h4>
  {{ notice-text | markdownify }}
</div>

## Using Styles - Tips and Tricks

Once you have found a suitable CSL style, here are some tips to get the best results.

### Rich Text within Fields

In fields like biology, it is common to have rich text formatting within titles, e.g. "Metabolic engineering of <em>Saccharomyces cerevisiae</em> for C<sub>4</sub>-dicarboxylic acid production". 
While not (yet) officially part of the CSL specification, most CSL-based software products support the following tags:

* &lt;i&gt;italics&lt;/i&gt; for _italics_
* &lt;b&gt;bold&lt;/b&gt; for **bold**
* &lt;sub&gt;subscript&lt;/sub&gt; for <sub>subscript</sub>
* &lt;sup&gt;superscript&lt;/sup&gt; for <sup>superscript</sup>
* &lt;span style="font-variant:small-caps;"&gt;small-caps&lt;/span&gt; for <span style="font-variant:small-caps;">small-caps</span>

So, to obtain the formatted example above, you would store the title above as "Metabolic engineering of &lt;i&gt;Saccharomyces cerevisiae&lt;/i&gt; for C&lt;sub&gt;4&lt;/sub&gt;-dicarboxylic acid production" in your reference manager.

### Titles in Sentence and Title Case

Whereas some English style guides require titles to be rendered in title case ("On the Origin of Species"), others require sentence case ("On the origin of species").
Automatic conversion of titles from title case to sentence case is much more error prone than the reverse.
For example, conversion code would have to recognize that the word "Beagle" in the title-cased "The Voyage of the Beagle" is a proper noun, and leave it capitalized when converting the title to sentence case.
Automatic conversion of titles from sentence case to title case is generally much less problematic.

For this reason, we recommend that you store all titles in your reference database in sentence case.
Our repository CSL styles that need sentence case will generally just print titles as is, whereas styles that need title case will use an automatic title-case conversion.

{% capture notice-text %}
Title casing seems to be unique to English.
CSL therefore automatically excludes non-English items from title casing.
The language of an item is defined by the value of its "language" metadata field.
For more details, see the [Non-English Items](https://docs.citationstyles.org/en/stable/specification.html#non-english-items) section in the CSL specification.
{% endcapture %}

<div class="notice--info">
  <h4>Preventing Title Casing for Non-English Items</h4>
  {{ notice-text | markdownify }}
</div>

### Name Disambiguation

You may be surprised to find that a CSL style adds given names or initials to some, but not all, of the citations it generates, e.g. "(J.T. Kirk, 2002)" instead of just "(Kirk, 2002)".
This is typically the result of name disambiguation: the CSL style is adding the extra name information to distinguish between people with the same last name but different initials or given names (e.g., James T. Kirk and Tiberius Kirk).

CSL styles that use name disambiguation may mistakenly apply it when a person's name is stored with different spellings across multiple items (e.g. "James T. Kirk", "James Kirk", and "J. T. Kirk").
To avoid name disambiguation in this case, make sure that people's names are spelled consistently throughout your reference library.

### Suppress Author

With "author-date"-type styles, you might want to write sentences like "as discussed by Doe (2002), …" instead of "as previously discussed (Doe, 2002)".

By default, the "author-date" CSL styles from our repository always produce the second variant, where both the author names and date is printed within parentheses, i.e. "(Doe, 2002)".
However, many word processor plugins (including those of Zotero, Mendeley, and Papers) allow you to suppress the author names in individual citations, which would leave you with just "(2002)".
You then have to write the author's name ("Doe") out by hand in the text in front of this citation.

### Localization

In terms of localization, CSL offers two types of styles: the first and most abundant group are styles that have a fixed locale.
For example, our CSL styles for American journals will always produce citations and bibliographies using US English grammar, date formats, and translations.
Fixed-locale styles for languages other than English are easily recognizable, as they all mention their language in the style title, e.g. "Soziale Welt (German)".

The second group of styles are those that can freely localize.
These include several of our most popular generic styles, like those for APA, Chicago Manual of Style, IEEE, MLA, and Vancouver, as well as styles for polyglot journals that publish in multiple languages.
Check your software's documentation for details on how to select the desired locale when using these styles.

CSL styles can automatically translate to different languages, but for this to work well they need to be coded in a certain way: styles should use localized date formats, use CSL terms instead of hard-coded translations, and a [CSL locale file](https://github.com/citation-style-language/locales/wiki) needs to be available for your language of choice.
Individual styles can also override the standard translations, date formats, and grammar options specified in the CSL locale files.
But even a well-coded style still has some limitations: CSL doesn't yet allow for per-item localization (for example, some styles require Japanese items to be cited in Japanese, and English items in US English), and doesn't always support all grammatical peculiarities of your favorite language.

### CSL Limitations

We're well aware that the current version of CSL has some limitations.
Some of the main ones are:

* Limited support for so-called "trigraph" or "label" styles.
  These styles use in-text labels, based on the author names and publishing date, to link in-text citations to bibliographic entries.
  An example is "[FH93]" to refer to a 1993 article by Fellner and Helmberg.
  While CSL has a "citation-label" variable for this purpose, CSL styles currently can't define the rules to construct these labels.
  As a result, the labels have to be externally provided, outside of CSL.
* No support for "composite" or "compound" styles.
  With these styles, popular in the field of chemistry, each numbered bibliographic entry can contain more than one reference.
* Limited support for legal styles.
  The official version of CSL still has limited support for citing legal materials.
  However, law professor Frank Bennett, author of the popular citeproc-js CSL processor, maintains a specialized version of Zotero, branded as [Juris-M](https://juris-m.github.io/) (along with Juris-M styles, which are derived from CSL), with much improved legal support.
  We recommend you check out his project!
* Limited support for citing items in multiple languages within a single document.
  CSL currently always uses the same locale for all items in a document, and can't apply localized formatting based on the language associated with individual item.
  (Frank Bennett's [Juris-M](https://juris-m.github.io/) can support this)
* Limited support for style-specific journal abbreviations.
  CSL styles currently cannot specify the rules for journal abbreviations.
  Some style guides prescribe the use of certain lists with abbreviated journal titles, whereas others require the use of certain abbreviation rules.
  These abbreviations need to be externally provided, outside of CSL.

## Editing Styles

While we do our best to offer accurate CSL styles for whatever journal or style guide you're interested in, you may come across styles in our repository that are incorrect, or you may find that we don't have a certain style.
In such cases, you can either make a [style request](/authors#requesting-styles), or try to edit or create the style yourself.

While it takes time and dedication to become a seasoned CSL expert, most users will find it reasonably easy to make small corrections, especially if they already have some experience with HTML or XML.

To get started, we recommend the following CSL documentation:

* The [CSL primer](https://docs.citationstyles.org/en/stable/primer.html) gives an introduction into the world of CSL, and describes the basic components of CSL styles.
* The [CSL specification](https://docs.citationstyles.org/en/stable/specification.html) describes all the features of CSL in detail, and can be used as a reference.
* Zotero has a [step-by-step guide](http://www.zotero.org/support/dev/citation_styles/style_editing_step-by-step) for editing CSL styles.
  While this guide assumes you're using Zotero, it's concise and describes some concrete examples of how to edit existing styles.
* CSL is an XML-based language, so you might want to read one of the many XML tutorials on the web to better understand the general structure of XML files like our CSL styles.
  XML is very similar to HTML, although much stricter and less forgiving.

There are also a number of software tools to help you edit CSL styles:

* [CSL style editor](http://editor.citationstyles.org) (see also its [documentation](https://github.com/citation-style-editor/csl-editor/wiki/User-guide-for-the-CSL-Editor)), which has the following features:
  * The "Search by Name" tab allows you to search styles by name.
  * The "Search by Example" tab allows you to search for styles that produce a particular format (or something close to it).
    To use this feature, change the citation and/or bibliographic entry of one of the provided items to the desired format.
    This can be useful to find styles that already exist under another name, or to find a closely matching style that you can use as a starting point for editing.
  * The "Visual editor" tab contains a style editor, and shows a live preview of the style as you make your edits.
  * The "Code editor" tab contains a more basic editor that allows you to directly edit the XML code of the style.
    This tab also has a live preview.
* The [Zotero](http://www.zotero.org/) desktop client comes with two utilities:
  * The [Reference Test](http://www.zotero.org/support/dev/citation_styles/reference_test_pane) pane allows you to edit the XML code of a style.
  A live preview is shown based on the items selected in your Zotero client.
  * The [Preview](http://www.zotero.org/support/dev/citation_styles/preview_pane) pane generates previews for the items selected in your Zotero client for all installed CSL styles.
* Instead of using one of the dedicated CSL style editors above, you can also hand-edit styles in any text or XML editor, such as:
  * [Atom](https://atom.io/) (cross-platform)
  * [Notepad++](http://notepad-plus-plus.org/) (Windows)
  * [jEdit](http://www.jedit.org/) (cross-platform)
  * [GNU Emacs](http://www.gnu.org/software/emacs/) (cross-platform; with XML support through [nXML mode](http://www.thaiopensource.com/nxml-mode/))
  * [<oXygen/> XML Editor](http://www.oxygenxml.com/) (cross-platform; commercial)
* Especially for if you hand-edit styles, you'll find our [CSL Style Formatter](http://formatter.citationstyles.org/) and [CSL Style and Locale Validator](http://validator.citationstyles.org/) useful tools to make sure your styles are neatly formatted and conform to the CSL schema.

## Contributing Styles

To contribute new styles to our style repository, or submit changes to existing styles, please see our [contribution instructions](https://github.com/citation-style-language/styles/blob/master/CONTRIBUTING.md).
While we always try to respond quickly once you submit a style, please keep in mind that the CSL style repository is maintained by a very small group of volunteers.
By closely following our guidelines, we can often accept your submissions much faster.

## Requesting Styles

If you can't find a CSL style for a journal or style guide, or if you find errors in one of our existing styles, you can put in a [style request](https://github.com/citation-style-language/styles/wiki/Requesting-Styles).

There are a few volunteers who try to help people with their requests.
While most style requests are handled for free, some of our expert CSL style authors are also available for hire.
Offering payment will get you preferential treatment and a fast turnaround time, and supports their work.
Our experts usually charge around $100-300 for a custom-made CSL style, depending on the complexity of the style guide and amount of work, and will generally provide a fixed price quote in advance.
If interested in this type of paid support, please contact us privately via our [contact form](/contact/), or just mention that you're willing to pay in a standard public [style request](https://github.com/citation-style-language/styles/wiki/Requesting-Styles).
