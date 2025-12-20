import { COUNTER_ACTION, INIT_COUNTER_STATE } from './counterActions';

function reducerCounter(state, action) {
    switch (action.type) {
        case COUNTER_ACTION.INCREMENT:
            return { ...state, count: state.count + 1}
        case COUNTER_ACTION.DECREMENT:
            return  { ...state, count: Math.max(0, state.count - 1) }
        case COUNTER_ACTION.RESET:
            return  { ...state, count: INIT_COUNTER_STATE.COUNT }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export default reducerCounter