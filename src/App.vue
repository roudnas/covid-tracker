<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body::-webkit-scrollbar, table::-webkit-scrollbar {
  width: 0.5rem;
}
body::-webkit-scrollbar-track, table::-webkit-scrollbar-track {
  background-color: #111111;
}
body::-webkit-scrollbar-thumb, table::-webkit-scrollbar-thumb {
  background-color: orange;
  border-radius: 15px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
