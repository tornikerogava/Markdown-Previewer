import './App.css';
import { useState } from 'react';
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import MDLogo from "./Images/Markdown-mark.svg"
import TRLogo from "./Images/TR-04.svg"

let marked = require("marked");


export default function App() {
  
  const renderer = new marked.Renderer();
  renderer.link = function (href, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };
  const InitialText= `# You Probably Already Know What Markdown is...

  ## But in case you dont...
  ### Here's a demonstration:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can  make text **bold**
  Or _italic_
  Or  ~~cross stuff out~~
  Or you can go all out: ~~**_Wham_**~~
  
  
  There's also [links](https://www.youtube.com/watch?v=dQw4w9WgXcQ), and
  > Block Quotes!
  
  And tables, the styling of which I created myself and definitely didn't just copy:
  
  Headers | More Headers| All The Headers
  ------------ | ------------- | -------------
  You can imagine | all the cool stuff | that can be here
  Or maybe | it could just| be boring stuff
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. You can also use numbered lists...
  1. Pretty self-explanatory



  And if you actually read all of that, have some digital pizza:
  
  ![Digital Pizza](https://upload.wikimedia.org/wikipedia/commons/9/94/Pizza.svg)
  `;
  const [markdown, setMarkdown] = useState(InitialText);
  
  return (
    <div className="markdownContainer">

    <div className="subContainer">
      <div className="titleContainer">
        <img alt="Markdown Logo"src={MDLogo}/>
        <h1 className="title ">Editor</h1>
      </div>
      <textarea value={markdown} onChange={(i) => setMarkdown(i.target.value)} id="editor" />
     </div>

    <div className="subContainer">
      <div className="titleContainer">
        <img alt="Markdown Logo"src={MDLogo}/>
        <h1 className="title">Preview</h1>
      </div>
      <div id="preview" 
        dangerouslySetInnerHTML={{ __html: marked(markdown,
          {breaks:true, highlight:function(code){
          return Prism.highlight
          (code, Prism.languages.javascript, 'javascript',);
        }}), renderer: renderer }} />
      </div>
      <a className="TRLogo" href="https://github.com/tornikerogava">
        <img alt="Personal Logo" src={TRLogo} />
      </a>  
    </div>
  );
}