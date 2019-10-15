import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Input } from 'antd';

function EditCell(props) {
    const { data, canEdlt=true } = props;

    const [isEdit, setIsEdit] = useState(false);
    const [inputVal, setInputVal] = useState(false);

    const inputEl = useCallback(node => {
        if (node !== null) {
        //   setHeight(node.getBoundingClientRect().height);
            node.focus()
        }
      }, []);
    
    
    const toEditMode = () => {
        setIsEdit(true)
        // inputEl.current.focus();
    }

    const toTextMode = () => {
        setIsEdit(false)
        console.log('编辑表单值',inputVal)
        props.onBlur && props.onBlur(inputVal)
    }

    const onInputChange=(e)=>{
        setInputVal(e.target.value)
    }
    useEffect(() => {
    });

    if(!canEdlt){
        return (
            <div>
                {data}
            </div>
        )
    }

    return (
        <div>
            {isEdit && (
                <Input 
                    ref={inputEl} 
                    placeholder="" 
                    onBlur={toTextMode} 
                    onChange={onInputChange}
                    defaultValue={data} />
            )}
            {!isEdit && <div style={{ minHeight: 40 }} onDoubleClick={toEditMode} >
                {data}
            </div>}
        </div>
    )
}

export default EditCell;