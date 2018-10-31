---
title: Blog
date: 2018-10-25 04:45:00 Z
---

<section>
    <div class="">
        <h2>Latest Blog Posts</h2>
        <ul class="post-list">
        {%- for post in site.posts -%}
        <li>
            {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
            <span class="post-meta">{{ post.date | date: date_format }} by {{ post.author }}</span>
            <a class="post-link" href="{{ post.url | relative_url }}">
                {{ post.title | escape }}
            </a>
            {%- if site.show_excerpts -%}
            {{ post.excerpt }}
            {%- endif -%}
        </li>
        {%- endfor -%}
        </ul>
    </div>
</section>