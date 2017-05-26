---
layout: post
title:  "CSS Text Handling"
date:   2016-05-20
categories: CSS
---

## font-family

##### EXAMPLE VALUES: Depends on your project.

To set what font gets used, use the `font-family` property. This is set globally for our products.

However, if you want to change what font is used, you should have numerous fallbacks like this:

{% highlight scss %}
.my-class {
  font-family: "Roboto", Arial Narrow, Geneva, Lucida Grande, Helvetica, sans-serif;
}
{% endhighlight %}

In this example Arial Narrow will be used if the browser does not have access to "Roboto", then Geneva, etc...

---

## font-size

##### EXAMPLE VALUES: `12px`

`font-size` controls the size the text will rendered at. We stick to `px` as our decided unit.

---

## color

##### EXAMPLE VALUES: `@grey-1000`, `#ffffff`, `@red-300`, `fade(@white, 50)`

`color` changes the color of the text.

In our code, we have variables corresponding to color values. [Less Color Variables](#Less-color-variables )

---

## line-height

##### EXAMPLE VALUES: `12px`, `30px`

`line-height` sets the vertical spacing between lines of text. We mostly use it to vertically center a single line of text. If there is a chance your text might wrap, use a different method as detailed by [Centering in CSS: A Complete Guide, by CSS Tricks](https://css-tricks.com/centering-css-complete-guide/)

For buttons, we commonly set the line-height to the height of the button to center the text vertically within the button.

{% highlight less %}
.button {
  height: 30px;
  line-height: 30px;
}
{% endhighlight %}

---

## text-align

##### EXAMPLE VALUES: `center`, `left`

`text-align` is fairly straightforward. It aligns text. `text-align: center;` should mostly only be used for text that does not wrap. Center-aligned text that wraps is more difficult to read.

---

## font-weight

##### EXAMPLE VALUES: `@normal`/`400`, `@semi-bold`/`600`, `@bold`/`700`

`font-weight` tells the browser which cut of the given font you want to deliver to the browser. The numbers shown above generally correspond directly to the named weights beside them, though some font makers use different systems. These are the only weights we support.

We've defined variables to make this easier:

{% highlight less %}
@normal: 400;
@semi-bold: 600;
@bold: 700;
{% endhighlight %}

---

## font-style

##### EXAMPLE VALUES: `normal`, `italic`

This attribute is basically used to set the text to italic. You only really need to set it to `normal` if you're overriding the `italic`.

---

## text-transform

##### EXAMPLE VALUES: `normal`, `uppercase`

`text-transform` will take the formatting of the given text and transform it to your defined value, most commonly to make something uppercase.

Uppercase text can be difficult to read, though, so we often pair this with `font-weight` and `letter-spacing` to help with that, as seen below.

{% highlight html %}
<div class="name">Shaun Fox</div>
{% endhighlight %}

{% highlight less %}
.name {
  text-transform: uppercase;
  font-weight: @semi-bold;
  letter-spacing: 1px;
}
{% endhighlight %}

---

## letter-spacing

##### EXAMPLE VALUES: `1px`, `1em`

This is typically paired with `text-transform` as demonstrated above. It should only ever be used on uppercase text. If used with lowercase text, readability is sacrificed.

---

## text-decoration

##### EXAMPLE VALUES: `none`, `underline`

`text-decoration` is most often used to override the default browser styling of anchor tags. Frequently we'll set the anchor to `text-decoration: none`, which removes the underline, but we'll give it other attributes that help define it as a link. For example:

{% highlight less %}
.link {
  text-decoration: none;
  color: $blue;

  &:hover {
  	border-bottom: 1px solid $blue;
  }
}
{% endhighlight %}

---

## white-space

##### EXAMPLE VALUES: `nowrap`

We primarily use `white-space: nowrap` to force text to be one line, without wrapping. Most often used in conjunction with CSS truncation.