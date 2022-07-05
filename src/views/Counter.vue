<template>
  <div class="container">
    <div class="row">
      <div class="col-1">
        <p>
          {{stateCount}}
        </p>
          <button type="button" @click="incr" class="btn btn-success">+</button>
          <button type="button" @click="decr" class="btn btn-danger">-</button>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: 'Counter',
  data() {
    return {
    }
  },
  created() {
    console.log('stateCount', this.stateCount);
  },
  methods:{
    incr() {
      this.$store.dispatch('increaseCount', 3);
    },
    decr() {
      this.$store.dispatch('decreaseCount', 4);
    },
  },
  computed: {
    ...mapGetters(["stateCount", "todoItems"]),
  },
}
</script>