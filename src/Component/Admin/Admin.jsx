import React, { useState } from "react";
import CardContainer from "../CardContainer/CardContainer";
import TextField from "../TextField/TextField";
import MultiLineText from "../MultiLineText/MultiLineText";
import classes from "./Admin.module.scss";
import CustomButton from "../CustomButton/CustomButton";

const Admin = ({ sideVal }) => {
  const [value, setValue] = useState({ min: "", max: "" });
  const [multiVal, setMultiVal] = useState("");
  const [price, setPrice] = useState("");
  const [response, setResponse] = useState([]);
  const body = {
    // mode: "no-cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwOTIxNDkxNTkwNSIsImF1dGgiOnsiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9LCJpYXQiOjE2NTM5OTUwMzYsImV4cCI6MTY1NDU5OTgzNn0.qEol-af6NZXkyuYY3iNFohNAfAzGopgSmWcY0_FGQUs",
    },
    body: JSON.stringify({
      amount: price,
      userId: "612c61335975b03ac35d99ea",
    }),
  };

  const handleChange = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    setValue({ ...value, [name]: val });
  };

  const handleChangeMulti = (e) => {
    setMultiVal(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = () => {};
  const handleSubmitForm = () => {
    fetch("http://185.239.106.26:8080/api/admin/payLink/store", body)
      .then((response) => response.json(response))
      .then((res) => {
        localStorage.setItem("res_code", JSON.stringify(res?.code));
      })
      .catch((err) => console.log(err));
  };

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwOTIxNDkxNTkwNSIsImF1dGgiOnsiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9LCJpYXQiOjE2NTM5OTUwMzYsImV4cCI6MTY1NDU5OTgzNn0.qEol-af6NZXkyuYY3iNFohNAfAzGopgSmWcY0_FGQUs",
    },
  };

  function search() {
    fetch(
      `http://185.239.106.26:8080/api/admin/payLink/links?used=false&expired=false&userId=612c61335975b03ac35d99ea&minValue=${value.min}&maxValue=${value.max}`,
      requestOptions
    )
      .then((response) => response.json(response))
      .then((data) => {
        if (data?.status === "ok") {
          if (data?.data?.length > 0) {
            setResponse(data?.data);
            console.log("ok");
          } else {
            console.log("No data ");
          }
        } else {
          console.log("something went wrong");
        }
      });
  }

  function Delete(id) {
    const requestOptions = {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwOTIxNDkxNTkwNSIsImF1dGgiOnsiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9LCJpYXQiOjE2NTM5OTUwMzYsImV4cCI6MTY1NDU5OTgzNn0.qEol-af6NZXkyuYY3iNFohNAfAzGopgSmWcY0_FGQUs",
      },
    };

    fetch(
      `http://185.239.106.26:8080/api/admin/payLink/delete/${id}`,
      requestOptions
    )
      .then((response) => response.json(response))
      .then((data) => {
        if (data.status == "ok") {
          console.log("deleted");
          search();
        }
      });
  }

  return (
    <div className={classes.root}>
      {sideVal === "create" && (
        <>
          <CardContainer title="نام دانش آموز">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TextField
                value={value.min}
                handleChange={handleChange}
                name="firstName"
                placeholder="حداقل"
              />
              <TextField
                value={value.max}
                handleChange={handleChange}
                name="lastName"
                placeholder="حداکثر "
              />
              <CustomButton onClick={search} placeholder="یافتن" />
            </div>
          </CardContainer>
          <CardContainer title="توضیحات">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <MultiLineText
                value={multiVal}
                handleChange={handleChangeMulti}
                name="lastName"
                placeholder="توضیحات"
                width={100}
              />
            </div>
          </CardContainer>
          <CardContainer title="مبلغ">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TextField
                value={price}
                handleChange={handleChangePrice}
                name="mablagh"
                placeholder="مبلغ"
              />
              <h2>تومان</h2>
            </div>
          </CardContainer>
          <CustomButton onClick={handleSubmitForm} placeholder="پرداخت" />
        </>
      )}
      {sideVal === "delete" &&
        (response?.data?.length > 0 ? (
          <>
            {response.map((item) => (
              <CardContainer title="نام دانش آموز">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    value={item?.student?.name}
                    handleChange={handleChange}
                    name="firstName"
                    placeholder="نام"
                  />
                  <TextField
                    value={item?.student?.last_name}
                    handleChange={handleChange}
                    name="lastName"
                    placeholder="نام خانوادگی"
                  />
                  <TextField
                    value={item?.amount}
                    handleChange={handleChangePrice}
                    name="mablagh"
                    placeholder="مبلغ"
                  />
                  <h2>تومان</h2>
                  <CustomButton
                    onClick={() => Delete(item?.id)}
                    placeholder="حذف"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <MultiLineText
                    value={item?.code}
                    handleChange={handleChangeMulti}
                    name="lastName"
                    placeholder="توضیحات"
                    width={100}
                  />
                </div>
              </CardContainer>
            ))}
          </>
        ) : (
          <>"no data"</>
        ))}
    </div>
  );
};

export default Admin;
