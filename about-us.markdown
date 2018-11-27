---
title: About Us
date: 2018-10-25 00:42:00 -04:00
background-image: "/assets/images/hero@2x.jpg"
section-image-1: "/assets/images/kari-shea-580156-unsplash@2x.jpg"
---

{% include mobile_hero.html image=page.background-image message="Let’s Talk" %}

<section id="about_us_hero" class="hero" style="background-image: url('{{ page.background-image }}')">
    <div class="section-content">
        <h1>About Us</h1>
        <h2>Professional treatment <br class="only-desktop" />that works.</h2>
        <p>
            Elevate is a boutique outpatient addiction treatment center located in Midtown Manhattan that uses state-of-the-art, science-based techniques, technology, and expertly trained doctoral level psychologists to provide patients with the highest quality therapeutic experience in addiction treatment.
        </p>
        <a href="tel:1-212-204-8430" class="button rounded only-desktop">212-204-8430</a>
        <a href="tel:1-212-204-8430" class="button rounded only-mobile">Let's Talk &nbsp;&#x260E;</a>
    </div>
</section>

<section id="who_we_are">
    <h1 class="small small-full-width">who we are</h1>
    <div class="section-content">
        <h2>Our Mission & Vision</h2>
        <p>
            We provide exceptional, science-based, compassionate care for patients and families struggling with alcohol, the misuse of pain medication, and other substance use disorders.
            We have a deeply held belief that people struggling with addiction deserve professional treatment that works.
            Through continuous research, evolving technologies, and evidence-based care, we are leading a revolution in addiction care with on
        </p>
        <!-- <a class="learn-more">Learn More &#x2192;</a> -->
    </div>
    <div class="side-image" style="background-image:url('{{ page.section-image-1 }}')"></div>
</section>
{% include section-type1.html
    id="meet_our_staff"
    h1="Our Team"
    h2="Meet Our Staff"
    content="The clinical team at Elevate360 is a group of expert addiction psychologists who are passionate about their work and about using the most effective treatments for substance use disorders. We have an unwavering commitment to the use of research supported treatment techniques and we use them to support patients as they strive towards their goals."
    href="/our-staff"
%}
