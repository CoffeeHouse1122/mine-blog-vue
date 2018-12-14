<template>
  <div class="mainGuestbook">
    <quill-editor
      v-model="content">
    </quill-editor>
  </div>
</template>

<script>
export default {
  name: 'main-guestbook',
  data () {
    return {
      content: ''
    }
  }
}
</script>

<style>
.quill-editor {
  /* border: 1px solid #000; */
  width: 80%;
  position: absolute;
  top: 300px;
  left: 50%;
  margin-left: -40%;
}
.ql-toolbar.ql-snow {
  border: 3px solid #33ccffad !important;
  background:#33ccffad;
  border-radius: 10px 10px 0 0;
  margin-bottom: -3px;
}
.ql-container.ql-snow {
  border: 3px solid rgba(0, 174, 255, 0.822) !important;
  border-radius: 0 0 10px 10px;
  height: 100px;
}
.ql-toolbar.ql-snow .ql-formats {
    margin-right: 7px !important;
}
</style>
