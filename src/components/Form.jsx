import React, { useState} from "react";

const Form = ({submitTask}) => {

  const [userTask, setUserTask] = useState('')

  const formSubmitHandling = () => {
    submitTask(userTask)
    setUserTask('')
  }
  return (
    <div>
      <h3 className="mb-4 text-white">Todo Lists</h3>
      <div className="row">
        <div className="col-6 offset-3">
          <input value={userTask} onChange={ e => setUserTask(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter Tasks..."
          />
        </div>
        <div className="col-3">
          <button type = 'button' onClick={() => formSubmitHandling()} className="btn btn-primary">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
