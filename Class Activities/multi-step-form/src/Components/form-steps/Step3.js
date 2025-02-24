import React, { Component } from "react";

class Step3 extends Component {
  render() {
    const { formData, handleChange } = this.props;
    return (
      <>
        <h1>Step 3 </h1>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          ></input>
        </label>
      </>
    );
  }
}

export default Step3;
