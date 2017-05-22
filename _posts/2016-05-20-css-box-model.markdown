---
layout: post
title:  "CSS Box Model"
date:   2016-05-20
categories: CSS
---

The Box-model is the basis for the strucure of elements on the web. Elements are defined in space by firstly their [display-type](#css-display), then their width and height, followed by other attributes such as padding, margin, and border.

## box-sizing

In the original design of the box-model, padding, margin, and border units would add to the size of the div. (That's the old way)

In the new way (using `box-sizing: border-box;`), padding and border push into the set dimensions of the div. This allows for much easier calculations and control of element spacing.

Here's a live Codepen example: <http://codepen.io/shaunrfox/pen/raojBW/>

---

## width

##### EXAMPLE VALUES: `100%`, `200px`, `calc(100% - 50px)`

`width` is very straightforward, but the most important thing to keep in mind is scalability on different screen sizes and when the browser window is resized.

To accomodate the different environments that a site could be viewed in, favor setting percentage-based widths.

Any percentage-based width used is going to be relative to the element's parent.

`calc()` is usually used to make something fill a space, minus a pixel value. For instance having a scrollable area, minus the header. Make sure to leave a single space on either side of your operator or it won't work.

---

## height

##### EXAMPLE VALUES: `100%`, `200px`, `calc(100% - 50px)`

`height` is considered in much the same way as `width`, but is not as often set as a percentage (besides 100%).

Any percentage-based height used is going to be relative to the element's parent.

`calc()` is usually used to make something fill a space, minus a pixel value. For instance having a scrollable area, minus the header. Make sure to leave a single space on either side of your operator or it won't work.

---

## padding

##### EXAMPLE VALUES: `20px`

In the new box-model mode (`box-sizing: border-box;`), padding will push into the element.

`padding` can be defined on four sides of an element, like many things: top, right, bottom, left. This can be done as a shorthand or as individual values.

{% highlight scss %}
.my-class {
  padding: 10px 20px 30px 0;
  /* top: 10px, right: 20px, bottom: 30px, left: 0 */
}

// or

.my-class {
  padding-top: 20px;
  padding-left: 40px;
}
{% endhighlight %}

---

## margin

##### EXAMPLE VALUES: `20px`, `0 auto`

`margin` is always outside of the dimensions of your element and set the space around the element, relative to it's neighbors. This being the case, be especially careful not to cause layout collisions. This happens a lot when combining margin with percentage-based widths.

A common trick for horizontally centering an element inside a larger parent is to set `margin: 0 auto;`. The `0` defines the top and bottom margin (a shorthand), and the `auto` defines the right and left. It should be noted that this only works if the element also has a width set.

{% highlight scss %}
.parent-element {
  width: 100%;
  height: 100%;
}

.child-element {
  width: 400px;
  height: 300px;
  margin: 0 auto;
}
{% endhighlight %}

---

## border

##### EXAMPLE VALUES: `1px solid $light-grey`

`border` is defined similar to padding and can be treated nearly the same. It can be defined on all sides at once or as individual attributes.

We most commonly use the shorthand definitions listed below, but they can also be broken out on their own. The second example is also a common way we use it, defining multiple values as shorthand, but then overriding specific ones for an interaction or emphasis.

{% highlight scss %}
.element {
  border: 1px solid $light-grey;
}

.other-element {
  border-bottom: 1px solid $white;

  &:hover {
    border-color: $blue;
  }
}
{% endhighlight %}

---

## border-radius

##### EXAMPLE VALUES: `4px`, `50%`

`border-radius` affects the corners of things. It can be used to give subtle rounded-corners to things like buttons, or to make element corners completely round (`border-radius: 50%`), forming a circle, for things like avatar images.

It can be defined shorthand as top-left, top-right, bottom-right, bottom-left, or as individual values.