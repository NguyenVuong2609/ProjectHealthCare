import React from "react";
import { Col, Row } from "antd";
import CardItem from "./CardItem";
import "../../styles/Solutions.css"

export default function SolutionMain() {
  return (
    <div className="protect">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage text_align_center">
              <h2>How to Protect Yourself</h2>
              <p>
                when looking at its layout. The point of using Lorem Ipsum is
                that it has a more-or-less normal distribution of letters, as
                opposed to using
              </p>
            </div>
          </div>
        </div>
        <div className="solutions">
        <Row gutter={16}>
          <Col span={8}>
            <CardItem/>
          </Col>
          <Col span={8}>
            <CardItem/>
          </Col>
          <Col span={8}>
            <CardItem/>
          </Col>
        </Row>
        </div>
      </div>
    </div>
  );
}
