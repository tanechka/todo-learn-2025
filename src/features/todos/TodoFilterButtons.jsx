import { memo } from 'react';
import { FILTERS } from './todoConst';

const TodoFilterButtons = ({ onFilter, activeCount, completedCount, allCount }) => {
    return <div className='todo-filter'>
        <button className="filter-btn" onClick={() => {
            onFilter(FILTERS.ALL);
        }}>
            Все { allCount }
        </button>
        <button className="filter-btn" onClick={() => {
            onFilter(FILTERS.ACTIVE);
         }}>
            Активные { activeCount }
        </button>
        <button className="filter-btn" onClick={() => {
            onFilter(FILTERS.COMPLETED);
        }}>
            Выполненные { completedCount }
        </button>
    </div>
}
export default memo(TodoFilterButtons);