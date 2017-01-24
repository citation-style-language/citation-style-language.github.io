---
permalink: /authors/
title: CSL for Authors
---

As an author you will use CSL styles through a reference management tool. Keep reading to learn how to find and install the style you need, how to request a new style if you cannot find it and how to use CSL styles effectively.

## Finding and Installing Styles

You can find and install new styles through your reference management tool (recommended) or you can download them from the CSL repository.

### Finding and Installing Styles in Reference Management Tools

Read your software's documentation to discover the easiest way to find and install CSL styles. For example, Zotero offers the <a href="http://zotero.org/styles">Zotero Style Repository</a>, whereas Mendeley allows styles to be installed from within the desktop client, while Papers comes with all our styles pre-installed.

And even if you don't use Zotero, feel free to use the <a href="http://zotero.org/styles">Zotero Style Repository</a>, which is always up to date with all our styles. It allows you to search styles by title or file name, and filter them by citation format and field of study. Hover over a style's title to preview its reference format, and click the title to download the style.

{% capture notice-text %}
Looking for styles in a certain language? All non-English CSL styles list their language in the title (in English). E.g., "Soziale Welt (German)" and "InVisu (French)".

Are you checking style previews, and only interested in styles with distinct citation formats? Check the "Show only unique styles" box.
{% endcapture %}

<div class="notice--info">
  <h4>Tips on using the Zotero Style Repository:</h4>
  {{ notice-text | markdownify }}
</div>

### Downloading Styles from the CSL Repository

The CSL project maintains a <a href="https://github.com/citation-style-language/styles">CSL style repository</a> with over 8000 styles, available freely.

Styles in our <a href="https://github.com/citation-style-language/styles">CSL style repository</a> on GitHub can only be searched by file name (press "t" to activate GitHub's <a href="https://github.com/blog/793-introducing-the-file-finder">File Finder</a> and start typing). After locating a style, click the "Raw" button to access the actual style file. To download the contents of our entire style repository, click the "Download ZIP" button.

If you don't know the name of the citation style you are looking for, or are unable to find a style by name, you can search our styles by format by using our <a href="http://editor.citationstyles.org">CSL style editor</a> (<a href="https://github.com/citation-style-editor/csl-editor/wiki/User-guide-for-the-CSL-Editor">documentation</a>). Visit the "Search by Example" tab, and change one of the example references into the desired format. Clicking "Search" will show the CSL styles that most closely match your desired format. Be aware that the styles on this webpage are not regularly updated.

## Requesting New Styles

Custom styles can be <a href="https://github.com/citation-style-language/styles/wiki/Requesting-Styles">requested</a>, but our capacity to create new styles for free is limited. To get preferential treatment (and support our work), you can <a href="http://citationstyles.org/contact/">contact us</a> and offer payment. The cost of a custom-made CSL style is typically $100-300, depending on the amount of work.

## Using Styles: Tips and Tricks

Once you have found a CSL style, here are some tips to get the best results.

### Rich Text

In fields like biology, it is common to have rich text formatting within titles, e.g. "Metabolic engineering of <em>Saccharomyces cerevisiae</em> for C<sub>4</sub>-dicarboxylic acid production". While not (yet) officially part of the CSL specification, most CSL-based software products support the following tags:
<ul>
 	<li>&lt;i&gt; and &lt;/i&gt; for <i>italics</i></li>
 	<li>&lt;b&gt; and &lt;/b&gt; for <b>bold</b></li>
 	<li>&lt;sub&gt; and &lt;/sub&gt; for <sub>subscript</sub></li>
 	<li>&lt;sup&gt; and &lt;/sup&gt; for <sup>superscript</sup></li>
 	<li>&lt;span style="font-variant:small-caps;"&gt; and &lt;/span&gt; for small-caps</li>
</ul>
So, to obtain the formatted example above, you would store the title above as "Metabolic engineering of &lt;i&gt;Saccharomyces cerevisiae&lt;/i&gt; for C&lt;sub&gt;4&lt;/sub&gt;-dicarboxylic acid production" in your reference manager.

### Sentence and Title Case

While CSL styles can automatically convert titles to sentence case, we rarely use this feature in our repository styles because it is rather error-prone. For example, most software won't recognize that the word "Beagle" in the title "The Voyage of the Beagle" is a proper noun, and will incorrectly produce "The voyage of the beagle" when asked to convert the title to sentence case.

Converting sentence case to title case is much more reliable. We therefore recommend that you consistently store titles in sentence case in your reference database. Our repository CSL styles automatically convert titles to title case if the citation format calls for it.

[stextbox id="info" caption="Preventing Title Casing for Non-English Items" bgcolor="7EC1ED" bgcolorto="7EC1ED"]

Title casing only happens in English. CSL styles therefore automatically exclude non-English items from title casing. The language of an item is defined by the value of its "language" metadata field. For more details, see <a href="http://citationstyles.org/downloads/specification.html#non-english-items">Non-English Items</a> in the CSL specification.

[/stextbox]

### Name Disambiguation

You may notice that a CSL style adds given names or initials of authors to some, but not all, of the citations it generates, e.g. "(J.T. Kirk, 2002)" instead of just "(Kirk, 2002)". This is typically the result of name disambiguation: the CSL style is adding the extra name information to distinguish between people with the same last name (e.g., James T. Kirk and Tiberius Kirk).

CSL styles only attempt name disambiguation if the citation format calls for it. However, name disambiguation can also occur inadvertently when a person's name is stored multiple times with different spellings in your reference manager. E.g., your reference manager might assume that James T. Kirk, James Kirk, and J. T. Kirk are different persons. To avoid name disambiguation in this case, make sure that each person's name is spelled consistently throughout your reference library.

### Suppress Author

With "author" and "author-date" styles, you might want to write "as discussed by Doe (2002), … " instead of "as previously discussed (Doe, 2002)".

While CSL styles only define complete citations, e.g. "(Doe, 2002)", the word processor plugins of Zotero, Mendeley, and Papers all allow you to suppress the author(s) in individual citations, which would leave you with just "(2002)". You then have to write the author's name by hand.