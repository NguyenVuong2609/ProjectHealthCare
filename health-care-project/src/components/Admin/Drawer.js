import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Col, Drawer, Form, Input, Row, Select, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import * as types from "../../actions";
const { Option } = Select;

export default function DrawerForm() {
  const dataView = useSelector((state) => state.userViewData);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const [newData, setNewData] = useState({});
  useEffect(() => {
    if (dataView !== "") {
      setUserData({
        ...dataView.data,
        status: dataView.data.status ? "true" : "false",
        rank: dataView.data.rank ? "true" : "false",
      });
    }
    setOpen(dataView.status);
  }, [dataView]);
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
    dispatch(types.act_view_user("", false));
  };
  const saveNewData = () => {
    console.log(newData);
    onClose();
  };
  const handleChange = (e) => {
    console.log(e);
    // let name = e.target.name;
    // let value = e.target.value;
    // setNewData({ ...newData, [name]: value });
  };
  const checkInfo = (e) => {
    console.log(e);
    // console.log(value);
  };
  return !open ? (
    <></>
  ) : (
    <Drawer
      title="Edit account"
      width={720}
      onClose={onClose}
      open={open}
      bodyStyle={{
        paddingBottom: 80,
      }}
      extra={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={saveNewData} type="primary">
            Save
          </Button>
        </Space>
      }
    >
      <Form
        layout="vertical"
        hideRequiredMark
        initialValues={userData}
        onChange={handleChange}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: "Please enter user name",
                },
              ]}
            >
              <Input placeholder="Please enter user name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="age"
              label="Age"
              rules={[
                {
                  required: true,
                  message: "Please enter age",
                },
              ]}
            >
              <Input
                style={{
                  width: "100%",
                }}
                placeholder="Please enter url"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please enter user email",
                },
              ]}
            >
              <Input placeholder="Please enter user email" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="address"
              label="Address"
              rules={[
                {
                  required: true,
                  message: "Please enter address",
                },
              ]}
            >
              <Input
                style={{
                  width: "100%",
                }}
                placeholder="Please enter address"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="status"
              label="Status"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select a option and change input text above"
                onChange={checkInfo}
                labelInValue
                allowClear
              >
                <Option title={"status"} value="true">Actived</Option>
                <Option title={"status"} value="false">Banned</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="rank"
              label="Rank"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select a option and change input text above"
                onChange={checkInfo}
                labelInValue
                allowClear
              >
                <Option title={"rank"} value="true">VIP member</Option>
                <Option title={"rank"} value="false">Normal</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select a option and change input text above"
                onChange={checkInfo}
                labelInValue
                allowClear
              >
                <Option title={"gender"} value="male">Male</Option>
                <Option title={"gender"} value="female">Female</Option>
                <Option title={"gender"} value="other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                  message: "please enter url description",
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="please enter url description"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
}
