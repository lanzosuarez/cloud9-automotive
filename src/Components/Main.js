import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Route, Switch } from "react-router-dom";
import { APP_ROUTES } from "../routes";
import Cars from "./Vehicles/Cars";
import VehicleTypes from "./Vehicles/VehicleTypes";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const {
  VEHICLES: { CAR_ROUTE, VEHICLE_TYPES }
} = APP_ROUTES;

const MAIN_ROUTES = (
  <Switch>
    <Route exact path="/a" component={Cars} />
    <Route path={CAR_ROUTE} component={Cars} />
    <Route path={VEHICLE_TYPES} component={VehicleTypes} />
  </Switch>
);

class Main extends Component {
  state = {
    collapsed: true
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  goto = ({ _, key, __ }) => {
    this.props.history.push(key);
  };
  render() {
    console.log(this.props);
    return (
      <Layout>
        <Header className="header">
          <div className="app-logo" />
        </Header>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            style={{ background: "#fff" }}
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu
              onSelect={this.goto}
              defaultSelectedKeys={[this.props.location.pathname]}
              mode="inline"
            >
              <SubMenu
                key="vehicles"
                title={
                  <span>
                    <Icon type="car" />
                    <span>Vehicles</span>
                  </span>
                }
              >
                <Menu.Item key={CAR_ROUTE}>Cars</Menu.Item>
                <Menu.Item key={VEHICLE_TYPES}>Vehicle Types</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "24px 24px 24px" }}>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              {MAIN_ROUTES}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Main;
