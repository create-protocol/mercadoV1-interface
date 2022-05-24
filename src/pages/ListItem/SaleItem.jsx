import React, { useState } from "react";
import timeOutlined from "../../assets/images/timeOutlined.svg";
import dollerIcon from "../../assets/images/dollerIcon.svg";
import downArr from "../../assets/images/downArr.svg";
import ConfirmationModal from "./ConfirmationModal";

const SaleItem = () => {
  const [isActive, setIsActive] = useState(1);
  const [open, setOpen] = useState(false);

  const toggalTab = (index) => {
    setIsActive(index)
  }
  return (
    <>
      <div
        style={{
          paddingTop: "15rem",
          marginBottom: "150px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div className="outerBox" style={{
          width: "90%",
          height: "950px",
          backgroundColor: "#252729",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>


          <div style={{
            width: "40%",
            height: "100%",
            padding: "60px"
          }}>
            <p style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "22px",
              color: "#FFFFFF",
              textAlign: "start"
            }}>Choose your type</p>
            <div style={{
              display: "flex",
              justifyContent: 'center',
              alignItems: "center",
              gap: "40px"
            }}>
              <div onClick={() => toggalTab(1)} style={{
                height: "132px",
                width: "242px",
                borderRadius: "5px",
                backgroundColor: isActive === 1 ? "#080808" : "#333840",
                cursor: "pointer",
                display: "grid",
                alignItems: "center"
              }}>
                <div>

                  <img src={dollerIcon} alt="" />
                  <p style={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize5px: "20px",
                    color: "#FFFFFF",
                  }}>Fixed price</p>
                </div>
              </div>
              <div onClick={() => toggalTab(2)} style={{
                height: "132px",
                width: "242px",
                borderRadius: "5px",
                backgroundColor: isActive === 2 ? "#080808" : "#333840",
                cursor: "pointer",
                display: "grid",
                alignItems: "center"
              }}>
                <div>

                  <img src={timeOutlined} alt="" />
                  <p style={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize5px: "20px",
                    color: "#FFFFFF",
                  }}>Timed auction</p>
                </div>
              </div>
            </div>

            <p style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "22px",
              color: "#FFFFFF",
              textAlign: "start",
              marginTop: "42px"
            }}>Choose your type</p>


            <div style={{
              marginTop: "10px",
              height: "49px",
              width: "530px",
              display: 'flex',
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#333840",
              cursor: "pointer",
              paddingLeft: "10px",
              paddingRight: "10px",
              borderRadius: "10px"
            }}>
              <p style={{
                fontWeight: 400,
                fontSize: "16px",
                color: "#F0F0F0"
              }}>Sell to highest bidder</p>
              <img src={downArr} alt="" />
            </div>

            <p style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "22px",
              color: "#FFFFFF",
              textAlign: "start",
              marginTop: "20px"
            }}>Starting price</p>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px"
            }}>
              <div style={{
                width: "142px",
                height: "49px",
                backgroundColor: "#333840",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "5px"
              }}>
                <img src="" alt="" />
                <p style={{
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#FFFFFF",
                }}>WETH</p>
                <img src={downArr} alt="" style={{
                  width: "20px"
                }} />
              </div>
              <input type="text" placeholder="Amount" style={{
                width: "355px",
                height: "49px",
                backgroundColor: "#333840",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                padding: "20px",
                outline: "none",
                border: "hidden",
                color: "white"
              }} />
            </div>

            <p style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "22px",
              color: "#FFFFFF",
              textAlign: "start",
              marginTop: "20px"
            }}>Choose your duration</p>
            <div style={{
              marginTop: "10px",
              height: "49px",
              width: "100%",
              display: 'flex',
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#333840",
              cursor: "pointer",
              paddingLeft: "10px",
              paddingRight: "10px",
              borderRadius: "10px"
            }}>
              <p style={{
                fontWeight: 400,
                fontSize: "16px",
                color: "#F0F0F0"
              }}>7 Days</p>
              <img src={downArr} alt="" />
            </div>

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
              onClick={() => setOpen(true)}

            >
              List for sale
            </div>
          </div>


          <div style={{
            width: "805px",
            height: "0px",
            border: "1px solid #FFFFFF",
            transform: "rotate(90deg)"
          }}>

          </div>

          <div style={{
            width: "40%",
            height: "100%",
            padding: "60px",
          }}>
            <p style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "22px",
              color: "#FFFFFF",
              textAlign: "start"
            }}>Preview</p>

            <div style={{
              padding: "21px",
              width: "100%",
              height: "60%",
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

        </div>
      </div >

      <ConfirmationModal visible={open} onClose={setOpen} />
    </>
  );
};

export default SaleItem;
