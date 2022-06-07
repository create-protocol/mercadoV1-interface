import React, {useState} from 'react';
import { Modal } from 'antd';
import { Form, Col, Row, Input, Select, DatePicker, Space, InputNumber, Tabs } from 'antd';
import { DollarCircleFilled, ClockCircleOutlined } from '@ant-design/icons';
import Eth from "../../assets/images/Ethereum (ETH).png";

const { TabPane } = Tabs;

const { RangePicker } = DatePicker;

const FixedPriceTabTitle = () => <span>
  <DollarCircleFilled />
  Fixed Price
</span>

const TimedAuctionTabTitle = () => <span>
    <ClockCircleOutlined />
    Timed Auction
</span>

const CURRENCY = [
  {key: 'eth', label: 'ETH', fullname: 'ethereum', image: Eth},
]

const ListForSaleModal = ({
  openModal,
  closeModal,
  isModalVisible,
  nftData,
}) => {

  function disabledDate(current) {
  // Can not select days before today and today
    return current && current < new Date();
  }

  return (
    <>
      <Modal title="List for sale" visible={isModalVisible} onOk={closeModal} onCancel={closeModal}>
      </Modal>
    </>
  );
}


export default ListForSaleModal;
