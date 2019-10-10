import React from 'react';
import { useState, useEffect } from 'react'
import './index.less';
import { Button, Input, Modal } from 'antd';

function TryHook(props) {
  const { data } = props;

  const [inputValue, setInputValue] = useState('Leo');
  const [isModalShow, setModalShow] = useState(false);

  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `welcome, ${inputValue}`;
  });

  const handleInputChange = (e) => {
    console.log('输入框编辑', e.target.value)
    const value = e.target.value ? e.target.value : 'initialValue'
    setInputValue(value)
  }

  const showInput=()=>{
    setTimeout(()=>{
      console.log(inputValue)
    },3000)    
  }

  return (
    <div className="TryHook">
      <div>TryHook</div>
      <div>
        {inputValue}
        <Input placeholder="输入点东西，来改变initialValue" onChange={handleInputChange} />
      </div>

      <div><Button type="primary" onClick={() => setModalShow(true)}>showModal</Button></div>
      <div><Button type="primary" onClick={showInput}>showInput</Button></div>
      <Modal
        visible={isModalShow}
        onCancel={() => setModalShow(false)}
        onOk={() => setModalShow(false)}
      >
        <p>I`m a Modal</p>
      </Modal>
    </div>
  )
}

export default TryHook