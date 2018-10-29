---
title: Our Staff
date: 2018-10-28 15:51:00 Z
---

Meet Our Staff

The clinical team at Elevate360 is a group of expert addiction psychologists who are passionate about their work and about using the most effective treatments for substance use disorders. We have an unwavering commitment to the use of research supported treatment techniques and we use them to support patients as they strive towards their goals.

{% assign staff = site.staff | sort: 'position' %}
<dl>
{% for person in staff  %}
    <dt> <a href="{{item.url}}">{{ person.name }}</a></dt>
    <dd>{{ person.job_title }}</dd>
{% endfor %}
</dl>