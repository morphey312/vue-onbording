<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>Нужно сделать: {{ item }}</div>
    <button class="btn btn-success" type="button" @click="goHome" id="button-addon2">Home</button>
  </div>
</template>
<script>

export default {
  name: 'AboutView',
  props: ["item", "id"],
  components: {
  },
  methods: {
    goHome() {
      this.$router.push('/');
    }
  },
  mounted() {
  }
}
</script>