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
            <to-do-item  id="ul" v-for="(item, index) in todoItems"
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
          <div class="col-9">
            <div v-for="item in sortDoneItem">
              {{item.id}}{{' ' + item.value}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Page from "@/components/Page.vue";

export default {
  name: 'App',
  components: {
    Page,
  },
  data() {
    return {
      todoItems: [
        {
          id: 1,
          name: 'Погладить кота'
        },
        {
          id: 2,
          name: 'Сходить в магазин'
        },
        {
          id: 3,
          name: 'Приготовить поесть'
        },
      ],
      id: 4,
      doneItems: [],
    };
  },
  methods: {
    addToList(event) {
      this.todoItems.push({
        id: this.id++,
        name: event.item,
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
