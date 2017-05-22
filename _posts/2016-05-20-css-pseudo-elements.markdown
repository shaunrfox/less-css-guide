---
layout: post
title:  "CSS Pseudo Elements"
date:   2016-05-20
categories: CSS
---

## :before &amp; :after

Every element on the web that can contain content (not img, input, br, hr, etc.) can be given additional pseudo elements.

`:before` will put it's content before all of the parent's children.
`:after` will put it's content after all of the parent's children.

### Carrot Dangler

This is used to make a small arrow that points to another element. We typically use this for special tooltips or dropdowns. You can see this more easily in the [Codepen Example](http://codepen.io/shaunrfox/pen/mENJjv?editors=1100).

{% highlight scss %}
.parent-element {
  position: relative;
  // Must set position for the carrot to work

  &:before,
  &:after {
    content: ''; // IMPORTANT: pseudo elements will not display at all unless the content attribute is set. If you don't want any text, use the empty string.
    display: block;
    position: absolute;
    left: 50%;
  }

  &:before {
    top: -12px;
    margin-left: -12px;
    border-bottom: 12px solid $light-grey;
    border-right: 12px solid transparent;
    border-left: 12px solid transparent;
  }

  &:after {
    top: -10px;
    margin-left: -10px;
    border-bottom: 10px solid $white;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
  }
}
{% endhighlight %}