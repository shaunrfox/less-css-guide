---
layout: post
title:  "Less Color Variables"
date:   2016-05-13
categories: CSS SCSS
---

Our color variables, defined in `_colors.less`, are designed to help us reuse colors without having to remember hex values.

{% highlight less %}
/* This is an example of some of our default colors. */
@cool-grey-300: #D8E2E7;
@green-400: #97E34F;
@olive-700: #68721F;
@red-200: #FFE9E3;

/* We also have some specific Carrier colors defined. */
@fedexCA: #9f4a8a;
@CAPost: #4a9f96;
@dhlExpress: #9f724a;
{% endhighlight %}

There are also a few built-in functions we can use to transform colors to other colors in Less. We try to avoid transforming the colors, except for using `fade()` to give them some transparency.

{% highlight less %}
// Slightly darken a color
darken()

// Slightly lighten a color
lighten()

// Convert to rgba
fade()
{% endhighlight %}

### Usage

{% highlight less %}
.box {
  background: fade(@yellow-300, 20);
}
{% endhighlight %}

### Outputs to:

{% highlight less %}
.box {
  background: rgba(255, 244, 29, 0.2);
}
{% endhighlight %}