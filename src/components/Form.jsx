import React from "react";

const Form = () => {
  return (
    <div>
      <h3 className="mb-4 text-white">Todo Lists</h3>
      <div className="row">
        <div className="col-6 offset-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Tasks..."
          />
        </div>
        <div className="col-3">
          <button className="btn btn-primary">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
