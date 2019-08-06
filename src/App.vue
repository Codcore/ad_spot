<template>
  <v-app>
    <v-navigation-drawer
            app
            temporary
            v-model="drawer"
    >
      <v-list>
        <v-list-item
                v-for="link in links"
                :key="link.title"
                @click=""
                :to="link.url"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <div>

      <v-toolbar>

        <v-app-bar-nav-icon
                @click="drawer = !drawer"
                class="hidden-md-and-up"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>Ad spot</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn v-for="link in links"
                 :to="link.url"
                 text>
            <v-icon left>{{ link.icon }}</v-icon>{{ link.title }}</v-btn>
        </v-toolbar-items>

      </v-toolbar>

    </div>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

  export default {
    data () {
      return {
        drawer: false,
        links: [
          {title: 'Login', icon: 'mdi-lock', url: '/login'},
          {title: 'Registration', icon: 'mdi-account-circle', url: '/registration'},
          {title: 'Orders', icon: 'mdi-bookmark-outline', url: '/orders'},
          {title: 'New ad', icon: 'mdi-plus-circle-outline', url: '/new'},
          {title: 'My ads', icon: 'mdi-view-list', url: '/list'}
        ]
      }
    }
  }
</script>
