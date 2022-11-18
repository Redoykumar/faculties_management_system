<template>
    <div>
        <v-row>
            <v-breadcrumbs :items="items1">
                <template v-slot:prepend>
                    <v-icon size="small" icon="mdi-vuetify"></v-icon>
                </template>
            </v-breadcrumbs>
        </v-row>

    </div>
    <div class="q-pa-md">
        <v-form ref="form" v-model="valid" lazy-validation class="w-75">
            <!-- <v-file-input label="Images" variant="filled" prepend-icon="mdi-camera"></v-file-input> -->
            <v-row>
                <v-col cols="12" md="5">
                    <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="First name" required>
                    </v-text-field>
                </v-col>

                <v-col cols="12" md="5">
                    <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Last name" required>
                    </v-text-field>
                </v-col>
            </v-row>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-text-field label="Password" type="input" hint="Enter your password to access this website">
            </v-text-field>
            <v-text-field label="Confirm Password" type="input" hint="Enter your password to access this website">
            </v-text-field>


            <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Gender" required>
            </v-select>


            <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?"
                required></v-checkbox>

            <v-btn color="success" class="mr-4" @click="validate">
                Validate
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset">
                Reset Form
            </v-btn>
        </v-form>
    </div>

</template>
    
  <!-- <script>
  export default {
    name: 'Students-vue',
    data: () => ({
        data: {},
        items: [
            {
                text: 'Dashboard',
                disabled: false,
                href: 'breadcrumbs_dashboard',
            },
            {
                text: 'Add Professors',
                disabled: false,
                href: 'breadcrumbs_link_1',
            }
        ],
    }),
  }  
  </script> -->
<script>
import { ref } from 'vue'
export default {
    data: () => ({
        date: ref('2019/02/01'),
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        items: [
            'Male',
            'Female',
        ],
        items1: [
            {
                text: 'Dashboard',
                disabled: false,
                href: 'breadcrumbs_dashboard',
            },
            {
                text: 'Add Professors',
                disabled: false,
                href: 'breadcrumbs_link_1',
            }
        ],
        min: 5,
        max: 200,
        slider: 40,
        checkbox: false,
    }),

    methods: {
        async validate() {
            const { valid } = await this.$refs.form.validate()

            if (valid) alert('Form is valid')
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
    },
}
</script>