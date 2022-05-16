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
      <Form layout="vertical" hideRequiredMark>
        <Tabs defaultActiveKey="1" onChange={() => console.log('tab change')}>
          <TabPane tab={<FixedPriceTabTitle />} key="1">
            <Row gutter={16}>
              <Col span={4}>
                <Form.Item
                  name="Currency"
                  label="Currency"
                  rules={[{ required: true, message: 'Please select an currency' }]}
                >
                  <Select placeholder="Currency" defaultValue={'eth'}>
                    {
                      CURRENCY.map(item => (
                        <option key={item.key} value={item.key} label={item.label}>
                          <Space>
                            <img src={item.image} />
                            <span>{item.label}</span>
                          </Space>
                        </option>
                      ))
                    }
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="price"
                  label="Price"
                  rules={[{ required: true, message: 'Price is required' }]}
                >
                  <InputNumber
                    style={{width: '200px'}}
                    min="0"
                    onChange={(e) => console.log(e)}
                    stringMode
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="duration"
                  label="Duration"
                  rules={[{ required: true, message: 'Please choose the dateTime' }]}
                >
                  <Space direction="vertical" size={12}>
                    <RangePicker
                      disabledDate={disabledDate}
                    />
                  </Space>
                </Form.Item>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab={<TimedAuctionTabTitle />} key="2">
            <Row gutter={16}>
              <Col span={4}>
                <Form.Item
                  name="Currency"
                  label="Currency"
                  rules={[{ required: true, message: 'Please select an currency' }]}
                >
                  <Select placeholder="Currency" defaultValue={'eth'}>
                    {
                      CURRENCY.map(item => (
                        <option key={item.key} value={item.key} label={item.label}>
                          <Space>
                            <img src={item.image} />
                            <span>{item.label}</span>
                          </Space>
                        </option>
                      ))
                    }
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="price"
                  label="Price"
                  rules={[{ required: true, message: 'Price is required' }]}
                >
                  <InputNumber
                    style={{width: '200px'}}
                    min="0"
                    onChange={(e) => console.log(e)}
                    stringMode
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="duration"
                  label="Duration"
                  rules={[{ required: true, message: 'Please choose the dateTime' }]}
                >
                <Space direction="vertical" size={12}>
                  <RangePicker
                    disabledDate={disabledDate}
                  />
                </Space>
                </Form.Item>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </Form>
      </Modal>
    </>
  );
}


export default ListForSaleModal;
