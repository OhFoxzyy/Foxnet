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
        { name: 'Canvas', link: 'html-canvas' }
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
        { name: 'CSS Frameworks', link: 'css-frameworks' }
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
        { name: 'Promises', link: 'javascript-promises' }
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
    'css-introduction': `
        <h2>CSS Introduction</h2>
        <p>CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media.</p>
        <pre><code class="language-css">body {
    font-family: Arial, sans-serif;
}

h1 {
    color: blue;
}

p {
    font-size: 14px;
}</code></pre>`,
    'css-selectors': `
        <h2>CSS Selectors</h2>
        <p>CSS selectors are used to "find" (or select) the HTML elements you want to style.</p>
        <pre><code class="language-css">/* Element selector */
p {
    color: red;
}

/* Class selector */
.intro {
    font-size: 20px;
}

/* ID selector */
#main {
    background-color: yellow;
}</code></pre>`,
    'css-properties': `
        <h2>CSS Properties</h2>
        <p>CSS properties are used to apply styles to elements selected by the selectors.</p>
        <pre><code class="language-css">h1 {
    color: green;
    text-align: center;
}

p {
    font-family: 'Times New Roman', Times, serif;
    line-height: 1.5;
}</code></pre>`,
    'css-text-properties': `
        <h2>CSS Text Properties</h2>
        <p>CSS text properties allow you to style text within HTML elements.</p>
        <pre><code class="language-css">p {
    color: red;
    font-size: 16px;
    text-align: justify;
}</code></pre>`,
    'css-box-model-properties': `
        <h2>CSS Box Model Properties</h2>
        <p>The CSS box model is used to define the layout and design of elements.</p>
        <pre><code class="language-css">div {
    margin: 10px;
    padding: 20px;
    border: 1px solid black;
}</code></pre>`,
    'css-flexbox': `
        <h2>CSS Flexbox</h2>
        <p>Flexbox is a layout model that allows items to align and distribute space within a container.</p>
        <pre><code class="language-css">.container {
    display: flex;
}

.item {
    flex: 1;
    padding: 10px;
}</code></pre>`,
    'css-grid': `
        <h2>CSS Grid</h2>
        <p>CSS Grid Layout is a two-dimensional layout system for the web.</p>
        <pre><code class="language-css">.container {
    display: grid;
    grid-template-columns: auto auto auto;
}

.item {
    padding: 20px;
    text-align: center;
}</code></pre>`,
    'css-advanced-selectors': `
        <h2>Advanced CSS Selectors</h2>
        <p>Advanced CSS selectors provide more specific ways to select and style HTML elements.</p>
        <pre><code class="language-css">/* Attribute selectors */
input[type="text"] {
    width: 200px;
}

/* Pseudo-classes */
a:hover {
    color: purple;
}</code></pre>`,
    'css-animations': `
        <h2>CSS Animations and Transitions</h2>
        <p>CSS allows animations and transitions to add dynamic effects to web pages.</p>
        <pre><code class="language-css">.box {
    width: 100px;
    height: 100px;
    background-color: red;
    transition: width 2s, height 2s, transform 2s;
}

.box:hover {
    width: 200px;
    height: 200px;
    transform: rotate(180deg);
}</code></pre>`,
    'css-responsive-design': `
        <h2>Responsive Web Design</h2>
        <p>Responsive design ensures a web page looks good on all devices (desktops, tablets, and phones).</p>
        <pre><code class="language-css">@media screen and (max-width: 600px) {
    body {
        font-size: 14px;
    }
}</code></pre>`,
    'css-variables': `
        <h2>CSS Variables</h2>
        <p>CSS variables allow for easy reuse of values throughout a stylesheet.</p>
        <pre><code class="language-css">:root {
    --main-color: #336699;
}

.element {
    color: var(--main-color);
}</code></pre>`,
    'css-frameworks': `
        <h2>CSS Frameworks</h2>
        <p>CSS frameworks provide pre-written, standardized code to help build responsive web pages quickly.</p>
        <pre><code class="language-css">/* Example using Bootstrap */
&lt;link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"&gt;</code></pre>`,
    'javascript-introduction': `
        <h2>JavaScript Introduction</h2>
        <p>JavaScript is the programming language of the Web.</p>
        <pre><code class="language-js">console.log('Hello, world!');</code></pre>`,
    'javascript-variables': `
        <h2>JavaScript Variables</h2>
        <p>Variables are containers for storing data values in JavaScript.</p>
        <pre><code class="language-js">var name = 'John';
let age = 30;
const isStudent = true;

console.log(name, age, isStudent);</code></pre>`,
    'javascript-functions': `
        <h2>JavaScript Functions</h2>
        <p>Functions are blocks of code designed to perform particular tasks.</p>
        <pre><code class="language-js">function greet(name) {
    return 'Hello, ' + name;
}

console.log(greet('Alice'));</code></pre>`,
    'javascript-function-expressions': `
        <h2>JavaScript Function Expressions</h2>
        <p>Function expressions allow you to define functions as part of an expression.</p>
        <pre><code class="language-js">const greet = function(name) {
    return 'Hello, ' + name;
};

console.log(greet('Bob'));</code></pre>`,
    'javascript-arrow-functions': `
        <h2>JavaScript Arrow Functions</h2>
        <p>Arrow functions provide a shorthand syntax for defining functions.</p>
        <pre><code class="language-js">const greet = (name) => 'Hello, ' + name;

console.log(greet('Charlie'));</code></pre>`,
    'javascript-events': `
        <h2>JavaScript Events</h2>
        <p>JavaScript can be used to handle events that occur when a user interacts with the web page.</p>
        <pre><code class="language-js">document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});</code></pre>`,
    'javascript-dom': `
        <h2>JavaScript DOM Manipulation</h2>
        <p>JavaScript can manipulate the DOM to change the content of a web page.</p>
        <pre><code class="language-js">document.getElementById('myElement').innerHTML = 'New content';</code></pre>`,
    'javascript-arrays-objects': `
        <h2>JavaScript Arrays and Objects</h2>
        <p>Arrays and objects are fundamental data structures in JavaScript for storing and manipulating data.</p>
        <pre><code class="language-js">const numbers = [1, 2, 3, 4];
const person = {
    name: 'Alice',
    age: 30
};</code></pre>`,
    'javascript-error-handling': `
        <h2>Error Handling in JavaScript</h2>
        <p>Error handling in JavaScript helps manage and deal with unexpected situations.</p>
        <pre><code class="language-js">try {
    // Code that may throw an error
    throw new Error('Something went wrong');
} catch (error) {
    console.error(error);
}</code></pre>`,
    'javascript-async': `
        <h2>Asynchronous JavaScript</h2>
        <p>Asynchronous JavaScript allows code to run without blocking other operations.</p>
        <pre><code class="language-js">async function fetchData() {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    return data;
}</code></pre>`,
    'javascript-modules': `
        <h2>JavaScript Modules</h2>
        <p>ES Modules (ES6 Modules) allow JavaScript code to be split into reusable modules.</p>
        <pre><code class="language-js">// module.js
export function greet(name) {
    return 'Hello, ' + name;
}

// main.js
import { greet } from './module.js';
console.log(greet('David'));</code></pre>`,
    'javascript-json': `
        <h2>JSON in JavaScript</h2>
        <p>JSON (JavaScript Object Notation) is a lightweight data-interchange format.</p>
        <pre><code class="language-js">const data = '{"name":"John","age":30}';
const obj = JSON.parse(data);
console.log(obj.name);</code></pre>`,
    'javascript-promises': `
        <h2>JavaScript Promises</h2>
        <p>Promises in JavaScript represent the eventual completion or failure of an asynchronous operation.</p>
        <pre><code class="language-js">const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data successfully fetched');
    }, 2000);
});

fetchData.then((result) => {
    console.log(result);
});</code></pre>`
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