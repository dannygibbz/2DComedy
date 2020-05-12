import React from "react"
import { Form, Input, notification, Button } from "antd"
import Header from "./Headers/Header.js"
const FormItem = Form.Item

const checkStatus = (res, opts) => {
  if (res.status >= 200 && res.status < 400) {
    return opts && opts.parseAs === "json" ? res.json() : res.text()
  } else {
    return Promise.reject(res)
  }
}

function ContactForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault()
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values)
        /* NOTE: each key in values must be 1-1 with the name attributes of the form definition in index.html */
        const fetchOpts = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ "form-name": "contact", ...values }),
        }
        fetch("/.netlify/functions/handleContact", fetchOpts)
          .then((res) => checkStatus(res))
          .then((text) => {
            notification.open({
              message: "Message Sent",
              description: "Thanks for reaching out! We'll get back to you shortly.",
              duration: 3,
              placement: "bottomRight",
            })
            props.form.resetFields()
          })
          .catch((err) => console.log("Error: ", err))
      }
    })
  }

  const { getFieldDecorator } = props.form

  const formItemLayout = {
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
  }
  return (
    <Form name="contact" onSubmit={handleSubmit} layout="vertical">
      <FormItem {...formItemLayout} label="Name">
        {getFieldDecorator("name", {
          rules: [
            {
              required: true,
              message: "Please input your name",
              whitespace: true,
            },
          ],
        })(<Input name="name" placeholder="Enter your name" />)}
      </FormItem>
      <FormItem {...formItemLayout} label="Email Address">
        {getFieldDecorator("email", {
          rules: [
            {
              type: "email",
              message: "The input is not a valid email address",
            },
            {
              required: true,
              message: "Please input your email",
            },
          ],
        })(<Input name="email" placeholder="Enter your email" />)}
      </FormItem>
      <FormItem {...formItemLayout} label="Message">
        {getFieldDecorator("message", {
          rules: [
            {
              required: true,
              message: "Please input a message",
              whitespace: true,
            },
          ],
        })(<Input.TextArea name="message" placeholder="Message goes here" />)}
      </FormItem>
      <div data-netlify-recaptcha className="mb-2" />
      <FormItem style={{ display: "flex", justifyContent: "center" }}>
        <Button
          type="default"
          htmlType="submit"
          style={{ backgroundColor: "#4B6EDA", color: "#FFFFFF" }}
        >
          Send Message
        </Button>
      </FormItem>
    </Form>
  )
}

const WrappedContactForm = Form.create()(ContactForm)

export default function Contact() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "500px",
            background: "#f5f5f5",
            marginTop: "20px",
            padding: "20px",
          }}
        >
          <WrappedContactForm />
          <div>
            <b>For Booking:</b>
            <br /> Email: <a href="mailto:2dansinavan@gmail.com">2dansinavan@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}
