<template>
  <body class="text-center" @submit.prevent="submit">
    <form
      class="form-signin"
      oninput='confirmPassword.setCustomValidity(confirmPassword.value != password.value ? "Passwords do not match." : "")'
    >
      <h1 class="h3 mb-3 font-weight-normal">Register</h1>
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
        name="password"
        required
      />
      <br />

      <label for="inputConfirmPassword" class="sr-only">Confirm Password</label>
      <input
        type="password"
        id="inputConfirmPassword"
        class="form-control"
        placeholder="Confirm Password"
        name="confirmPassword"
        required
      />
      <br />

      <label for="inputEmail" class="sr-only">E-mail</label>
      <input
        v-model="email"
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="E-mail"
        required
      />
      <br />

      <label for="inputFullname" class="sr-only">Full Name</label>
      <input
        v-model="fullname"
        type="text"
        id="inputFullname"
        class="form-control"
        placeholder="Full Name"
        required
      />
      <br />

      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Sign Up
      </button>
    </form>
  </body>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
      email: null,
      fullname: null,
      isLoading: false
    };
  },
  methods: {
    async submit() {
      try {
        const status = await this.$store.dispatch("registerUser", {
          username: this.username,
          password: this.password,
          email: this.email,
          fullname: this.fullname,
        });
        if (status == 200) {
          this.$toast.success("Login Successful!!!");
          await this.$router.push("/login");
        } else {
          this.$toast.error("Login Failed!!!");
        }
      } catch (error) {}
    }
  }
};
</script>
