import './index.less'
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import hljs from 'highlight.js'
import 'highlight.js/styles/dracula.css';
import marked from 'marked';
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  },
  pedantic: false,
  gfm: false,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});


const ArticlePage = ({ match }) => {
  return (
    <Switch>
      <Route path={match.path} exact render={() => (
        <div className="Article-Not-Find">Sorry 文章不见了...</div>
      )}></Route>
      <Route path={match.path + '/:dir'} component={Article}></Route>
    </Switch>
  )

}

function Article(props) {
  
  const { dir = '' } = useParams();
  const location = useLocation();
  const { search = '', state, ...res } = location
  
  const [markdown, setMarkdown] = useState(props.markdown || '');
  
  console.log('article传参', dir, location)

  useEffect(() => {        
    // hljs.initHighlighting()
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
    // console.log('解析的md',markdown)      
  },[markdown]);

  
  
  useEffect(()=>{    
    if(dir){      
      import(`@assets/articles/${dir}.md`).then(m=>{        
        setMarkdown(marked(m.default))

    });
    }
  },[dir])
  
  
  return (
    <div className="Article">
      <div dangerouslySetInnerHTML={{ __html: markdown }} />
    </div>
  )
}

Article.propTypes = {
  markdown: PropTypes.string
}
export default ArticlePage;