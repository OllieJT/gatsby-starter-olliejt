import React from "react"
import Container from "../Page/Container"
import Blockquote from "../Widget/Quote"
import { Input, Option, Dropdown } from "../Form"

const Demo = () => (
	<main role="main">
		<Container hidden restrict as="section" anchor="text">
			<header>
				<h1>Text</h1>
			</header>
			<article id="text__headings">
				<header>
					<h1>Headings</h1>
				</header>
				<div>
					<h1>Heading 1</h1>
					<h2>Heading 2</h2>
					<h3>Heading 3</h3>
					<h4>Heading 4</h4>
					<h5>Heading 5</h5>
					<h6>Heading 6</h6>
				</div>
				<footer>
					<p>
						<a href="#top">[Top]</a>
					</p>
				</footer>
			</article>
			<article id="text__paragraphs">
				<header>
					<h1>Paragraphs</h1>
				</header>
				<div>
					<p>
						A paragraph (from the Greek paragraphos, “to write beside” or “written beside”) is a
						self-contained unit of a discourse in writing dealing with a particular point or idea. A
						paragraph consists of one or more sentences. Though not required by the syntax of any language,
						paragraphs are usually an expected part of formal writing, used to organize longer prose.
					</p>
				</div>
				<footer>
					<p>
						<a href="#top">[Top]</a>
					</p>
				</footer>
			</article>
			<article id="text__blockquotes">
				<header>
					<h1>Blockquotes</h1>
				</header>
				<div>
					<Blockquote citeText="Said no one, ever." citeUrl={"."}>
						<p>
							A block quotation (also known as a long quotation or extract) is a quotation in a written
							document, that is set off from the main text as a paragraph, or block of text.
						</p>
						<p>
							It is typically distinguished visually using indentation and a different typeface or smaller
							size quotation. It may or may not include a citation, usually placed at the bottom.
						</p>
					</Blockquote>
				</div>
				<footer>
					<p>
						<a href="#top">[Top]</a>
					</p>
				</footer>
			</article>
			<article id="text__lists">
				<header>
					<h1>Lists</h1>
				</header>
				<div>
					<h3>Definition list</h3>
					<dl>
						<dt>Definition List Title</dt>
						<dd>This is a definition list division.</dd>
					</dl>
					<h3>Ordered List</h3>
					<ol>
						<li>List Item 1</li>
						<li>List Item 2</li>
						<li>List Item 3</li>
					</ol>
					<h3>Unordered List</h3>
					<ul>
						<li>List Item 1</li>
						<li>List Item 2</li>
						<li>List Item 3</li>
					</ul>
				</div>
				<footer>
					<p>
						<a href="#top">[Top]</a>
					</p>
				</footer>
			</article>
			<article id="text__hr">
				<header>
					<h1>Horizontal rules</h1>
				</header>
				<div>
					<hr />
				</div>
				<footer>
					<p>
						<a href="#top">[Top]</a>
					</p>
				</footer>
			</article>
			<article id="text__tables">
				<header>
					<h1>Tabular data</h1>
				</header>
				<table>
					<caption>Table Caption</caption>
					<thead>
						<tr>
							<th>Table Heading 1</th>
							<th>Table Heading 2</th>
							<th>Table Heading 3</th>
							<th>Table Heading 4</th>
							<th>Table Heading 5</th>
						</tr>
					</thead>
					<tfoot>
						<tr>
							<th>Table Footer 1</th>
							<th>Table Footer 2</th>
							<th>Table Footer 3</th>
							<th>Table Footer 4</th>
							<th>Table Footer 5</th>
						</tr>
					</tfoot>
					<tbody>
						<tr>
							<td>Table Cell 1</td>
							<td>Table Cell 2</td>
							<td>Table Cell 3</td>
							<td>Table Cell 4</td>
							<td>Table Cell 5</td>
						</tr>
						<tr>
							<td>Table Cell 1</td>
							<td>Table Cell 2</td>
							<td>Table Cell 3</td>
							<td>Table Cell 4</td>
							<td>Table Cell 5</td>
						</tr>
						<tr>
							<td>Table Cell 1</td>
							<td>Table Cell 2</td>
							<td>Table Cell 3</td>
							<td>Table Cell 4</td>
							<td>Table Cell 5</td>
						</tr>
						<tr>
							<td>Table Cell 1</td>
							<td>Table Cell 2</td>
							<td>Table Cell 3</td>
							<td>Table Cell 4</td>
							<td>Table Cell 5</td>
						</tr>
					</tbody>
				</table>
				<footer>
					<p>
						<a href="#top">[Top]</a>
					</p>
				</footer>
			</article>
			<article id="text__code">
				<header>
					<h1>Code</h1>
				</header>
				<div>
					<p>
						<strong>Keyboard input:</strong> <kbd>Cmd</kbd>
					</p>
					<p>
						<strong>Inline code:</strong> <code>&lt;div&gt;code&lt;/div&gt;</code>
					</p>
					<p>
						<strong>Sample output:</strong> <samp>This is sample output from a computer program.</samp>
					</p>
					<h2>Pre-formatted text</h2>
					<pre>
						P R E F O R M A T T E D T E X T ! " # $ % &amp; ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; &lt; =
						&gt; ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \ ] ^ _ ` a b c d e f g h i j k l
						m n o p q r s t u v w x y z | ~{" "}
					</pre>
				</div>
				<footer>
					<p>
						<a href="#top">[Top]</a>
					</p>
				</footer>
			</article>
			<article id="text__inline">
				<header>
					<h1>Inline elements</h1>
				</header>
				<div>
					<p>
						<a href="#!">This is a text link</a>.
					</p>
					<p>
						<strong>Strong is used to indicate strong importance.</strong>
					</p>
					<p>
						<em>This text has added emphasis.</em>
					</p>
					<p>
						The <b>b element</b> is stylistically different text from normal text, without any special
						importance.
					</p>
					<p>
						The <i>i element</i> is text that is offset from the normal text.
					</p>
					<p>
						The <u>u element</u> is text with an unarticulated, though explicitly rendered, non-textual
						annotation.
					</p>
					<p>
						<del>This text is deleted</del> and <ins>This text is inserted</ins>.
					</p>
					<p>
						<s>This text has a strikethrough</s>.
					</p>
					<p>
						Superscript<sup>®</sup>.
					</p>
					<p>
						Subscript for things like H<sub>2</sub>O.
					</p>
					<p>
						<small>This small text is small for for fine print, etc.</small>
					</p>
					<p>
						Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr>
					</p>
					<p>
						<q cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q">
							This text is a short inline quotation.
						</q>
					</p>
					<p>
						<cite>This is a citation.</cite>
					</p>
					<p>
						The <dfn>dfn element</dfn> indicates a definition.
					</p>
					<p>
						The <mark>mark element</mark> indicates a highlight.
					</p>
					<p>
						The <var>variable element</var>, such as <var>x</var> = <var>y</var>.
					</p>
					<p>
						The time element: <time dateTime="2013-04-06T12:32+00:00">2 weeks ago</time>
					</p>
				</div>
				<footer>
					<p>
						<a href="#top">[Top]</a>
					</p>
				</footer>
			</article>
		</Container>

		<Container restrict as="section" anchor="embedded">
			<header>
				<h1>Embedded content</h1>
			</header>
			<article id="embedded__images">
				<header>
					<h2>Images</h2>
				</header>
				<div>
					<h3>
						No <code>&lt;figure&gt;</code> element
					</h3>
					<p>
						<img src="http://placekitten.com/480/480" alt="Description of this visual thing" />
					</p>
					<h3>
						Wrapped in a <code>&lt;figure&gt;</code> element, no <code>&lt;figcaption&gt;</code>
					</h3>
					<figure>
						<img src="http://placekitten.com/420/420" alt="Description of this visual thing" />
					</figure>
					<h3>
						Wrapped in a <code>&lt;figure&gt;</code> element, with a <code>&lt;figcaption&gt;</code>
					</h3>
					<figure>
						<img src="http://placekitten.com/420/420" alt="Description of this visual thing" />
						<figcaption>Here is a caption for this image.</figcaption>
					</figure>
				</div>
				<footer>
					<p>
						<a href="#top">[Top]</a>
					</p>
				</footer>
			</article>
			<article id="embedded__meter">
				<header>
					<h2>Meter</h2>
				</header>
				<div>
					<meter defaultValue="2" min="0" max="10">
						2 out of 10
					</meter>
				</div>
				<footer>
					<p>
						<a href="#top">[Top]</a>
					</p>
				</footer>
			</article>
			<article id="embedded__progress">
				<header>
					<h2>Progress</h2>
				</header>
				<div>
					<progress>progress</progress>
				</div>
				<footer>
					<p>
						<a href="#top">[Top]</a>
					</p>
				</footer>
			</article>
			<article id="embedded__svg">
				<header>
					<h2>Inline SVG</h2>
				</header>
				<div>
					<svg width="100px" height="100px">
						<circle cx="100" cy="100" r="100" fill="#1fa3ec"></circle>
					</svg>
				</div>
				<footer>
					<p>
						<a href="#top">[Top]</a>
					</p>
				</footer>
			</article>
		</Container>

		<Container restrict as="section" anchor="forms">
			<header>
				<h1>Form elements</h1>
			</header>
			<form>
				<fieldset id="forms__input" hidden>
					<legend>Input fields</legend>
					<Input label="Text Input" type="text" />
					<Input label="Password" type="password" placeholder="Type your Password" />
					<Input label="Web Address" type="url" placeholder="http://yoursite.com" />
					<Input label="Address" type="email" placeholder="name@email.com" />
					<Input label="Phone Number" type="tel" placeholder="(999) 999-9999" />
					<Input label="Search" type="search" placeholder="Enter Search Term" />
					<Input label="Number Input" type="number" placeholder="Enter a Number" />
					<Input label="Error Example" type="text" placeholder="Invalid Text Input" valid={false} />
					<Input label="Valid Example" type="text" placeholder="Valid Text Input" valid={true} />
				</fieldset>
				<p>
					<a href="#top">[Top]</a>
				</p>
				<fieldset id="forms__select" hidden>
					<legend>Select menus</legend>
					<Dropdown
						label="Select"
						placeholder="Select an option..."
						options={["Option A", "Option B", "Option C"]}
					/>
				</fieldset>
				<p>
					<a href="#top">[Top]</a>
				</p>
				<fieldset id="forms__checkbox" hidden>
					<legend>Checkboxes</legend>
					<ul>
						<li>
							<Option group="checkboxes" type="checkbox" label="Choice A" />
						</li>
						<li>
							<Option group="checkboxes" type="checkbox" label="Choice B" />
						</li>
						<li>
							<Option group="checkboxes" type="checkbox" label="Choice C" />
						</li>
					</ul>
				</fieldset>
				<p>
					<a href="#top">[Top]</a>
				</p>
				<fieldset id="forms__radio" hidden>
					<legend>Radio buttons</legend>
					<ul>
						<li>
							<Option group="radios" type="radio" label="Option A" />
						</li>
						<li>
							<Option group="radios" type="radio" label="Option B" />
						</li>
						<li>
							<Option group="radios" type="radio" label="Option C" />
						</li>
					</ul>
				</fieldset>
				<p>
					<a href="#top">[Top]</a>
				</p>
				<fieldset id="forms__textareas" hidden>
					<legend>Textareas</legend>
					<Input label="Textarea" type="textarea" placeholder="Enter your message here" />
				</fieldset>
				<p>
					<a href="#top">[Top]</a>
				</p>
				<fieldset id="forms__html5" hidden>
					<legend>HTML5 inputs</legend>
					<Input label="Color input" type="color" placeholder="#123456" />
					<Input label="Number input" type="number" placeholder="5" options={{ min: 0, max: 10 }} />
					<Input label="Range input" type="range" placeholder="10" />
					<Input label="Date input" type="date" placeholder="1990-01-01" />
					<Input label="Month input" type="month" placeholder="1970-01" />
					<Input label="Week input" type="week" placeholder="1970-W01" />
					<Input label="Date  & Time input" type="datetime" placeholder="1970-01-01T00:00:00Z" />
					<Input label="Date & Time local input" type="datetime-local" placeholder="1970-01-01T00:00" />
					<Input label="Color input" type="color" placeholder="123456" />
				</fieldset>
				<p>
					<a href="#top">[Top]</a>
				</p>
				<fieldset id="forms__action">
					<legend>Action buttons</legend>
					<p>
						<input type="submit" defaultValue="<input type=submit>" />
						<input type="button" defaultValue="<input type=button>" />
						<input type="reset" defaultValue="<input type=reset>" />
						<input type="submit" defaultValue="<input disabled>" disabled />
					</p>
				</fieldset>
				<p>
					<a href="#top">[Top]</a>
				</p>
			</form>
		</Container>
	</main>
)

export default Demo

// DISABLED
/*


          <article id="embedded__iframe" hidden>
            <header><h2>IFrame</h2></header>
            <div><iframe title="Example embedded site" src="index.html" height="300"></iframe></div>
            <footer><p><a href="#top">[Top]</a></p></footer>
          </article>
          <article id="embedded__audio" hidden>
            <header><h2>Audio</h2></header>
            <div><audio controls="">audio</audio></div>
            <footer><p><a href="#top">[Top]</a></p></footer>
          </article>
          <article id="embedded__video" hidden>
            <header><h2>Video</h2></header>
            <div><video controls="">video</video></div>
            <footer><p><a href="#top">[Top]</a></p></footer>
          </article>
          <article id="embedded__canvas" hidden>
            <header><h2>Canvas</h2></header>
            <div><canvas>canvas</canvas></div>
            <footer><p><a href="#top">[Top]</a></p></footer>
          </article>

*/
