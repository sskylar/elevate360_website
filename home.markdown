---
title: home
date: 2018-08-26 05:08:00 Z
layout: default
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }} &mdash; <em>posted on {{ post.date }}</em></a>
      <p>{{ post.excerpt }}</p>
    </li>
  {% endfor %}
</ul>