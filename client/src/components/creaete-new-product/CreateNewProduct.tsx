import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import CreateNewProductForm from './CreateNewProductForm';



const CreateNewProduct: React.FC = ({tableUpdater,setU}) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {
    setOpen(true);
  };

//   const handleOk = () => {
//     setModalText('The modal will be closed after two seconds');
//     setConfirmLoading(true);
//     setTimeout(() => {
//       setOpen(false);
//       setConfirmLoading(false);
//     }, 2000);
//   };

  const handleCancel = () => {
    // console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add New Product
      </Button>
      <Modal
        title="Add New Product"
        open={open}
        onCancel={handleCancel}
        // width={1000}
        width = "60%"

        style={{top:10}}
    
        footer={null}
      >
        <CreateNewProductForm setOpen= {setOpen} tableUpdater={tableUpdater} />
      </Modal>
    </>
  );
};

export default CreateNewProduct;
