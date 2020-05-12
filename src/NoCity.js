import React, { useState } from "react"
import Header from "./Headers/Header.js"
import { Form, Input, Button } from "antd"
import axios from "axios"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const FormItem = Form.Item

// const checkStatus = (res, opts) => {
//   if (res.status >= 200 && res.status < 400) {
//     return opts && opts.parseAs === "json" ? res.json() : res.text()
//   } else {
//     return Promise.reject(res)
//   }
// }

function validateEmail(email) {
  const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  return re.test(email)
}

function NoCity(props) {
  const [email, setEmail] = useState("")
  const [emailMessage, setEmailMessage] = useState("")

  const onClick = () => {
    if (!validateEmail(email)) {
      setEmailMessage("Not a valid email")
      return
    }

    toast.success("Hold up, saving your email...", {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true,
      autoClose: 3000,
      className: "blueSuccessColor",
    })

    axios({
      method: "POST",
      url: "/.netlify/functions/handleEmail",
      data: {
        email,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      json: true,
    })
      .then((response) => {
        toast.success("Email successfully saved", {
          position: toast.POSITION.TOP_CENTER,
          hideProgressBar: true,
          autoClose: 3000,
          className: "blueSuccessColor",
        })
        setEmail("")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <ToastContainer />
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            color: "black",
            fontFamily: "Nobile, sans-serif",
            fontSize: "8vw",
            textAlign: "center",
          }}
        >
          {props.cityName}
        </div>
      </div>

      <div style={{ marginRight: "20%", marginLeft: "20%", marginTop: "20px" }}>
        <div
          style={{
            margin: "auto",
            maxWidth: "600px",
          }}
        >
          {props.cityState === "notVisited" && (
            <p className="copytext">
              Unfortunately, we haven't visited {props.cityName} yet. Put your email down
              below to be the first to know when we visit this city.
            </p>
          )}
          {props.cityState === "pending" && (
            <p className="copytext">
              We've been to {props.cityName}. But we still need to write a bomb ass
              article for it. Put your email down to be the first to know when we have
              some new hot fire for ya.
            </p>
          )}
          <FormItem
            label="Email Address"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Input
              style={{ width: "400px" }}
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setEmailMessage("")
              }}
            />
            {emailMessage && <div style={{ color: "red" }}>{emailMessage}</div>}
          </FormItem>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="default"
              htmlType="submit"
              style={{ backgroundColor: "#4B6EDA", color: "#FFFFFF" }}
              onClick={onClick}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoCity
