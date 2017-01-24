---
permalink: /developers/
title: CSL for Developers
sidebar:
  nav: "developers"
---

This will be the Developers page

## Previously in Styles page

The CSL project maintains a <a href="https://github.com/citation-style-language/styles">CSL style repository</a> with over 8000 styles, available freely under a Creative Commons <a href="http://creativecommons.org/licenses/by-sa/3.0/">Attribution-ShareAlike (BY-SA) license</a>.

<h2>Localization</h2>
Most CSL styles in our repository have a fixed locale. For example, a CSL style for a British journal will always produce citations and bibliographies with British English grammar, date formats, and translations. For styles with a fixed non-English locale, the language is indicated in the style title, e.g. "Soziale Welt (German)".

We also offer CSL styles that can freely localize. These include several of our most popular generic styles, like those for APA, Chicago Manual of Style, IEEE, MLA, and Vancouver, as well as styles for journals that publish in multiple languages. Read your software's documentation for details on how to change the localization of such styles.

CSL styles needs to be coded in a certain way to be usable in multiple locales: they need to use localized instead of non-localized date formats, use CSL terms instead of hard-coded strings, and a <a href="https://github.com/citation-style-language/locales/wiki">CSL locale file</a> needs to be available for each language (although styles can overwrite parts of the locale files, if necessary). Even then there are still some limitations. CSL doesn't yet allow for per-item localization (for example, some styles require Japanese items to be cited in Japanese, and English items in American English), and doesn't always support all grammatical peculiarities of your favorite language.
<h2>Limitations of CSL</h2>
CSL has a number of limitations. They currently include:
<ul>
 	<li>Limited support for "trigraph" styles. These styles use labels, like "ddb98", that are based on the author names and date of publishing, to link in-text citations to bibliographic entries. CSL styles cannot customize the label format.</li>
 	<li>No support for "composite" styles. With these styles, popular in the field of chemistry, each numbered bibliographic entry can contain more than one reference.</li>
 	<li>Limited support for legal styles. Law professor Frank Bennett, author of the citeproc-js CSL processor, forked Zotero and CSL to create <a href="http://citationstylist.org/">Multilingual Zotero</a> and CSL-m, with the specific purpose of improving their legal support. We recommend you check it out!</li>
 	<li>Limited support for citing items in multiple languages within a single document. Do citations and bibliographic entries need to be formatted according to the language of the cited items? Again <a href="http://citationstylist.org/">Multilingual Zotero</a> is the answer, at least for now.</li>
 	<li>Limited support for journal abbreviations. CSL styles cannot choose between journal abbreviation lists.</li>
</ul>
<h1>Editing Styles</h1>
There are a number of dedicated tools for editing CSL styles. Before getting started, we recommend that you first take a look at some CSL documentation. Our <a href="http://citationstyles.org/downloads/primer.html">primer</a> describes the basic structure of CSL styles, and CSL is extensively documented in its <a href="http://citationstyles.org/downloads/specification.html">specification</a>. The Zotero wiki also has some <a href="http://www.zotero.org/support/dev/citation_styles/style_editing_step-by-step">step-by-step instructions</a> for editing CSL styles. And whatever tool you choose, some basic knowledge of XML or HTML will come in handy.

First, there is the <a href="http://editor.citationstyles.org">CSL style editor</a> (<a href="https://github.com/citation-style-editor/csl-editor/wiki/User-guide-for-the-CSL-Editor">documentation</a>) by Mendeley. This editor has four main functions:
<ul>
 	<li>The "Search by Name" tab allows you to search styles by their name.</li>
 	<li>The "Search by Example" tab allows you to search for styles that produce a particular format (or something close to it), by reformatting the citation and bibliographic entry of one of the provided items. This can be useful to find styles that already exist under another name, or to find a closely matching style that you can use as a starting point for editing.</li>
 	<li>The "Visual editor" tab contains the actual style editor, and shows a live preview of the style as you make your edits.</li>
 	<li>The "Code editor" tab contains a more basic editor that allows you to directly edit the XML code of the style. This tab also has a live preview.</li>
</ul>
Second, the <a href="http://www.zotero.org/">Zotero</a> desktop clients (Zotero for Firefox and Zotero Standalone) ship with two utilities:
<ul>
 	<li>The <a href="http://www.zotero.org/support/dev/citation_styles/reference_test_pane">Reference Test</a> pane allows you to edit the XML code of a style. A live preview is shown based on the items selected in your Zotero client.</li>
 	<li>The <a href="http://www.zotero.org/support/dev/citation_styles/preview_pane">Preview</a> pane generates previews for the items selected in your Zotero client for all installed CSL styles.</li>
</ul>
Finally, CSL styles can also be edited in any text or XML editor, such as <a href="http://www.barebones.com/products/textwrangler/">TextWrangler</a> (OS X), <a href="http://notepad-plus-plus.org/">Notepad++</a> (Windows),  <a href="http://www.jedit.org/">jEdit</a> (cross-platform), <a href="http://www.gnu.org/software/emacs/">GNU Emacs</a> (cross-platform; with XML support through <a href="http://www.thaiopensource.com/nxml-mode/">nXML mode</a>), or <a href="http://www.oxygenxml.com/">&lt;oXygen/&gt; XML Editor</a> (cross-platform; commercial).
<h1>Contributing Styles</h1>
If you would like to contribute new styles to our style repository, or submit changes to existing styles, please see our <a href="https://github.com/citation-style-language/styles/blob/master/CONTRIBUTING.md">contribution guidelines</a>. Keep in mind that style submissions are handled by a handful of volunteers. By closely following our guidelines, your styles will be accepted much faster.