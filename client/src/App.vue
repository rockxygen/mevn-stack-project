<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
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

html, body {
  animation: page-load 1s ease-in-out;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#app nav {
  height: 70px;
  background: rebeccapurple;
  display: flex;
  align-items: center;
  justify-content: center;
}

#app nav h1 {
  font-size: 27px;
  font-weight: 700;
  color: #fff;
}

section .files {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin: 15px;
}

section .files .file {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-width: 200px;
  min-height: 150px;
  padding: 15px 0;
  border: 1px solid #2c3e50;
}

button {
  padding: 10px;
  color: white;
  background: rebeccapurple;
  cursor: pointer;
  transition: 300ms all;
}

button:hover {
  opacity: .7;
}

@keyframes page-load {
  to {
    opacity: 1;
  }
  from {
    opacity: 0;
  }
}
</style>
