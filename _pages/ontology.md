---
permalink: /ontology/
title: CSL Ontology
description: Components of the CSL data model can be referenced with unique identifiers
redirect_from:
  # categories
  - /ontology/category/
  - /ontology/category/anthropology
  - /ontology/category/astronomy
  - /ontology/category/biology
  - /ontology/category/botany
  - /ontology/category/chemistry
  - /ontology/category/communications
  - /ontology/category/engineering
  - /ontology/category/generic-base
  - /ontology/category/geography
  - /ontology/category/geology
  - /ontology/category/history
  - /ontology/category/humanities
  - /ontology/category/law
  - /ontology/category/linguistics
  - /ontology/category/literature
  - /ontology/category/math
  - /ontology/category/medicine
  - /ontology/category/philosophy
  - /ontology/category/physics
  - /ontology/category/political_science
  - /ontology/category/psychology
  - /ontology/category/science
  - /ontology/category/social_science
  - /ontology/category/sociology
  - /ontology/category/theology
  - /ontology/category/zoology
  # roles
  - /ontology/role/
  - /ontology/role/author
  - /ontology/role/collection-editor
  - /ontology/role/composer
  - /ontology/role/container-author
  - /ontology/role/director
  - /ontology/role/editor
  - /ontology/role/editorial-director
  - /ontology/role/editortranslator
  - /ontology/role/illustrator
  - /ontology/role/interviewer
  - /ontology/role/original-author
  - /ontology/role/recipient
  - /ontology/role/reviewed-author
  - /ontology/role/translator
  # types
  - /ontology/type/
  - /ontology/type/article
  - /ontology/type/article-magazine
  - /ontology/type/article-newspaper
  - /ontology/type/article-journal
  - /ontology/type/bill
  - /ontology/type/book
  - /ontology/type/broadcast
  - /ontology/type/chapter
  - /ontology/type/dataset
  - /ontology/type/entry
  - /ontology/type/entry-dictionary
  - /ontology/type/entry-encyclopedia
  - /ontology/type/figure
  - /ontology/type/graphic
  - /ontology/type/interview
  - /ontology/type/legislation
  - /ontology/type/legal_case
  - /ontology/type/manuscript
  - /ontology/type/map
  - /ontology/type/motion_picture
  - /ontology/type/musical_score
  - /ontology/type/pamphlet
  - /ontology/type/paper-conference
  - /ontology/type/patent
  - /ontology/type/post
  - /ontology/type/post-weblog
  - /ontology/type/personal_communication
  - /ontology/type/report
  - /ontology/type/review
  - /ontology/type/review-book
  - /ontology/type/song
  - /ontology/type/speech
  - /ontology/type/thesis
  - /ontology/type/treaty
  - /ontology/type/webpage
---

The [CSL specification](https://docs.citationstyles.org/en/1.0.1/specification.html) implies a data model with:

* [categories](https://docs.citationstyles.org/en/1.0.1/specification.html#appendix-i-categories) to indicate academic fields such as `astronomy` and `biology`,
* [contributor roles](https://docs.citationstyles.org/en/1.0.1/specification.html#roles) such as `author` and `translator`,
* [publication types](https://docs.citationstyles.org/en/1.0.1/specification.html#appendix-iii-types) such as `article` and `book`.

To support referencing these CSL concepts, each is given a globally unique [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) with prefix

* `https://citationstyles.org/ontology/category/` for categories,
* `https://citationstyles.org/ontology/role/` for contributor roles,
* `https://citationstyles.org/ontology/type/` for publication types.

For instance <https://citationstyles.org/ontology/type/book> identifies the publication type "book".
