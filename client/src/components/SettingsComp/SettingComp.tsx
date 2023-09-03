import React, { useEffect, useId, useState } from "react";
import SellerDashboard from "../../pages/SellerPages/SellerDashboard/SellerDashboard";
import BusinessLayout from "../../layout/Bussiness/BusinessLayout";
import { getLocalUserInfo } from "../../utils/helpers/setUserLocalInfo";
import CustomInstance from "../../lib/axios";
import { Form, Row, Col, Input, Button, Spin ,Select,message} from "antd";
import { getPathaoCity,getPathaoArea,getPathaoZone } from "../../services/pathao.service";


function SettingComp() {
    const userId = localStorage.getItem("user_id");
    const [formHook] = Form.useForm();
    const [userData, setUserData] = useState({});
    
    const [cityList, setCityList] = useState([]);
    const [zoneList, setZoneList] = useState([]);
    const [areaList, setAreaList] = useState([]);


    const [loading,setLoading] = useState(true);

    const onFinish =async (values: any) => {
        console.log("Success:", values);

        try {
            const drd = await CustomInstance.post(`/user/update/${userId}`,{...values,id : useId});
            message.success(`profile Updated`);
        } catch (error) {
            message.error('error happend');
        }
    };

    useEffect(() => {
        const userList = async () => {
                
            const { data: apiData } = await CustomInstance.get(
                `/user/${userId}`
            );

            await onCitySelect(8);
            await onZoneSelect(102);

            formHook.setFieldsValue(apiData);
            const result = await getPathaoCity();
            setCityList(
                result.map((v) => ({
                    value: v.city_id,
                    label: v.city_name,
                }))
            );


            setUserData(apiData);
            setLoading(false)
        };

        userList();
    }, []);

    const onCitySelect =async (cityId)=>{
        const getZoneList = await getPathaoZone(cityId);
        formHook.resetFields(['zone','area'])
        setZoneList(getZoneList.map( v => ( { value : v.zone_id,label : v.zone_name } )))
  
      }
      
      const onZoneSelect =async (zoneId)=>{
        const getZoneList = await getPathaoArea(zoneId);
        formHook.resetFields(['area'])
        setAreaList(getZoneList.map( v => ( { value : v.area_id,label : v.area_name } )))

      }
  


    return (
        <Spin tip={'loading profile data'} spinning={loading}>
            {loading ? null : <div
            style={{
                background: "white",
                padding: "16px",
                borderRadius: "8px",
            }}
        >
            <Form
                form={formHook}
                onFinish={onFinish}
                layout="vertical"
                
            >
                <Row>
                    <Col span={10}>
                        <Form.Item
                            label="First Name"
                            name="first_name"
                            rules={[{ required: true }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col offset={2} span={10}>
                        <Form.Item
                            label="Last Name"
                            name="last_name"
                            rules={[{ required: true }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={10}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    type: "email",
                                    message: "Please input your email",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col offset={2} span={10}>
                        <Form.Item
                            label="Phone"
                            name="phone"
                            rules={[{ required: true }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={10}>
                    <Form.Item name="city" label="City">
                            <Select onSelect={onCitySelect} placeholder="Select your City" options={cityList} />
                        </Form.Item>
                    </Col>
                    <Col offset={2} span={10}>
                        <Form.Item
                            label="Zone"
                            name="zone"
                            rules={[{ required: true }]}
                        >
                             <Select onSelect={onZoneSelect} placeholder="select your zone"  options={zoneList} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={10}>
                        <Form.Item
                            label="Area"
                            name="area"
                            rules={[{ required: true }]}
                        >
                            <Select placeholder="select your area!" options={areaList} />
                        </Form.Item>
                        {userData.role == "business" ? (
                            <Form.Item
                                label="Store Name"
                                name="store_name"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                        ) : null}
                    </Col>
                    <Col offset={2} span={10}>
                        <Form.Item
                            label="Address"
                            name="address"
                            rules={[{ required: true }]}
                        >
                            <Input.TextArea rows={5} />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <Button style={{width:'92%'}} type="primary"  htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>}
        </Spin>
    );
}

export default SettingComp;
