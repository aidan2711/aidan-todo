<template>
  <tr class="task-item">
    <td class="td-checkbox">
      <label class="container">
        <input
          type="checkbox"
          v-model="task.complete"
          @change.prevent="onChangeStatus"
        />
        <span class="checkmark"></span>
      </label>
    </td>
    <td width="100%" id="detail">
      <p v-if="!task.complete" class="item">{{ task.task }}</p>
      <p v-if="task.complete" class="item completed">{{ task.task }}</p>

      <span v-if="!task.complete" class="note">{{ task.note }}</span>
      <span v-if="task.complete" class="note highlight">{{ task.note }}</span>
      <br />
      <span v-if="!task.complete" class="item-date">{{
        $moment(task.created_date).format("DD MMM, YYYY")
      }}</span>
      <span v-if="task.complete" class="item-date highlight">{{
        $moment(task.created_date).format("DD MMM, YYYY")
      }}</span>
    </td>
    <td class="td-btn">
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-sm btn-secondary"
          @click.prevent="onEdit"
        >
          edit
        </button>
        <button
          type="button"
          class="btn btn-sm btn-danger"
          @click.prevent="onDelete"
        >
          delete
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["task"],
  methods: {
    onChangeStatus() {
      this.$store.dispatch("changeStatusTask", this.task._id).then(status => {
        if (status == 200) {
        }
      });
    },
    onDelete() {
      this.$store.dispatch("deleteTask", this.task._id).then(status => {
        if (status == 200) {
        }
      });
    },
    onEdit() {
      this.$store.dispatch("selectTask", this.task).then(status => {
        if (status == 200) {
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.task-item {
  min-height: 4vh;
}

.task-item td {
  text-align: left;
  vertical-align: unset;
}

.container {
  display: block;
  position: relative;
  padding-left: 15px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196f3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 5px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

#detail {
  padding-right: 2px;
}

.item {
  margin: 0;
}

.completed {
  color: #afafaf;
  text-decoration: line-through;
}

.note {
  font-size: 14px;
}

.highlight {
  color: #afafaf;
}

.item-date {
  font-size: 10px;
  font-weight: bold;
  font-style: italic;
}
.td-btn {
  padding-left: 10vh;
}
.td-btn button {
  margin-top: 10px;
}
</style>
