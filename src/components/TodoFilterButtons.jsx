const statusTodosCount = (status) => {
    return getTodosStatus(status).length;
}

const getTodosStatus = (status, todos) => {
    return todos.filter((item) => item.done === status);
}

const STATUS = {
    DONE: true,
}

const TodoFilterButtons = ({setFilteredTodos, todos }) => {
    return <>
        <button onClick={() => {
            setFilteredTodos(todos);
        }}>
            Все {todos.length}
        </button>
        <button onClick={() => {
            setFilteredTodos(getTodosStatus(!STATUS.DONE, todos));
         }}>
            Активные {statusTodosCount(!STATUS.DONE)}
        </button>
        <button onClick={() => {
            setFilteredTodos(getTodosStatus(STATUS.DONE, todos));
        }}>
            Выполненные {statusTodosCount(STATUS.DONE)}
        </button>
    </>
}
export default TodoFilterButtons;