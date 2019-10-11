import './index.less'
import React, { useState, useEffect } from 'react';
import PreviewArticles from './subComponents/previewArticles/index'
import Article from './subComponents/article/index'



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
        博客内容
        <PreviewArticles/>
        <Article markdown={`- [鸟哥的linux私房菜](http://linux.vbird.org/new_linux.php)
- [鸟哥的linux私房菜 CN](http://cn.linux.vbird.org/linux_basic/linux_basic.php)
- [Linux kernel 内核 | 官网](https://www.kernel.org/)
- [Linux文件计划](http://www.tldp.org)


# 学习之路
>重视基础

- 1. 计算机概论与硬件相关知识：
因为既然想要走Linux这门路，资讯相关的基础技能也不能没有啊！ 所以先理解一下基础的硬件知识，不用一定要全懂啦！又不是真的要你去组计算机～^_^， 但是至少要『听过、有概念』即可；

- 2. 先从Linux的安装与指令学起：
没有Linux怎么学习Linux呢？所以好好的安装起一套你需要的Linux吧！虽然说Linux distributions很多， 不过基本上架构都是大同小异的，差别在於介面的亲和力与软件的选择不同罢了！ 选择一套你喜欢的就好了，倒是没有哪一套特别好说～

- 3. Linux操作系统的基础技能：
这些包含了『使用者、群组的概念』、『权限的观念』，『程序的定义』等等，尤其是权限的概念， 由於不同的权限设定会妨碍你的使用者的便利性，但是太过於便利又会导致入侵的可能！ 所以这里需要了解一下你的系统呦！

- 4. 务必学会vi文书编辑器：
Linux的文书编辑器多到会让你数到生气！不过，vi却是强烈建议要先学习的！ 这是因为vi会被很多软件所呼叫，加上所有的Unix like系统上面都有vi，所以你一定要学会才好！

- 5. Shell与Shell Script的学习：
其实鸟哥上面一直谈到的『文字介面』说穿了就是一个名为shell的软件啦！既然要玩文字介面，当然就是要会使用shell的意思。 但是shell上面的数据太多了，包括『正规表示法』、『管线命令』与『数据流重导向』等等，真的需要了解比较好呦！ 此外，为了帮助你未来的管理服务器的便利性，shell scripts也是挺重要的！要学要学！

- 6. 一定要会软件管理员：
因为玩Linux常常会面临得要自己安装驱动程式或者是安装额外软件的时候，尤其是嵌入式设备或者是学术研究单位等。 这个时候Tarball/RPM/DPKG等软件管理员的安装方式的了解，对你来说就重要到不行了！

- 7. 网路基础的建立：
如果上面你都通过了，那么网路的基础就是下一阶段要接触的咚咚，这部份包含了『IP概念』『路由概念』等等；

如果连网路基础都通过了，那么网站的架设对你来说，简直就是『太简单啦！』
`}/>                
      </div>
    </div>
  )
}

export default Blog;