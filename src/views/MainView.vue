<template>
    <v-app id="inspire">
        <sidebar :drawer="drawer"></sidebar>
        <topbar @openDrawer="drawer = !drawer"></topbar>
        <v-main>
            <v-container class="py-8 px-6" fluid>
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>
  
<script>
import sidebar from '@/components/sidebar.vue'
import topbar from '@/components/topbar.vue'
export default {
    components: { sidebar, topbar },
    data: () => ({
        cards: ['Today', 'Yesterday'],
        drawer: true
    }),
}
</script>