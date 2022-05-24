import { Spin } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import setting from "../../assets/images/setting.svg";
import share from "../../assets/images/share.svg";
import upArrow from "../../assets/images/upArrow.svg";

const EditListItem = () => {
  const [isLoading, setIsLoading] = useState(false);
  const metaData = useSelector((state) => state.item.itemData);
  const data = true;
  const history = useHistory();
  if (isLoading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          alignContent: "center",
          marginBottom: "100px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin size="large" />
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        marginLeft: "150px",
        marginRight: "150px",
        paddingTop: "10rem",
        marginBottom: "150px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          alignItems: "center",
          paddingTop: "15px",
          paddingBottom: "15px",
          // backgroundColor: "white",
          gap: "30px",
        }}
      >
        <div
          style={{
            width: "126px",
            height: "50px",
            left: "1125px",
            top: "543px",
            fontSize: "20px",
            background:
              "linear-gradient(279.52deg, rgba(27, 249, 249, 0.05) -39.47%, rgba(23, 247, 206, 0.840625) -5.82%, rgba(34, 122, 255, 0.958132) 99.45%, rgba(76, 146, 251, 0.5) 136.47%)",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            color: "white",
          }}
          onClick={() =>
            history.push(
              `/asset/${metaData.contract["address"]}/${metaData.id["tokenId"]}/listing`
            )
          }
        >
          List for sale
        </div>

        <img src={share} alt="" />
        <img src={setting} alt="" />
      </div>

      <div className="outerBox">
        <img
          style={{
            width: "485px",
            height: "418px",
            position: "absolute",
            left: "160px",
            top: "250px",
          }}
          src="https://master.d5doaty1zxnym.amplifyapp.com/static/media/Group%201491.8420d890.png"
          alt=""
        />
      </div>
      <p
        style={{
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "40px",
          lineHeight: "140%",
          position: "absolute",
          left: "690px",
          top: "235px",
          color: "white",
        }}
      >
        Title
      </p>
      <p
        style={{
          position: "absolute",

          left: "690px",
          top: "300px",
          textAlign: "start",

          /* body */

          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "18px",
          lineHeight: "150%",
          /* or 27px */

          color: "#A9A9A9",
        }}
      >
        Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing e...
      </p>
      <p
        style={{
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "24px",
          lineHeight: "140%",
          position: "absolute",
          left: "690px",
          top: "360px",
          color: "white",
        }}
      >
        About the collection
      </p>
      <p
        style={{
          position: "absolute",
          left: "690px",
          top: "400px",
          fontStyle: "normal",
          fontHeight: "400",
          fontSize: "18px",
          lineHeight: "150%",
          color: "#A9A9A9",
        }}
      >
        Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing e...{" "}
      </p>

      {/* table boxes start */}
      <div
        className="tableBox"
      >
        <p>
          Price history
        </p>
        <img
          style={{
            cursor: "pointer",
          }}
          src={upArrow}
          alt=""
        />
      </div>
      <div
        className="dataTableBoxOuter"
      >
        {!data ? (
          <div className="dataTableBox">
            <p>
              No data to show
            </p>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className="tableBox">
        <p>
          Listings
        </p>
        <img
          style={{
            cursor: "pointer",
          }}
          src={upArrow}
          alt=""
        />
      </div>
      <div
        className="dataTableBoxOuter"
      >
        {!data ? (
          <div
            className="dataTableBox"
          >
            <p>
              No data to show
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <table
              style={{
                borderCollapse: "collapse",
                width: "95%",
              }}
            >
              <tr
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "22px",
                  color: "#FFFFFF",
                }}
              >
                <td>Price</td>
                <td>USD Price</td>
                <td>Expiration</td>
                <td>From</td>
                <td></td>
              </tr>
              <tr
                style={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "22px",
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                }}
              >
                <td>Image 0.05 WETH</td>
                <td>$ 142.37</td>
                <td>24 days</td>
                <td>You</td>
                <td
                  className="tableRmBtn"
                >
                  Remove listing
                </td>
              </tr>
            </table>
          </div>
        )}
      </div>

      <div
        className="tableBox"
      >
        <p>
          Offers
        </p>
        <img
          style={{
            cursor: "pointer",
          }}
          src={upArrow}
          alt=""
        />
      </div>
      <div
        className="dataTableBoxOuter"
      >
        {!data ? (
          <div
            className="dataTableBox"
          >
            <p>
              No data to show
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <table
              style={{
                borderCollapse: "collapse",
                width: "95%",
              }}
            >
              <tr
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "22px",
                  color: "#FFFFFF",
                }}
              >
                <td>Price</td>
                <td>USD Price</td>
                <td>Expiration</td>
                <td>From</td>
                <td></td>
              </tr>
              <tr
                style={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "22px",
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                }}
              >
                <td>Image 0.054 WETH</td>
                <td>$ 142.37</td>
                <td>10 days</td>
                <td>12FT777</td>
                <td
                  style={{
                    textAlign: "end",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <button
                      className="borderBtn"
                      style={{
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "16px",
                      }}
                    >
                      Counter
                    </button>
                    <button
                      className="gradientBtn"

                    >
                      Accept offer
                    </button>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        )}
      </div>

      <div
        className="tableBox"
      >
        <p>
          Item activity
        </p>
        <img
          style={{
            cursor: "pointer",
          }}
          src={upArrow}
          alt=""
        />
      </div>
      <div
        className="dataTableBoxOuter"
      >
        {!data ? (
          <div
            className="dataTableBox"
          >
            <p>
              No data to show
            </p>
          </div>
        ) : (
          <divfalse></divfalse>
        )}
      </div>
    </div>
  );
};

export default EditListItem;
