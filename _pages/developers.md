---
permalink: /developers/
title: Developers
layout: single
---
{% include toc %}

## Language Specification

CSL is defined by two documents: the human-readable [CSL specification](http://docs.citationstyles.org/en/1.0.1/specification.html), and the computer-readable [CSL schema](https://github.com/citation-style-language/schema/tree/v1.0.1), written in the [RELAX NG](http://relaxng.org/) compact syntax, which can be used for validation of CSL styles and locale files.

_Note_: We, the authors of the CSL schema, have agreed to relicense the schema under the more permissible MIT license, although we still have [an open pull request](https://github.com/citation-style-language/schema/pull/143) to change the license text in the schema to reflect this decision.

## Code repositories

We maintain several Git repositories on GitHub at [https://github.com/citation-style-language](https://github.com/citation-style-language).
The main repositories are:

* [documentation](https://github.com/citation-style-language/documentation) - for CSL documentation, including the source of the CSL specification
* [journals](https://github.com/citation-style-language/journals) - for storing publisher's journal metadata (which we use to generate most of our "dependent" styles)
* [locales](https://github.com/citation-style-language/locales) - for CSL locale files
* [schema](https://github.com/citation-style-language/schema) - for the CSL schema
* [styles](https://github.com/citation-style-language/styles) - for CSL styles
* [styles-distribution](https://github.com/citation-style-language/styles-distribution) - this mirror of the "styles" repo only updates after the Travis CI tests clear, and offers up-to-date style timestamps.
* [utilities](https://github.com/citation-style-language/utilities) - for scripts used to maintain CSL styles and locale files
* [test-suite](https://github.com/citation-style-language/test-suite) - test suite maintained by Frank Bennett for testing of [citeproc-js](https://github.com/juris-m/citeproc-js).
The test suite can be used by authors of other CSL processors, but contains tests that go beyond the scope of the CSL specification.

## CSL Processors

Open source CSL 1.0.1-compatible CSL processors include:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Programming Language</th>
      <th>Author</th>
      <th>Known Implementations</th>
      <th>Comments</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/juris-m/citeproc-js">citeproc‑js</a></td>
      <td>JavaScript</td>
      <td>Frank Bennett</td>
      <td>Zotero, Mendeley, Qiqqa, Docear, KCite</td>
      <td></td>
    </tr>
    <tr>
      <td><a href="http://hackage.haskell.org/package/citeproc-hs">citeproc‑hs</a></td>
      <td>Haskell</td>
      <td>Andrea Rossato</td>
      <td>pandoc</td>
      <td></td>
    </tr>
    <tr>
      <td><a href="http://bitbucket.org/rjerome/citeproc-php">citeproc‑php</a></td>
      <td>PHP</td>
      <td>Ron Jerome</td>
      <td>Drupal's Bibliography Module, BibSonomy</td>
      <td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/inukshuk/citeproc-ruby">citeproc‑ruby</a></td>
      <td>Ruby</td>
      <td>Sylvester Keil</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/michel-kraemer/citeproc-java">citeproc‑java</a></td>
      <td>Java</td>
      <td>Michel Krämer</td>
      <td></td>
      <td>Java wrapper for citeproc-js</td>
    </tr>
    <tr>
      <td><a href="https://github.com/brechtm/citeproc-py">citeproc‑py</a></td>
      <td>Python</td>
      <td>Brecht Machiels</td>
      <td></td>
      <td>not to be confused with the unmaintained and identically named <a href="http://github.com/bdarcus/citeproc-py/">citeproc-py</a> (Python) by Bruce D'Arcus</td>
    </tr>
    <tr>
      <td><a href="https://github.com/fouke-boss/citeproc-dotnet">citeproc‑dotnet</a></td>
      <td>.NET</td>
      <td>Fouke Boss</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

## Mappings

A mapping between Zotero fields and CSL variables can be found at <http://aurimasv.github.io/z2csl/typeMap.xml> ([repo](https://github.com/aurimasv/z2csl)).
A similar mapping for Mendeley can be found at <https://service.elsevier.com/app/answers/detail/a_id/22175/supporthub/mendeley/>.

## Development Process

Our [governance document](https://github.com/citation-style-language/governance/blob/master/governance.md) describes how we aim to run the CSL project.
In short, we strive to develop CSL in an open, consensus-seeking way.
Our goal is to improve scholarly communication by automating the correct formatting of citations, and by stimulating cooperation and compatibility between the different citation software products.
Our primary communication channel for announcements, discussions, and decision making is the public [xbiblio-devel mailing list](https://lists.sourceforge.net/lists/listinfo/xbiblio-devel) ([Nabble mirror](http://xbiblio-devel.2463403.n2.nabble.com/)).
We also use the issue trackers of our GitHub repositories to keep track of issues, and while discussions take place there as well, final design decisions are always made on the mailing list.
While CSL always has had close ties to Zotero, the two are independent projects.
Still, many CSL contributors are Zotero users, and the lively [Zotero forums](http://forums.zotero.org/) continue to play an important role in receiving user feedback.

## Project History

### Release Timeline

<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Version</th>
      <th>Resources</th>
      <th>Comments</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>September 3, 2012</td>
      <td>1.0.1</td>
      <td><a href="https://github.com/citation-style-language/schema/tree/v1.0.1">Schema</a>, <a href="http://citationstyles.org/downloads/specification-csl101-20120903.html">Specification</a></td>
      <td><a href="http://citationstyles.org/2012/09/03/citation-style-language-1-0-1-update/">Announcement</a> and <a href="http://citationstyles.org/downloads/release-notes-csl101.html">Release notes</a>.</td>
    </tr>
    <tr>
      <td>May 30, 2010</td>
      <td>1.0</td>
      <td><a href="https://github.com/citation-style-language/schema/tree/v1.0">Schema</a>, <a href="http://citationstyles.org/downloads/specification-csl10-20100530.html">Specification</a></td>
      <td><a href="http://citationstyles.org/2010/05/30/csl-1-0-specification-update-2010-05-30/">Announcement</a>. Update of the specification. No changes were made to the CSL 1.0 schema.</td>
    </tr>
    <tr>
      <td>March 22, 2010</td>
      <td>1.0</td>
      <td><a href="https://github.com/citation-style-language/schema/tree/v1.0">Schema</a>, <a href="http://citationstyles.org/downloads/specification-csl10-20100321.html">Specification</a></td>
      <td><a href="http://citationstyles.org/2010/03/22/citation-style-language-1-0/">Announcement</a> and <a href="http://citationstyles.org/downloads/upgrade-notes.html">Upgrade notes</a>. First release of the CSL specification. CSL 1.0 was first supported by Zotero 2.1, Mendeley 0.9.8, and Papers2 (for Mac).</td>
    </tr>
    <tr>
      <td>February 1, 2010</td>
      <td>0.8.1</td>
      <td><a href="https://github.com/citation-style-language/schema/tree/v0.8.1">Schema</a></td>
      <td><a href="http://sourceforge.net/mailarchive/message.php?msg_id=24483054">Announcement</a></td>
    </tr>
    <tr>
      <td>March 21, 2009</td>
      <td>0.8</td>
      <td><a href="https://github.com/citation-style-language/schema/tree/v0.8">Schema</a></td>
      <td></td>
    </tr>
  </tbody>
</table>

### Hosting Changes

Prior to the move to GitHub, from late 2009 to March 2011, the project code was maintained in Mercurial repositories on [Bitbucket.org](https://bitbucket.org/) (see the mostly retired [Bitbucket repositories of Bruce D'Arcus](https://bitbucket.org/bdarcus)), and before that, from February 2006 to late 2009, in an SVN repository on SourceForge (see the [xbiblio SourceForge project page](http://sourceforge.net/projects/xbiblio/)).
Before migrating to GitHub during late 2010/early 2011, CSL styles were separately maintained in the now retired [Zotero SVN](https://www.zotero.org/trac).
The [xbiblio-devel mailing list](https://lists.sourceforge.net/lists/listinfo/xbiblio-devel), hosted by SourceForge, has been in continued use since 2004.
