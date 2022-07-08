<template>
  <div  class="col">
    <div class="card shadow-sm">
      <h2>{{day}}</h2>
      <div class="card-body">
        <ol class="list-group list-group-numbered">
          <template v-for="todo in todoItemsList">
            <daily-schedule-todo-item
                :key="todo.id"
                :description="todo.description"
            />
          </template>

        </ol>
        <div class="d-flex justify-content-between align-items-center mt-3">
          <div class="btn-group">
            <button @click="openDailySchedule" type="button" class="btn btn-sm btn-outline-secondary">
                Edit
            </button>
          </div>
          <small class="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DailyScheduleTodoItem from "@/components/DailyScheduleTodoItem";
import {mapMutations} from "vuex";

export default {
  name: 'DayOfWeek',
  components: {
    DailyScheduleTodoItem,
  },
  props: {
    day: String,
    index: Number,
    todoItems: Array,
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapMutations(["setCurrentDay"]),
    openDailySchedule() {
      this.setCurrentDay(this.index);
      this.$router.push({
        name: 'daily-schedule',
        params: {
          day: this.day
        }
      })
    },
  },
  computed: {
    todoItemsList() {
        return this.todoItems ?? [];
    }
  },
}
</script>

<style>
</style>
