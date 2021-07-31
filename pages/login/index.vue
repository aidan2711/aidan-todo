<template>
  <body class="text-center">
    <form class="form-signin" @submit.prevent="onSubmit">
      <h1 class="h3 mb-3 font-weight-normal">Login</h1>
      <br />
      <label for="inputUsername" class="sr-only">Username</label>
      <input
        v-model="username"
        type="username"
        id="inputUsername"
        class="form-control"
        placeholder="Username"
        required
        autofocus
      />
      <br />

      <label for="inputPassword" class="sr-only">Password</label>
      <input
        v-model="password"
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
      />
      <br />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>

      <NuxtLink to="/register">Create Account</NuxtLink>
      <hr />
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
    </form>
  </body>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  created() {},
  methods: {
    async onSubmit() {
      try {
        const status = await this.$store.dispatch("authentication", {
          username: this.username,
          password: this.password
        });
        if (status == 200) {
          this.$toast.success("Login Successful!!!");
          this.$router.push("/todo");
        } else {
          this.$toast.error("Login Failed!!!");
        }
      } catch (error) {
        this.$toast.error("Login Failed!!!");
      }
    }
  }
};
</script>
