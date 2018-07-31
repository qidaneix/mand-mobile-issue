<template>
  <div id="app">
    <img src="./assets/logo.png">
    <md-field>
      <md-field-item
        name="name"
        title="普通模式"
        arrow="arrow-right"
        align="right"
        :value="selectorValue"
        @click.native="showSelector">
      </md-field-item>
    </md-field>
    <md-selector
      v-model="isSelectorShow"
      :data="data[0]"
      :default-index="1"
      :invalid-index="2"
      title="普通模式"
      @choose="onSelectorChoose($event)">
    </md-selector>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Selector, Field, FieldItem } from 'mand-mobile';

@Component({
  components: {
    [Selector.name]: Selector,
    [Field.name]: Field,
    [FieldItem.name]: FieldItem,
  },
})
export default class App extends Vue {
  public isSelectorShow = false;
  public data = [
    [
      {
        text: '选项一',
      },
      {
        text: '选项二',
      },
      {
        text: '选项三',
      },
      {
        text: '选项四',
      },
      {
        text: '选项五',
      },
      {
        text: '选项六',
      },
      {
        text: '选项七',
      },
      {
        text: '选项八',
      },
      {
        text: '选项九',
      },
      {
        text: '选项十',
      },
    ],
  ];
  public selectorValue = '选项二';

  public showSelector() {
    this.isSelectorShow = true;
  }
  public onSelectorChoose({text}: any) {
      this.selectorValue = text;
  }
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
