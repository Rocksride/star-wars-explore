<template>
  <nav class="navbar is-dark is-fixed-top" style='height: 8vh;'>
    <div class="container">
      <div class="navbar-brand">
        <a class="center is-dark navbar-item" href="#">
          <h2 class="title has-text-white">Xplore</h2>
        </a>
        <span class="navbar-burger burger" @click='toggleMenu' :class="{'is-active': navIsActive}" data-target="navbarMenu">
                        <span></span>
        <span></span>
        <span></span>
        </span>
      </div>
      <div id="navbarMenu" :class="{'is-active': navIsActive}" class="navbar-menu has-background-dark ">
        <div class="navbar-end">
          <router-link exact active-class="is-active" to='/' class="navbar-item">
            Home
          </router-link>
          <router-link exact active-class="is-active" class="navbar-item" to="/people">
            Peoples
          </router-link>
          <router-link exact active-class="is-active" to='/films' class="navbar-item">
            Films
          </router-link>
          <router-link exact active-class="is-active" to='/starships' class="navbar-item">
            Starships
          </router-link>

          <router-link exact active-class="is-active" to='/vehicles' class="navbar-item">
            Vehicles
          </router-link>
          <router-link exact active-class="is-active" to='/species' class="navbar-item">
            Species
          </router-link>
          <router-link exact active-class="is-active" to='/planets' class="navbar-item">
            Planets
          </router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
                                Account
                            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                                    Dashboard
                                </a>
              <a class="navbar-item">
                                    Profile
                                </a>
              <a class="navbar-item">
                                    Settings
                                </a>
              <hr class="navbar-divider">
              <div class="navbar-item">
                Logout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navbar',
    data() {
      return {
        navIsActive: false
      }
    },
    methods: {
      toggleMenu: function() {
        this.navIsActive = !this.navIsActive
      }
    }

  }
</script>

<style scoped>
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
