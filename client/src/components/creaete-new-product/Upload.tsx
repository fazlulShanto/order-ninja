/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import React, { useState } from "react";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import CustomInstance from "../../lib/axios";

function UploadToCloud() {
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [uploading, setUploading] = useState(false);

    const handleUpload = () => {
        const formData = new FormData();
        // console.log(`here : ${fileList[0]}`);
        fileList.forEach((file) => {
            formData.append("file", file as RcFile);
            // formData.append('files[]', file as RcFile);
        });
        // console.log(fileList[0]);
        setUploading(true); // You can use any AJAX library you like

        fetch("http://localhost:3055/api/imgup", {
            method: "POST",
            body: formData,
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setFileList([]);

                console.log(res);
                message.success("upload successfully.");
            })
            .catch((e) => {
                console.log(e);
                message.error("upload failed.");
            })
            .finally(() => {
                setUploading(false);
            });
    };

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
    
    return (
        <div>
            <Upload {...props}>
                <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>
            <Button
                type="primary"
                onClick={handleUpload}
                disabled={fileList.length === 0}
                loading={uploading}
                style={{
                    marginTop: 16,
                }}
            >
                {uploading ? "Uploading" : "Start Upload"}
            </Button>
        </div>
    );
}

export default UploadToCloud;
