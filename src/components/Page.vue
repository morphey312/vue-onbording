<template>
  <div>
    <div class="input-group mb-3">
      <input type="text" class="form-control" :class="{'is-invalid': disableButton}" :placeholder="placeholder" aria-label="Recipient's username" v-model="inputValue" aria-describedby="button-addon2">
      <button :disabled="disableButton" class="btn btn-success" type="button" @click="addItem" id="button-addon2">Button</button>
    </div>
      <div v-if="disableButton">Not more than 20 characters</div>
  </div>
</template>

<script>

export default {
  name: 'Page',
  props: ['placeholder'],
  data() {
    return {
      inputValue: '',
      disableButton: false,
    };
  },
  methods: {
    addItem() {
      this.$emit('add-item', { item: this.inputValue });
      this.inputValue = '';
    },
  },
  watch: {
    inputValue(newVal) {
      if (newVal.length > 20) {
        this.disableButton = true;
      } else {
        this.disableButton = false;
      }
    },
  }
}
</script>

<style>
</style>
