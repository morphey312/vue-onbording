export default {
    setIncreaseCount(state, payLoad) {
        state.count += payLoad;
    },
    setDecreaseCount(state, payLoad) {
        state.count -= payLoad;
    },
    setTodoItems(state, items) {
        state.todoItems = items;
    }
}