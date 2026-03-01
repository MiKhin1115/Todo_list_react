import React from "react";

const Cart = ({tasks, deleteTask}) => {

 const handleDeleteTask = (id) => {
  if(window.confirm("Are you sure ?")){
    deleteTask(id)
  }
  
 }
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="list-group-item w-80 mt-3 shadow-sm">
          <div className="row">
            <div className="col-9 offset-1">{task.tasks}</div>
            <div className="col-2">
              <i className="fa-solid fa-trash" onClick={ () => handleDeleteTask(task.id)}></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
