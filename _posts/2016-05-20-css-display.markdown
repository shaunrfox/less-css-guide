---
layout: post
title:  "CSS Display"
date:   2016-05-20
categories: CSS
---

##### EXAMPLE VALUES: `inline`, `block`, `inline-block`, `table`, `none`

> "Every element on a web page is a rectangular box. The display property in CSS determines just how that rectangular box behaves." &mdash;CSS Tricks

<https://css-tricks.com/almanac/properties/d/display/>

---

## display: inline;

These elements are things that behave like text. They're primarily relative to a baseline and don't have much ability to affect the layout of other elements on the page.

While many elements' default state is inline, it's not something that we set as an override very often, since we're mostly wanting to deal with boxy things.

---

## display: block;

These elements are things like `<div>` and `<section>`. They will behave like rectangles and they're the building blocks of web layouts.

The default width for `block` elements is 100%, so they will stretch to the extent of their parent's width.

---

## display: inline-block;

This is kind of a mix of the two above. You can set some of the same "physical" characteristics of `block`, but the element is still relative to a baseline (of text, for instance).

The default width for `inline-block` elements is relative to the element's contents.

If you want to center an element using `inline-block`, you must set `text-align: center` on it's parent.

---

## display: table

This can be used to make regular block elements behave more like a table. For example, a parent element can be set to `display: table;` and it will have children set to `display: table-row;` and `display: table-cell;`. This can be especially helpful when you need to display tabular data but also need to support a responsive environment.

Try to limit use of `display: table` unless you're showing tabluar data.

---

## display: none

The easiest way to hide elements on the page.