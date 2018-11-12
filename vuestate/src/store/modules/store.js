import Vue from "vue";

export default {
    state: {
        todos: [],
    },
    mutations: {
        addtodo: (state,item) =>{
            // console.log(item.key01)
            state.todos.push({'item':item.key00, 'active':item.key01, 'sno':item.key02})
            // console.log(state.todos)
        },
        delItem: (state, index) => {
            state.todos.splice(index, 1)
        },
        editItem: (state, val) => {
            // console.log(state.todos, val.key1, val.key2)
            Vue.set(state.todos, val.key1, {'item':val.key2, 'active': val.key3, 'sno': val.key4})
        }
    },
    getters: {
        showTodoStore: state => state.todos
    },
    actions: {
        add({commit},payload) {
            // console.log(payload)
            commit('addtodo', payload)
        },
        delete({commit}, payload) {
            commit('delItem', payload)
        },
        edit ({commit}, payload) {
            // console.log(payload)
            commit('editItem', payload)
        }
    }
}