<template>
  <div id="app">
    <img src="./assets/logo.png">
    <md-icon name="chat-46"></md-icon>
    <md-button>Primary</md-button>
    <md-button disabled>Primary Disabled</md-button>
    <md-tab-bar :show-ink-bar="true">
      <div>
        <md-icon name="chat-46" size="sm"></md-icon>
        他
      </div>
    </md-tab-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Button, Icon, TabBar } from 'mand-mobile';

import svg from '@/chat-46.svg';

console.log(svg);

@Component({
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
    [TabBar.name]: TabBar,
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
