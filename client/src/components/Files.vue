<template>
    <section>
      <div class="addFile">
        <router-link :to="{ name: 'AddFile' }" tag="button">Add New File</router-link>
      </div>
      <div class="files">
        <File />
      </div>
    </section>
</template>

<script>
import File from '@/components/File'

export default {
  components: {
    File
  }
}
</script>
