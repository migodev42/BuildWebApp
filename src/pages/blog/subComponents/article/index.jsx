import './index.less'
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import hljs from 'highlight.js'
import 'highlight.js/styles/a11y-dark.css';
import { Remarkable } from 'remarkable';

const md = new Remarkable({
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
});

function Article(props) {
  const { markdown } = props;

  const [example, setExample] = useState('initialValue');
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    // document.title = `You clicked count times`;
    
    console.log('markdown', markdown)

    hljs.configure({
      useBR:false,
      languages:['javascript']
    })
    document.querySelectorAll('code').forEach((block) => {
      console.log('hljs', block)
      hljs.highlightBlock(block);
    });
    
  });
  return (
    <div className="Article">
      Article
      <div dangerouslySetInnerHTML={{ __html: md.render(markdown) }} />
    </div>
  )
}

Article.propTypes = {
  markdown: PropTypes.string.isRequired
}
export default Article;