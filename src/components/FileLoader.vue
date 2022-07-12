<template>
  <div class="mb-3">
    <label for="formFileMultiple" class="form-label">Multiple files input example</label>
    <input @change="addFile" name="pictures[]" class="form-control" type="file" id="formFileMultiple" multiple>
  </div>
</template>

<script>
import {axiosInstance} from "@/service/api";
import {mapGetters} from "vuex";

export default {
  name: 'FileLoader',
  data() {
    return {
      filesForSending: {},
    };
  },
  methods: {
    addFile(event) {

      let files = [];
      files = event.target.files;
      let formData = new FormData();
      for (let file of files) {
        formData.append('pictures[]', file)
      }
      for (let user of Object.values(this.user.data)) {
        formData.append('user[]', user)
      }
      this.filesForSending = formData;

    },
    async sendFile() {
      let resp = await axiosInstance.post('file', this.filesForSending);
      console.log(resp);
    }
  },
  computed: {
    ...mapGetters("auth", ["user"])
  },
}
</script>

<style>
</style>
