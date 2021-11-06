<template>
  <div id="app">
    <header>
      <nav><h1>Files Directory</h1></nav>
    </header>
    <section>
      <div class="file">
        <span class="name">Name</span>
        <span class="url">
          <a href="#">fileUrl</a>
        </span>
        <button>Detail</button>
      </div>
      <div class="file">
        <span>Name</span>
        <span>URL</span>
      </div>
      <div class="file">
        <span>Name</span>
        <span>URL</span>
      </div>
      <div class="file">
        <span>Name</span>
        <span>URL</span>
      </div>
      <div class="file">
        <span>Name</span>
        <span>URL</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  outline: none;
  border: 0;
  box-sizing: border-box;
}

header nav {
  background: cadetblue;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  color: white;
}

section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.file {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dedede;
  border-right: 1px solid #dedede;
  padding: 20px;
  align-items: center;
  justify-content: space-around;
}

.file .name {
  font-weight: 700;
  text-transform: uppercase;
}

.file .url a {
  text-decoration: none;
  color: #2c3e50;
}

.file button {
  width: 10vh;
  padding: 10px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
