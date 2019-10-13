import './index.less'
import React, { useState, useEffect } from 'react';
import PreviewArticles from './subComponents/previewArticles/index'
import { Button } from 'antd'
import ArticlePage from './subpages/article/index'
import a from '@assets/articles/Vscodenodets.md'
import { useHistory, Switch, Route } from "react-router-dom";

const BlogPage=({match})=>{
  return (
    <Switch>
      <Route path={match.path} exact component={Blog}></Route>
      <Route path={match.path+'/article'}  component={ArticlePage}></Route>
    </Switch>
  )  
}

function Blog(props) {
  const { data } = props;
  let history = useHistory();
  const [example, setExample] = useState('initialValue');
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    // document.title = `You clicked count times`;    
  });

  return (
    <div className="Blog">
      <div className="Blog-Welcome">WelCome</div>
      <div className="Blog-Content">
        {/* <Button type="primary" onClick={() => history.push("/blog/article/Vscodenodets",)}>文章</Button>
        <Button type="primary" onClick={() => history.push("/blog/article")}>文章页</Button> */}

        <div className="Blog-Preview">
          {[1,2,3,4,5,6,7,8,9,10,11,12].map((el,idx)=>{
            return <PreviewArticles key={el+idx} onClick={() => history.push("/blog/article/Vscodenodets",)}/>
          })}
          
        </div>
        
        {/* <Article markdown={a}/>                 */}
      </div>
    </div>
  )
}

export default BlogPage;