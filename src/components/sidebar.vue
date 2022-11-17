<template>
    <v-navigation-drawer v-if="drawer">
        <v-img
            src="https://media.istockphoto.com/id/1318957901/vector/the-green-background-with-a-white-gradient-is-perfect-for-those-of-you-who-are-looking-for-a.jpg?s=612x612&w=0&k=20&c=EXWdCg9600DkVRDKd7YkqOlXFZpC8EiFtSwUlJ8xaqE=">
            <div class="text-center mt-7">
                <v-avatar class="mb-5 " color="grey-darken-2" size="64">
                    <v-img aspect-ratio="30" src="../assets/redoy.jpg">

                    </v-img>
                </v-avatar>
                <h6 class="text-white">redoykumar0@gmail.com</h6>
            </div>

        </v-img>
        <!-- <v-sheet color="grey-lighten-4" class="pa-4">
            <v-avatar class="mb-4" color="grey-darken-1" size="64"></v-avatar>

            <div>redoykumar0@gmail.com</div>
        </v-sheet> -->

        <v-divider></v-divider>

        <v-list>
            <v-list-item v-for="[icon, text, link] in links" :key="icon" link>
                <template v-slot:prepend>
                    <v-icon>{{ icon }}</v-icon>
                </template>
                <router-link :to="link" style="text-decoration: none; color: inherit;">
                    <v-list-item-title>{{ text }}</v-list-item-title>
                </router-link>

            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'side-bar',
    props: ['drawer'],
    data: () => ({
        get: function () {
            return this.drawer;
        },
        links: [
            ['mdi-monitor-dashboard', 'Dashboard', '/Dashboard'],
            ['mdi-account-details-outline', 'Professors', 'Professors'],
            ['mdi-account-group', 'Students', 'Students'],
            ['mdi-bookshelf', 'Courses', 'Courses'],
            ['mdi-book-open-page-variant-outline', 'Subjects', 'Subjects'],
            ['mdi-information-outline', 'System Log', 'SystemLog'],
        ],
    }),
}
</script>
