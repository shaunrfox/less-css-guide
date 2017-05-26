---
layout: post
title:  "Dropdowns"
date:   2016-05-06
categories: HTML
---

We use the Bootstrap markup and JS for our dropdowns.

{% highlight html %}
<div class="dropdown">
  <button class="button dropdown-toggle" type="button" id="cool-dropdown" data-toggle="dropdown">
    Dropdown
    <svg viewBox="0 0 30 30" class="ico-arrow-down">
      <use xlink:href="#ico-arrow-down"></use>
    </svg>
  </button>
  <ul class="dropdown-menu" role="menu" aria-labelledby="cool-dropdown">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
</div>
{% endhighlight %}