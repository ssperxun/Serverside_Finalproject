<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body,
html {
  height: 100%;
	padding: 0;
	margin: 0;
  background: lightgreen;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  background: green;
}

form, .show {
  background: darkred;
}

</style>
