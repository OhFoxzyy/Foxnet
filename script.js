const topics = {
    html: [
        { name: 'Introduction', link: 'html-introduction' },
        { name: 'Elements', link: 'html-elements' },
        { name: 'Attributes', link: 'html-attributes', subtopics: [
            { name: 'Global Attributes', link: 'html-global-attributes' },
            { name: 'Event Attributes', link: 'html-event-attributes' }
        ]},
        { name: 'Forms', link: 'html-forms' },
        { name: 'Tables', link: 'html-tables' },
        { name: 'Media', link: 'html-media', subtopics: [
            { name: 'Images', link: 'html-images' },
            { name: 'Audio and Video', link: 'html-audio-video' }
        ]},
        { name: 'Semantic HTML', link: 'html-semantic' },
        { name: 'Canvas', link: 'html-canvas' },
        { name: 'Links', link: 'html-links' },
        { name: 'Head Elements', link: 'html-head-elements', subtopics: [
            { name: 'Meta Tags', link: 'html-meta-tags' },
            { name: 'Link Tags', link: 'html-link-tags' }
        ]},
        { name: 'Lists', link: 'html-lists' },
        { name: 'Iframe', link: 'html-iframe' },
        { name: 'Input Types', link: 'html-input-types', subtopics: [
            { name: 'Text Input', link: 'html-text-input' },
            { name: 'Button Input', link: 'html-button-input' },
            { name: 'Other Input Types', link: 'html-other-input-types' }
        ]}
    ],
    css: [
        { name: 'Introduction', link: 'css-introduction' },
        { name: 'Selectors', link: 'css-selectors' },
        { name: 'Properties', link: 'css-properties', subtopics: [
            { name: 'Text Properties', link: 'css-text-properties' },
            { name: 'Box Model Properties', link: 'css-box-model-properties' }
        ]},
        { name: 'Flexbox', link: 'css-flexbox' },
        { name: 'Grid', link: 'css-grid' },
        { name: 'Advanced Selectors', link: 'css-advanced-selectors' },
        { name: 'Animations and Transitions', link: 'css-animations' },
        { name: 'Responsive Design', link: 'css-responsive-design' },
        { name: 'CSS Variables', link: 'css-variables' },
        { name: 'CSS Frameworks', link: 'css-frameworks' },
        { name: 'Positioning', link: 'css-positioning', subtopics: [
            { name: 'Static Positioning', link: 'css-static-positioning' },
            { name: 'Relative Positioning', link: 'css-relative-positioning' },
            { name: 'Absolute Positioning', link: 'css-absolute-positioning' }
        ]},
        { name: 'Media Queries', link: 'css-media-queries' },
        { name: 'Typography', link: 'css-typography', subtopics: [
            { name: 'Font Properties', link: 'css-font-properties' },
            { name: 'Text Alignment', link: 'css-text-alignment' },
            { name: 'Text Decoration', link: 'css-text-decoration' }
        ]},
        { name: 'Pseudo-elements', link: 'css-pseudo-elements' },
        { name: 'Layouts', link: 'css-layouts' }
    ],
    javascript: [
        { name: 'Introduction', link: 'javascript-introduction' },
        { name: 'Variables', link: 'javascript-variables' },
        { name: 'Functions', link: 'javascript-functions', subtopics: [
            { name: 'Function Expressions', link: 'javascript-function-expressions' },
            { name: 'Arrow Functions', link: 'javascript-arrow-functions' }
        ]},
        { name: 'Events', link: 'javascript-events' },
        { name: 'DOM Manipulation', link: 'javascript-dom' },
        { name: 'Arrays and Objects', link: 'javascript-arrays-objects' },
        { name: 'Error Handling', link: 'javascript-error-handling' },
        { name: 'Asynchronous JavaScript', link: 'javascript-async' },
        { name: 'ES Modules', link: 'javascript-modules' },
        { name: 'JSON', link: 'javascript-json' },
        { name: 'Promises', link: 'javascript-promises' },
        { name: 'Control Flow', link: 'javascript-control-flow', subtopics: [
            { name: 'If Statements', link: 'javascript-if-statements' },
            { name: 'Loops', link: 'javascript-loops' },
            { name: 'Switch Statements', link: 'javascript-switch-statements' }
        ]},
        { name: 'Classes', link: 'javascript-classes' },
        { name: 'Prototypes', link: 'javascript-prototypes', subtopics: [
            { name: 'Prototype Chain', link: 'javascript-prototype-chain' },
            { name: 'Inheritance', link: 'javascript-inheritance' }
        ]},
        { name: 'Event Loop', link: 'javascript-event-loop' },
        { name: 'Fetch API', link: 'javascript-fetch-api' }
    ]
};

const contentData = {
    'html-introduction': `
        <h2>HTML Introduction</h2>
        <p>HTML is the standard markup language for creating Web pages. HTML stands for Hyper Text Markup Language.</p>
        <pre><code class="language-markup">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;This is a Heading&lt;/h1&gt;
    &lt;p&gt;This is a paragraph.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>`,
    'html-elements': `
        <h2>HTML Elements</h2>
        <p>HTML elements are the building blocks of HTML pages. Elements are represented by tags.</p>
        <pre><code class="language-markup">&lt;h1&gt;This is a Heading&lt;/h1&gt;
&lt;p&gt;This is a paragraph.&lt;/p&gt;
&lt;a href="https://www.example.com"&gt;This is a link&lt;/a&gt;</code></pre>`,
    'html-attributes': `
        <h2>HTML Attributes</h2>
        <p>Attributes provide additional information about HTML elements.</p>
        <pre><code class="language-markup">&lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt;
&lt;img src="image.jpg" alt="An image"&gt;</code></pre>`,
    'html-global-attributes': `
        <h2>HTML Global Attributes</h2>
        <p>Global attributes can be applied to any HTML element.</p>
        <pre><code class="language-markup">&lt;div id="main" class="container" tabindex="1"&gt;Content&lt;/div&gt;</code></pre>`,
    'html-event-attributes': `
        <h2>HTML Event Attributes</h2>
        <p>Event attributes can be used to trigger actions in response to user interactions.</p>
        <pre><code class="language-markup">&lt;button onclick="alert('Hello!')"&gt;Click me&lt;/button&gt;</code></pre>`,
    'html-forms': `
        <h2>HTML Forms</h2>
        <p>Forms are used to collect user input.</p>
        <pre><code class="language-markup">&lt;form action="/submit" method="post"&gt;
    &lt;label for="name"&gt;Name:&lt;/label&gt;
    &lt;input type="text" id="name" name="name"&gt;&lt;br&gt;&lt;br&gt;
    &lt;input type="submit" value="Submit"&gt;
&lt;/form&gt;</code></pre>`,
    'html-tables': `
        <h2>HTML Tables</h2>
        <p>Tables are used to display data in a tabular format.</p>
        <pre><code class="language-markup">&lt;table&gt;
    &lt;tr&gt;
        &lt;th&gt;Name&lt;/th&gt;
        &lt;th&gt;Age&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;John&lt;/td&gt;
        &lt;td&gt;30&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Jane&lt;/td&gt;
        &lt;td&gt;25&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>`,
    'html-media': `
        <h2>HTML Media</h2>
        <p>HTML supports various media elements for embedding images, audio, and video.</p>
        <pre><code class="language-markup">&lt;img src="image.jpg" alt="An image"&gt;
&lt;audio controls&gt;
    &lt;source src="audio.mp3" type="audio/mpeg"&gt;
    Your browser does not support the audio element.
&lt;/audio&gt;
&lt;video controls&gt;
    &lt;source src="video.mp4" type="video/mp4"&gt;
    Your browser does not support the video element.
&lt;/video&gt;</code></pre>`,
    'html-images': `
        <h2>HTML Images</h2>
        <p>Images can be embedded using the &lt;img&gt; tag in HTML.</p>
        <pre><code class="language-markup">&lt;img src="image.jpg" alt="An image"&gt;</code></pre>`,
    'html-audio-video': `
        <h2>HTML Audio and Video</h2>
        <p>Audio and video can be embedded using the &lt;audio&gt; and &lt;video&gt; tags in HTML.</p>
        <pre><code class="language-markup">&lt;audio controls&gt;
    &lt;source src="audio.mp3" type="audio/mpeg"&gt;
    Your browser does not support the audio element.
&lt;/audio&gt;
&lt;video controls&gt;
    &lt;source src="video.mp4" type="video/mp4"&gt;
    Your browser does not support the video element.
&lt;/video&gt;</code></pre>`,
    'html-semantic': `
        <h2>Semantic HTML</h2>
        <p>Semantic HTML tags provide meaning to the content they wrap.</p>
        <pre><code class="language-markup">&lt;header&gt;, &lt;nav&gt;, &lt;section&gt;, &lt;article&gt;, &lt;footer&gt;, etc.</code></pre>`,
    'html-canvas': `
        <h2>HTML Canvas</h2>
        <p>The HTML &lt;canvas&gt; element is used to draw graphics, on the fly, via scripting (usually JavaScript).</p>
        <pre><code class="language-markup">&lt;canvas id="myCanvas" width="200" height="100"&gt;&lt;/canvas&gt;</code></pre>`,
    'html-links': `
        <h2>HTML Links</h2>
        <p>HTML links are defined with the &lt;a&gt; tag.</p>
        <pre><code class="language-markup">&lt;a href="https://www.example.com"&gt;This is a link&lt;/a&gt;</code></pre>`,
    'html-head-elements': `
        <h2>HTML Head Elements</h2>
        <p>The head element contains meta-information about the HTML document.</p>
        <pre><code class="language-markup">&lt;head&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="description" content="Free Web tutorials"&gt;
    &lt;meta name="keywords" content="HTML,CSS,JavaScript"&gt;
    &lt;meta name="author" content="John Doe"&gt;
&lt;/head&gt;</code></pre>`,
    'html-meta-tags': `
        <h2>HTML Meta Tags</h2>
        <p>Meta tags always go inside the head element, and they provide metadata about the HTML document.</p>
        <pre><code class="language-markup">&lt;meta charset="UTF-8"&gt;
&lt;meta name="description" content="Free Web tutorials"&gt;
&lt;meta name="keywords" content="HTML,CSS,JavaScript"&gt;
&lt;meta name="author" content="John Doe"&gt;</code></pre>`,
    'html-link-tags': `
        <h2>HTML Link Tags</h2>
        <p>The &lt;link&gt; tag defines a link between a document and an external resource.</p>
        <pre><code class="language-markup">&lt;link rel="stylesheet" href="styles.css"&gt;</code></pre>`,
    'html-lists': `
        <h2>HTML Lists</h2>
        <p>HTML lists can be ordered (numbered) or unordered (bulleted).</p>
        <pre><code class="language-markup">&lt;ul&gt;
    &lt;li&gt;Coffee&lt;/li&gt;
    &lt;li&gt;Tea&lt;/li&gt;
    &lt;li&gt;Milk&lt;/li&gt;
&lt;/ul&gt;

&lt;ol&gt;
    &lt;li&gt;Coffee&lt;/li&gt;
    &lt;li&gt;Tea&lt;/li&gt;
    &lt;li&gt;Milk&lt;/li&gt;
&lt;/ol&gt;</code></pre>`,
    'html-iframe': `
        <h2>HTML Iframe</h2>
        <p>An HTML iframe is used to display a web page within a web page.</p>
        <pre><code class="language-markup">&lt;iframe src="https://www.example.com" width="300" height="200"&gt;&lt;/iframe&gt;</code></pre>`,
    'html-input-types': `
        <h2>HTML Input Types</h2>
        <p>HTML supports various input types for form elements.</p>
        <pre><code class="language-markup">&lt;input type="text" name="username"&gt;
&lt;input type="password" name="password"&gt;
&lt;input type="button" value="Click Me"&gt;</code></pre>`,
    'html-text-input': `
        <h2>HTML Text Input</h2>
        <p>Text input fields allow the user to input text data.</p>
        <pre><code class="language-markup">&lt;input type="text" name="username"&gt;</code></pre>`,
    'html-button-input': `
        <h2>HTML Button Input</h2>
        <p>Button input fields are used to create clickable buttons.</p>
        <pre><code class="language-markup">&lt;input type="button" value="Click Me"&gt;</code></pre>`,
    'html-other-input-types': `
        <h2>Other HTML Input Types</h2>
        <p>HTML supports a wide range of input types such as email, number, date, etc.</p>
        <pre><code class="language-markup">&lt;input type="email" name="email"&gt;
&lt;input type="number" name="quantity"&gt;
&lt;input type="date" name="bday"&gt;</code></pre>`,

    // CSS Content
    'css-introduction': `
        <h2>CSS Introduction</h2>
        <p>CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.</p>
        <pre><code class="language-css">body {
    font-family: Arial, sans-serif;
}</code></pre>`,
    'css-selectors': `
        <h2>CSS Selectors</h2>
        <p>CSS selectors are used to select the HTML elements you want to style.</p>
        <pre><code class="language-css">p {
    color: blue;
}

#id {
    font-size: 20px;
}

.class {
    margin: 10px;
}</code></pre>`,
    'css-properties': `
        <h2>CSS Properties</h2>
        <p>CSS properties are used to apply styles to HTML elements.</p>
        <pre><code class="language-css">color: red;
font-size: 16px;
margin: 0;
padding: 10px;</code></pre>`,
    'css-text-properties': `
        <h2>CSS Text Properties</h2>
        <p>CSS text properties control the appearance of text in HTML elements.</p>
        <pre><code class="language-css">color: blue;
font-size: 18px;
text-align: center;
text-decoration: underline;</code></pre>`,
    'css-box-model-properties': `
        <h2>CSS Box Model Properties</h2>
        <p>The CSS box model is a box that wraps around every HTML element. It consists of margins, borders, padding, and the actual content.</p>
        <pre><code class="language-css">margin: 10px;
border: 1px solid black;
padding: 20px;
width: 100px;
height: 100px;</code></pre>`,
    'css-flexbox': `
        <h2>CSS Flexbox</h2>
        <p>CSS Flexbox is a layout model that allows you to design a flexible and efficient layout structure.</p>
        <pre><code class="language-css">.container {
    display: flex;
    justify-content: center;
    align-items: center;
}</code></pre>`,
    'css-grid': `
        <h2>CSS Grid</h2>
        <p>CSS Grid Layout is a 2-dimensional system, meaning it can handle both columns and rows.</p>
        <pre><code class="language-css">.grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 10px;
}</code></pre>`,
    'css-advanced-selectors': `
        <h2>CSS Advanced Selectors</h2>
        <p>Advanced selectors provide more precise ways to target elements for styling.</p>
        <pre><code class="language-css">div > p {
    color: red;
}

p:first-child {
    font-weight: bold;
}</code></pre>`,
    'css-animations': `
        <h2>CSS Animations and Transitions</h2>
        <p>CSS animations and transitions enable you to create dynamic effects on web pages.</p>
        <pre><code class="language-css">.animate {
    transition: all 0.5s ease;
}

.animate:hover {
    transform: scale(1.1);
}</code></pre>`,
    'css-responsive-design': `
        <h2>CSS Responsive Design</h2>
        <p>Responsive design ensures that web pages look good on all devices.</p>
        <pre><code class="language-css">@media (max-width: 600px) {
    .responsive {
        font-size: 12px;
    }
}</code></pre>`,
    'css-variables': `
        <h2>CSS Variables</h2>
        <p>CSS variables are entities defined by CSS authors that contain specific values to be reused throughout a document.</p>
        <pre><code class="language-css">:root {
    --main-color: #06c;
}

p {
    color: var(--main-color);
}</code></pre>`,
    'css-frameworks': `
        <h2>CSS Frameworks</h2>
        <p>CSS frameworks are pre-prepared libraries that are meant to be used as a foundation for your projects.</p>
        <pre><code class="language-css">/* Example of using Bootstrap */
.container {
    padding: 20px;
}</code></pre>`,
    'css-positioning': `
        <h2>CSS Positioning</h2>
        <p>CSS positioning properties allow you to position elements in a layout.</p>
        <pre><code class="language-css">.static {
    position: static;
}

.relative {
    position: relative;
    top: 10px;
    left: 10px;
}</code></pre>`,
    'css-static-positioning': `
        <h2>CSS Static Positioning</h2>
        <p>Static positioning is the default positioning for HTML elements.</p>
        <pre><code class="language-css">.static {
    position: static;
}</code></pre>`,
    'css-relative-positioning': `
        <h2>CSS Relative Positioning</h2>
        <p>Relative positioning is used to move an element relative to its normal position.</p>
        <pre><code class="language-css">.relative {
    position: relative;
    top: 10px;
    left: 10px;
}</code></pre>`,
    'css-absolute-positioning': `
        <h2>CSS Absolute Positioning</h2>
        <p>Absolute positioning is used to place an element exactly where you want it on the page.</p>
        <pre><code class="language-css">.absolute {
    position: absolute;
    top: 20px;
    left: 30px;
}</code></pre>`,
    'css-media-queries': `
        <h2>CSS Media Queries</h2>
        <p>CSS media queries are used to apply different styles for different devices or screen sizes.</p>
        <pre><code class="language-css">@media (max-width: 600px) {
    .responsive {
        font-size: 12px;
    }
}</code></pre>`,
    'css-typography': `
        <h2>CSS Typography</h2>
        <p>CSS typography refers to the styling and arrangement of text on a web page.</p>
        <pre><code class="language-css">body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}</code></pre>`,
    'css-font-properties': `
        <h2>CSS Font Properties</h2>
        <p>Font properties control the appearance of text fonts.</p>
        <pre><code class="language-css">font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
font-style: italic;</code></pre>`,
    'css-text-alignment': `
        <h2>CSS Text Alignment</h2>
        <p>Text alignment properties are used to align text within an element.</p>
        <pre><code class="language-css">text-align: left;
text-align: center;
text-align: right;</code></pre>`,
    'css-text-decoration': `
        <h2>CSS Text Decoration</h2>
        <p>Text decoration properties are used to add decorative elements to text.</p>
        <pre><code class="language-css">text-decoration: none;
text-decoration: underline;
text-decoration: line-through;</code></pre>`,
    'css-pseudo-elements': `
        <h2>CSS Pseudo-elements</h2>
        <p>CSS pseudo-elements are used to style specified parts of an element.</p>
        <pre><code class="language-css">p::first-line {
    font-weight: bold;
}

p::before {
    content: "Note: ";
    font-style: italic;
}</code></pre>`,
    'css-layouts': `
        <h2>CSS Layouts</h2>
        <p>CSS layouts control the arrangement of elements on a web page.</p>
        <pre><code class="language-css">.container {
    display: flex;
    justify-content: center;
    align-items: center;
}</code></pre>`,
    
    // JavaScript Content
    'javascript-introduction': `
        <h2>JavaScript Introduction</h2>
        <p>JavaScript is a programming language that is commonly used to create interactive effects within web browsers.</p>
        <pre><code class="language-javascript">console.log('Hello, world!');</code></pre>`,
    'javascript-variables': `
        <h2>JavaScript Variables</h2>
        <p>Variables are containers for storing data values.</p>
        <pre><code class="language-javascript">var name = 'John';
let age = 30;
const PI = 3.14;</code></pre>`,
    'javascript-functions': `
        <h2>JavaScript Functions</h2>
        <p>Functions are blocks of code designed to perform a particular task.</p>
        <pre><code class="language-javascript">function greet(name) {
    return 'Hello ' + name;
}

console.log(greet('World'));</code></pre>`,
    'javascript-function-expressions': `
        <h2>JavaScript Function Expressions</h2>
        <p>Function expressions are functions stored in a variable.</p>
        <pre><code class="language-javascript">const greet = function(name) {
    return 'Hello ' + name;
};

console.log(greet('World'));</code></pre>`,
    'javascript-arrow-functions': `
        <h2>JavaScript Arrow Functions</h2>
        <p>Arrow functions provide a shorter syntax for writing function expressions.</p>
        <pre><code class="language-javascript">const greet = (name) => 'Hello ' + name;

console.log(greet('World'));</code></pre>`,
    'javascript-events': `
        <h2>JavaScript Events</h2>
        <p>Events are actions that can be detected by JavaScript.</p>
        <pre><code class="language-javascript">document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});</code></pre>`,
    'javascript-dom': `
        <h2>JavaScript DOM Manipulation</h2>
        <p>The DOM allows JavaScript to interact with and manipulate HTML documents.</p>
        <pre><code class="language-javascript">document.getElementById('myDiv').innerHTML = 'Hello, DOM!';</code></pre>`,
    'javascript-arrays-objects': `
        <h2>JavaScript Arrays and Objects</h2>
        <p>Arrays and objects are used to store collections of data.</p>
        <pre><code class="language-javascript">let fruits = ['Apple', 'Banana', 'Cherry'];
let person = { name: 'John', age: 30 };

console.log(fruits[0]);
console.log(person.name);</code></pre>`,
    'javascript-error-handling': `
        <h2>JavaScript Error Handling</h2>
        <p>Error handling in JavaScript is done using try, catch, and finally blocks.</p>
        <pre><code class="language-javascript">try {
    // Code that may throw an error
    let result = someFunction();
} catch (error) {
    console.error('An error occurred:', error.message);
} finally {
    console.log('This will always execute.');
}</code></pre>`,
    'javascript-async': `
        <h2>Asynchronous JavaScript</h2>
        <p>Asynchronous JavaScript allows you to programmatically handle tasks that take time to complete.</p>
        <pre><code class="language-javascript">setTimeout(() => {
    console.log('This runs after 2 seconds');
}, 2000);</code></pre>`,
    'javascript-modules': `
        <h2>JavaScript ES Modules</h2>
        <p>ES Modules allow you to import and export code between JavaScript files.</p>
        <pre><code class="language-javascript">// module.js
export const PI = 3.14;
export function add(a, b) {
    return a + b;
}

// main.js
import { PI, add } from './module.js';

console.log(PI);
console.log(add(2, 3));</code></pre>`,
    'javascript-json': `
        <h2>JavaScript JSON</h2>
        <p>JSON (JavaScript Object Notation) is a lightweight data-interchange format.</p>
        <pre><code class="language-javascript">const jsonString = '{"name":"John", "age":30}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name); // Output: John</code></pre>`,
    'javascript-promises': `
        <h2>JavaScript Promises</h2>
        <p>Promises are used to handle asynchronous operations in JavaScript.</p>
        <pre><code class="language-javascript">const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Operation was successful.');
    } else {
        reject('Operation failed.');
    }
});

myPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});</code></pre>`,
    'javascript-control-flow': `
        <h2>JavaScript Control Flow</h2>
        <p>Control flow statements control the execution of code in JavaScript.</p>
        <pre><code class="language-javascript">if (condition) {
    // Code to execute if condition is true
} else {
    // Code to execute if condition is false
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}</code></pre>`,
    'javascript-if-statements': `
        <h2>JavaScript If Statements</h2>
        <p>If statements are used to execute code based on a condition.</p>
        <pre><code class="language-javascript">if (condition) {
    // Code to execute if condition is true
} else {
    // Code to execute if condition is false
}</code></pre>`,
    'javascript-loops': `
        <h2>JavaScript Loops</h2>
        <p>Loops are used to repeatedly execute a block of code.</p>
        <pre><code class="language-javascript">for (let i = 0; i < 5; i++) {
    console.log(i);
}

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}</code></pre>`,
    'javascript-switch-statements': `
        <h2>JavaScript Switch Statements</h2>
        <p>Switch statements are used to perform different actions based on different conditions.</p>
        <pre><code class="language-javascript">switch (expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    case value2:
        // Code to execute if expression === value2
        break;
    default:
        // Code to execute if expression doesn't match any value
}</code></pre>`,
    'javascript-classes': `
        <h2>JavaScript Classes</h2>
        <p>Classes are templates for creating objects in JavaScript.</p>
        <pre><code class="language-javascript">class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('Hello, ' + this.name);
    }
}

const john = new Person('John', 30);
john.greet(); // Output: Hello, John</code></pre>`,
    'javascript-prototypes': `
        <h2>JavaScript Prototypes</h2>
        <p>Prototypes are the mechanism by which JavaScript objects inherit features from one another.</p>
        <pre><code class="language-javascript">function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.name);
};

const john = new Person('John', 30);
john.greet(); // Output: Hello, John</code></pre>`,
    'javascript-prototype-chain': `
        <h2>JavaScript Prototype Chain</h2>
        <p>The prototype chain is used to build new types of objects based on existing ones.</p>
        <pre><code class="language-javascript">function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.name);
};

function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

const student = new Student('John', 20, 'A');
student.greet(); // Output: Hello, John</code></pre>`,
    'javascript-inheritance': `
        <h2>JavaScript Inheritance</h2>
        <p>Inheritance is a way to create a new class from an existing class.</p>
        <pre><code class="language-javascript">class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('Hello, ' + this.name);
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
}

const student = new Student('John', 20, 'A');
student.greet(); // Output: Hello, John</code></pre>`,
    'javascript-ajax': `
        <h2>JavaScript AJAX</h2>
        <p>AJAX (Asynchronous JavaScript and XML) is a technique for creating fast and dynamic web pages.</p>
        <pre><code class="language-javascript">const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
    }
};
xhr.send();</code></pre>`,
    'javascript-fetch-api': `
        <h2>JavaScript Fetch API</h2>
        <p>The Fetch API provides an interface for fetching resources.</p>
        <pre><code class="language-javascript">fetch('data.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));</code></pre>`,
    'javascript-es6': `
        <h2>JavaScript ES6 Features</h2>
        <p>ES6 introduced many new features to JavaScript, including let, const, arrow functions, and more.</p>
        <pre><code class="language-javascript">const PI = 3.14;
let name = 'John';

const greet = (name) => 'Hello ' + name;

console.log(greet('World'));</code></pre>`,
    'javascript-bom': `
        <h2>JavaScript BOM</h2>
        <p>The Browser Object Model (BOM) allows JavaScript to interact with the browser.</p>
        <pre><code class="language-javascript">console.log(window.innerWidth);
console.log(navigator.userAgent);
window.open('https://example.com');</code></pre>`,
    'javascript-closure': `
        <h2>JavaScript Closures</h2>
        <p>A closure is a function that has access to its own scope, the scope of the outer function, and the global scope.</p>
        <pre><code class="language-javascript">function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    };
}

const newFunction = outerFunction('outside');
newFunction('inside');</code></pre>`,
    'javascript-scope': `
        <h2>JavaScript Scope</h2>
        <p>Scope determines the accessibility of variables and functions at various parts of the code.</p>
        <pre><code class="language-javascript">let globalVar = 'Global';

function scopeTest() {
    let localVar = 'Local';
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

scopeTest();
console.log(localVar);  // Error: localVar is not defined</code></pre>`,
};

function showTopics(language) {
    const sidebar = document.getElementById('sidebar');
    const selectedTopics = topics[language];

    document.querySelectorAll('.language-nav a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`.language-nav a[onclick="showTopics('${language}')"]`).classList.add('active');

    sidebar.innerHTML = '';

    let html = '<ul>';
    selectedTopics.forEach((topic, index) => {
        html += `<li style="animation-delay: ${index * 0.1}s;" onclick="toggleSubtopics(this, '${topic.link}', '${topic.name}')"><a href="#">${topic.name}`;
        if (topic.subtopics && topic.subtopics.length > 0) {
            html += `<span class="subtopic-arrow collapsed">&#9660;</span>`;
        }
        html += `</a>`;
        if (topic.subtopics && topic.subtopics.length > 0) {
            html += '<ul class="subtopics" style="display: none;">';
            topic.subtopics.forEach(subtopic => {
                html += `<li onclick="showContent('${subtopic.link}', '${subtopic.name}')"><a href="#">${subtopic.name}</a></li>`;
            });
            html += '</ul>';
        }
        html += '</li>';
    });
    html += '</ul>';

    sidebar.innerHTML = html;
    if (selectedTopics.length > 0) {
        const firstTopic = selectedTopics[0];
        showContent(firstTopic.link, firstTopic.name);
    }
}

function toggleSubtopics(element, contentId, title) {
    const subtopics = element.querySelector('.subtopics');
    const arrow = element.querySelector('.subtopic-arrow');
    if (subtopics) {
        if (subtopics.style.display === 'none' || subtopics.style.display === '') {
            subtopics.style.display = 'block';
            arrow.classList.remove('collapsed');
            arrow.classList.add('expanded');
        } else {
            subtopics.style.display = 'none';
            arrow.classList.remove('expanded');
            arrow.classList.add('collapsed');
        }
    } else {
        showContent(contentId, title);
    }
    event.stopPropagation();
}

function showContent(contentId, title) {
    const content = document.getElementById('content');
    content.classList.remove('content-loaded');
    setTimeout(() => {
        content.innerHTML = contentData[contentId] || '<p>Content not found.</p>';
        Prism.highlightAll();
        content.classList.add('content-loaded');
        content.scrollIntoView({ behavior: 'smooth' });
    }, 300);
}