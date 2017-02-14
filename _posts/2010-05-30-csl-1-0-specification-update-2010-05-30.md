---
title: CSL 1.0 Specification Update 2010-05-30
date: 2010-05-30
author: Rintze M. Zelle
---

## Changelog

The <a href="http://citationstyles.org/downloads/specification.html">CSL 1.0 specification</a> update of 2010-05-30 includes the following  changes:
<ul>
	<li>clarified behavior of the line-spacing and entry-spacing attributes [<a href="http://bitbucket.org/bdarcus/csl-docs/changeset/8b97e20c3b7a">diff</a>]</li>
	<li>clarified behavior of the position condition when used for  bibliography formatting [<a href="http://bitbucket.org/bdarcus/csl-docs/changeset/9e8d4e2dfdc7">diff</a>]</li>
	<li>clarified behavior of the et-al-subsequent attributes [<a href="http://bitbucket.org/bdarcus/csl-docs/changeset/a9076d57fe13">diff</a>]</li>
	<li>changed the handling of name suffixes (now aligns with Chicago  Manual of Style) [<a href="http://bitbucket.org/bdarcus/csl-docs/changeset/a72b88502be9">diff</a>]</li>
	<li>changed et-al abbreviation to use a context-dependent prefix (aligns  with CSL processor in Zotero 2.0) [<a href="http://bitbucket.org/bdarcus/csl-docs/changeset/7a2bc6389c2d">diff</a>]</li>
	<li>clarified the behavior of the choose element, and mentioned the dual  effect of the match attribute on if and else-if elements [<a href="http://bitbucket.org/bdarcus/csl-docs/changeset/8b0ef58210b4">diff</a>]</li>
	<li>removed the substitution of empty date variables by the "no date"  term [<a href="http://bitbucket.org/bdarcus/csl-docs/changeset/8dfe31ed8555">diff</a>]</li>
</ul>
Discussions on these changes can typically be found at the <a href="http://sourceforge.net/mailarchive/forum.php?forum_name=xbiblio-devel">xbiblio  mailing list</a>.

## A Note on CSL Versioning

A three-number system (e.g. "1.2.3") will be used for versioning of  the CSL schema and specification. The first and second number are used  for respectively major and minor backwards incompatible updates to the  CSL schema (these updates will require upgrading of existing CSL styles).  The third number is used for small backwards compatible  updates. Each  update to the CSL schema will be accompanied by an updated CSL  specification. In addition, minor date-versioned updates to the CSL  specification can be released without accompanying changes to  the CSL  schema (as is the case for the current specification update).