import { FILTERS } from './todoConst';

const TodoFilterButtons = ({ todos, setFilter, activeCount, completedCount }) => {
    return <div className='todo-filter'>
        <button className="filter-btn" onClick={() => {
            setFilter(FILTERS.ALL);
        }}>
            Все {todos?.length}
        </button>
        <button className="filter-btn" onClick={() => {
            setFilter(FILTERS.ACTIVE);
         }}>
            Активные {activeCount}
        </button>
        <button className="filter-btn" onClick={() => {
            setFilter(FILTERS.COMPLETED);
        }}>
            Выполненные {completedCount}
        </button>
    </div>
}
export default TodoFilterButtons;