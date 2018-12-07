---
title: Our Staff
date: 2018-10-28 11:51:00 -04:00
---

{% include section-type2.html
    id="meet_our_staff"
    h1="Our Team"
    h2="Meet Our Staff"
    content="The clinical team at Elevate360 is a group of expert addiction psychologists who are passionate about their work and about using the most effective treatments for substance use disorders. We have an unwavering commitment to the use of research supported treatment techniques and we use them to support patients as they strive towards their goals."
%}

{% assign staff = site.staff | sort: 'position' %}
<section id="staff_list">
    <div class="grid-inner">
        {% for person in staff  %}
            {% assign excerpt_html = person.content | split: '</h4>' %}
            {% assign subtitle = excerpt_html[0] | strip_html %}
            {% assign excerpt_html_two = excerpt_html[1] | split: '</p>' %}
            {% assign excerpt = excerpt_html_two[0] | strip_html %}
            <div class="team-bio-card" aria-data-url="{{ person.url }}">
                <section class="team-bio-card-inner">
                    {% assign bio_photo = person.photo | remove_first: '/uploads/' | url_decode %}
                    <img src="{% asset '{{ bio_photo }}' @path %}" class="team-bio-photo" alt="{% if person.photo_alt %}{{ person.photo_alt }}{% else %}{{ person.title }}{% endif %}" />
                    <div class="team-bio-text">
                        <h1>{{ person.full_title }}</h1>
                        <h4>{{ subtitle }}</h4>
                        <p class="preview">{{ excerpt }}</p>
                    </div>
                </section>
                <a href="{{ person.url }}" class="learn-more">Learn More &#x2192;</a>
            </div>
        {% endfor %}
    </div>
</section>
