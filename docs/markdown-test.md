# Welcome to MkDocs

For full documentation visit [mkdocs.org](http://mkdocs.org).

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

Absolutely minimum tables:

head 1 	| 	head 2
-		|	-
a		|	b

|head 1|
|-|
|a|

### Alerts

&fa-thumbs-o-up; **Testing Bootstrap CSS** La verdad que tampoco está mal...
{: .alert .alert-success }

** &fa-warning; Y ahora** usando un [Enlace](#){: .alert-link } que se supone coincide con el tipo de alert.
{: .alert .alert-warning }

### Admonitions

!!! warning "&fa-warning; optional explicit title within double quotes"
    Any number of other indented markdown elements.

    This is the second paragraph.

	- This is a list with several items
	- Everything inside the admonition
	- And with proper spacing

!!! info "&fa-info-circle; Hey!"
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
