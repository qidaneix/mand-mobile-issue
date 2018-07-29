<template>
  <div id="app">
    <img src="./assets/logo.png">
    <md-field-item
      title="一个标题"
      arrow="arrow-right"
      value="内容靠右展示"
      align="right">
    </md-field-item>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Field, FieldItem } from 'mand-mobile';

@Component({
  components: {
    [Field.name]: Field,
    [FieldItem.name]: FieldItem,
  }
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
