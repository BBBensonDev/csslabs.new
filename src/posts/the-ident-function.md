---
title: The ident() function is coming!
layout: base.njk
date: 2025-09-23
description: How CSS is making unique identifiers easier and faster to write
---

In [CSS Values 5](https://drafts.csswg.org/css-values-5/) there is a new way to construct custom identifiers. CSS developers need to give unique identifiers to things like `container-name`, `view-transition/timeline-name`, and even the `anchor-name`. This is really exciting because the below syntax (borrowed from [this example](https://github.com/w3c/csswg-drafts/issues/9141)) can be shrunk down, making CSS more D.R.Y. of a language.

```css
.parent {
  timeline-scope: --tl-1, --tl-2, --tl-3;
}

nav {
  li:nth-child(1) { animation-timeline: --tl-1; }
  li:nth-child(2) { animation-timeline: --tl-2; }
  li:nth-child(3) { animation-timeline: --tl-3; }
}

main {
  div:nth-child(1) { view-timeline: --tl-1; }
  div:nth-child(2) { view-timeline: --tl-2; }
  div:nth-child(3) { view-timeline: --tl-3; }
}
```

Let's talk about an example using navigation and navigation anchors, since this is the best place I see use for this feature.

Taking a traditional navigation menu with drop-down menus within it, let's say this was our original CSS.

```css
.nav-item.has-dropdown:nth-child(1) { 
  anchor-name: --nav-dropdown-1; 
  /* other styles */
}
.nav-item.has-dropdown:nth-child(2) { 
  anchor-name: --nav-dropdown-2; 
  /* other styles */
}
.nav-item.has-dropdown:nth-child(3) { 
  anchor-name: --nav-dropdown-3; 
  /* other styles */
}

.dropdown:nth-child(1){
  position-anchor: --nav-dropdown-1;
  /* other styles */
}
.dropdown:nth-child(2){
  position-anchor: --nav-dropdown-2;
  /* other styles */
}
.dropdown:nth-child(3){
  position-anchor: --nav-dropdown-3;
  /* other styles */
}
```

Now we can boil it down to this:

```css
.nav-item.has-dropdown  {
  anchor-name: ident("--nav-dropdown-" sibling-index());
  /* other styles */
}

.dropdown {
  position-anchor: ident("--nav-dropdown-" sibling-index());
  /* other styles */
}
```

And even cooler, we can add `attr(id)` to ensure the popover goes to the right navigation item.

```css
.nav-item.has-dropdown  {
  anchor-name: ident("--nav-dropdown-" attr(id));
  /* other styles */
}

/* ... */
```

This is really exciting for the future of CSS. It isn't available yet, [only issued in Chrome Status 4 months ago](https://chromestatus.com/feature/6230159413477376), but when I saw this I immediately wanted to use it because this will make for a very useful feature.