<template>
  <div>
    <div class="create-task">
      <form @submit.prevent="">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control input-lg"
            id="inputTask"
            placeholder="Add New Task"
            v-model="task"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button
              class="btn btn-sm btn-primary"
              type="submit"
              @click="onSubmit"
            >
              Add
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
            v-model="note"
            type="text"
            class="form-control input-lg"
            id="inputNote"
            placeholder="Note"
            aria-describedby="basic-addon2"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: null,
      note: null
    };
  },
  methods: {
    async onSubmit() {
      const status = await this.$store.dispatch("createTask", {
        task: this.task,
        note: this.note,
        created_by: localStorage.getItem('userId')
      });
      if (status == 200) {
        this.task = null;
        this.note = null;
        this.$toast.success("Add new task success!!!");
      } else {
        this.$toast.error("Failed to add task!!!");
      }
    },
    onCancel() {
      this.task = null;
      this.note = null;
    }
  }
};
</script>

<style lang="scss" scoped>
.create-task {
  align-items: center;
  justify-content: center;
  padding: 1vh;
  padding-top: 2vh;
  margin: auto;
  width: 70%;
}
</style>
