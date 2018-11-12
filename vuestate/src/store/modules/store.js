export default {
    state: {
        todos: [],

    },
    mutations: {
        addtodo: (state,item) =>{
            // console.log(item)
            state.todos.push(item)
            console.log(state.todos)
        },
        delItem: (state, index) => {
            state.todos.splice(index, 1)
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
        }
    }
}