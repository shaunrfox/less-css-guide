---
layout: post
title:  "CSS Background"
date:   2016-05-20
categories: CSS
---

##### background, background-color, background-image, background-position, background-repeat, background-size

`background` is one of the most common properties we set. It can be used shorthand or broken out into more specific properties.

## Set a background color

When setting a background color, you can use either `background: @grey-100;` or `background-color: @grey-100;`.

---

## Set a background image

Using an image as a background can be complicated. The easiest way to do this, without digging in too much, is to set the `background-image: url()` and use the provided mixin.

### Example

{% highlight less %}
// Here's the mixin
.background-image() {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

// Here's how to use it
.element {
  background-image: url('.../image.jpg');
  .background-image();
}
{% endhighlight %}

Using this method, you can also set a fallback image by having multiple values in the `background-image`. This is helpful when you're not hosting the source of the image you want to set.

### Example

{% highlight scss %}
.element {
  background-image: url('http://twitter.com/.../avatar.jpg'), url('.../backup-image.jpg');
  .background-image();
}
{% endhighlight %}

---

## background-size: cover vs. contain

`background-size: cover` will stretch the image to cover the entire element, no matter the proportions, but it will keep the image's original aspect ratio.

`background-size: contain` will constrain the image to fit within the bounds of the element, but will always keep the entire image visible (still maintaining aspect ratio).

---

## background-position and background-repeat

Both of these are typically used alongside a background-image. `background-position` sets the position of the background image, relative to it's element. `background-repeat` controls how your image repeats in the container (images repeat infinitely in both directions by default!);