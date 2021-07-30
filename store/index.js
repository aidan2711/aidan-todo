import Vuex from "vuex";
import axios from "axios";
const createStore = () => {
  return new Vuex.Store({
    state: {
      tasks: [],
      authToken: null,
      taskSelected: null
    },
    mutations: {
      setToken(state, payload) {
        const newState = {
          ...state,
          authToken: payload
        };
        return newState;
      },
      setTasks(state, payload) {
        state.tasks = payload;
      },
      selectTask(state, payload) {
        state.taskSelected = payload;
      },
      createTask(state, payload) {
        return state.tasks.push(payload);
      },
      updateTask(state, taskUpdated) {
        const index = state.tasks.findIndex(
          task => task._id === taskUpdated._id
        );
        if (index !== -1) {
          return state.tasks.splice(index, 1, taskUpdated);
        }
      },
      changeStatusTask(state, taskUpdated) {
        const index = state.tasks.findIndex(
          task => task._id === taskUpdated._id
        );
        if (index !== -1) {
          return state.tasks.splice(index, 1, taskUpdated);
        }
      },
      deleteTask(state, payload) {
        const index = state.tasks.findIndex(task => task._id === payload);
        if (index !== -1) {
          return state.tasks.splice(index, 1);
        }
        return state.tasks.filter(task => task._id !== payload);
      }
    },
    actions: {
      setTasks(vuexContext, payload) {
        vuexContext.commit("setTasks", payload);
      },
      selectTask(vuexContext, payload) {
        vuexContext.commit("selectTask", payload);
      },
      createTask(vuexContext, payload) {
        return this.$axios
          .post("http://localhost:5000/api/tasks", payload)
          .then(res => {
            vuexContext.commit("createTask", res.data);
            return res.status;
          });
      },
      updateTask(vuexContext, payload) {
        return this.$axios
          .post(`http://localhost:5000/api/tasks/id=${payload._id}`, payload)
          .then(res => {
            vuexContext.commit("updateTask", payload);
            return res.status;
          });
      },
      changeStatusTask(vuexContext, payload) {
        return this.$axios
          .post(`http://localhost:5000/api/tasks/status/id=${payload}`)
          .then(res => {
            vuexContext.commit("changeStatusTask", res.data);
            return res.status;
          });
      },
      deleteTask(vuexContext, payload) {
        return this.$axios
          .delete(`http://localhost:5000/api/tasks/id=${payload}`)
          .then(res => {
            vuexContext.commit("deleteTask", payload);
            return res.status;
          });
      },
      authentication(vuexContext, payload) {
        return axios
          .post("http://localhost:5000/api/auth", payload)
          .then(res => {
            vuexContext.commit("setToken", res.data["access-token"]);
            return res.status;
          });
      }
    },
    getters: {
      decks(state) {
        return state.tasks;
      },
      taskSelected(state) {
        return state.taskSelected;
      },
      isLoggedIn(state) {
        return state.authToken != null;
      }
    }
  });
};

export default createStore;
