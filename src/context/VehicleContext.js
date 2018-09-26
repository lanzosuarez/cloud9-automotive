import React from "react";

const VehicleContext = React.createContext();

export const VehicleComsumer = VehicleContext.Consumer;

export function VehicleConnect(params = []) {
  return function VehicleConnectedComponent(Component) {
    return function ConnectedComponentParameter(props) {
      return (
        <VehicleComsumer>
          {state => {
            let requestedState = {};
            params.forEach(param => {
              if (state[param] !== undefined) {
                requestedState[param] = state[param];
              }
            });
            return <Component {...props} {...requestedState} />;
          }}
        </VehicleComsumer>
      );
    };
  };
}

export class VehicleProvider extends React.Component {
  state = {
    cars: null,
    vehicleTypes: null
  };

  setVehicleState = (key, val) => this.setState({ [key]: val });

  render() {
    return (
      <VehicleContext.Provider
        value={{
          vehicleState: this.state,
          vehicleActions: { setVehicleState: this.setVehicleState }
        }}
      >
        {this.props.children}
      </VehicleContext.Provider>
    );
  }
}
