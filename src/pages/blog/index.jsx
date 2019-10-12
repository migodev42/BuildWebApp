import './index.less'
import React, { useState, useEffect } from 'react';
import PreviewArticles from './subComponents/previewArticles/index'
import Article from './subpages/article/index'
import a from '@assets/articles/Vscodenodets.md'


function Blog(props) {
  const { data } = props;

  const [example, setExample] = useState('initialValue');
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    // document.title = `You clicked count times`;
    
  });

  return (
    <div className="Blog">
      <div className="Blog-Welcome">WelCome</div>
      <div className="Blog-Content">
        <PreviewArticles/>
        <Article markdown={a}/>                
      </div>
    </div>
  )
}

export default Blog;