<template>
  <div class="text-center">
    <div class="form-signin">
      <form @submit.prevent="sendCredentials">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input v-focus type="email" v-model="details.email" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" v-model="details.password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <span v-if="signIn" @click="signIn = !signIn"  class="signin text-decoration-underline"> Sign In </span>
            <span v-else @click="signIn = !signIn" class="signin text-decoration-underline"> Log In </span>
          </label>
        </div>
        <button v-if="signIn" class="w-100 btn btn-lg btn-primary"> Login </button>
        <button v-else class="w-100 btn btn-lg btn-primary"> Sign in </button>
        <p class="mt-5 mb-3 text-muted">&copy;Palmo-mater 2022</p>
      </form>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  name: 'Auth',
  data: function () {
    return {
      details: {
        name: "John Doe",
        email: "palmo@example.net",
        password: "12345678",
      },
      signIn: true,
      user_id: 0,
    };
  },
  mounted() {
    this.setErrors({});
  },
  methods: {
    ...mapMutations(["setErrors"]),
    ...mapActions(["getTodoList"]),
    ...mapActions("auth", ["sendLoginRequest", "sendRegisterRequest"]),
    async sendCredentials() {
      if (this.signIn) {
        await this.sendLoginRequest(this.details);
        await this.getTodoList();
      } else {
        await this.sendRegisterRequest(this.details);
        await this.getTodoList();
      }
    },
  },
  computed: {
    ...mapGetters(["errors"]),
    ...mapGetters("auth", ["user"]),
  },
}
</script>
<style scoped>
body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.signin{
  cursor: pointer;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>