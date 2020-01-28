# vehicle-physics-docs

Sources for the documentation at [Vehicle Physics Pro](http://vehiclephysics.com). This repository
contains the sources for the documentation site only.

Follow [@VehiclePhysics](https://twitter.com/VehiclePhysics) for latest news and updates on the
project.

## Contributing

Feedback, improvements and corrections to the docs are welcome, specially typo and grammar fixes.
Feel free to submit your contributions via comments and/or pull requests.

Documents are plain markdown files. You don't need any special procedure for editing, just a text
editor. Previewing the HTML result requires building the docs.

## Building & previewing the docs

This is optional. Documentation sources are plain text files using the Markdown format.

The HTML documentation is built out of the md files using [MkDocs](http://www.mkdocs.org):

1. Ensure Python and pip are installed
2. Install MkDocs: `pip install mkdocs`
3. Install the Bootswatch themes: `pip install mkdocs-bootswatch`
3. Install the Markdown extensions [markdown-icons](https://github.com/MadLittleMods/markdown-icons)
	and [mathjax](https://github.com/mayoff/python-markdown-mathjax).
4. Clone the repository from GitHub
5. Open a console at the repository folder, they type `mkdocs serve`
6. Navigate to `http://127.0.0.1:8000` in your browser

Now the documentation should appear in your browser and get lively updated when the doc files
change.