---
layout: post
title:  "SCSS Color Variables"
date:   2016-05-13
categories: CSS SCSS
---

Our color variables, defined in `_colors.scss`, are designed to help us reuse colors without having to remember hex values.

{% highlight scss %}
/* This is a default set of utility colors that we use from time to time. */
$red: #ed1c24;
$orange: #ff6600;
$yellow: #ffcc00;
$forest-green: #666600;
$green: #51b848;
$teal: #006666;
$blue: #0090cb;
$cyan: #00ccff;
$dark-cyan: darken($cyan, 10%);
$indigo: #2a1e5c;
$purple: #66439a;
$yellow-green: #efe80c;
$red-orange: #ff3600;
$tan: #F2F1E6;
$dark-tan: #C6C7C0;

/* These are all of our blacks, greys, and whites. */
$black: #000;
$off-black: #111;
$dark-grey: #666;
$mid-grey: #aaa;
$light-grey: #ccc;
$off-white: #eee;
$white: #fff;

/* Sometimes we'll define colors for very specific uses. They should get very specific names to help assure that they're only used in the appropriate place. */
$filter-background: #f9f4de;
$filter-active-button-color: #eee27e;

/* Our brand colors */
$snap-blue: #00a9ed;
$orange: #fe5019;
$midnight: #002B38;

/* If we find that we're recreating a particular color often, we should store it as a new variable, like this: */
$light-blue: tint($blue, 30%);
{% endhighlight %}

There are also a few functions we can use to transform colors to other colors.

## Our custom color functions:

{% highlight scss %}
// Slightly lighten a color
@function tint($color, $percentage) {
  @return mix($color, white, $percentage);
}

// Usage
.box {
  background: tint($blue, 30); // mixes $blue at 30% and white at 70%
}

// Slightly darken a color
@function shade($color, $percentage) {
  @return mix($color, black, $percentage);
}

// Usage
.button {
  background: $blue;
  border: 1px solid shade($blue, 80); // mixes $blue at 80% and black at 20%
}
{% endhighlight %}

These are our preferred way to transform colors because it outputs a slightly more predictable result than the standard lighten() and darken() built into SCSS.

## Built-in SCSS color functions:

- Lighten: `background: lighten($blue, 20);`
- Darken: `background: darken($orange, 60);`
- RGBA:
	- `color: rgba($off-black, 60);` - useful for letting text mix onto background colors
	- `background: rgba($white, 95);` - useful for making the background of an element transparent without affecting the transparency of it's contents.

There are many more color functions, but these are the main ones we use.
