---
title: CSSLabs.new - Latest in CSS
layout: base.njk
---

<div class="py-20 px-4 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-white">
  <h1 class="text-4xl font-bold mb-4">Explore the Future of CSS</h1>
  <p class="text-lg mb-8">Stay updated with cutting-edge CSS techniques, tools, and trends.</p>
  <a href="/posts/" class="inline-block bg-white text-blue-600 py-2 px-6 rounded-md font-semibold hover:bg-blue-100 transition-colors duration-300">Discover New Features</a>
</div>

<section class="py-12 px-4">
  <h2 class="text-3xl font-bold mb-6 text-gray-800">Latest Articles</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    {% for post in collections.posts | slice(0,3) %}
      <div class="bg-white rounded-lg shadow-md">
        <div class="aspect-w-16 aspect-h-9">
          <img src="https://picsum.photos/1600/900" alt="{{ post.data.title }}" class="object-cover rounded-t-lg">
        </div>
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2"><a href="{{ post.url }}" class="text-blue-600 hover:text-blue-800 transition-colors duration-200">{{ post.data.title }}</a></h3>
          <p>{{ post.data.description }}</p>
        </div>
      </div>
    {% endfor %}
  </div>
</section>
