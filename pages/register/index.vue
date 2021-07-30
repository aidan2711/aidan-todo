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
      <label for="inputConfirmPassword" class="sr-only">Confirm Password</label>
      <input
        type="password"
        id="inputConfirmPassword"
        class="form-control"
        placeholder="Confirm Password"
        name="confirmPassword"
        required
      />
      <label for="inputEmail" class="sr-only">E-mail</label>
      <input
        v-model="email"
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="E-mail"
        required
      />
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

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
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
      await axios.post(
        "http://localhost:5000/api/users/register/",
        {
          username: this.username,
          password: this.password,
          email: this.email,
          fullname: this.fullname
        }
      );
      await this.$router.push("/login");
    }
  }
});
</script>
