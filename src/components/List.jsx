import Cart from "./Cart"

const List = ({tasks, deleteTask}) => {
  return (
    <div>
     
      <div>
        <ol className="list-group">
            <Cart tasks={tasks} deleteTask={deleteTask}/>
        </ol>
      </div>
    </div>
  );
};

export default List;
