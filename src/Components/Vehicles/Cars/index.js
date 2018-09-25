import React, { Component } from "react";

import { Row, Col, Table, Divider, Button } from "antd";

const { Column } = Table;

const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

class Cars extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Row type="flex" justify="space-between">
            <h1>Cars</h1>
            <Button type="primary">Add Car</Button>
          </Row>
        </Col>
        <Col>
          <Table scroll={{ x: 1500, y: 500 }} size="small" dataSource={data}>
            <Column
              fixed="left"
              width={100}
              title="Brand Name"
              dataIndex="age"
              key="age"
            />
            <Column
              fixed="left"
              width={100}
              title="Carl Model"
              dataIndex="address"
              key="address"
            />
            <Column title="Brand New" dataIndex="address" key="address" />
            <Column title="Price" dataIndex="address" key="address" />
            <Column title="Year Model" dataIndex="address" key="address" />
            <Column title="Color" dataIndex="address" key="address" />
            <Column title="Milage" dataIndex="address" key="address" />
            <Column title="Vehicle Type" dataIndex="address" key="address" />
            <Column
              title="Wheel Configuration"
              dataIndex="address"
              key="address"
            />
            <Column
              fixed="right"
              width={100}
              title="Action"
              key="action"
              render={() => (
                <span>
                  <a>Edit</a>
                  <Divider type="vertical" />
                  <a>Delete</a>
                </span>
              )}
            />
          </Table>
        </Col>
      </Row>
    );
  }
}

export default Cars;
