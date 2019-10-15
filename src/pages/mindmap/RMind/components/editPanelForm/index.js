import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button } from 'antd'
import EditCell from './subComponents/editCell';
function EditPanelForm(props) {
    const { data, form } = props;
    const { talentCount, depName, Head, depDesc, otherInfo,nodeId } = data

    const [isEdit, setIsEdit] = useState(false);

    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = form;

    const handleSubmit = () => {
        setIsEdit(false)
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err && nodeId) {
              props.onConfirm && props.onConfirm(values)
            }
            
        });
    }

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 18 },
        },
    };

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };

    const onCancle=()=>{
        props.onCancle && props.onCancle();
    }
    
    useEffect(() => {
        props.form.resetFields()
    },[nodeId]);

    return (
        <div className={props.className + ' EditPanelForm'}>
            <Form onSubmit={handleSubmit} className="login-form">
                <Form.Item label="录入人选" {...formItemLayout}>
                    {getFieldDecorator('talentCount', {
                        initialValue: talentCount,
                        rules: [],
                    })(
                        <EditCell 
                            data={talentCount} 
                            onBlur={(value)=>{
                                props.form.setFieldsValue({talentCount:value})
                                handleSubmit()
                            }}/>
                    )}
                </Form.Item>
                <Form.Item label="部门名称" {...formItemLayout}>
                    {getFieldDecorator('depName', {
                        initialValue: depName,
                        rules: [],
                    })(
                        <EditCell 
                            data={depName} 
                            onBlur={(value)=>{
                                props.form.setFieldsValue({depName:value})
                                props.onEditName && props.onEditName(value)
                            }}/>
                    )}
                </Form.Item>
                <Form.Item label="Head" {...formItemLayout}>
                    {getFieldDecorator('Head', {
                        initialValue: Head,
                        rules: [],
                    })(
                        <EditCell 
                            data={Head} 
                            canEdlt={false}
                            onBlur={(value)=>{
                                props.form.setFieldsValue({depName:value})
                                handleSubmit()
                            }}/>
                    )}
                </Form.Item>
                <Form.Item label="部门简介" {...formItemLayout}>
                    {getFieldDecorator('depDesc', {
                        initialValue: depDesc,
                        rules: [],
                    })(
                        <EditCell 
                            data={depDesc} 
                            onBlur={(value)=>{
                                props.form.setFieldsValue({depDesc:value})
                                handleSubmit()
                            }}/>,
                    )}
                </Form.Item>
                <Form.Item label="备注信息" {...formItemLayout}>
                    {getFieldDecorator('otherInfo', {
                        initialValue: otherInfo,
                        rules: [],
                    })(
                        <EditCell 
                            data={otherInfo} 
                            onBlur={(value)=>{
                                props.form.setFieldsValue({otherInfo:value})
                                handleSubmit()
                            }}/>
                    )}
                </Form.Item>

                <Form.Item  {...tailFormItemLayout}>                    
                    <Button type="primary" onClick={onCancle}>
                        关闭
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}


const WrappedEditPanelForm = Form.create({ name: 'editPanelForm' })(EditPanelForm);
export default WrappedEditPanelForm;