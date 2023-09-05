import { SearchOutlined } from "@ant-design/icons";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import type { InputRef } from "antd";
import {useEffect}  from 'react';
import { Button, Input, Space, Table, Popconfirm, Avatar, Modal } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import CreateNewProduct from "../creaete-new-product/CreateNewProduct";
import CustomInstance from "../../lib/axios";
import EditProductModalForm from "../creaete-new-product/EditProductModalForm";
import { useNavigate } from "react-router-dom";
import TestComp from "../TestComp/TestComp";
import ProductViewModal from "../ProductViewModal/SellerProductView";



interface DataType {
    key: string;
    name: string;
    stock: number;
    images: string[];
    id : string,
    price  : number,
    store_id : number,
    uni_size : number,
    weight : number
}


type DataIndex = keyof DataType;

// const data: DataType[] = [
//     {
//         key: "1",
//         name: "John Brown",
//         age: 32,
//         address: "New York No. 1 Lake Park",
//     }
// ];

const SellerProductTable: React.FC< {tableUpdater : any} > = ({tableUpdater,updateValue}) => {

    const [viewProductModel,setViewProductModal] = useState(false);


    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const [productList ,setProductList] = useState([]);
    const searchInput = useRef<InputRef>(null);
    const [updc,setUpdc]= useState(Date.now());

    const navigator = useNavigate();

    const storeId : any = JSON.parse(localStorage.getItem('raw_user')!);

    const handleProductEdit = async(pid : number)=>{

        console.log('pid=',pid);
        navigator(`/edit`,{state:{pid : pid}});

    //   return  <EditProductModalForm isOpen = {editModal} setOpen = {setEditModal} pid={pid} />

    }
    
    const handleDelete =async (pid)=>{
        // console.log(pid);
        const res = await CustomInstance.get(`/product/delete/${pid}`);
        tableUpdater(()=> Date.now());
        setUpdc(Date.now());
        console.log(tableUpdater)
        console.log(res);
    }
    useEffect(()=>{
        console.log('here')
        CustomInstance.get(`/product/${storeId.store_id}`).then(res =>{
            console.log(res);
            setProductList(res.data.map(v => ({...v,key : Math.random()})));
        }).catch(er =>{

            console.log(er);
        })
    },[productList.length,updc,updateValue]);

    const handleSearch = (
        selectedKeys: string[],
        confirm: (param?: FilterConfirmProps) => void,
        dataIndex: DataIndex
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText("");
    };

    const getColumnSearchProps = (
        dataIndex: DataIndex
    ): ColumnType<DataType> => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
            close,
        }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        handleSearch(
                            selectedKeys as string[],
                            confirm,
                            dataIndex
                        )
                    }
                    style={{ marginBottom: 8, display: "block" }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() =>
                            handleSearch(
                                selectedKeys as string[],
                                confirm,
                                dataIndex
                            )
                        }
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() =>
                            clearFilters && handleReset(clearFilters)
                        }
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined
                style={{ color: filtered ? "#1677ff" : undefined }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });

    const handleDestroy = () => {

        setViewProductModal(false);
        Modal.destroyAll();
        // Reset any necessary state or props here
      };

    const columns: ColumnsType<DataType> = [
        {
            title: "Image",
            render:(_,obj : any)=>{
                // console.log(_)
                const dfltUrl  = obj.images[0] ?? `https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y`;

                return (<Avatar key={Math.random()} shape="square" size={64} src={dfltUrl} />)
            },
            key: "image",
            // width: columnSize.size
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            // width: "30%",
            ...getColumnSearchProps("name"),
        },
        {
            title: "Current Stock",
            dataIndex: "stock",
            render:(_,el)=> el.stock-el.sold,
            key: "stock",
            sorter: (a : any, b : any) => a.stock- b.stock,
            // sortDirections: ["descend", "ascend"],
            // width: "30%",
            // ...getColumnSearchProps("name"),
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            // width: "30%",
            sorter: (a : any, b : any) => a.price- b.price,
            // sortDirections: ["descend", "ascend"],
        },
        // {
        //     title: "Total Ordered",
        //     dataIndex: "name",
        //     key: "name",
        //     width: "15%",
        //     sorter: (a, b) => a.address.length - b.address.length,
        //     sortDirections: ["descend", "ascend"],
        //     // ...getColumnSearchProps("name"),
        // },
        {
            title: "View",
            key: "age",
            render: (_, record) => {
                return (
                        <Button type="primary" onClick={()=> navigator(`/view-product`,{state : {
                            pid : record.id
                        }})} ghost>
                            View
                        </Button>
                    
                );
            },
            width: "10%",
        },
        {
            title: "Action",
            width: "10%",
            render: (_, record) => {
                return (
                    <div style={{ display: "flex", gap: "8px" }}>
                        <Button type="primary" onClick={()=> handleProductEdit(record.id)} ghost>
                            Edit
                        </Button>
                        <Button type="primary" danger>
                            <Popconfirm
                                title="Delete the product"
                                description="Are you sure to delete this product?"
                                onConfirm={()=> handleDelete((record as any).id)}
                                // onCancel={cancel}
                                okText="Yes"
                                cancelText="No"
                            >
                                Delete
                            </Popconfirm>
                        </Button>
                    </div>
                );
            },
            key: "address",
        },
    ];

    // columnSize.size = ""+ Math.floor(100/columns.length)+"%";
    // console.log(columnSize)

    return (
        <div>
            <Table size="small" columns={columns} dataSource={productList} />
        </div>
    );
};

export default SellerProductTable;
