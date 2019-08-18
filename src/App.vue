<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <Header></Header>
    <Users></Users>
    <UserDetails></UserDetails>
    <UserPosts></UserPosts>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Users from './components/Users.vue'
import UserDetails from './components/UserDetails.vue'
import UserPosts from './components/UserPosts.vue'

export default {
  components: {
    Header,
    Users,
    UserDetails,
    UserPosts
  }
}
</script>

<style>

</style>
