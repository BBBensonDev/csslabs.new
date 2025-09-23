---
title: How to find new CSS features
layout: base.njk
date: 2025-09-23
description: How we, and you, can find exciting new CSS features that are baking in the oven.
---

## How to find new CSS features

Whether it comes from WebKit, Firefox, or Chromium's teams, how and where can you find the new things CSS has to offer? Well, there are a few amazing sources of information to find these new features. These can be draft features which may not exist but are good to know about, or planned/in-development features that may change slightly before implementation that you may be able to test in the next few browser versions.

### WebKit CSS Feature Status

[WebKit CSS Feature Status](https://webkit.org/css-status/#) is one of the easiest places to see in development, or experimental features in CSS. The reason I say easiest is that it's the only one of the places on the that give you simple filters to find the in development and experimental features. One of the big drawbacks of this source is that it (obviously) is only for WebKit, meaning browsers such as Safari on Mac and Epiphany on Linux would be seeing these features, but not necessarily Chrome, Firefox, or their respective derivatives like Brave, Edge, and LibreWolf.

A good thing about this source is that Chrome often matches these features in experimental and development sources, but not always. Meaning that these features will be available to most (but not the vast majority) of people until Firefox supports it.

### Firefox Nightly News / Firefox's Bugzilla

Outside of sounding like a local rip-off of national nightly news, the [Firefox Nightly News](https://blog.nightly.mozilla.org/) has information relating to what Firefox is working on. I have a few problems with this source, and will likely not use it much, because it is hard to see what Firefox is doing in terms of CSS features. However, there is another way to quickly and easily get *some* information on what Firefox is doing, and that is their bug reports on [Firefox's Bugzilla, and searching "CSS"](https://bugzilla.mozilla.org/buglist.cgi?query_format=specific&order=relevance+desc&bug_status=__open__&product=Firefox&content=css&comments=0). The great thing about the bugzilla is that it tells you whether it's a bug or enhancement. Unfortunately, as this is Mozilla, there is no way to sort only for enhancements or tasks, which are the things we are specifically looking for. 

Here's the thing, I hate Firefox, and I think it's a hiderence to privacy and the web as a whole. I personally feel like Firefox isn't the best source for new CSS features because it's only once in a blue moon they even get CSS features in Chrome and Safari into baseline by adding it to Firefox. Even more rare is when they're first to a feature (but it does happen with things like the new `:heading` selector). Generally would avoid unless you are like me and are a masochist for CSS.

### Chrome Platform Status

The great thing about the [Chrome Platform Status](https://chromestatus.com/roadmap) is how you can search for features shipping in the near future, pretty easily too. [For 2025](https://chromestatus.com/features?q=shipping_year%253A2025%2520category%253A%2522CSS%2522) there are currently 77 items on that list, and four items [in 2026, so far](https://chromestatus.com/features?q=shipping_year%253A2026%2520category%253A%2522CSS%2522). These often include bug fixes and changes of that sort, but since Chrome is the front-runner in most new web features, it's very much the best option, outside of [CSSLabs.new](https://csslabs.new) of course.

### CSS Working Group Editor Drafts

The [CSS Working Group Editor Drafts](https://drafts.csswg.org/) is the only place to find what new things that arent't in browsers yet will be. However, like the stool sample of a drug mule, you'll have to dig deep to get to the good stuff. I always search the ones with "current work" or that has the latest updates first before looking elsewhere. There is a lot of stuff to read, and will give you a better look into the technical details that the list of sites above won't give you. This is always a source for CSSLabs.new because it is the best place to see the technical underbelly of new CSS features.