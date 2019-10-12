import './index.less'
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';


import hljs from 'highlight.js'
import 'highlight.js/styles/dracula.css';
import { Remarkable } from 'remarkable';
// Create reference instance
import marked from 'marked';

// Set options
// `highlight` example uses `highlight.js`
marked.setOptions({
  renderer: new marked.Renderer(),  
  pedantic: false,
  gfm: false,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

/* const md = new Remarkable({
  html: false, // Enable HTML tags in source
  xhtmlOut: false,        // Use '/' to close single tags (<br />)
  breaks: false,        // Convert '\n' in paragraphs into <br>
  langPrefix: 'language-',  // CSS language prefix for fenced blocks
  linkify: true,         // autoconvert URL-like texts to links
  linkTarget: '',           // set target to open link in

  // Enable some language-neutral replacements + quotes beautification
  typographer: false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if input not changed
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) { }
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (err) { }

    return ''; // use external default escaping
  }
}); */


function Article(props) {
  let { markdown } = props;
  const { dir='' }=useParams();

  const [example, setExample] = useState('initialValue');
  useEffect(() => {    
    
    hljs.initHighlighting()        

  },[markdown]);

  useEffect(()=>{
    if(dir){
      import(dir).then(m=>markdown=m);
    }
  },[dir])


  return (
    <div className="Article">
      Article
      <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
    </div>
  )
}

Article.propTypes = {
  markdown: PropTypes.string  
}
export default Article;