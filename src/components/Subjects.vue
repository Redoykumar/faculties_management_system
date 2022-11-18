<template>
  <div>
    <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs>
  </div>
  <div class="q-pa-md">
    <q-table :grid="$q.screen.xs" title="Subject" :rows="data" :columns="columns" row-key="name" :filter="filter"
      :pagination="initialPagination">
      <template v-slot:body-cell-Action="props">
        <q-td :props="props">
          <div>
            <router-link to="/ViewSubject" style="text-decoration: none; color: inherit;">
              <q-btn class="q-ml-xs q-mr-xs" round size="xs" color="secondary" icon="edit" />
            </router-link>
            <q-btn @click="deleteUser(props.row.id)" round size="xs" color="amber" glossy text-color="black"
              icon="delete" />
          </div>

        </q-td>
      </template>
      <template v-slot:body-cell-Grade="props">
        <q-td :props="props">
          <div>
            {{ (props.row.age % 2 == 0) ? "A" : "A+" }}
          </div>

        </q-td>
      </template>
      <template v-slot:top-right>

        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <router-link to="/AddSubject" style="text-decoration: none; color: inherit;">
          <v-btn class="mx-2" fab dark color="indigo">
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
        </router-link>
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
    label: 'Subject code',
    align: 'left',
    field: row => row.FOD1P,
    format: val => `${val}`,
    sortable: true
  },

  { name: 'Major', align: 'center', label: 'Major', field: 'Major', sortable: true },
  { name: 'Major_Category', label: 'Major_Category', field: 'Major_Category', sortable: true },

  { name: 'Action', label: 'Action', field: 'Action' },
]

export default {
  name: 'Subject-vue',
  data: () => ({
    data: [
      {
        "FOD1P": 1100,
        "Major": "GENERAL AGRICULTURE",
        "Major_Category": "Agriculture & Natural Resources"
      },
      {
        "FOD1P": 1101,
        "Major": "AGRICULTURE PRODUCTION AND MANAGEMENT",
        "Major_Category": "Agriculture & Natural Resources"
      },
      {
        "FOD1P": 1102,
        "Major": "AGRICULTURAL ECONOMICS",
        "Major_Category": "Agriculture & Natural Resources"
      },
      {
        "FOD1P": 1103,
        "Major": "ANIMAL SCIENCES",
        "Major_Category": "Agriculture & Natural Resources"
      },
      {
        "FOD1P": 1104,
        "Major": "FOOD SCIENCE",
        "Major_Category": "Agriculture & Natural Resources"
      },
      {
        "FOD1P": 1105,
        "Major": "PLANT SCIENCE AND AGRONOMY",
        "Major_Category": "Agriculture & Natural Resources"
      },
      {
        "FOD1P": 1106,
        "Major": "SOIL SCIENCE",
        "Major_Category": "Agriculture & Natural Resources"
      },
      {
        "FOD1P": 1199,
        "Major": "MISCELLANEOUS AGRICULTURE",
        "Major_Category": "Agriculture & Natural Resources"
      },
      {
        "FOD1P": 1302,
        "Major": "FORESTRY",
        "Major_Category": "Agriculture & Natural Resources"
      },
      {
        "FOD1P": 1303,
        "Major": "NATURAL RESOURCES MANAGEMENT",
        "Major_Category": "Agriculture & Natural Resources"
      },
      {
        "FOD1P": 6000,
        "Major": "FINE ARTS",
        "Major_Category": "Arts"
      },
      {
        "FOD1P": 6001,
        "Major": "DRAMA AND THEATER ARTS",
        "Major_Category": "Arts"
      },
      {
        "FOD1P": 6002,
        "Major": "MUSIC",
        "Major_Category": "Arts"
      },
      {
        "FOD1P": 6003,
        "Major": "VISUAL AND PERFORMING ARTS",
        "Major_Category": "Arts"
      },
      {
        "FOD1P": 6004,
        "Major": "COMMERCIAL ART AND GRAPHIC DESIGN",
        "Major_Category": "Arts"
      },
      {
        "FOD1P": 6005,
        "Major": "FILM VIDEO AND PHOTOGRAPHIC ARTS",
        "Major_Category": "Arts"
      },
      {
        "FOD1P": 6007,
        "Major": "STUDIO ARTS",
        "Major_Category": "Arts"
      },
      {
        "FOD1P": 6099,
        "Major": "MISCELLANEOUS FINE ARTS",
        "Major_Category": "Arts"
      },
      {
        "FOD1P": 1301,
        "Major": "ENVIRONMENTAL SCIENCE",
        "Major_Category": "Biology & Life Science"
      },
      {
        "FOD1P": 3600,
        "Major": "BIOLOGY",
        "Major_Category": "Biology & Life Science"
      },
      {
        "FOD1P": 3601,
        "Major": "BIOCHEMICAL SCIENCES",
        "Major_Category": "Biology & Life Science"
      },
      {
        "FOD1P": 3602,
        "Major": "BOTANY",
        "Major_Category": "Biology & Life Science"
      },
      {
        "FOD1P": 3603,
        "Major": "MOLECULAR BIOLOGY",
        "Major_Category": "Biology & Life Science"
      },
      {
        "FOD1P": 3604,
        "Major": "ECOLOGY",
        "Major_Category": "Biology & Life Science"
      }
    ],
    items: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Subject List',
        disabled: false,
        href: 'breadcrumbs_link_1',
      }
    ],
  }),
  methods: {

    deleteUser: function (id) {
      this.data = this.data.filter(function (obj) {
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