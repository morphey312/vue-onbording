<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item">
        <div class="row">
          <div v-if="!isEdit" class="col-6">
            <div class="d-flex justify-content-between">
              <input class="form-check-input" type="checkbox" :id="'item'+ item.id" :value="itemName" @input="checkedValue" aria-label="...">
              <div>{{itemName}}</div>
            </div>
          </div>
          <div v-else class="col-6">
            <input type="text" class="form-control" v-model="itemName" aria-label="Recipient's username">
          </div>
          <div class="col-6">
            <button v-if="isEdit" class="btn btn-info m-1" @click="saveItem" type="button">Save</button>
            <button v-if="!isEdit" class="btn btn-info m-1" @click="editItem(itemName)" type="button">Edit</button>
            <button class="btn btn-danger m-1" @click="deleteItem(item.id)" type="button">Delete</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'ToDoItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
    }
  },
  data() {
    return {
      itemName: '',
      isEdit: false,
      doneItem: [],
    };
  },
  created() {
    this.itemName = this.item.description;
  },
  methods: {
    deleteItem(id) {
      this.$emit('delete-item', id)
    },
    editItem(name) {
      this.isEdit = true;
      this.itemName = name;
    },
    saveItem() {
      this.isEdit = false;
      this.item.name = this.itemName;
    },
    checkedValue(event) {
      this.$emit('checked-value', {
        id: this.item.id,
        checked: event.target.checked,
        value: event.target.value,
      })
    }
  },
}
</script>

<style>
</style>
