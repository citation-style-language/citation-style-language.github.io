---
title: CSL 1.0 First Anniversary
date: 2011-03-18
author: Rintze M. Zelle
---

It's been a year since version 1.0 of the Citation Style Language was released, but now is as an exciting time as ever.
[Zotero 2.1](http://www.zotero.org/), [Mendeley 0.9.8](http://www.mendeley.com/) and [Papers2](http://www.mekentosj.com/papers/) now all use CSL 1.0 for citation formatting (Zotero and Mendeley both use [citeproc-js](https://bitbucket.org/fbennett/citeproc-js/wiki/Home), the open source JavaScript CSL 1.0 processor by Frank G. Bennett, Jr.).
The document converter [Pandoc](http://johnmacfarlane.net/pandoc/) now supports [citeproc-hs 0.3.2](http://hackage.haskell.org/package/citeproc-hs), an open source Haskell CSL 1.0 processor, and work is ongoing for CSL 1.0 processors written in PHP ([https://bitbucket.org/rjerome/citeproc-php](https://bitbucket.org/rjerome/citeproc-php)) and Ruby ([https://github.com/inukshuk/citeproc-ruby](https://github.com/inukshuk/citeproc-ruby)).
Finally, Zotero developers created [citeproc-node](http://www.zotero.org/support/dev/citeproc-node), a [NodeJS](http://nodejs.org/) wrapper for citeproc-js, for easy server-side deployment.

With so many parties on board, the main challenge for the next few months will be the creation of a CSL 1.0 style repository, similar to the existing [Zotero Style Repository](http://www.zotero.org/styles) for CSL 0.8.1 styles.
Preferably, this repository should use a decentralized version control system like Git to handle the distribution and contribution of CSL styles, and have a front end for users to browse, preview and install styles.
Interested parties are strongly invited to participate in the [xbiblio mailing list](http://sourceforge.net/mail/?group_id=117435) to discuss and help out with these future improvements.
