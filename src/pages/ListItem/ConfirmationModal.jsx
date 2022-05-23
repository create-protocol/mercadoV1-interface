import React from "react";
import Filterline from "../../assets/images/filterbottomline.png";

const ConfirmationModal = ({
  visible,
  showDrawer = () => null,
  onClose,
  nftData = {},
}) => {
  return (
    <div
      style={{
        position: "fixed",
        display: visible ? "flex" : "none",
        top: "0px",
        left: "0px",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "rgba(80, 80, 80, 0.4)",
        backdropFilter: "blur(5px)",
        zIndex: 50,
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "839px",
          height: "438px",
          left: "541px",
          top: "240px",

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
            Finish your listing
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
          <div style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#FFFFFF"
          }}>
            <div style={{
              width: "40%",
              height: "100%",
              display: "flex",
              justifyContent: "start"
            }}>
              <img src="https://master.d5doaty1zxnym.amplifyapp.com/static/media/Group%201491.8420d890.png" style={{
                width: "107px",
                height: "90px",
                borderRadius: "16px"
              }} alt="" />
              <div style={{ marginLeft: "10px" }}>
                <p style={{
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "13px",
                  textAlign: "start",
                  lineHeight: "16px"
                }}>Name of collection</p>
                <p style={{
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "13px",
                  textAlign: "start"
                }}>NFT Name</p>
                <p style={{
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "13px",
                  textAlign: "start"
                }}>Quantity: 1</p>
              </div>
            </div>

            <div>
              <p>Price</p>
              <p> <span>
                <img src="" alt="" /></span> 0.05 ETH</p>
              <p>$142.37</p>
            </div>
          </div>

        </div>
          <div style={{
            display: "flex",
            justifyContent: "center",
          }}>
            <div style={{
              width: "80%"
            }}>

              <div style={{
                width: "100%",
                height: "67px",
                background: "#090909",
                borderRadius: "5px"
              }}>

              </div>
              <div style={{
                width: "100%",
                height: "80px",
                background: "#252729",
                borderRadius: "5px"
              }}>

              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
