export default {
    state: {
        userName: [],
    },
    mutations: {
        addUser: (state,item) =>{
            state.userName.push(item)
            // console.log('mutations',item)
        },
        delUser: (state, num) => {
            state.userName.splice(num)
        }
    },
    getters: {
        showTodoStore: state => state.userName
    },
    actions: {
        add({commit},payload) {
            commit('addUser', payload)
            // console.log(payload)
        },
        del({commit},payload) {
            commit('delUser',payload)
        }
    }
}