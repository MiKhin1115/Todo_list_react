import React from "react";
import Form from "./Form";
import Cart from "./Cart"

const List = ({tasks}) => {
  return (
    <div>
     
      <div>
        <ol className="list-group">
            <Cart tasks={tasks}/>
        </ol>
      </div>
    </div>
  );
};

export default List;
