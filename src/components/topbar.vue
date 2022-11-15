<template>
    <v-app-bar color="white" elevate-on-scroll scroll-target="#scrolling-techniques-7">
        <v-app-bar-nav-icon @click="$emit('openDrawer')"></v-app-bar-nav-icon>

        <v-toolbar-title>Faculties Management System</v-toolbar-title>
        <!-- <v-col lg="5" cols="8">
            <v-form class="mt-5">
                <v-text-field rounded outlined dence placeholder="Search Here" append-icon="mdi-magnify"></v-text-field>
            </v-form>
        </v-col> -->

        <v-spacer></v-spacer>

        <!-- <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn> -->
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                    <div class="text-center">
                        <v-badge :value="hover" color="deep-purple accent-4" :content="items.length" left
                            transition="slide-x-transition">
                            <v-hover v-model="hover">
                                <v-icon color="grey lighten-1" large>
                                    mdi-bell
                                </v-icon>
                            </v-hover>
                        </v-badge>
                    </div>
                </v-btn>
            </template>
            <v-list :items="items" item-props lines="three" width="400">
                <template v-slot:subtitle="{ subtitle }">
                    <div v-html="subtitle"></div>
                </template>
            </v-list>
        </v-menu>

        <v-menu>
            <template v-slot:activator="{ props }">
                <span v-bind="props" style="cursor:pointer" class="mx-5 mr-10">
                    <v-chip link>
                        <v-badge dot bottom offset-y="10" color="green">
                            <v-avatar size="30">
                                <v-img src="../assets/redoy.jpg"></v-img>
                            </v-avatar>
                        </v-badge>
                        <span>Redoy kumar das </span>
                    </v-chip>
                </span>
            </template>
            <v-list>
                <v-list>
                    <v-list-item :prepend-avatar="require('../assets/redoy.jpg')" title="Redoy kumar das"
                        subtitle="redoykumar0@gmail.com">
                        <template v-slot:append>
                            <v-btn size="small" variant="text" icon="mdi-menu-down"></v-btn>
                        </template>
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>
                <v-list-item v-for="(item, i) in items1" :key="i" :value="item" active-color="primary">
                    <template v-slot:prepend>
                        <v-icon :icon="item.icon"></v-icon>
                    </template>

                    <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

    </v-app-bar>
</template>

<script>
export default {
    name: "top-bar", data: () => ({
        items: [
            { type: 'subheader', title: 'Today' },
            {
                prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                title: 'Brunch this weekend?',
                subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
            },
            { type: 'divider', inset: true },
            {
                prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                title: 'Summer BBQ',
                subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
            },
            { type: 'divider', inset: true },
            {
                prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                title: 'Oui oui',
                subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
            },
            { type: 'divider', inset: true },
            {
                prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                title: 'Birthday gift',
                subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
            },
            { type: 'divider', inset: true },
            {
                prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                title: 'Recipe to try',
                subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
            },
        ],
        items1: [
            { text: 'Profile', icon: 'mdi-account' },
            { text: 'Change Password', icon: 'mdi-key' },
            { text: 'Setting', icon: 'mdi-cog' },
            { text: 'Logout', icon: 'mdi-logout' },]
    }),
}
</script>

<style>

</style>