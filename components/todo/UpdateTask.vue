<template>
  <div class="update-task">
    <form @submit.prevent="">
      <div class="input-group mb-3">
        <input
          type="text"
          name="taskTitle"
          class="form-control"
          v-model="task.task"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <button
            class="btn btn-sm btn-warning"
            type="submit"
            @click.prevent="onEdit"
          >
            Edit
          </button>
          <button
            class="btn btn-sm btn-secondary"
            type="button"
            @click.prevent="onCancel"
          >
            Cancel
          </button>
        </div>
      </div>
      <div class="input-group mb-3">
        <textarea
          type="text"
          class="form-control input-lg"
          name="taskTitle"
          placeholder="Note"
          v-model="task.note"
          aria-describedby="basic-addon2"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["task"],
  methods: {
    async onEdit() {
      const status = await this.$store.dispatch("updateTask", this.task);
      if (status == 200) {
        this.$toast.success("Update success!!!");
      } else {
        this.$toast.error("Failed to update!!!");
      }
    },
    onCancel() {
      this.$store.commit("selectTask", null);
      this.$router.push("/todo");
    }
  }
};
</script>

<style lang="scss" scoped>
.update-task {
  align-items: center;
  justify-content: center;
  padding: 1vh;
  padding-top: 2vh;
  margin: auto;
  width: 70%;
}
</style>
