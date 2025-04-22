<template>
  <div>
    <div class="ui inverted segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary inverted pointing menu compact">
          <router-link to="/" class="item">
            <i class="list icon"></i>Words
          </router-link>
          <router-link to="/new" class="item">
            <i class="plus icon"></i>New
          </router-link>
          <router-link to="/test" class="item">
            <i class="question circle outline icon"></i>Test
          </router-link>
        </div>
      </div>
    </div>
    <div class="ui container">
      <div class="ui grid">
        <div class="row">
          <div class="twelve wide column">
            <router-view/>
          </div>
          <div class="four wide column">
            <flash-message />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>