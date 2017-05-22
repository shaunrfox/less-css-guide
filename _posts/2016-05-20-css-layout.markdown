---
layout: post
title:  "CSS Layout"
date:   2016-05-20
categories: CSS
---

## position

##### EXAMPLE VALUES: `relative`, `absolute`, `fixed`

The position property manipulates the location of an element. Each value of this property will affect the element in a different way.

### static

`static` is the default position value of all elements on the web. If you don't set the position explicitly, this is the position your element has.

### relative

`relative` positioning will layout relative to it's normal position. You can affect the position of the element by adding additional positioning properties, like `top`, `right`, `bottom`, `left`, and `z-index`. This will remain in the flow of other elements on the page.

### absolute

`absolute` positioning is always relative to it's closest parent with `relative` positioning. This will also be pulled out of the normal flow of the page, so it can overlap other elements.

### fixed

`fixed` positioning is always relative to the *viewport*, meaning it always stays in place, even when the page is scrolled. This is rarely used except sometime for things like headers, footers, or modals.

### top, right, bottom, left

##### EXAMPLE VALUES: `0`, `100%`, `-20px`

These properties are used in conjunction with `relative`, `absolute`, or `fixed` positioning.

{% highlight scss %}
.parent-element {
  position: relative;
}

.child-element {
	position: absolute;
	top: 20px;
	left: 20px;
	// 20px from the top, left corner of it's parent, regardless of padding or other sibling elements.
}
{% endhighlight %}

---

## z-index

##### EXAMPLE VALUES: `1`, `-1`, `25`

> The z-index property in CSS controls the vertical stacking order of elements that overlap. As in, which one appears as if it is physically closer to you. z-index only effects elements that have a position value other than static (the default). —CSS-Tricks

Be both conscious and sensible with your z-index values. Avoid tacking on lots of zeros, but also leave yourself room to fill in between values if you need to.

---

## float

##### EXAMPLE VALUES: `left`, `right`, `none`

`float` is usually used when you want two or more block elements to be side-by-side. It's easiest to see in a visual example: <http://codepen.io/bxyoung89/pen/WbLRve>

### clear

If you float things, the parent is not aware of their height. Using a clear fix solution forces the parent to respond to the height of it's children.

You should use our handy mixin: `@include clearfix();`

---

## transform

##### EXAMPLE VALUES: `translateY(-50%)`

You can do a lot of things with transform, but usually we only use it for vertical centering. You should be careful with this property because it does not necessarily respect round pixel values and can cause things to become blurry.

Our mixin: `@include vertical-align();` will vertically center a block element with unknown height inside a parent that's larger (most of the time). (not to be confused with the `vertical-align` property)

More info here: <https://css-tricks.com/centering-css-complete-guide/>

---

## vertical-align

This is primarily used for aligning a collection of elements with `display: inline-block;`. You'll usually set this to `top` so that the elements' tops all line up.