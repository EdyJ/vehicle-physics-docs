"""
IconFonts Extension for Python-Markdown
========================================

Version: 2.1

Description:
	Use this extension to display icon font icons in python markdown. Just add the css necessary for your font and add this extension.

Features:
	- Support FontAwesome or Bootstrap 3/Glyphicons or both at the same time!
	- Allow users to specify additional modifiers, like 'fa-2x' from FontAwesome
	- Force users to use pre-defined classes to style their icons instead of
		allowing them to specify styles themselves
	- Allow users to specify additional classes, like 'red'

Syntax:
	- Accepts a-z, A-Z, 0-9, _ (underscore), and - (hypen)
	- Uses HTML Entity like syntax

	&icon-html5;
	&icon-css3;
	&icon-my-icon;

	&icon-html5:2x;
	&icon-quote:3x,muted;
	&icon-spinner:large,spin;


Example Markdown:
	I love &icon-html5; and &icon-css3;
	&icon-spinner:large,spin; Sorry we have to load...
	&icon-spinner:large,spin:red; Sorry we have to load...

Output:
	I love <i aria-hidden="true" class="icon-html5"></i> and <i aria-hidden="true" class="icon-css3"></i>
	<i aria-hidden="true" class="icon-spinner icon-large icon-spin"></i> Sorry we have to load...
	<i aria-hidden="true" class="icon-spinner icon-large icon-spin red"></i> Sorry we have to load...


Installation:
	Just drop it in the extensions folder of the markdown package. (markdown/extensions).
	Also check out: https://pythonhosted.org/Markdown/extensions/index.html

Usage/Setup:
	Default Prefix is "icon-":
		In a Django Template:
			{{ textmd|markdown:"safe,iconfonts" }}

		In Python:
			>>> text = '&icon-html5;'
			>>> md = markdown.Markdown(extensions=['iconfonts'])
			>>> converted_text = md.convert(text)
			'<i aria-hidden="true" class="icon-html5"></i>'


	Use a custom Prefix:
		In a Django Template:
			{{ textmd|markdown:"safe,iconfonts(prefix=mypref-)" }}

		In Python:
			>>> text = '&mypref-html5;'
			>>> md = markdown.Markdown(extensions=['iconfonts(prefix=mypref-)'])
			>>> converted_text = md.convert(text)
			'<i aria-hidden="true" class="mypref-html5"></i>'


	Use no prefix (just in case you couldn't figure it out :P):
		In a Django Template:
			{{ textmd|markdown:"safe,iconfonts(prefix=)" }}

		In Python:
			>>> text = '&html5;'
			>>> md = markdown.Markdown(extensions=['iconfonts(prefix=)'])
			>>> converted_text = md.convert(text)
			'<i aria-hidden="true" class="html5"></i>'

	Use the base option which allows for Bootstrap 3 and FontAwesome 4:
		In Python:
			>>> text = '&fa-html5;'
			>>> md = markdown.Markdown(extensions=['iconfonts(prefix=fa-, base=fa)'])
			>>> converted_text = md.convert(text)
			'<i aria-hidden="true" class="fa icon-html5"></i>'

			>>> text = '&glyphicon-remove;'
			>>> md = markdown.Markdown(extensions=['iconfonts(prefix=glyphicon-, base=glyphicon)'])
			>>> converted_text = md.convert(text)
			'<i aria-hidden="true" class="glyphicon glyphicon-remove"></i>'

	Or support both Bootstrap 3/Glyphicons and FontAwesome 4 at the same time:
		In Python:
			>>> text = '&fa-html5; &glyphicon-remove;''
			>>> md = markdown.Markdown(extensions=['iconfonts'],
			>>>                        extension_configs={
			>>>                            'fa': 'fa',
			>>>                            'glyphicon': 'glyphicon',
			>>>                        })
			>>> converted_text = md.convert(text)
			'<i aria-hidden="true" class="fa fa-html5"></i>'
			'<i aria-hidden="true" class="glyphicon glyphicon-remove"></i>'


Copyright 2014 [Eric Eastwood](http://ericeastwood.com/)

Use it in any personal or commercial project you want.
"""

import markdown
import re


class IconFontsExtension(markdown.Extension):
	""" IconFonts Extension for Python-Markdown. """

	def __init__(self, *args, **kwargs):

		# define default configs
		self.config = {
			'prefix': ['icon-', "Custom class prefix."],
			'base': ['', "Base class added to each icon"],
			'prefix_base_pairs': [{}, "Prefix/base pairs"],
		}

		# Override defaults with user settings
		# This is legacy code for versions older than 2.5.1.
		if len(args):
			for key, value in args[0]:
				# convert strings to booleans
				if value == 'True':
					value = True
				if value == 'False':
					value = False
				if value == 'None':
					value = None

				self.setConfig(key, value)

		# Override defaults with user settings
		# This is not legacy code but is used instead of the super call below because we have to support the legacy version
		if hasattr(self, 'setConfigs'):
			self.setConfigs(kwargs)

		# We can use this instead of the legacy for loop to set the config above
		#super(IconFontsExtension, self).__init__(*args, **kwargs)

	def add_inline(self, md, name, klass, re, config):
		pattern = klass(re, md, config)
		md.inlinePatterns.add(name, pattern, "<reference")

	def extendMarkdown(self, md, md_globals):
		config = self.getConfigs()
		#print("config" + str(config))

		# Change prefix to what they had the in the config
		# Capture "&icon-namehere;" or "&icon-namehere:2x;" or "&icon-namehere:2x,muted;"
		# https://www.debuggex.com/r/weK9ehGY0HG6uKrg
		prefix = config['prefix']
		icon_regex_start = r'&'
		icon_regex_end = r'(?P<name>[a-zA-Z0-9-]+)(:(?P<mod>[a-zA-Z0-9-]+(,[a-zA-Z0-9-]+)*)?(:(?P<user_mod>[a-zA-Z0-9-]+(,[a-zA-Z0-9-]+)*)?)?)?;'
		#                  ^---------------------^^ ^                    ^--------------^ ^ ^ ^                         ^--------------^ ^ ^ ^
		#                                         | +-------------------------------------+ | +------------------------------------------+ | |
		#                                         |                                         +----------------------------------------------+ |
		#                                         +------------------------------------------------------------------------------------------+
		# This is the full regex we use. Only reason we have pieces above is to easily change the prefix to something custom
		icon_regex = ''.join([icon_regex_start, prefix, icon_regex_end])

		# Register the global one
		self.add_inline(md, 'iconfonts', IconFontsPattern, icon_regex, config)

		# Register each of the pairings
		for _prefix, _base in config['prefix_base_pairs'].items():

			_prefix_base = _prefix if _prefix[-1] != '-' else _prefix[:-1]

			icon_regex = ''.join([icon_regex_start, _prefix, icon_regex_end])

			self.add_inline(
				md, 'iconfonts_{}'.format(_prefix_base),
				IconFontsPattern, icon_regex,
				{'prefix': _prefix, 'base': _base})


class IconFontsPattern(markdown.inlinepatterns.Pattern):
	def __init__(self, pattern, md, config):
		# Pass the patterna and markdown instance
		super(IconFontsPattern, self).__init__(pattern, md)

		self.config = config

	""" Return a <i> element with the necessary classes"""
	def handleMatch(self, match):

		# The dictionary keys come from named capture groups in the regex
		match_dict = match.groupdict()

		# Create the <i> element
		el = markdown.util.etree.Element("i")

		base = self.config['base']
		prefix = self.config['prefix']

		icon_class_name = match_dict.get("name")

		# Mods are modifier classes. The syntax in the markdown is:
		# "&icon-namehere:2x;" and with multiple "&icon-spinner:2x,spin;"
		mod_classes_string = ""
		if match_dict.get("mod"):
			# Make a string with each modifier like: "fa-2x fa-spin"
			mod_classes_string = ' '.join('{}{}'.format(prefix, c) for c in match_dict.get("mod").split(",") if c)

		# User mods are modifier classes that shouldn't be prefixed with
		# prefix. The syntax in the markdown is:
		# "&icon-namehere::red;" and with multiple "&icon-spinner::red,bold;"
		user_mod_classes_string = ""
		if match_dict.get("user_mod"):
			# Make a string with each modifier like "red bold"
			user_mod_classes_string = ' '.join(uc for uc in match_dict.get("user_mod").split(",") if uc)

		if prefix != '':
			icon_class = '{}{}'.format(prefix, icon_class_name)
		else:
			icon_class = icon_class_name

		# Add the icon classes to the <i> element
		classes = '{} {} {} {}'.format(base, icon_class, mod_classes_string, user_mod_classes_string)

		# Clean up classes
		classes = classes.strip()
		classes = re.sub(r'\s{2,}', ' ', classes)

		el.set('class', classes)
		# This is for accessibility and text-to-speech browsers so they don't try to read it
		el.set('aria-hidden', 'true')
		return el


# http://pythonhosted.org/Markdown/extensions/api.html#makeextension
def makeExtension(*args, **kwargs):
	return IconFontsExtension(*args, **kwargs)
