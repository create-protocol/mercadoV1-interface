import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import timeOutlined from "../../assets/images/timeOutlined.svg";
import dollerIcon from "../../assets/images/dollerIcon.svg";
import downArr from "../../assets/images/downArr.svg";
import ConfirmationModal from "./ConfirmationModal";
import { createListing } from '../../store/item';
import { Form, Col, Row, Input, Select, DatePicker, Space, InputNumber, Tabs, Typography } from 'antd';
import { DollarCircleFilled, ClockCircleOutlined } from '@ant-design/icons';
import Eth from "../../assets/images/Ethereum (ETH).png";
import './index.css';

const { TabPane } = Tabs;
const { Title } = Typography;

const { RangePicker } = DatePicker;

const FixedPriceTabTitle = () => <div style={{
  height: "132px",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: 'center'
}}>
  <div>

    <img src={dollerIcon} alt="" />
    <p style={{
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "1rem",
      color: "#FFFFFF",
    }}>Fixed price</p>
  </div>
</div>

const TimedAuctionTabTitle = () =>   <div style={{
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    height: "132px",
  }}>
    <div>
      <img src={timeOutlined} alt="" />
      <p style={{
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "1rem",
        color: "#FFFFFF",
      }}>Timed auction</p>
    </div>
  </div>

const CURRENCY = [
  {key: 'eth', label: 'ETH', fullname: 'ethereum', image: Eth},
  {key: 'weth', label: 'WETH', fullname:'wrapether', image: Eth},
];

const STRATEGY = [
  {key: 1, label: 'Sell to highest bidder', image: Eth},
  {key: 2, label: 'Sell with declining price', image: Eth},
];

const SaleItem = () => {
  const [isActive, setIsActive] = useState(1);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const toggalTab = (index) => {
    setIsActive(index);
  }

  function disabledDate(current) {
  // Can not select days before today and today
    return current && current < new Date();
  }


  const handleSubmit = () => {
    setOpen(true);
    dispatch(createListing());
  };

  return (
    <div style={{padding: "12rem 8rem",}}>
    <Row style={{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'start',
        boxShadow: '0px -10px 25px rgba(0, 0, 0, 0.32)',
        padding: '2rem',
        backgroundColor: '#252729',
      }} gutter={16}>
      <Col span={10} >
        <Title style={{color: 'white', textAlign: 'left'}} level={4}>Choose your type</Title>
        <Form layout="vertical" hideRequiredMark  className="card-container">
          <Tabs
            defaultActiveKey="1"
            onChange={() => console.log('tab change')}
            tabBarGutter={10}
            hideAdd
            tabBarExtraContent={<></>}
            type='card'
          >
            <TabPane tab={<FixedPriceTabTitle />} key="1">

            </TabPane>
            <TabPane tab={<TimedAuctionTabTitle />} key="2">
            <Title style={{color: 'white', textAlign: 'left'}} level={4}>Auction Strategy</Title>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="strategy"
                  rules={[{ required: true, message: 'Please select an strategy' }]}
                >
                  <Select placeholder="Currency" defaultValue={'eth'}>
                    {
                      STRATEGY.map(item => (
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
            </Row>
            <Title style={{color: 'white', textAlign: 'left'}} level={4}>Starting Price</Title>
            <Row gutter={16}>
              <Col span={4}>
                <Form.Item
                  name="Currency"
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
            <Title style={{color: 'white', textAlign: 'left'}} level={4}>Choose your duration</Title>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="duration"
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
            <div style={{
              marginTop: "40px",
              height: "150px",
              width: "100%",
              backgroundColor: "#333840",
              cursor: "pointer",
              paddingLeft: "10px",
              paddingRight: "10px",
              borderRadius: "10px",
            }}>
              <p style={{
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "22px",
                color: "#FFFFFF",
                textAlign: "start",
              }}>Fees</p>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
              }}>
                <span style={{
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "18px",
                  color: "#FFFFFF",
                }}>Service fee</span>
                <p style={{
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "18px",
                  color: "#FFFFFF",
                }}>2.5%</p>
              </div>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
              }}>
                <p style={{
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "18px",
                  color: "#FFFFFF",
                }}>Creator fee</p>
                <p style={{
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "18px",
                  color: "#FFFFFF",
                }}>2.0%</p>
              </div>
            </div>


            <div
              className="gradientBtn"
              style={{
                marginTop: "25px"
              }}
              onClick={handleSubmit}

            >
              List for sale
            </div>
            </TabPane>
          </Tabs>
        </Form>
      </Col>
      <Col span={12} offset={2}>
        <div style={{
          borderLeft: '1px solid white',
          paddingLeft: '3rem',
        }}>
          <Title style={{color: 'white', textAlign: 'left'}} level={4}>Preview</Title>
          <div style={{
            padding: "21px",
            height: '20rem',
            width: '20rem',
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.11) 0%, rgba(0, 0, 0, 0.53125) 48.96%, rgba(55, 55, 55, 0.8) 100%)",
            borderRadius: "24px",
            opacity: 0.75,
            boxShadow: "0px -10px 25px rgba(0, 0, 0, 0.32)",
          }}>
            <img src="https://master.d5doaty1zxnym.amplifyapp.com/static/media/Group%201491.8420d890.png" alt="" style={{
              width: "100%"
            }} />


            <div style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center"
            }}>

              <div style={{
                width: "332px",
                height: "43px",
                background: "#090909",
                borderRadius: "16px",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
                marginTop: "40px",
                cursor: "pointer"
              }}>
                <img src="" alt="" />
                1.25 ETH
              </div>
            </div>

          </div>
        </div>
      </Col>
    </Row>
    <ConfirmationModal visible={open} onClose={setOpen} />
    </div>
  );
};

export default SaleItem;
