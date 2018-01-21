<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          Vue Time Tracker
        </a>
        <ul class="nav navbar-nav">
          <!-- THIS IS DEPRECIATED IN VUE-ROUTER 2
          <li><a v-link="'/home'">Home</a></li>
          <li><a v-link="'/time-entries'">Time Entries</a></li>
          -->
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/time-entries">Time Entries</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <sidebar :time="getTimeUpdate"></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar.vue'
  import store from './store.js'

  export default {
    components: {'sidebar': Sidebar},
    name: 'app',
    computed: {
      getTimeUpdate () {
        //var total = 0
        return store.state.entry.timeEntries.map(el => el.totalTime).reduce(function (total, value) {
          //console.log("getTimeUpdate addition: " + (total += value))
          return total += Number(value)
        }, 0)
        /*
        Array.prototype.sum = function (prop) {
          var total = 0
          for ( var i = 0, _len = this.length; i < _len; i++) {
            total += this[i][prop]
          }
          return total
        } */
        //return store.state.entry.timeEntries.sum("totalTime")
      }
    }
  }
</script>

<style>
</style>
