<template>
  <div class="task-list-content">
    <table class="task-list">
      <tbody>
        <tr v-if="$fetchState.pending">
          <td colSpan="{3}" class="loading">
            Loading...
          </td>
        </tr>
        <tr v-else-if="$fetchState.error">
          <td colSpan="{3}" class="loading">
            Loading...
          </td>
        </tr>
        <div v-else>
          <TaskItem v-for="task of tasks" :key="task.id" :task="task" />
        </div>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: []
    };
  },
  async fetch() {
    const { data } = await this.$axios.get(`http://localhost:5000/api/tasks`);
    this.tasks = data;
    this.$store.dispatch("setTasks", this.tasks);
  },
};
</script>

<style lang="scss" scoped>



.task-list {
  width: 100%;
  padding: 0 10vh;
  color: #fff;
}

.loading {
  padding-top: 5vh;
  text-align: center;
  vertical-align: middle;
  width: 100vh;
}
</style>
