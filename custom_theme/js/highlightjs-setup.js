
// EDY: Configure HighlightJS for detecting two languages only:
//
// - cs (all code in the website)
// - shell (Setting up VPP section)
//
// How to disabling a highligh in a block, or forcing it to use a custom language:
//
//		<pre><code class="nohighlight">Welcome to Repository Hosting's Git Server. You have been successfully authenticated.
//		However you cannot connect directly with SSH, you must use the 'git' command.</code></pre>
//
// Ensure to remove any blank line with the previous paragraph, especially if the pre block is
// indented or part of a list of elements.

// HighlightJS configuration options:
// https://highlightjs.readthedocs.io/en/latest/api.html#configure-options
// Language names and aliases:
// https://highlightjs.readthedocs.io/en/latest/css-classes-reference.html#language-names-and-aliases

// Final note: using a custom highlight solution is documented here:
// https://github.com/mkdocs/mkdocs/issues/467#issuecomment-402824455
// But codehilite is not better than HighlightJS and causes other issues.


hljs.configure({languages: [ 'cs', 'shell' ]});