---
layout: post
title:  "Variables in Less"
date:   2016-05-10
categories: CSS Less
---

SCSS (or Sass) variables can be used for any kind of simple stored value. We most commonly use them for colors, but they can be used for lots of things.

{% highlight less %}

@blue-500: #6FB8F8;
@green-600: #6BA03A;

@filter-buttons-height: 40px;

@global-padding: 2%;

{% endhighlight %}

---

### Usage

{% highlight less %}

.button {
  background: @blue-500;
  height: @filter-buttons-height;
  padding: 0 @global-padding;
}

{% endhighlight %}

This compiles to:

{% highlight less %}

.button {
  background: #6FB8F8;
  height: 40px;
  padding: 0 2%;
}

{% endhighlight %}