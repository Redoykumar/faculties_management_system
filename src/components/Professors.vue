<template>
    <div class="q-pa-md">
        <q-table :grid="$q.screen.xs" title="Professors" :rows="data.users" :columns="columns" row-key="name"
            :filter="filter" :pagination="initialPagination">
            <template v-slot:body-cell-Image="props">
                <q-td :props="props">
                    <q-avatar>
                        <img :src="props.row.image">
                    </q-avatar>
                </q-td>
            </template>
            <template v-slot:body-cell-Action="props">
                <q-td :props="props">
                    <div>
                        <q-btn class="q-m-11" round size="xs" color="primary" icon="visibility" />
                        <q-btn class="q-ml-xs q-mr-xs" round size="xs" color="secondary" icon="edit" />
                        <q-btn @click="deleteUser(props.row.id)" round size="xs" color="amber" glossy text-color="black"
                            icon="delete" />
                    </div>

                </q-td>
            </template>
            <template v-slot:top-right>
                <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
                    <template v-slot:append>
                        <q-icon name="search" />
                    </template>
                </q-input>
            </template>
        </q-table>
    </div>
</template>
  

<script>
import { ref } from 'vue'

const columns = [
    {
        name: 'id',
        required: true,
        label: 'id',
        align: 'left',
        field: row => row.id,
        format: val => `${val}`,
        sortable: true
    },
    { name: 'Image', align: 'center', label: 'Image', field: 'Image', sortable: true },
    { name: 'FirstName', align: 'center', label: 'FirstName', field: 'firstName', sortable: true },
    { name: 'lastName', label: 'LastName', field: 'lastName', sortable: true },
    { name: 'age', label: 'Age', field: 'age' },
    { name: 'gender', label: 'Gender', field: 'gender' },
    { name: 'email', label: 'Email', field: 'email' },
    { name: 'birthDate', label: 'Birth Date', field: 'birthDate' },
    { name: 'Action', label: 'Action', field: 'Action' },
]

export default {
    name: 'Professors-vue',
    data: () => ({
        data: {}
    }),
    async created() {
        // GET request using fetch with async/await
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        this.data = data;
        console.log(data);
    },
    methods: {
        deleteUser: function (id) {
            this.data.users = this.data.users.filter(function (obj) {
                return obj.id !== id;
            });
            // this.data = {};
            console.log(typeof this.data);
            console.log(id);
        }
    },
    setup() {

        return {
            initialPagination: {
                sortBy: 'desc',
                descending: false,
                page: 2,
                rowsPerPage: 7
                // rowsNumber: xx if getting data from a server
            },
            filter: ref(''),
            columns
        }
    }
}
</script>
<style>
.my-table-details {
    font-size: 0.85em;
    font-style: italic;
    max-width: 400px !important;
    white-space: normal;
    color: #555;
    margin-top: 4px;
}
</style>