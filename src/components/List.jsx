import React from "react";
import Form from "./Form";

const List = () => {
  return (
    <div>
      <Form></Form>
      <div>
        <ol className="list-group">

          <div className="list-group-item w-80 mt-3 shadow-sm">
            <div className="row">
              <div className="col-9 offset-1">Todo List Tasks Message</div>
              <div className="col-2"><i className="fa-solid fa-trash"></i></div>
            </div>
          </div>

        <div className="list-group-item w-80 mt-3 shadow-sm">
            <div className="row">
              <div className="col-9 offset-1">Todo List Tasks Message</div>
              <div className="col-2"><i className="fa-solid fa-trash"></i></div>
            </div>
          </div>

          <div className="list-group-item w-80 mt-3 shadow-sm">
            <div className="row">
              <div className="col-9 offset-1">Todo List Tasks Message</div>
              <div className="col-2"><i className="fa-solid fa-trash"></i></div>
            </div>
          </div>

          <div className="list-group-item w-80 mt-3 shadow-sm bg-danger text-white">
            <div className="row">
              <div className="col-9 offset-1">Todo List Tasks Message</div>
              <div className="col-2"><i className="fa-solid fa-trash"></i></div>
            </div>
          </div>

          
        </ol>
      </div>
    </div>
  );
};

export default List;
