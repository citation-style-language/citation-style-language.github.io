---
permalink: /developers/
title: Developers
description: CSL for developers. Learn how to use the Citation Style Language in your software and how to contribute to its development.
layout: single
---
{% include toc %}

## Language Specification

CSL is defined by two documents: the human-readable [CSL specification](https://docs.citationstyles.org/en/stable/specification.html), and the computer-readable [CSL schema](https://github.com/citation-style-language/schema/tree/v1.0.2), written in the [RELAX NG](http://relaxng.org/) compact syntax, which can be used for validation of CSL styles and locale files.

_Note_: We, the authors of the CSL schema, have agreed to relicense the schema under the more permissible MIT license, although we still have [an open issue](https://github.com/citation-style-language/schema/issues/126) to update the license text in past schema releases to reflect this decision.

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
      <td><a href="https://github.com/fouke-boss/citeproc-dotnet">citeproc‑dotnet</a></td>
      <td>.NET</td>
      <td>Fouke Boss</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/andras-simonyi/citeproc-el">citeproc‑el</a></td>
      <td>Emacs Lisp</td>
      <td>András Simonyi</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><a href="https://hackage.haskell.org/package/citeproc">citeproc</a></td>
      <td>Haskell</td>
      <td>John MacFarlane</td>
      <td>pandoc</td>
      <td>Replaces the deprecated <a href="https://hackage.haskell.org/package/pandoc-citeproc">pandoc-citeproc</a> (last updated in 2020), which itself was a continuation of Andrea Rossato's <a href="http://hackage.haskell.org/package/citeproc-hs">citeproc‑hs</a> (last updated in 2015).</td>
    </tr>
    <tr>
      <td><a href="https://github.com/michel-kraemer/citeproc-java">citeproc‑java</a></td>
      <td>Java</td>
      <td>Michel Krämer</td>
      <td></td>
      <td>Java wrapper for citeproc-js</td>
    </tr>
    <tr>
      <td><a href="https://github.com/juris-m/citeproc-js">citeproc‑js</a></td>
      <td>JavaScript</td>
      <td>Frank Bennett</td>
      <td>Zotero, Mendeley, Qiqqa, Docear, KCite</td>
      <td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/seboettg/citeproc-php">citeproc‑php</a></td>
      <td>PHP</td>
      <td>Sebastian Böttger</td>
      <td></td>
      <td>Replaces the original <a href="http://bitbucket.org/rjerome/citeproc-php">citeproc‑php</a> by Ron Jerome, which was last updated in 2013.</td>
    </tr>
    <tr>
      <td><a href="https://github.com/brechtm/citeproc-py">citeproc‑py</a></td>
      <td>Python</td>
      <td>Brecht Machiels</td>
      <td></td>
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
      <td><a href="https://github.com/zotero/citeproc-rs">citeproc‑rs</a></td>
      <td>Rust</td>
      <td>Cormac Relf</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

## Mappings

A mapping between Zotero fields and CSL variables can be found at <http://aurimasv.github.io/z2csl/typeMap.xml> ([repo](https://github.com/aurimasv/z2csl)).
A similar mapping for Mendeley can be found at <https://service.elsevier.com/app/answers/detail/a_id/22175/supporthub/mendeley/>.

The [CSL Ontology](../ontology/) defines URIs for referencing elements of the CSL data model.

## Development Process

Our [governance document](https://github.com/citation-style-language/governance/blob/master/governance.md) describes how we aim to run the CSL project.
In short, we strive to develop CSL in an open, consensus-seeking way.
Our goal is to improve scholarly communication by automating the correct formatting of citations, and by stimulating cooperation and compatibility between the different citation software products.
Our primary communication channel for announcements, discussions, and decision making is the public [Discourse forum](https://discourse.citationstyles.org/).
We also use the issue trackers of our GitHub repositories to keep track of issues, and while discussions take place there as well, final design decisions are always made in the forum.
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
      <td><a href="https://github.com/citation-style-language/schema/tree/v1.0.1">Schema</a>, <a href="http://docs.citationstyles.org/en/1.0.1/specification.html">Specification</a></td>
      <td><a href="http://citationstyles.org/2012/09/03/citation-style-language-1-0-1-update/">Announcement</a> and <a href="http://docs.citationstyles.org/en/1.0.1/release-notes.html">Release notes</a>.</td>
    </tr>
    <tr>
      <td>May 30, 2010</td>
      <td>1.0</td>
      <td><a href="https://github.com/citation-style-language/schema/tree/v1.0">Schema</a>, <a href="http://docs.citationstyles.org/en/1.0/specification.html">Specification</a></td>
      <td><a href="http://citationstyles.org/2010/05/30/csl-1-0-specification-update-2010-05-30/">Announcement</a>. Update of the specification. No changes were made to the CSL 1.0 schema.</td>
    </tr>
    <tr>
      <td>March 22, 2010</td>
      <td>1.0</td>
      <td><a href="https://github.com/citation-style-language/schema/tree/v1.0">Schema</a>, <a href="http://docs.citationstyles.org/en/1.0-20100321/specification.html">Specification</a></td>
      <td><a href="http://citationstyles.org/2010/03/22/citation-style-language-1-0/">Announcement</a> and <a href="http://docs.citationstyles.org/en/1.0-20100321/release-notes.html">Upgrade notes</a>. First release of the CSL specification. CSL 1.0 was first supported by Zotero 2.1, Mendeley 0.9.8, and Papers2 (for Mac).</td>
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

### Hosting History

The CSL project started out in 2004 on [SourceForge](https://sourceforge.net/) under the project name [xbiblio](https://sourceforge.net/projects/xbiblio/), with the [xbiblio-devel mailing list](https://lists.sourceforge.net/lists/listinfo/xbiblio-devel) as main project communication channel.

In late 2009, project code was migrated from the SourceForge xbiblio SVN repository to Mercurial repositories on [Bitbucket](https://bitbucket.org/) under the account of [Bruce D'Arcus](https://bitbucket.org/bdarcus).

In March 2011, project code was once again migrated to its current [home](https://github.com/citation-style-language/) on [GitHub](https://github.com/). Around this time, the CSL project also took over maintenance of the CSL styles repository, which was originally maintained by Zotero developers as part of their SVN repository (Zotero has migrated to GitHub as well, and their original self-hosted SVN repository is no longer online).

In January 2018, we moved from the [xbiblio-devel mailing list](https://lists.sourceforge.net/lists/listinfo/xbiblio-devel) ([Nabble mirror](http://xbiblio-devel.2463403.n2.nabble.com/)) to a [Discourse forum](https://discourse.citationstyles.org/) for project communication. While the discussion archive from xbiblio-devel has been migrated to Discourse, we are aware of some formatting issues with the imported posts, in particular those with code excerpts. The xbiblio-devel mailing list remains available as a read-only resource.
