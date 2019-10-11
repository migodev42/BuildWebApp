import './index.less'
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Remarkable } from 'remarkable';
const md = new Remarkable();


function Article(props) {
  const { markdown } = props;

  const [example, setExample] = useState('initialValue');
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    // document.title = `You clicked count times`;
  });
  return (
    <div className="Article">
      Article
      <div dangerouslySetInnerHTML={{__html:md.render(markdown)}}/>
    </div>
  )
}
Article.propTypes={
  markdown:PropTypes.string.isRequired
}
export default Article;