---
title: Seeking Public Comment on CSL 1.0.2 Release
date: 2020-07-11
author: Sebastian Karcher
---

Over the past few months, Citation Style Language developers have worked to address a backlog of feature requests. This work will be reflected in two upcoming releases. The first of these, 1.0.2, is slated for release shortly. Its focus is on easy to implement, non-controversial additions, principally new item types, fields, and terms. We're seeking public comment on the planned released from now until **July 26, 2020, 12pm EDT**.

A non-technical summary of the release can be found in a [google doc here](https://docs.google.com/document/d/1wY1cOOamDYYh8VNW7h_uleqieBDGOa_LYsRiVdQy1RI/edit#heading=h.wsywjzy5t4j6). For more technical details, you can follow the development on the [github project board](https://github.com/orgs/citation-style-language/projects/3). We welcome feedback directly on the google doc, in specific github issues, or on our [forums](https://discourse.citationstyles.org/).

Tremendous thanks to Bruce D'Arcus, Denis Maier, and Brenton Wiernik, who did the bulk of the work of organizing proposals accumulated over the last 8 years and preparing the release.

## Previewing CSL 1.1
CSL 1.1, slated for release later this year, will include more significant extensions of CSL functionality. While we'll have a separate public comment period for this release, we're happy for input on the ongoing discussions on github and the forums. In particular, we're eager to hear from projects implementing CSL styles, both in a citeproc and in user-facing applications such as reference managers or citation formatters.

This release will primarily add the following new features:
- Full support for narrative citation styles (“Like Doe (2018)”).
- Ability to specify more complex conditional logic.
- Ability to independently format subtitles and main titles.
- A new “related” attribute to express related reviewed and original items (still in discussion).
- Improvements to the CSL input format(s):
  - Adopting the new EDTF ISO standard, which offers full support for date ranges, seasons, uncertain and approximate qualifiers, and decades and centuries.
  - A new “custom” property to add extension metadata.
  - New related modelling to match the new style attribute (as above, still in discussion).
  - An official YAML representation, which can be validated with the same JSON schemas.
