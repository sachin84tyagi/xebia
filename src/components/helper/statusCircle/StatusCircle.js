import React, { Component } from 'react';

import './StatusCircle.css';

class StatusCircle extends Component {
  render() {
    const {
      backgroundColor,
      foregroundColor,
      height,
      width,
      payload
    } = this.props;

    return (

      <div
        className="status-container"
        style={{
          background: backgroundColor,
          color: foregroundColor,
          height: height,
          width: width
        }
        }
      >
        <div>
          <div><strong>Name : </strong>{payload.name}</div>
          <div><strong>Population : </strong>{payload.population}</div>
        </div>
      </div >
    );
  }
}

export default StatusCircle;
