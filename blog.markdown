---
title: Blog
date: 2018-10-25 00:45:00 -04:00
---

<section id="featured_post">
    {% assign first_post = site.posts[0] %}
    <a href="{{ first_post.url }}" class="section-image" style="background-image: url('{{ first_post.post_image }}');"></a>
    <div class="section-text">
        <div class="section-text-inner">
            <h1 class="small">New Post</h1>
            <h2><a href="{{ first_post.url }}" >{{ first_post.title}}</a></h2>
            <p>{{ first_post.excerpt }}</p>
            <a class="learn-more" href="{{ first_post.url }}">Read More &#x2192;</a>
        </div>
    </div>
</section>
<section class="recent-posts">
    <div>
        <h1 class="small">Recent Blog Posts</h1>
        <div class="posts-list">
            <div class="card-grid">
                {%- for post in site.posts -%}
                    {% if forloop.first %}
                        {% comment %} skip first post {% endcomment %}
                    {% else %}
                        {% include blog_card.html post=post %}
                    {% endif %}
                {%- endfor -%}
            </div>
        </div>
    </div>
</section>
