<template>
    <v-app>
        <div class="backgruond"></div>
        <v-main class="d-flex justify-center align-center">
            <v-col cols="10" lg="4" class="mx-auto">
                <v-card class="pa-4">
                    <div class="text-center">
                        <v-avatar size="100" color="indigo lighten-4">
                            <v-icon size="40"  icon="mdi-account" />
                        </v-avatar>
                        <h2 class="indigo--text">Login</h2>
                    </div>
                    <v-form @submit.prevent="submitHandler" ref="form">
                        <v-card-text>
                            <v-text-field v-model="email" :rules="emailRules" type="email" label="Email"
                                placeholder="Email" prepend-inner-icon="mdi-account" required />
                            <v-text-field v-model="password" :rules="passwordRules"
                                :type="passwordShow ? 'text' : 'password'" label="Password" placeholder="Password"
                                prepend-inner-icon="mdi-key" :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="passwordShow = !passwordShow" required />
                            <v-switch label="Remember me" color="indigo"></v-switch>
                        </v-card-text>
                        <v-card-actions class="justify-center">
                            <v-btn :loading="loading" type="submit" color="indigo">
                                <router-link to="/Dashboard" style="text-decoration: none; color: inherit;">
                                    <span class="white--text px-8">Login</span>
                                </router-link>

                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-col>
        </v-main>
        <v-snackbar top color="green" v-model="snackbar">
            Login success
        </v-snackbar>
    </v-app>
</template>
  
<script>

export default {
    name: 'App',


    data: () => ({
        loading: false,
        snackbar: false,
        passwordShow: false,
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        password: '',
        passwordRules: [
            v => !!v || 'Password is required',
            v => (v && v.length >= 6) || 'Password must be 6  characters or more!',
        ],
    }),
    methods: {
        submitHandler() {
            if (this.$refs.form.validate()) {
                this.loading = true
                setTimeout(() => {
                    this.loading = false
                    this.snackbar = true
                }, 3000)
            }
        }
    }
};
</script>
<style>
.backgruond {
    background-image: url(https://img.freepik.com/free-vector/national-university-facade-green-campus-park-scene-academy-college-building-exterior-empty-front-yard-with-grass-trees-lawn-students-rest-during-break_575670-1765.jpg?w=2000) !important;
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    background-size: cover;
}
</style>