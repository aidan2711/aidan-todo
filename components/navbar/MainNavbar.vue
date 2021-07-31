<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Todo</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-danger my-2 my-sm-0" type="submit" @click.prevent="onLogout">
        Logout
      </button>
    </form>
  </nav>
</template>

<script>
export default {
   methods: {
    onLogout() {
      this.$store.commit("logout");
      this.$router.push("/login")
    }
  }
};
</script>

<style lang="scss" scoped></style>
