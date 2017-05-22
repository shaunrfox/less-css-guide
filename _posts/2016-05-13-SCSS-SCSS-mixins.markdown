---
layout: post
title:  "SCSS Mixins"
date:   2016-05-13
categories: CSS SCSS
---

Mixins are chunks of commonly used code that can be included again and again throughout your SCSS. Mixins can also take a variable when they're called.

This snippet is used on parent elements with floating child elements to force them to wrap around their children.

{% highlight scss %}
@mixin clearfix {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}
{% endhighlight %}

This snippet is used to generate REM-based font sizes with a PX backup. Note that it takes a variable ($size) and does some math with the value it's given.

{% highlight scss %}
@mixin font-size($size){
  font-size: ($size * 10) + px;
  font-size: $size + rem;
}
{% endhighlight %}

More snippets that are used extensively:

{% highlight scss %}
// Uppercase, 600, letter-spaced
@mixin uppercase {
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
}

// Truncate text
@mixin truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

// Vertical align anything
@mixin vertical-align {
  display: block;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  transform-style: perserve-3d;
}
{% endhighlight %}

### Usage

{% highlight scss %}
.box {
  @include vertical-align();
  @include uppercase();
  @include font-size(1.8);
}
{% endhighlight %}

### Outputs to:

{% highlight scss %}
.box {
  display: block;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  transform-style: perserve-3d;

  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;

  font-size: 18px;
  font-size: 1.8rem;
}
{% endhighlight %}