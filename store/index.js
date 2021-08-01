import Vuex from "vuex";
import jwt_decode from "jwt-decode";
const createStore = () => {
  return new Vuex.Store({
    state: {
      tasks: [],
      userInfo: {},
      taskSelected: null
    },
    mutations: {
      updateUserInfo(state, payload) {
        const newState = {
          ...state,
          userInfo: payload
        };
        console.log(newState);
        return newState;
      },
      logout() {
        localStorage.clear();
        const newState = {
          tasks: [],
          authToken: null,
          taskSelected: null
        };
        return newState;
      },
      loadTasks(state, payload) {
        state.tasks = payload.data;
        console.log(state.tasks);
      },
      selectTask(state, payload) {
        state.taskSelected = payload;
      },
      createTask(state, payload) {
        console.log(payload);
        state.tasks.push(payload);
      },
      updateTask(state, taskUpdated) {
        const index = state.tasks.findIndex(
          task => task._id === taskUpdated._id
        );
        if (index !== -1) {
          state.tasks.splice(index, 1, taskUpdated);
          state.taskSelected = null;
        }
      },
      changeStatusTask(state, id) {
        const index = state.tasks.findIndex(task => task._id === id);
        if (index !== -1) {
          state.tasks = state.tasks.splice(index, 1, taskUpdated);
        }
      },
      deleteTask(state, id) {
        const index = state.tasks.findIndex(task => task._id === id);
        if (index !== -1) {
          state.tasks.splice(index, 1);
        }
      }
    },
    actions: {
      loadTasks(vuexContext) {
        return this.$axios
          .get(`tasks/userId=${localStorage.getItem("userId")}`)
          .then(res => {
            vuexContext.commit("loadTasks", res);
            return res;
          });
      },
      selectTask(vuexContext, payload) {
        vuexContext.commit("selectTask", payload);
      },
      createTask(vuexContext, payload) {
        return this.$axios.post("tasks", payload).then(res => {
          console.log(res);
          vuexContext.commit("createTask", res.data);
          return res.status;
        });
      },
      updateTask(vuexContext, payload) {
        return this.$axios
          .post(`tasks/id=${payload._id}`, payload)
          .then(res => {
            vuexContext.commit("updateTask", res.data);
            return res.status;
          });
      },
      changeStatusTask(vuexContext, id) {
        return this.$axios.post(`tasks/status/id=${id}`).then(res => {
          vuexContext.commit("changeStatusTask", res.data);
          return res.status;
        });
      },
      deleteTask(vuexContext, payload) {
        return this.$axios.delete(`tasks/id=${payload}`).then(res => {
          vuexContext.commit("deleteTask", payload);
          return res.status;
        });
      },
      authentication(vuexContext, payload) {
        return this.$axios.post("auth", payload).then(res => {
          const { user } = jwt_decode(res.data["access-token"]);
          vuexContext.commit("updateUserInfo", {
            token: res.data["access-token"],
            user
          });
          this.$auth.isLoggedIn = true;
          localStorage.setItem("authToken", res.data["access-token"]);
          localStorage.setItem("userId", user._id);
          return res.status;
        });
      },
      registerUser(vuexContext, payload) {
        console.log(payload);
        return this.$axios.post("users/register", payload).then(res => {
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
