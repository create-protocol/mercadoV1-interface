import { useState } from 'react';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Space, InputNumber } from 'antd';
import { DollarCircleFilled, ClockCircleOutlined } from '@ant-design/icons';
import Eth from "../../assets/images/Ethereum (ETH).png";

import { Tabs } from 'antd';
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
const PlaceBidDrawer = ({
  visible = false,
  showDrawer = () => null,
  onClose = () => null,
  nftData = {},
}) => {

  function disabledDate(current) {
  // Can not select days before today and today
    return current && current < new Date();
  }

  console.log('this is the nft data', nftData);
  return (
    <>
      <Drawer
        title="List item for sale"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Complete Listing
            </Button>
          </Space>
        }
      >
      </Drawer>
    </>
  );
}

export default PlaceBidDrawer;
