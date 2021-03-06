import React, { Component } from "react";

import { Row, Col, Table, Divider, Tag } from "antd";

const { Column, ColumnGroup } = Table;

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

class VehicleTypes extends Component {
  render() {
    return (
      <Row>
        <Col>
          <h1>Vehicle Types</h1>
        </Col>
        <Col>
          <Table size="small" dataSource={data}>
            <Column title="Age" dataIndex="age" key="age" />
            <Column title="Address" dataIndex="address" key="address" />
            <Column
              title="Tags"
              dataIndex="tags"
              key="tags"
              render={tags => (
                <span>
                  {tags.map(tag => (
                    <Tag color="blue" key={tag}>
                      {tag}
                    </Tag>
                  ))}
                </span>
              )}
            />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <span>
                  <a href="javascript:;">Invite {record.lastName}</a>
                  <Divider type="vertical" />
                  <a href="javascript:;">Delete</a>
                </span>
              )}
            />
          </Table>
        </Col>
      </Row>
    );
  }
}

export default VehicleTypes;
