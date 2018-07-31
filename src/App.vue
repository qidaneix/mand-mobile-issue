<template>
  <div id="app">
    <img src="./assets/logo.png">
    <md-field>
      <md-field-item
        title="一个标题"
        align="right"
        arrow="arrow-right"
        :value="value">
      </md-field-item>
      <md-field-item
        title="俩个标题"
        align="right"
        arrow="arrow-right"
        value="anything">
      </md-field-item>
      <md-field-item
        title="俩个标题"
        align="right"
        arrow="arrow-right"
        :value="value2">
      </md-field-item>
    </md-field>
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
export default class App extends Vue {
  public value = 'something';
  public value2 = 'something else';
}
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
