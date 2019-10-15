import React, {useContext, useState, useEffect} from 'react';
import {css} from 'emotion';
import useEditPanel from '../../customHooks/useEditPanel';
import useMindmap from '../../customHooks/useMindmap';
import {context} from '../../context'
import {Input,Button} from 'antd';
import EditPanelForm from '../../components/editPanelForm'

const EditPanel = () => {
    // const self = useRef();
    
    const {editPanel: {state:epState},nodeStatus:{state:nState}} =useContext(context)
    const {cur_node_info:{info={},text,id}}=nState
    
    const mindmapHook=useMindmap()
    const editPanleHook=useEditPanel();

    const [inputVal,setInputVal]=useState(info)


    const onChange=(e)=>{
        setInputVal(e.target.value);
    }

    useEffect(()=>{
        // setInputVal(info)
        // console.log('当前节点信息',nState)
    },[info])

    
    if(!epState.isShow){
        return null;
    }
    
    return (        
        <div className={show} onClick={e=>e.stopPropagation()} onKeyDown={e=>e.stopPropagation()}>
            当前编辑节点：{text || '无'}
            
            <EditPanelForm 
                data={{...info,nodeId:id,depName:text}} 
                onConfirm={(info)=>mindmapHook.editNodeInfo(id,info)}
                onEditName={(name)=>mindmapHook.changeText(id,name)}
                onCancle={()=>{
                    editPanleHook.toggelPanelShow(false)
                    mindmapHook.clearNodeStatus()
                }}>                    
            </EditPanelForm>
            
            {/* <Button type="primary" onClick={()=>mindmapHook.editNodeInfo(id,inputVal)}>保存</Button>
            <Button type="primary" onClick={()=>editPanleHook.toggelPanelShow(false)}>关闭</Button> */}
            
        </div>
    );
};

export default EditPanel;

// CSS
const show = css`
height: 500px;
top: 200px;
left: 20px;
width: 300px;
margin: 56px 0 0;
overflow: auto;
position: fixed;
//z-index: 10;
border: 2px solid #eeee;
border-radius: 10px;
background: #fff;
background:rgba(255,255,255,1);
box-shadow:0px 2px 12px 0px rgba(0,0,0,0.16)
`;
