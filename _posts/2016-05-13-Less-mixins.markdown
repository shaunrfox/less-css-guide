---
layout: post
title:  "Less Mixins"
date:   2016-05-13
categories: CSS Less
---

Mixins are chunks of commonly used code that can be included again and again throughout your Less. Mixins can also take a variable when they're called.

{% highlight less %}
// Truncate text
.truncate() {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

// Used on parent elements with floating child elements to force the parent to expand to the height of their children.
.clearfix() {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}

// Force a background image to always fit within it's container
.background-image() {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

// Vertically align most things
.vertical-align() {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
{% endhighlight %}


### Usage

{% highlight less %}
.box {
  .vertical-align();
  .truncate();
}
{% endhighlight %}

### Outputs to:

{% highlight scss %}
.box {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
{% endhighlight %}