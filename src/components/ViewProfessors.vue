<template>
    <div>
        <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs>
    </div>
    <v-row no-gutters>
        <v-col>
            <v-sheet class="pa-2 ma-2">
                <v-card class="mx-auto" max-width="434" rounded="0">
                    <v-img height="100%" cover src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
                        <v-avatar color="grey" size="150" rounded="11">
                            <v-img cover src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                        </v-avatar>
                        <v-list-item class="text-white" title="Marcus Obrien" subtitle="Assistant professor">
                        </v-list-item>
                    </v-img>
                    <v-card title="Email:" text="Redoykumar0@gmail.com">
                    </v-card>
                    <v-card title="Gender:" text="Male">
                    </v-card>
                    <v-card title="Age:" text="30 years old">
                    </v-card>
                    <v-card title="Birth date:" text="1964-08-24">
                    </v-card>
                    <v-card title="Salary:" text="5000 Euro">
                    </v-card>

                </v-card>
            </v-sheet>
        </v-col>

        <v-col>
            <v-sheet class="pa-2 ma-2">
                <v-card>
                    <v-tabs v-model="tab" bg-color="primary">
                        <v-tab value="Subject">Subject</v-tab>
                        <!-- <v-tab value="two">Item Two</v-tab>
                        <v-tab value="three">Item Three</v-tab> -->
                    </v-tabs>

                    <v-card-text>
                        <v-window v-model="tab">
                            <v-window-item value="Subject">
                                <v-container fluid>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-combobox v-model="select" :items="Subject" label="Add more Subjects"
                                                multiple>
                                                <template v-slot:selection="data">
                                                    <v-chip :key="JSON.stringify(data.item)" v-bind="data.attrs"
                                                        :model-value="data.selected" :disabled="data.disabled"
                                                        size="small" @click:close="data.parent.selectItem(data.item)">
                                                        <template v-slot:prepend>
                                                            <v-avatar class="bg-accent text-uppercase" start>{{
                                                                    data.item.title.slice(0, 1)
                                                            }}</v-avatar>
                                                        </template>
                                                        {{ data.item.title }}
                                                    </v-chip>
                                                </template>
                                            </v-combobox>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-window-item>

                            <v-window-item value="two">
                                Two
                            </v-window-item>

                            <v-window-item value="three">
                                Three
                            </v-window-item>
                        </v-window>
                    </v-card-text>
                </v-card>
            </v-sheet>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "view-Professors",
    data: () => ({
        tab: 'option-1',
        items: [
            {
                text: 'Dashboard',
                disabled: false,
                href: 'breadcrumbs_dashboard',
            },
            {
                text: 'View Professors',
                disabled: false,
                href: 'breadcrumbs_link_1',
            }
        ],
        select: ['Computer Engineering.',
            'Computer Forensics.',],
        Subject: [
            'Computer Engineering.',
            'Computer Forensics.',
            'Computer Networking.',
            'Computer Programming.',
            'Cyber Security.',
            'Database Administration.',
            'Information Security.',
            'Information Technology.',
        ],
    }),

}
</script>

<style>

</style>