import React, { useState } from 'react';
import { Button, Modal } from 'antd';

interface MyComp{
    productData  : any
}

const BusinessProductView: React.FC<MyComp> = ({productData}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p> {productData.name} </p>
        <p> {productData.price}  </p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default BusinessProductView;