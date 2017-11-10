---
permalink: /authors/
title: Authors
layout: single
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
For more details, see the [Non-English Items](http://citationstyles.org/downloads/specification.html#non-english-items) section in the CSL specification.
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

## Requesting Styles

If you can't find a CSL style for a journal or style guide, or if you find errors in one of our existing styles, you can put in a [style request](https://github.com/citation-style-language/styles/wiki/Requesting-Styles).

There are a few volunteers who try to help people with their requests.
While most style requests are handled for free, some of our expert CSL style authors are also available for hire.
Offering payment will get you preferential treatment and a fast turnaround time, and supports their work.
Our experts usually charge around $100-300 for a custom-made CSL style, depending on the complexity of the style guide and amount of work, and will generally provide a fixed price quote in advance.
If interested in this type of paid support, please contact us via our [contact form](/contact/).