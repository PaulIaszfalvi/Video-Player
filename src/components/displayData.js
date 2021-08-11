import React, { Component } from "react";

class displayData extends Component {
  render() {
    return (
      <li key={this.props.id} className={this.props.modifier}>
        <div>{this.props.name}</div>
        <div>{this.props.directory}</div>

        {/* <div>{item.files.getElementById}</div> */}
      </li>
    );
  }
}

export default displayData;
