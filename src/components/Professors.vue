<template>
    <v-subheader>
        <h3>Professors</h3>
        <v-row>
            <v-col lg="12" cols="12">

                <v-table height="500px">
                    <thead>
                        <tr>
                            <th class="text-left">
                                Name
                            </th>
                            <th class="text-left">
                                Calories
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in desserts" :key="item.name">
                            <td>{{ item.name }}</td>
                            <td>{{ item.calories }}</td>
                        </tr>
                    </tbody>
                </v-table>

            </v-col>
        </v-row>
    </v-subheader>
</template>
<script>
export default {
    name: 'Professors-vue',
    data() {
        return {
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    calories: 159,
                },
                {
                    name: 'Ice cream sandwich',
                    calories: 237,
                },
                {
                    name: 'Eclair',
                    calories: 262,
                },
                {
                    name: 'Cupcake',
                    calories: 305,
                },
                {
                    name: 'Gingerbread',
                    calories: 356,
                },
                {
                    name: 'Jelly bean',
                    calories: 375,
                },
                {
                    name: 'Lollipop',
                    calories: 392,
                },
                {
                    name: 'Honeycomb',
                    calories: 408,
                },
                {
                    name: 'Donut',
                    calories: 452,
                },
                {
                    name: 'KitKat',
                    calories: 518,
                },
            ],
        }
    },
}
</script>