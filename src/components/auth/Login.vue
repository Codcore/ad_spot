<template>
  <v-container
          fluid
          fill-height
  >
    <v-layout
            align-center
            justify-center
    >
      <v-flex
              xs12
              sm8
              md4
      >
        <v-card class="elevation-6">
          <v-toolbar
                  light
                  flat
          >
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" validation>
              <v-text-field
                      label="E-mail"
                      name="email"
                      prepend-icon="mdi-email"
                      type="email"
                      v-model="email"
                      :rules="emailRules"
              ></v-text-field>

              <v-text-field
                      id="password"
                      label="Password"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                      v-model="password"
                      :rules="passwordRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                   color="primary"
                   @click="onSubmit"
                   :disabled="!valid"
            >Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        valid: false,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 8) || 'Password must be equal or more than 8 characters'
        ]
      }
    },
    methods: {
      onSubmit() {
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password
          }

          console.log(user)
        }
      }
    }
  }
</script>

<style scoped>

</style>