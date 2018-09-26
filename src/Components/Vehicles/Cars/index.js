import React, { Component } from "react";

import { Row, Col, Table, Divider, Button } from "antd";
import { VehicleConnect } from "../../../context/VehicleContext";
import VehicleService from "../../../services/VehiclesService";

const { Column } = Table;

class Cars extends Component {
  state = { loading: false };

  toggleLoad = () => this.setState({ loading: !this.state.loading });

  componentDidMount() {
    this.getCars();
  }

  getCars = async () => {
    const { setVehicleState } = this.props.vehicleActions;
    this.toggleLoad();
    try {
      let res = await VehicleService.getCars();
      this.toggleLoad();
      console.log(res);
      setVehicleState(res.data);
    } catch (error) {
      console.error(error);
      this.toggleLoad();
    }
  };

  render() {
    const { cars } = this.props.vehicleState;

    return (
      <Row>
        <Col>
          <Row type="flex" justify="space-between">
            <h1>Cars</h1>
            <Button type="primary">Add Car</Button>
          </Row>
        </Col>
        <Col>
          <Table
            loading={this.state.loading}
            scroll={{ x: 1500, y: 500 }}
            size="small"
            dataSource={cars || []}
          >
            <Column
              fixed="left"
              width={100}
              title="Brand Name"
              dataIndex="brand_name"
              key="brand_name"
            />
            <Column
              fixed="left"
              width={100}
              title="Carl Model"
              dataIndex="car_model"
              key="car_model"
            />
            <Column title="Brand New" dataIndex="brand_new" key="brand_new" />
            <Column title="Price" dataIndex="price" key="price" />
            <Column
              title="Year Model"
              dataIndex="year_model"
              key="year_model"
            />
            <Column title="Color" dataIndex="color" key="color" />
            <Column title="Milage" dataIndex="milage" key="milage" />
            <Column
              title="Vehicle Type"
              dataIndex="vehicle_type"
              key="vehicle_type"
            />
            <Column
              title="Wheel Configuration"
              dataIndex="wheel_config"
              key="wheel_config"
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

export default VehicleConnect(["vehicleState", "vehicleActions"])(Cars);
