---
layout: post
title:  "CSS Background"
date:   2016-05-20
categories: CSS
---

background, background-color, background-image, background-position, background-repeat, background-size

`background` is one of the most common properties we set. It can be used shorthand or broken out into more specific properties.

## Set a background color

When setting a background color, use `background: $light-grey`. Even when overriding for something like a hover state, still just use `background`, rather than `background-color`.

---

## Set a background image

Using an image as a background can be complicated. The easiest way to do this, without digging in too much, is to set the `background-image: url()` and use the provided mixin.

### Example

{% highlight scss %}
// Here's the mixin
@mixin background-image(){
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

// Here's how to use it
.element {
  background-image: url('.../image.jpg');
  @include background-image();
}
{% endhighlight %}

Using this method, you can also set a fallback image by having multiple values in the `background-image`. This is helpful when you're not hosting the source of the image you want to set.

### Example

{% highlight scss %}
.element {
  background-image: url('http://twitter.com/.../avatar.jpg'), url('.../backup-image.jpg');
  @include background-image();
}
{% endhighlight %}

---

## background-size: cover vs. contain

`background-size: cover` will stretch the image to cover the entire element, no matter the proportions, but it will keep the image's original aspect ratio.

`background-size: contain` will constrain the image to fit within the bounds of the element, but will always keep the entire image visible.