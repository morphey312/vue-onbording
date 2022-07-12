<template>
  <div id="app">
    <h1>ToDo List</h1>
    <h2>{{ `For ${day}` }}</h2>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class=" col-9">
          <add-button
              placeholder="Things to be done"
          />
          <file-loader
              ref="customComponent"
          />
          <button @click="fileLoad">
            Load File
          </button>
          <hr>
          <to-do-item
              id="ul"
              v-for="(item, index) in dailySchedule"
              :key="item.id"
              :item="item"
              :index="index"
              @checked-value="setDoneList"
              @delete-todo-item="openModal"
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
    <modal v-if="showModal">
      <template v-slot:header>
        Warning
      </template>
      <template v-slot:body>
        {{ `Are you sure that you want to delete ${deleteItem.description}` }}

      </template>
      <template v-slot:footer="props">
        <button class="btn btn-info" @click="confirmedDelete">
          Ok
        </button>
        <button class="btn btn-default" @click="showModal = false">
          Cancel
        </button>
      </template>
    </modal>
  </div>
</template>

<script>
import AddButton from "@/components/AddButton.vue";
import {mapActions, mapGetters} from "vuex";
import Modal from "@/components/Modal";
import FileLoader from "@/components/FileLoader";

export default {
  name: 'DailySchedule',
  components: {
    FileLoader,
    Modal,
    AddButton,
  },
  props: {
    day: String,
  },
  data() {
    return {
      doneItems: [],
      showModal: false,
      deleteItem: {},
    };
  },
  created() {
    console.log();
  },
  methods: {
    ...mapActions(["deleteTodoItem"]),
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
    },
    openModal(event) {
      this.showModal = true;
      this.deleteItem = event;
    },
    confirmedDelete() {
      this.deleteTodoItem(this.deleteItem.id);
      this.showModal = false;
    },
    fileLoad() {
      let element = this.$refs.customComponent;
      console.log(element);
      element.sendFile();
    }
  },
  computed: {
    ...mapGetters(["todoItems", "currentDay"]),
    showItemsCount() {
      return this.dailySchedule ? this.dailySchedule.length : 0;
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
    },
    dailySchedule() {
      let result = [];
      if(this.todoItems && Object.keys(this.todoItems).length) {
        result = this.todoItems.filter(todo => +todo.day_of_week === this.currentDay);
      }

      return result
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
