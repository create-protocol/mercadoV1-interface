import React, { useState } from "react";
import Filterline from "../../assets/images/filterbottomline.png";
import Eth from "../../assets/images/Ethereum (ETH).png";
import { Modal, Button } from 'antd';
import './style.css';

const PlaceBidModal = ({
  visible,
  showDrawer = () => null,
  onClose,
  nftData = {},
  balanceInEth = 0,
  dispatchCreateBid = () => null,
  modalLoading = false,
  accountAddr,
  library,
}) => {

  const { token_address, owner_of, token_id  } = nftData || {};
  const [currencyLable, setCurrencyLable] = useState("ETH");

  const error = false;

  const CURRENCY = [
    { key: "eth", label: "ETH", fullname: "ethereum", image: Eth },
    { key: "weth", label: "WETH", fullname: "wrappped Ethereum", image: Eth },
    { key: "eth", label: "ETH", fullname: "ethereum", image: Eth },
  ];

  const [bidData, setBidData] = useState({
    amount: 0,
  });

  const submitBid = () => {
    library
     .getSigner(accountAddr)
     .signMessage("👋")
     .then(signature => {
       dispatchCreateBid({
         ...bidData,
         tokenAddr: token_address,
         ownerOf: owner_of,
         signer: accountAddr,
         signature: signature,
         tokenId: token_id,
         v: '1',
         r: '2',
         s: '3'
       });
     })
     .catch(error => {
       window.alert(
         "Failure!" +
           (error && error.message ? `\n\n${error.message}` : "")
       );
     });
  };

  return (
    <Modal
       centered
       footer={false}
       bodyStyle={{
         padding: 0,
         borderRadius: '24px',
         display: 'flex',
         alignItems: 'center',
         justifyContent:'center',
       }}
       closable={false}
       maskStyle={{background: 'rgba(80, 80, 80, 0.4)',}}
       visible={visible}
       onCancel={onClose}
       width={'100%'}
    >
      <div
        style={{
          width: "839px",
          height: "438px",
          background: "#131313",
          boxShadow: "0px 4px 12px rgba(68, 68, 68, 0.15)",
          borderRadius: "24px",
        }}
      >
        <div
          style={{
            padding: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div></div>
          <div
            style={{
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "25px",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}
          >
            Place your bid
          </div>
          <div
            onClick={() => onClose(false)}
            style={{
              cursor: "pointer",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="closeIcon"
            >
              <path
                d="M14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L14.2929 15.7071ZM1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM15.7071 1.70711C16.0976 1.31658 16.0976 0.683417 15.7071 0.292893C15.3166 -0.0976311 14.6834 -0.0976311 14.2929 0.292893L15.7071 1.70711ZM0.292893 14.2929C-0.0976311 14.6834 -0.0976311 15.3166 0.292893 15.7071C0.683417 16.0976 1.31658 16.0976 1.70711 15.7071L0.292893 14.2929ZM15.7071 14.2929L1.70711 0.292893L0.292893 1.70711L14.2929 15.7071L15.7071 14.2929ZM14.2929 0.292893L0.292893 14.2929L1.70711 15.7071L15.7071 1.70711L14.2929 0.292893ZM0.292893 1.70711L7.29289 8.70711L8.70711 7.29289L1.70711 0.292893L0.292893 1.70711ZM7.29289 8.70711L14.2929 15.7071L15.7071 14.2929L8.70711 7.29289L7.29289 8.70711Z"
                fill="#D1D5DB"
              />
            </svg>
          </div>
        </div>
        <img src={Filterline} style={{ width: "80%", height: "4px" }} alt="" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              marginTop: "10px",
              width: "80%",
              //   backgroundColor: "white",
            }}
          >
            <p
              style={{
                fontStyle: "normal",
                fontSize: "18px",
                lineHeight: "22px",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                textAlign: "start",
              }}
            >
              Price
            </p>
            <div
              style={{
                borderRadius: "5px",
                width: "671px",
                height: "49px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <select
                name=""
                id=""
                style={{
                  width: "142px",
                  height: "49px",
                  background: "#252729",
                  borderRadius: "15px 0px 0px 15px",
                  alignContent: "start",
                  color: "white",
                  outline: "none",
                  border: "none",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                {CURRENCY.map((item, index) => (
                  <option
                    key={index}
                    value={item.key}
                    label={item.label}
                    onClick={() => setCurrencyLable(item.label)}
                  >
                    <img src={Eth} alt="" />
                    <span>{item.label}</span>
                  </option>
                ))}
              </select>
              <div
                style={{
                  width: "529px",
                  height: "49px",
                  left: "226px",
                  top: "139.68px",
                  background: "#090909",
                  borderRadius: "0px 15px 15px 0px",
                }}
              >
                <input
                  style={{
                    width: "80%",
                    height: "100%",
                    borderRadius: "none",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    outline: "none",
                    color: "white",
                    border: "none",
                    paddingLeft: "20px",
                  }}
                  type="text"
                  name="bidPrice"
                  id=""
                  placeholder="0.00"
                  onChange={(e) => {
                    if (!/([0-9.])/.test(e.key)) {
                      e.preventDefault();
                    }
                    setBidData({...bidData, [e.target.name]: e.target.value});
                  }}
                />


                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    top: 180,
                    right: 150,
                    width: "40px",
                    height: "1px",
                    border: "1px solid #464646",
                    transform: "rotate(90deg)",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                ></div>

                {/* Price in doller */}
                <div
                  style={{
                    position: "absolute",
                    top: -38,
                    right: 115,
                    fontStyle: "normal",
                    fontHeight: "400",
                    fontSize: "15px",
                    lineHeight: "18px",
                    letterSpacing: "-0.02em",
                    color: "#FFFFFF",
                    height: "100%",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                  $0.00
                </div>
              </div>
            </div>

            <div
              style={{
                width: error ? "341px;" : "198px",
                height: "16px",
                left: "100px",
                top: "196.68px",
                marginLeft: "10px",
                marginTop: "10px",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "13px",
                  lineHeight: "16px",
                  letterSpacing: "-0.02em",
                  color: error ? "#FF0000" : "#FFFFFF",
                }}
              >
                {error
                  ? `You dont have enough ETH. Available balance is 1.5 ${currencyLable}`
                  : `Your available balance is ${balanceInEth} ${currencyLable}`}
              </p>
            </div>

            <div
              style={{
                height: "100%",
                marginTop: "13%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <input
                  style={{
                    position: "relative",
                    left: -32,
                    backgroundColor: "black",
                  }}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p
                  style={{
                    position: "relative",
                    left: -60,
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "13px",
                    lineHeight: "16px",
                    letterSpacing: "-0.02em",
                    color: "#FFFFFF",
                  }}
                >
                  I agree to Mercado.studio’s{" "}
                  <a
                    style={{
                      textDecoration: "underline",
                    }}
                    href="/"
                  >
                    Terms of Services{" "}
                  </a>
                  related to all transactions.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                }}
              >
              <Button
                type="text"
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  background:
                    "linear-gradient(279.52deg, rgba(27, 249, 249, 0.05) -39.47%, rgba(23, 247, 206, 0.840625) -5.82%, rgba(34, 122, 255, 0.958132) 99.45%, rgba(76, 146, 251, 0.5) 136.47%)",
                  cursor: "pointer",
                  borderRadius: "7px",
                  // padding: "0.5rem 1rem 1rem 1rem",
                  color: 'white',
                }}
                onClick={submitBid}
              >
                Place bid
              </Button>

                {error && (
                  <button
                    className="borderBtn"
                    style={{ paddingLeft: "10px", width: "134px" }}
                  >
                    Add funds
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PlaceBidModal;
