---
layout: post
title:  "Variables in SCSS"
date:   2016-05-10
categories: CSS SCSS
---

SCSS (or Sass) variables can be used for any kind of simple stored value. We most commonly use them for colors, but they can be used for lots of things.

{% highlight scss %}

$snap-blue: #00a9ed;
$orange: #fe5019;

$filter-buttons-height: 40px;

$global-padding: 2%;

{% endhighlight %}

---

### Usage

{% highlight scss %}

.button {
  background: $snap-blue;
  height: $filter-buttons-height;
  padding: 0 $global-padding;
}

{% endhighlight %}

This compiles to:

{% highlight scss %}

.button {
  background: #00a9ed;
  height: 40px;
  padding: 0 2%;
}

{% endhighlight %}