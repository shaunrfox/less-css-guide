---
layout: post
title:  "Checkboxes"
date:   2016-05-11
categories: HTML
---

{% highlight html %}
<div class="checkbox-wrapper">
  <input class="checkbox-input" type="checkbox" id="show_on_login" {{ checked }}/>
  <label for="show_on_login">Show on login</label>
</div>
{% endhighlight %}