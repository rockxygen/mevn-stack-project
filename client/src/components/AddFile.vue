<template>
  <section>
    <router-link :to="{ name: 'Files' }" tag="button">Files List</router-link>
    <div class="zone">
      <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
    </div>
  </section>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      dropzoneOptions: {
          url: 'http://localhost:1717/api/files/upload',
          thumbnailWidth: 200,
          maxFilesize: 0.5,
          addRemoveLink: true,
          dictDefaultMessage: "<i class='fa fa-cloud-upload'></i> UPLOAD FILES"
      }
    }
  }
}
</script>
