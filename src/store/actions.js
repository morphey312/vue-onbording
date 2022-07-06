import { axiosInstance } from "@/service/api";

export default {
    getTodoList({commit}) {
        return axiosInstance.get('todo',{
            })
            .then((resp) => {
                commit('setTodoItems', resp.data.data)
            })
            .catch((err) => console.log(err, err.message));
    },
    addItemToList({ dispatch }, item) {
        return axiosInstance.post('todo', item)
            .then((resp) => {
                dispatch('getTodoList')
            })
    },
    updateItemInList({dispatch}, item) {
        return axiosInstance.patch(`todo/${item.id}`, item)
            .then((resp) => {
                dispatch('getTodoList')
            })
    },
    deleteTodoItem({dispatch}, item) {
        return axiosInstance.delete(`todo/${item}`)
            .then((resp) => {
                dispatch('getTodoList')
            })
    },
    increaseCount({commit}, payLoad) {
        commit('setIncreaseCount', payLoad);
    },
    decreaseCount({commit}, payLoad) {
        commit('setDecreaseCount', payLoad);
    },
}