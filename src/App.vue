<template>
  <div id="app">
    <img src="./assets/logo.png">
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {ImageReader} from 'mand-mobile';
import imageProcessor from 'mand-mobile/components/image-reader/image-processor';

@Component({
  components: {
    [ImageReader.name]: ImageReader,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
