import React, { useState } from "react";
import CardContainer from "../CardContainer/CardContainer";
import TextField from "../TextField/TextField";
import MultiLineText from "../MultiLineText/MultiLineText";
import classes from "./Student.module.scss";
import CustomButton from "../CustomButton/CustomButton";

const Student = ({ sideVal }) => {
  const [value, setValue] = useState({ firstName: "", lastName: "" });
  const [multiVal, setMultiVal] = useState("");
  const [price, setPrice] = useState("");
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
                value={value.firstName}
                handleChange={handleChange}
                name="firstName"
                placeholder="نام"
              />
              <TextField
                value={value.lastName}
                handleChange={handleChange}
                name="lastName"
                placeholder="نام خانوادگی"
              />
              <TextField
                value={price}
                handleChange={handleChangePrice}
                name="mablagh"
                placeholder="مبلغ"
              />
              <h2>تومان</h2>
              <CustomButton onClick={handleSubmit} placeholder="پرداخت" />
            </div>
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
        </>
      )}
    </div>
  );
};

export default Student;
