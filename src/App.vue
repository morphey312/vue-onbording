<template>
  <div id="app">
    <nav>
      <router-link to="/">Sign In</router-link> |
      <router-link to="/week-schedule">Week Schedule</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <div v-if="user">
      <span class="text-decoration-underline fw-bold">{{ user.data.name }}</span> |
      <span @click="logout" class="logout text-decoration-underline fw-bold">Log out</span>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  created() {
    this.getTodoList();
  },
  mounted() {
    if (localStorage.getItem("authToken")) {
      this.getUserData(this.apiToken);
    }
  },
  methods: {
    ...mapActions(["getTodoList"]),
    ...mapActions("auth", ["getUserData", "sendLogoutRequest"]),
    logout() {
      this.sendLogoutRequest().then(() => {
        this.$router.push({
          path:'/'
        })
      });
    }
  },
  computed: {
    ...mapGetters("auth", ["user","apiToken"]),
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, 'sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.logout{
  cursor: pointer;
}
</style>
