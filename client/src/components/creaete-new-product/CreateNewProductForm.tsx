import React,{useState} from "react";
import {
    Form,
    Input,
    Button,
    Upload,
    Row,
    Col,
    Select,
    InputNumber,
} from "antd";



import { FormItemProps, UploadFile ,message} from "antd";

import { UploadOutlined } from "@ant-design/icons";
import CourseAttachment from "./Upload";

import type { RcFile, UploadProps } from "antd/es/upload/interface";
import axios from "axios";
import { getLocalUserInfo } from "../../utils/helpers/setUserLocalInfo";
const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
    prefix: string | number | (string | number)[];
    children: React.ReactNode;
}

function toArr(
    str: string | number | (string | number)[]
): (string | number)[] {
    return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(
        () => [...prefixPath, ...toArr(prefix)],
        [prefixPath, prefix]
    );

    return (
        <MyFormItemContext.Provider value={concatPath}>
            {children}
        </MyFormItemContext.Provider>
    );
};

const MyFormItem = ({ name, ...props }: FormItemProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName =
        name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

    return <Form.Item name={concatName} {...props} />;
};


const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

function CreateNewProductForm() {
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const raw : string  = localStorage.getItem('raw_user')!;
    console.log(JSON.parse(raw));

    const handleUpload = async () => {
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append("file", file as RcFile);
        });
        setUploading(true);
        try {
            const rew = await axios.post(`http://localhost:3055/api/imgup`,formData);
            setUrlList(rew.data)
            // console.log(rew);
            message.success(JSON.stringify(rew));
            return rew.data;
            
        } catch (error) {
            console.log('noob',error);
        }
    };

    const props: UploadProps = {
        name: "file",
        onChange:({ fileList: newFileList }) =>
        setFileList(newFileList),
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: (file) => {
            setFileList([...fileList, file]);

            return false;
        },
        fileList,
    };
    

    const categoryValue = [
        { value: "jack2", label: "Jack1" },
        { value: "lucy2", label: "Lucy1" },
        { value: "Yiminghe2", label: "yiminghe1" },
    ];

    const onFinish =async  (value: object) => {
        // console.log(urlList);
        const ddr = await handleUpload();
        // console.log(ddr);
        console.log(value);
        console.log(ddr)
    };
    return (
        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <Row>
                <Col span={12}>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Username!",
                            },
                        ]}
                    >
                        <Input placeholder="Product Name" />
                    </Form.Item>
                </Col>
                <Col span={8} offset={2}>
                    <Form.Item
                        name="category"
                        label="Select Category"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Username!",
                            },
                        ]}
                    >
                        <Select
                            // onChange={handleChange}
                            options={categoryValue}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item
                name="description"
                label="Description"
                rules={[
                    { required: true, message: "Please input your Username!" },
                ]}
            >
                <Input.TextArea rows={3} placeholder="Product Description" />
            </Form.Item>

            <Row>
                <Col span={10} >
                    <Form.Item
                        label="Product's Unit Size"
                        name="unit_size"
                        rules={[
                            {
                                required: true,
                                type: "number",
                                message: "Please input your unit size!",
                            },
                        ]}
                    >
                        <InputNumber style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col span={10} offset={4}>
                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[
                            {
                                required: true,
                                type: "number",
                                message: "Please input your username!",
                            },
                        ]}
                    >
                        <InputNumber style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item
                        label="Weight"
                        name="weight"
                        rules={[
                            {
                                required: true,
                                type: "number",
                                message: "Please input your username!",
                            },
                        ]}
                    >
                        <InputNumber style={{ width: "100%" }} />
                    </Form.Item>

            <Upload {...props} >
                
                <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>

{/* < CourseAttachment /> */}

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" onClick={handleUpload}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}


export default CreateNewProductForm;
