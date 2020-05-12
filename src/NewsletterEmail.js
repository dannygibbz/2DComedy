import React, { useState } from "react"
import { Input, Button } from "antd"
import Dcresc from "./images/Dcresc.png"
import DGibbs from "./images/DGibbs.png"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function validateEmail(email) {
  const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  return re.test(email)
}

export default function EmailForm(props) {
  const isMobile = window.innerWidth < 768
  const [email, setEmail] = useState("")
  const [emailMessage, setEmailMessage] = useState("")

  const onClick = () => {
    if (!validateEmail(email)) {
      setEmailMessage("Not a valid email")
      return
    }

    toast.success("Saving email, don't navigate away...", {
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

  if (isMobile) {
    return (
      <div
        style={{
          margin: "auto",
          maxWidth: "580px",
          backgroundColor: "#616161",
          paddingRight: "20px",
          paddingLeft: "20px",
          paddingBottom: "20px",
          paddingTop: "20px",
          marginBottom: "20px",
        }}
      >
        <ToastContainer />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            src={Dcresc}
            height={120}
            alt={"Dan Crescimanno"}
            style={{ marginTop: "13px" }}
          />

          <img
            src={DGibbs}
            height={120}
            alt={"Dan Gibbons"}
            style={{ marginTop: "13px" }}
          />
        </div>

        <p
          style={{
            color: "white",
            paddingRight: "20px",
            paddingLeft: "20px",
            fontSize: "16px",
          }}
        >
          <i>
            Put your email in to get updates about cities we've been to, videos we
            created, or shenanigans that we got into.
          </i>
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Input
            style={{ maxWidth: "400px" }}
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setEmailMessage("")
            }}
          />

          <Button
            type="default"
            htmlType="submit"
            style={{ backgroundColor: "#4B6EDA", color: "#FFFFFF" }}
            onClick={onClick}
          >
            Submit
          </Button>
        </div>
        {emailMessage && (
          <div style={{ color: "orange", marginLeft: "10px" }}>{emailMessage}</div>
        )}
      </div>
    )
  }

  return (
    <div
      style={{
        margin: "auto",
        maxWidth: "580px",
        backgroundColor: "#616161",
        paddingRight: "20px",
        paddingLeft: "20px",
        paddingBottom: "20px",
        paddingTop: "20px",
        marginBottom: "20px",
      }}
    >
      <ToastContainer />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img
          src={Dcresc}
          height={120}
          alt={"Dan Crescimanno"}
          style={{ marginTop: "13px" }}
        />
        <div style={{ color: "white", fontSize: "38px" }}>Where to next?</div>
        <img
          src={DGibbs}
          height={120}
          alt={"Dan Gibbons"}
          style={{ marginTop: "13px" }}
        />
      </div>

      <p
        style={{
          color: "white",
          paddingRight: "20px",
          paddingLeft: "20px",
          fontSize: "16px",
        }}
      >
        <i>
          Put your email in to get updates about cities we've been to, videos we created,
          or shenanigans that we got into.
        </i>
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
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

        <Button
          type="default"
          htmlType="submit"
          style={{ backgroundColor: "#4B6EDA", color: "#FFFFFF" }}
          onClick={onClick}
        >
          Submit
        </Button>
      </div>
      {emailMessage && (
        <div style={{ color: "orange", marginLeft: "10px" }}>{emailMessage}</div>
      )}
    </div>
  )
}
