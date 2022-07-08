import { axiosInstance } from "@/service/api";

export default {
    getTodoList({commit}, token = null) {
        if(!token) {
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
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
}