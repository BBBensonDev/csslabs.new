---
title: TailwindCSS - 3 Pros and 3 Cons
layout: base.njk
date: 2025-09-26
description: A simple guide to whether or not you should use TailwindCSS in your next project
author: Samantha
---

## TailwindCSS - 3 Pros and 3 Cons

I have written on my personal blog on [why I think TailwindCSS is not the best](https://blog.barrybenson.dev/2025/09/tailwindcss-is-not-best.html) (Note: I used blogger, which is buggy as all heck), and what inspired me to create CSSLabs.new is the cons of using Tailwind. I have my reasons to dislike Tailwind, but man can it be useful. I am going to share 3 pros and 3 cons to TailwindCSS, and maybe share with you why I *sometimes* avoid it.

### A quick note before we begin

CSSLabs.new is entirely written in TailwindCSS, no custom CSS in sight. That is mostly because for building a quick 11ty blog to share the newest in CSS outside of Tailwind, it only made sense to make this faster and better than worry about the nitty gritty in styles, which brings us to...

### Pro 1. Tailwind is perfect for launching fast

It's not that you don't need to think of the design first, but rather that Tailwind is just easier to write than CSS by itself in some cases. Things like blogs with Tailwind's typography plugin are perfect for blogs like this, and why I chose to use it, despite having my reservations not that long ago. It also works well with AI which I did use to get the most out of this domain name, which cost me an arm and a leg.

### Con 1. Tailwind isn't great for larger scale projects

Tailwind has a massive scaling issue once your designs and needs get big enough. Even if you use your code editor and framework perfectly, I have found that sites with very complex style needs make Tailwind more of a burden than a helpful tool. If you have a medium sized project, with medium amounts of Tailwind classes, and using the right tools and frameworks, you shouldn't run into this issue.

### Pro 2. Tailwind has great defaults

The benefit of Tailwind's defaults is that they are designed by, well, designers. The spacing defaults and default colors should get you 90% of the way to a small or medium project's completion. Like I said in con one, Tailwind does struggle when things get too complicated, and becomes more of a hinderence for large to massive design projects, but is still perfect for a blog author, or a quick prototype of your product because of its sensible defaults.

### Con 2. Changing Tailwind's defaults is STUPID

When I saw they were going for a CSS-first config, at first I was excited, but now I am dreading having to add custom styles anywhere to the config. The JS config made sense in my mind because you were setting Tailwind up in a way that could very easily be implemented into a quick JS configuration that Tailwind could use to build everything else more cleanly. You also had more control back then. I know it *might* be faster, (I am not an expert so I don't know) but there still is a lot of work before I would consider the CSS-based config to be anything helpful again.

### Pro 3. "I am Speed" - Tailwind, probably

TailwindCSS is insanely fast, often recording CSS build times in the micro-seconds. This is great because it takes more time to blink than get your styles ready to use in any framework. Meaning you don't need to wait for Tailwind to do its magic, it just does it before you can realize it happened.

### Con 3. Tailwind CSS's lies on being smaller 100% of the time

Writing component-based, it often has the ability to be close to two thirds the size of the same project implemented in Tailwind (see the original post I did in the introduction for more information). This normally wouldn't matter, but on the **global** internet, where in some places, every byte matters, can be a drawback. This is one of the key areas Tailwind fails in larger or more complex designs, or even just the average uniform design.

### Conclusion

Should you use Tailwind? I'm not your mom, do what you want. But be realistic about how Tailwind functions and know your options. Tailwind doesn't support all the new features right away, some of them need to be added in the square bracket syntax, some of it cannot be done in such a way. Overall, just trust your gut, and always be experimenting!