<template>
  <div>
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">Week Schedule</h1>
        </div>
      </div>
    </section>
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

          <template v-for="(day, index) in daysOfWeek" >
            <DayOfWeek
                :key="index"
                :day="day"
                :index="+index"
                :todo-items="todoItemsForDay(index)"
            />
          </template>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DayOfWeek from "@/components/DayOfWeek";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'WeekSchedule',
  components: {
    DayOfWeek,
  },
  data () {
    return {
      daysOfWeek: {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
      },
    }
  },
  methods: {
    todoItemsForDay(day) {
      let result = [];
      if(this.todoItems && Object.keys(this.todoItems).length) {
        result = this.todoItems.filter(todo => todo.day_of_week === day);
      }

      return result
    }
  },
  computed: {
    ...mapGetters(["todoItems"]),
  }
}
</script>