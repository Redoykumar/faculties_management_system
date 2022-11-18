<template>
  <div>
    <v-breadcrumbs :items="item" divider="-"></v-breadcrumbs>
  </div>
  <v-item-group selected-class="bg-primary">
    <v-container>
      <v-row>
        <v-col v-for="n in items" :key="n" cols="12" md="4">
          <v-item>
            <router-link to="/AddCourses" style="text-decoration: none; color: inherit;">
              <v-card :loading="loading" max-width="350">
                <template v-slot:loader="{ isActive }">
                  <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate>
                  </v-progress-linear>
                </template>

                <v-img cover height="200" :src="n.image"></v-img>

                <v-card-item>
                  <v-card-title>{{ n.title }}</v-card-title>

                  <v-card-subtitle>
                    <span class="mr-1"> Favorite</span>

                    <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
                  </v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <v-rating :model-value="4.5" color="amber" density="compact" half-increments readonly size="small">
                    </v-rating>

                    <div class="text-grey ms-4">
                      4.5 (413)
                    </div>
                  </v-row>

                  <div class="my-4 text-subtitle-1">
                    Level : {{ n.Level }}
                  </div>

                  <div>{{ n.course_description }}
                  </div>
                </v-card-text>

                <v-divider class="mx-4 mb-1"></v-divider>

                <v-card-title>Enroll</v-card-title>

                <div class="px-4">
                  <v-chip-group v-model="selection">
                    <v-chip>{{ n.n_enrolled }}</v-chip>
                  </v-chip-group>
                </div>
              </v-card>
            </router-link>

          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
  <v-row>
  </v-row>


</template>
    
<script>


export default {
  name: 'Courses-vue',
  data: () => ({
    item: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Courses list',
        disabled: false,
        href: 'breadcrumbs_link_1',
      }
    ],
    items: [
      {
        title: "How to Learn Online",
        n_enrolled: "124,980",
        Level: "Introductory",
        image: "https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png",
        price: "510 usd",
        course_description: "Designed for those who are new to elearning, ",
        language: "English",
        instructors: "Nina Huntemann-Robyn Belair-Ben Piscopo",
      },
      {
        title: "Programming for Everybody (Getting Started with Python)",
        n_enrolled: "1293,864",
        Level: "Introductory",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAc3URccfmV8O3BPRQEIcQOWI7keQElJiXKxGC7ltxl_L_vpW36VYDM0oeFLd_MwWYE4s&usqp=CAU",
        price: "50 usd",
        course_description: "Designed for those who are new to elearning, ",
        language: "English",
        instructors: "Nina Huntemann-Robyn Belair-Ben Piscopo",
      },
      {
        title: "CS50's Introduction to Computer Science",
        n_enrolled: "2,442,271",
        Level: "Intermediate",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjbUf-J3l78d0N3myxeUlSNtBNyj2P9lEHWTPiC9sCPbLZPmsJnfgIkN6M4Tf3q1prLQ&usqp=CAU",
        price: "50 usd",
        course_description: "Designed for those who are new to elearning, ",
        language: "English",
        instructors: "Nina Huntemann-Robyn Belair-Ben Piscopo",
      },
      {
        title: "The Analytics Edge",
        n_enrolled: "129,555",
        Level: "Introductory",
        image: "https://prod-discovery.edx-cdn.org/media/course/image/52bf4539-6137-4968-9605-6c32414dcdc4-7e805a266b31.small.png",
        price: "50 usd",
        course_description: "Designed for those who are new to elearning, ",
        language: "English",
        instructors: "Nina Huntemann-Robyn Belair-Ben Piscopo",
      },

    ],
  }),

}
</script>
    