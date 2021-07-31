<template>
  <div class="container">
    <div class="todo-page">
      <header class="todo-page-header">
        <div class="todo-page-title">
          TodoApp
        </div>
      </header>
      <div v-if="selected"><UpdateTask :task="selected" /></div>
      <div v-else><CreateTask /></div>
      <!-- <SearchTask /> -->
      <!-- {selectedTask === null ? <CreateTask /> : <UpdateTask task={selectedTask} />} -->

      <!-- <HomeNavigation /> -->
      <TaskList />
    </div>
  </div>
</template>

<script>
export default {
  middleware: "authenticate",
  computed: {
    selected() {
      return this.$store.getters.taskSelected;
    }
  },
  layout: "main"
};
</script>

<style lang="scss" scoped>
.todo-page {
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  max-width: 70%;
  margin: 0 auto;
  padding: 0 5vh;
}

.todo-page-tittle {
  text-align: top;
  margin: 10vh;
}

.topnav {
  position: relative;
  overflow: hidden;
  background-color: #fff;
}

.topnav a.active {
  background-color: #4caf50;
  color: white;
}

.topnav-centered a {
  float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.todo-page-header {
  padding-top: 2vh;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  font-size: calc(10px + 2vmin);
  color: white;
}

.todo-page-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
