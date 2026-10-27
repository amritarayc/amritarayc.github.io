---
layout: default
body_class: home
---
<section class="welcome" aria-labelledby="welcome-title">
  <span class="eyebrow">AMRITA’S DESK</span>
  <h1 id="welcome-title">A little world of<br>work & <em>wonder.</em></h1>
  <p>Projects, stories, and things that caught my curiosity.</p>
</section>
<section class="desk" aria-label="Explore my desk">
  <div class="plant" aria-hidden="true">{% include plant.svg %}</div>
  {% include cozy.html %}
  <div class="desk-top">
  {% for space in site.data.spaces limit:2 %}
    <a class="desk-object object-{{ space.object }}" href="{{ space.url | relative_url }}">
      {% include object.html type=space.object %}
      <span class="object-title">{{ space.title }} {% include arrow.html %}</span>
      <span class="object-subtitle">{{ space.subtitle }}</span>
    </a>
  {% endfor %}
  </div>
  <div class="desk-divider" id="outside-work"><span>A FEW THINGS OUTSIDE WORK</span>{% include sprig.html %}</div>
  <div class="desk-collections">
  {% for space in site.data.spaces offset:2 %}
    <a class="desk-object object-{{ space.object }}" href="{{ space.url | relative_url }}">
      {% include object.html type=space.object %}
      <span class="object-title">{{ space.title }} {% include arrow.html %}</span>
      <span class="object-subtitle">{{ space.subtitle }}</span>
    </a>
  {% endfor %}
  </div>
  <p class="desk-note handwritten">A growing collection, at my own pace.</p>
</section>
