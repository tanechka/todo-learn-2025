import FILTERS from './todoConst';

const TodoFilterButtons = ({ todos, setFilter, activeCount, completedCount }) => {
    return <div>
        <button onClick={() => {
            setFilter(FILTERS.ALL);
        }}>
            Все {todos?.length}
        </button>
        <button onClick={() => {
            setFilter(FILTERS.ACTIVE);
         }}>
            Активные {activeCount}
        </button>
        <button onClick={() => {
            setFilter(FILTERS.COMPLETED);
        }}>
            Выполненные {completedCount}
        </button>
    </div>
}
export default TodoFilterButtons;