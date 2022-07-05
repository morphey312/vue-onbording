<template>
  <div id="app">
    <h1>ToDo List</h1>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class=" col-9">
          <page
              placeholder="Things to be done"
              @add-item="addToList"
          />
          <hr>
          <to-do-item
              id="ul"
              v-for="(item, index) in todoItems"
              :key="item.id"
              :item="item"
              :index="index"
              @delete-item="deleteItem"
              @checked-value="setDoneList"
          />
          <hr>
          <div class="col-9">
            {{ showItemsCount }}
          </div>
        </div>
        <div class="col-9">
          <ul class="p-2" >
            <li v-for="(item, index) in sortDoneItem" :key="item.id"
                class="list-group-item d-flex justify-content-between"
                :class="[index % 2 === 0 ? 'list-group-item-success' : 'list-group-item-info']"
            >
              <div class="m-2"> {{item.id}}</div>
              <div class="m-2 text-decoration-line-through">{{item.value}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Page from "@/components/AddButton.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'HomeView',
  components: {
    Page,
  },
  data() {
    return {
      doneItems: [],
    };
  },
  mounted() {
    this.getTodoList();
  },
  methods: {
    ...mapActions(["getTodoList"]),
    addToList(event) {
      this.todoItems.push({
        id: this.todoItems.length + 1,
        description: event.item,
      });
    },
    deleteItem(event) {
      let index = this.todoItems.findIndex((item) => item.id === event);
      this.todoItems.splice(index,1);
    },
    setDoneList(event) {
      if (event.checked) {
        let index = this.doneItems.findIndex((item) => item.id === event.id);
        if (index == -1) {
          this.doneItems.push(event);
        }
      } else {
        let index = this.doneItems.findIndex((item) => item.id === event.id);
        this.doneItems.splice(index,1);
      }
    }
  },
  computed: {
    ...mapGetters(["todoItems"]),
    showItemsCount() {
      return this.todoItems.length;
    },
    sortDoneItem() {
      if (this.doneItems.length) {
        let sorted = this.doneItems.sort(function sortItem(itemA, itemB){
          if (itemA.id < itemB.id) {
            return -1;
          }
          if (itemA.id > itemB.id) {
            return 1;
          }
          return 0;
        })
        return sorted
      } else {
        return [];
      }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
