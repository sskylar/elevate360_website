---
title: Our Staff
date: 2018-10-28 15:51:00 Z
---

<section id="meet_our_staff">
    <h1 class="small" style="width: 100%;">Our Team</h1>
    <div class="section-text">
        <h2>Meet Our Staff</h2>
    </div>
    <div class="section-text">
        <p>
            The clinical team at Elevate360 is a group of expert addiction psychologists who are passionate about their work and about using the most effective treatments for substance use disorders. We have an unwavering commitment to the use of research supported treatment techniques and we use them to support patients as they strive towards their goals.
        </p>
    </div>
</section>

{% assign staff = site.staff | sort: 'position' %}
<section id="staff_list">
    {% for person in staff  %}
        <div class="team-bio-card" aria-data-url="{{ person.url }}">
            {{ person.content }}
        </div>
    {% endfor %}

</section>

<script>
    (function scope(){    
        var titles = document.querySelectorAll('.team-bio h1.small');
        var text_blocks = document.querySelectorAll('.team-bio-card .team-bio-text');
        var cards = document.querySelectorAll('.team-bio-card');

        for (let i = 0; i < titles.length; i++) {
            titles[i].style = "display: none;"
            const new_title = document.createElement('h1');
            new_title.innerText = titles[i].innerText;
            text_blocks[i].prepend(new_title);

            const more = document.createElement('a');
            const url = cards[i].getAttribute('aria-data-url');
            console.log(cards)
            more.setAttribute('class', 'learn-more');
            more.setAttribute('href', url);
            more.innerHTML = 'Learn More &#x2192;';
            text_blocks[i].append(more);
        }
    })();
</script>