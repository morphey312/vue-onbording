<template>
  <li
      class="list-group-item d-flex justify-content-between align-items-start"
  >
    <div class="ms-2 me-auto">
      <div class="fw-bold">{{ description }}</div>
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
</template>

<script>

export default {
  name: 'DailyScheduleTodoItem',
  props: {
    description: String,
  },
  data() {
    return {
    };
  },
}
</script>

<style>
</style>
