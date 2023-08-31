import React, { useState ,useEffect} from "react";
import {

    Input,
    Button,
    Upload,
    Row,
    Col,
    Select,
    InputNumber,
} from "antd";

import { FormItemProps, UploadFile, message,Form } from "antd";

import { UploadOutlined } from "@ant-design/icons";



import type { RcFile, UploadProps } from "antd/es/upload/interface";
import axios from "axios";
import CustomInstance from "../../lib/axios";
import useAuth from "../../hooks/useAuth";
import SellerLayout from "../../layout/Seller/SellerLayout";
import { getLocalUserInfo } from "../../utils/helpers/setUserLocalInfo";
import { useLocation } from "react-router-dom";
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
const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

function EditProduct() {

    
    const [form] = Form.useForm();
    const {state : pageSate} =  useLocation();
    

    const {setUpd} = useAuth();

    const [productData, setProductData] = useState();

    const [uploading, setUploading] = useState(false);
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const raw: string = localStorage.getItem("raw_user")!;
    const rawJson = JSON.parse(raw);
    console.log(JSON.parse(raw));

    const handleUpload = async () => {
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append("file", file as RcFile);
        });
        setUploading(true);
        try {
            const rew = await axios.post(
                `http://localhost:3055/api/imgup`,
                formData
            );
            // setUrlList(rew.data)
            console.log(rew);
            // message.success(JSON.stringify(rew));
            // message.success("image uploaded!");
            return rew.data;
        } catch (error) {
            console.log("noob", error);
        }
    };

    const {raw_user :{store_id}} = getLocalUserInfo();

    useEffect(() => {

        CustomInstance.get(`/product/single/${pageSate.pid}`).then(res => {
            console.log(res.data);
            form.setFieldValue('name',res.data.name);
            form.setFieldValue('category',res.data.category[0]);
            form.setFieldValue('description',res.data.description);
            form.setFieldValue('unit_size',res.data.unit_size);
            form.setFieldValue('price',res.data.price);
            form.setFieldValue('weight',res.data.weight);
            form.setFieldValue('stock',res.data.stock);
            setProductData(res.data);
            // console.log(store_id)

        }).catch(er =>{
            console.log(er);
        })
        ;

    }, [store_id])
    

    const props: UploadProps = {
        name: "file",
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

    const onFinish = async (value: object) => {
        // console.log(urlList);
        try {
            // const imgUrls = await handleUpload();

            // id : String,
            // store_id : String,
            // name : String,
            // category : Array,
            // price : Number,
            // stock : Number,
            // description : String,
            // images : Array,
            // reviews : Array

            console.log('******************',value);

            const newProduct = {
                ...value,
                // images: imgUrls,
            };
            const axr = await CustomInstance.post(
                `/product/update/${pageSate.pid}`,
                newProduct
            );
            // tableUpdater(Date.now());
            // setU(()=> Date.now());
            // setOpen(false);
            // setUpd((prev)=> Date.now());
            message.success(`Product Updated!`);
            
        } catch (error) {
            console.log(error);
        }
        // console.log(ddr);
        console.log(value);
        // console.log(ddr)
    };
    return (
        <SellerLayout>
            <div style={{marginBottom:'16px'}}><h3></h3></div>
            <Form name="form_item_path" form={form} layout="vertical" onFinish={onFinish}>
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
                <Col span={10}>
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

            <Row>
                <Col span={10}>
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
                </Col>
                <Col span={10} offset={4}>
                    <Form.Item
                        label="Stock Ammount"
                        name="stock"
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

            {/* <Upload {...props}>
                <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload> */}

            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                <Button type="primary" style={{width:"100%"}} htmlType="submit" onClick={handleUpload}>
                    Submit
                </Button>
            </Form.Item>
        </Form>

        </SellerLayout>
    );
}
export default EditProduct;
