import {mapActions} from "vuex";

/**
 * Save inserted value to DB
 */
export default {
    data() {
        return {
            itemName: '',
            isEdit: false,
            doneItem: [],
        };
    },
    created() {
    },
    methods:{
    ...mapActions(["updateItemInList"]),
        saveItem() {
            this.isEdit = false;
            this.updateItemInList({
                id: this.item.id,
                description: this.itemName,
                day_of_week: +this.item.day_of_week,
            });
            this.inputValue = '';
        },
    },
}