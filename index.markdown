---
title: Welcome to Elevate360 Wellness
date: 2018-08-26 01:08:00 -04:00
background-image: "/uploads/sarah-dorweiler-211779-unsplash@2x.png"
section-image-1: "/assets/images/aaron-burson-242126-unsplash@2x.jpg"
section-image-2: "/assets/images/scott-webb-249006-unsplash@2x.jpg"
section-image-3: "/assets/images/handful-of-flowers@2x.jpg"
section-image-4: "/assets/images/josh-couch-475118-unsplash@2x.jpg"
layout: default
---

{% include mobile_hero.html image=page.background-image message="Need Help?" %}

<section id="homepage_1" class="hero plant-image" style="background-image: url('{{ page.background-image }}')">
    <div class="section-content">
        <div class="section-content-inner">
            <h1>Welcome to Elevate360 Wellness</h1>
            <h2>State of the art care, delivered compassionately.</h2>
            <p>
                Elevate360 is a boutique outpatient addiction treatment center located in Midtown Manhattan that uses state-of-the-art, science-based techniques, technology, and highly trained doctoral level psychologists to provide patients with the highest quality therapeutic experience in addiction treatment.
            </p>
            <a class="button rounded" href="/contact">get email updates</a>
        </div>
    </div>
</section>
{% include section-callout.html
    h3="Call Us Today, <br class='only-mobile' />Be Seen Tomorrow!"
    h4="Schedule a free <br class='only-mobile' />15-minute consultation <br class='only-mobile' /><span class='only-desktop'>- </span>212-204-8430"
    button_msg="212-204-8430"
    button_mobile="call now"
    button_href="tel:1-212-204-8430"
%}

{% include section-type1.html
    id="what_we_do"
    photo-side="right"
    photo=page.section-image-1
    h1="what do we do?"
    h2="Exceptional <br class='only-desktop' />addiction care"
    content="We provide exceptional individualized care for patients and families struggling with alcohol, pain medication, and other substance use."
%}

{% include section-type1.html
    id="how_are_we_different"
    photo-side="left"
    photo=page.section-image-2
    h1="Our Promise"
    h2="How are we Different"
    content="The Elevate360 model differs from most addiction centers in that all of the treatment provided is based on scientifically proven techniques and we strive to make treatment interesting, engaging, accessible, and even, dare we say... fun for the patient."
%}

{% include section-type1.html
    id="our_vision"
    photo-side="right"
    photo=page.section-image-3
    h1="Our Vision"
    h2="Compassionate care, effectively done"
    content="Through continuous research, evolving technologies, and evidence-based care, we plan to lead a revolution in addiction care with one simple goal: to help our patients create and live healthy and happy lives."
%}

{% include section-type1.html
    id="treatment"
    photo-side="left"
    photo=page.section-image-4
    h1="Our Promise"
    h2="Professional treatment that works."
    content="We have a deeply held belief that people struggling with addiction deserve professional respectful treatment that works."
%}
