---
layout: post
title:  "CSS Primer"
date:   2016-05-11
categories: CSS
---

<div class="table">
	<header class="row header">
		<div>Name</div>
		<div>Description</div>
		<div>Common Values</div>
	</header>
	<div class="row">
		<div><a href="#css-selectors" data-id="css-display">CSS Selectors</a></div>
		<div></div>
		<div><code>.class</code>, <code>block</code>, <code>inline-block</code>, <code>table</code>, <code>none</code></div>
	</div>
	<div class="row">
		<div><a href="#css-display" data-id="css-display">CSS Display</a></div>
		<div>"Every element on a web page is a rectangular box. The display property in CSS determines just how that rectangular box behaves." &mdash;CSS Tricks</div>
		<div><code>inline</code>, <code>block</code>, <code>inline-block</code>, <code>table</code>, <code>none</code></div>
	</div>
	<div class="row">
		<div><a href="#css-background" data-id="css-background">CSS Background</a></div>
		<div></div>
		<div><code>background</code>, <code>background-color</code>, <code>background-image</code>, <code>background-position</code>, <code>background-repeat</code>, <code>background-size</code></div>
	</div>
	<div class="row">
		<div><a href="#css-layout" data-id="css-layout">CSS Layout</a></div>
		<div></div>
		<div><code>position</code>, <code>z-index</code>, <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>, <code>float</code>, <code>clear</code>, <code>vertical-align</code>, <code>transform</code></div>
	</div>
	<div class="row">
		<div><a href="#css-box-model" data-id="css-box-model">CSS Box Model</a></div>
		<div>The Box-model is the basis for the strucure of elements on the web. Things like width, height, padding, margin, and border all play into an element's structure.</div>
		<div><code>width</code>, <code>height</code>, <code>padding</code>, <code>margin</code>, <code>border</code>, <code>box-sizing</code></div>
	</div>
	<div class="row">
		<div><a href="#css-text-handling" data-id="css-text-handling">CSS Text Handling</a></div>
		<div>Everything about dealing with text.</div>
		<div><code>font-family</code>, <code>font-weight</code>, <code>font-size</code>, <code>font-style</code>, <code>line-height</code>, <code>letter-spacing</code>, <code>text-align</code>, <code>text-transform</code>, <code>text-decoration</code>, <code>color</code></div>
	</div>
	<div class="row">
		<div><a href="#css-pseudo-elements" data-id="css-pseudo-elements">CSS Pseudo Elements</a></div>
		<div></div>
		<div><code>:before</code>, <code>:after</code></div>
	</div>
	<div class="row">
		<div><a href="#css-pseudo-selectors" data-id="css-pseudo-selectors">CSS Pseudo Selectors</a></div>
		<div></div>
		<div><code>:hover</code>, <code>:active</code>, <code>:disabled</code>, <code>:first-child</code>, <code>:last-child</code>, <code>:nth-child</code></div>
	</div>
	<div class="row">
		<div><a href="#css-cursor" data-id="css-cursor">CSS Cursor</a></div>
		<div></div>
		<div><code>pointer</code>, <code>default</code></div>
	</div>
	<div class="row">
		<div><a href="#css-overflow" data-id="css-overflow">CSS Overflow</a></div>
		<div></div>
		<div><code>auto</code>, <code>scroll</code>, <code>hidden</code></div>
	</div>
	<div class="row">
		<div><a href="#css-opacity" data-id="css-opacity">CSS Opacity</a></div>
		<div></div>
		<div><code>1</code>, <code>0.8</code>, <code>0.2</code>, <code>0</code></div>
	</div>
	<div class="row">
		<div><a href="#css-box-shadow" data-id="css-box-shadow">CSS Box-Shadow</a></div>
		<div></div>
		<div></div>
	</div>
</div>

## How to Center Things

Centering things in CSS can be one of the most challenging parts of understanding CSS. CSS Tricks has a good roundup of the usual methods for centering just about anything:

[Centering in CSS: A Complete Guide, by CSS Tricks](https://css-tricks.com/centering-css-complete-guide/)

Here's also an example of how to center using "table" styling (used for very specific situations): <http://codepen.io/shaunrfox/pen/ZYMzpL/>