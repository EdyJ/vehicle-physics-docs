# Welcome to MkDocs

For full documentation visit [mkdocs.org](https://mkdocs.org).

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs help` - Print this help message.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.

### Fenced code

```
public float GetMaxPowerTorque (float rpm)
	{
	float engineTorque;

	if (rpm < parameters.idleRpm)
		{
		engineTorque = CommonTools.CubicLerp(
			0.0f, GetFrictionTorque(0), parameters.idleRpm,
			GetFrictionTorque(parameters.idleRpm) + parameters.idleRpmTorque,
			rpm);
		}
	}
```

### Tables

Standard table:

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

With surrounding borders:

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

***

Absolutely minimum tables:

head 1 	| 	head 2
-		|	-
a		|	b

|head 1|
|-|
|a|

### Alerts

&fa-thumbs-o-up; **Testing Bootstrap CSS** Pretty nice out of the box...
{: .alert .alert-success }

** &fa-warning; Now** with a [link](#){: .alert-link } matching the alert style.
{: .alert .alert-warning }

### Admonitions

!!! warning "&fa-warning; optional explicit title within <del>single</del> double quotes"
    Any number of other indented markdown elements.

    This is the second paragraph.

	- This is a list with several items
	- Everything inside the admonition
	- And with proper spacing

!!! info "&fa-info-circle; Hey! [Link](#)"
    You should note that the title might be automatically capitalized.

### Text effects

<del>Strikethrough text.</del>

<u>Underline</u>

Use <kbd>alt</kbd><kbd>f4</kbd> to enter God mode. <kbd>Ctrl</kbd><kbd>q</kbd> to quit.

### Math

The *Gamma function* satisfying $\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$ is via the Euler integral

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

> **Tip:** To make sure mathematical expressions are rendered properly on your website, include **MathJax** into your template:

```
<script type="text/javascript" src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML">
</script>
```

## Responsive vector graphics

Uses a custom build of Fabric.js that includes Text and Shadow modules.

<canvas id="c" class="img-responsive" width="500px" height="300px">
</canvas>
<script type="text/javascript">
	var drawCanvas = function ()
	{
		var canvas = new fabric.StaticCanvas('c');
		$('#c').css("height", "auto");

		canvas.add(
			new fabric.Rect({ top: 0, left: 0, width: 100, height: 100, fill: '#f55' }),
			new fabric.Circle({ top: 0, left: 450, radius: 50, fill: 'green' }),
			new fabric.Triangle({ top: 200, left: 200, width: 100, height: 100, fill: 'yellow' })
		);

	}

	if (window.addEventListener) window.addEventListener('load', drawCanvas, false);
	else if (window.attachEvent) window.attachEvent('onload', drawCanvas);
</script>

And now our own texturecanvas.js helper using Fabric.js internally:

<canvas id="fig1" class="img-responsive" width="300px" height="250px">
</canvas>
<script type="text/javascript">
	var drawCanvas = function ()
		{
		var canvas = new texturecanvas(
			{
			canvasId: 'fig1',
			width: 18,
			height: 14,
			fill: '#AAA',
			});


		canvas.Line([ 4, 3, 15, 3],
			{
			stroke: "#000",
			strokeWidth: 3,
			});

		canvas.Circle([9, 7, 0.25], { fill: 'green' });
		canvas.Rect([4, 3, 11, 1], { fill: "yellow" });
		canvas.Circle([4, 3, 0.25], { fill: 'blue' });
		canvas.Circle([15, 3, 0.25], { fill: 'cyan' });

		canvas.Rect([0, 0, 18, 14], { fill: "transparent", stroke: "magenta", strokeWidth: 3 });
		};

	if (window.addEventListener) window.addEventListener('load', drawCanvas, false);
	else if (window.attachEvent) window.attachEvent('onload', drawCanvas);
</script>


----

# Markdown NPP

## Test document

This document tests Markdown highlighting features.

Firstly, a single *italic* or **bold** or otherwise _emphasised_ word.
A run of *italic words together* or **bold words together** or an _emphasised passage_ should work too.

Emphasis can be used in the middle of a word:

un*frigging*believable  oh_my_god

Markdown allows you to use backslash escapes to generate literal characters which would otherwise have special meaning in Markdown’s formatting syntax. For example, if you wanted to surround a word with literal asterisks (instead of an HTML `<em>` tag), you can use backslashes before the asterisks, like this:

\*literal asterisks\*

----

A single word of `inline` code or longer `inline code` phrase.
To include a literal backtick character within a code span,
you can use multiple backticks as the opening and closing delimiters:

``There is a literal backtick (`) here.``

----

A block of code follows:

	int myThing()
	{
		return 2 + 2;
	}

----

Consecutive blockquotes "\>" are grouped as paragrahps in a single blockquote:

> This is a blockquote. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit.

> This is another blockquote, which is separated in the source md file. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit.


> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.

Blockquotes can contain other Markdown elements, including headers, lists, and code blocks:

> ## This is a header.
>
> 1.   This is the first list item.
> 2.   This is the second list item.
>
> Here's some example code:
>
>     return shell_exec("echo $input | $markdown_script");

----

Here are bullet points represented all the different valid ways:

* First point
+ Second point
- Third point

Same bullet points with more space between bullets:

* First point

+ Second point

- Third point

Now some longer bullet points:

- 	A point which is a bit longer and
	drops down onto another line.

	In fact it even has another paragraph, which is fine.

-	Another point in the same format as the third

Here is a numbered list:

1. Write code
2. Test code
3. Drink coffee

	3.1 Eat a biscuit

----

This text will catch any formatting which has overflowed from a delimiter.