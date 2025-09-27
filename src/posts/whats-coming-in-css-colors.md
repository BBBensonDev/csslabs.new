---
title: What's coming in CSS Colors Module 6?
layout: base.njk
date: 2025-09-27
description: Explaining the current work in CSS Color Module 6 (Accessibility in colors)
author: Samantha
---

## What's coming in CSS Colors Module 6?

I want to make this clear: <strong>This module is *NOT* ready for production, and is an early draft with things bound to change. <q>This spec is not yet ready for implementation. It exists in this repository to record the ideas and promote discussion.</q></strong> I want to provide some discussion into CSS Module Level 6 well before it is implemented, and why I think this is a strong solution to daily developer problems.

### Some context about WCAG color 

#### "Explain like I am five"

Web developers face a problem. Imagine you have two crayons, one light like a bright yellow sun, and one dark like the night sky.

Sometimes, when you draw with a yellow crayon on yellow paper, it's really hard to see what you've drawn, right? It's like the drawing disappears!

WCAG stands for "Web Content Accessibility Guidelines." WCAG is like a special rulebook that helps web developers make sure that when they put words or pictures on a computer screen, they use colors that are easy for EVERYONE to see.

So, the rulebook says: "If you use a bright yellow word, make sure the paper behind it is a dark color, like blue or black. Or, if you use a dark blue word, make sure the paper behind it is a light color, like white or yellow."

This is so that even if someone has a hard time seeing colors, or if the sun is shining on their screen, they can still read all the words and see all the pictures clearly, just like you can easily see a dark drawing on light paper! It's all about making sure no one's drawing "disappears."

One very important part of WCAG is about color contrast. You know how if you write with a light yellow crayon on a white piece of paper, it's super hard to read? Or if you put a dark blue sticker on a black shirt, it's tough to see? That's a contrast problem.

WCAG gives specific rules, like a special measuring stick, to make sure that the colors used for text and important graphics are different enough from the background colors.

- "AA" is like the "good" level. It means the colors have enough difference that most people, even those with some vision issues, can easily tell them apart and read the text. It's like writing with a dark blue pen on light blue paper – pretty good!

- "AAA" is like the "best" level. It means the colors have an even bigger difference, making them super easy to see for almost everyone, even those with more significant vision challenges. This would be like writing with a dark blue pen on white paper

So, the idea is to avoid combinations where colors blend together too much, making text invisible or hard to read. By following these contrast rules, websites become much friendlier and usable for a wider range of people, making sure important information isn't "hidden" by poor color choices.

For text and images of text, WCAG 2.1 specifies the following minimum contrast ratios:

- AA (Level A):
	- Normal text: A contrast ratio of at least 4.5:1
	- Large text: A contrast ratio of at least 3:1
		- "Large text" is defined as text that is at least 18pt (24px) or 14pt (18.66px) and bold.
- AAA (Level AAA):
	- Normal text: A contrast ratio of at least 7:1
	- Large text: A contrast ratio of at least 4.5:1
		- Again, "Large text" is defined as text that is at least 18pt (24px) or 14pt (18.66px) and bold.

That is the very short ELI5 of it, at least. TL;DR, the higher the WCAG ratio, generally the better for visibility. This is a gross over-simplification of the WCAG spec, but it's enough context for the rest of this article.

### The two functions coming in CSS Color Module 6

DISCLAIMER: They might add another function, or remove one (or both) of these functions, but I recommend they keep them.

CSS Color Module 6 core additions are `contrast-color()` and `color-layers()`. We will only talk about `contrast-color()` for this article as it's the only one that has examples at this time.

#### `contrast-color()`

<em>The TL;DR: The contrast-color() function allows developers to automatically select a color from a list of candidates that provides sufficient contrast against a specified base color. It supports various target contrast levels, primarily using WCAG 2.1 guidelines (e.g., 'AA', 'AAA'). If no target contrast is specified, it picks the candidate with the highest contrast. This function aims to eliminate manual contrast computations, ensuring better readability and accessibility. The document also addresses how to handle semi-transparent colors by blending them against an opaque background.</em>

The syntax:

```
<contrast-color()> = contrast-color(
  [ [ <color> && [ tbd-fg | tbd-bg ] && <target-contrast>? ] |
    [ <color> && [ tbd-fg | tbd-bg ] && <target-contrast>, <color># ] ] )
```

Effectively speaking, the optional `<color>` value represents target colors that the developer wants in use, say `#2b2b2b`, `oklch(...)`, and/or `var(--color-primary-400)`, and uses whichever color comes out with the highest contrast value. If no `<color>` is defined, white and black are used for the calculations. I would recommend adding some colors you think should work for the calculation. The first `<color>` value is the color that should be compared as the 1 in the `n:1` ratio.

Let's take the CSS working group's example and follow it step by step. Let's say we had this code:

```css
.example {
  background-color: wheat;
  color: contrast-color(wheat tbd-bg wcag2(aa), bisque, darkgoldenrod, olive, sienna, darkgreen, maroon);
}
```

We set a background/base color of `wheat`, and determine the base color's role as a "background color". To do a foreground color, it would be `tbd-fg`, and is an optional. Why are they called `tbd-*`? Well, according to **ISSUE 1** in the current draft:

> The keywords to specify whether the base color is a foreground or background are TBD. [Issue #7359]

Next we decide whether we want AA or AAA contrast, in the example by the spec, they use AA. Another example later also uses an exact ratio of `5.8:1` in example 2, so a value of `wcag2(5.8)`. But back to the original example:

Finally is the list of colors to decide on, which include `bisque`, `darkgoldenrod`, `olive`, `sienna`, `darkgreen`, and `maroon`. Taking wheat, on AA scale.

- wheat (`#f5deb3`), the background, has relative luminance `0.749`
- bisque (`#ffe4c4`) has relative luminance `0.807` and contrast ratio `1.073`
- darkgoldenrod (`#b8860b`) has relative luminance `0.273` and contrast ratio `2.477`
- olive (`#808000`) has relative luminance `0.200` and contrast ratio `3.193`
- sienna (`#a0522d`) has relative luminance `0.137` and contrast ratio `4.274`
- darkgreen (`#006400`) has relative luminance `0.091` and contrast ratio `5.662`
- maroon (`#800000`) has relative luminance `0.046` and contrast ratio `8.333`

The first color in the list which meets the desired contrast ratio of 4.5 is darkgreen. If we went for the `wcag(5.8)` example, it would be `maroon`, since it is the first to pass `5.8:1`. If somehow no color met the contrast ratio, it would either be white or black depending on which of the two had a higher contrast ratio. If no contrast ratio is defined, then whatever highest value in the list of options would be the selected color.

### Should this spec be approved as-is?

For `contrast-color()`, other than the keywords needing proper decisions and not a temporary placeholder, yes. Once this feature launches, it will be the single best thing for customization of UIs, and there are many other uses like just picking the best color to use for accessibility reasons. This is more revolutionary than the `if()` function in CSS, and will undoubtedly become a common feature in new CSS projects.