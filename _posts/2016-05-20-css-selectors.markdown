---
layout: post
title:  "CSS Selectors"
date:   2016-05-20
categories: CSS
---

CSS selectors apply styling to all elements that match the given criteria.

In CSS, specificity and order matters. The most specific match will always apply it's styles, and if there's a tie, the last in the source-order will win.

## .class

This is the most common way to attach styling to an element. Creating a good system for your class name scheme will help avoid collisions and provide clarity for everyone on the project.

---

## Element

This selector will affect all matching elements. For example, the css selector `div` will affect all `<div>` elements.

---

## Attribute selectors

Sometimes it might be necessary to select elements based on their attributes if a class selector is not appropriate. Here are the most common use cases that we run into.

### input[type="text"]

This is used to target all inputs with their type attributes set to "text".

### data-

HTML allows custom attributes beginning with `data-`. One example of where you could use this would be for a custom tooltip where you set `data-tooltip` to be the content. Beware that this technique is not the best for accessibility or internationalization.

### [class="ico-*"]

This is a special selector that will allow you to target classes that are prefixed or suffixed with a set naming scheme. The [Fox Icons](http://shaunfox.com/work/fox-icons.html) are a good example of this.

---

## Combining Selectors

Now that you know about the two basic selectors, there are various ways we can combine selectors to be more specific, or be more efficient.

### selector, selector

To keep your code DRY, you can list selectors that will share the same attributes. You do this by putting all selectors in a comma separated list.

### .class-1.class-2

For an element that has multiple classes, the selector can be written: `.class-1.class-2`. It's important to note that this selector is more specific then either classes on their own. If you use a property that has been defined on either of the individual classes, this new selector will override it. If there are properties that are unique to any of the selectors, that property will not be overridden. The determination of how these rules are applied is called "cascading".

### selector selector

Adding a space between selectors targets the first selector's children, who match the second selector.

##### Example:

{% highlight html %}
<div class="class-1" id="div-1">
  <div class="class-2" id="div-2"></div>
  <div class="class-2" id="div-3"></div>
</div>
<div class="class-2" id="div-4"></div>
{% endhighlight %}

{% highlight scss %}
.class-1 {
  background: red;
}

.class-2 {
  background: blue;
}

.class-1 .class-2{
  background: green;
}
{% endhighlight %}

In this example, div-1 will be red. div-2 and div-3 will be green. div-4 will be blue.

### selector > selector

This rule is similar to `selector selector`, except it only selects the direct descendents, but will not go any further down the hierarchy.

---

## SCSS

This section will cover selectors in SCSS. To read more about SCSS in gerneral, see the [SCSS Primer](#scss-primer).

### nesting

In SCSS, you can nest selectors to logically scope rules, but this should be used cautiosly to avoid making too many overly-specific selectors when they're compiled.

##### Nesting Example:

{% highlight scss %}
.box {
  background: red;

  .header {
    background: blue;
  }
}
{% endhighlight %}

##### Compiled:

{% highlight css %}
.box {
  background: red;
}

.box .header {
  background: blue;
}
{% endhighlight %}

### &

As you can see from the previous example, nesting introduces a space between the two rules. Often, though, you'll want to have no space between selectors. To achieve this, add an `&` before the nested selector.

##### Ampersand Example:

{% highlight scss %}
.box {
  background: red;

  &.blue {
    background: blue;
  }
}
{% endhighlight %}

##### Compiled:

{% highlight css %}
.box {
  background: red;
}

.box.blue {
  background: blue;
}
{% endhighlight %}

---

## browser prefixes

Due to the rapidly evolving state of the web, some browsers implement features faster than others. Usually when a feature is implememnted before it makes it into the official CSS specification, browsers will allow a prefixed version of the property. The most common prefixes are: `-webkit`, `-ms`, `-moz`, `-o`. This can be a hge hastle to maintain. We highly recommend using an auto-prefixer to solve this issue. Google it.

---

## @media Queries

In the new era of Responsive Web Design, things on the web should be built to work on a variety of screen sizes. The first tactic to accomplish this is to use percentage-based dimensions. Where the layout needs to adjust or elements need to change size, you should use @media Queries to introduce new styling.

##### Example:

{% highlight scss %}
.box {
  // in a grid, two across
  display: inline-block;
  width: 50%;

  @media (max-width: 600px) {
    // at 600px or less, it becomes a list
    display: block;
    width: 100%;
  }
}
{% endhighlight %}

---

## Do not do this

### Selecting IDs

IDs, when used properly, are unique and only used once. Targetting IDs, therefore, is inefficient and does not promote DRY code.

### Lots of nesting in SCSS

Too much nesting in SCSS creates overly specific selectors, leading to poor performance and not reusable code.

### !important

When CSS gets overly specific, it may be tempting to use `!important` to get overrides to work, but DON'T DO IT. Use better selectors.

### Selecting `*`

`*` will select EVERYTHING. We only use it once, to define the box-model. In general, there are not many other reasons to select all and it can become very computationally intensive.