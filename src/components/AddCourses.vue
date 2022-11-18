<template>
    <div>
        <v-breadcrumbs :items="item" divider="-"></v-breadcrumbs>
    </div>
    <v-container>
        <v-row no-gutters>
            <v-col cols="5">
                <v-sheet class="pa-2 ma-2">
                    <v-sheet class="pa-2 ma-2">
                        <v-card class="mx-auto" max-width="344">
                            <v-img
                                src="https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png"
                                height="200px" cover>
                            </v-img>

                            <v-card-title>
                                Introduction to Project Management
                            </v-card-title>

                            <v-card-subtitle>
                                Enroll: 1,002
                            </v-card-subtitle>
                            <v-divider class="mt-2"></v-divider>
                            <v-card-subtitle class="mt-2">
                                Duration : 3 Year
                            </v-card-subtitle>
                            <v-divider class="mt-2"></v-divider>
                            <v-card-subtitle class="mt-2">
                                Professor: Frank Schultmann-Noel Lindsay-Anton Jordaan-John Sing
                            </v-card-subtitle>
                            <v-divider class="mt-2"></v-divider>
                            <v-card-subtitle class="mt-2">
                                Price: $1254
                            </v-card-subtitle>
                            <v-divider class="mt-2"></v-divider>
                            <v-card-subtitle class="mt-2">
                                Date : 25 October 2022
                            </v-card-subtitle>
                            <v-divider class="mt-2"></v-divider>

                            <v-card-actions>
                                <v-btn color="orange-lighten-2" variant="text">
                                    Explore
                                </v-btn>

                                <v-spacer></v-spacer>

                                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show">
                                </v-btn>
                            </v-card-actions>

                            <v-expand-transition>
                                <div v-show="show">
                                    <v-divider></v-divider>
                                    <v-card-text>
                                        Project management is an essential skill-set for many careers and in many
                                        contexts in our lives. Introduction to Project Management is an ideal starting
                                        point if you need to manage projects at work or at home, while not necessarily
                                        being a formally trained project manager. It is also suitable if you are
                                        considering undertaking a project in the near future and are seeking to learn
                                        and apply essential project management knowledge and skills.To deliver a project
                                        successfully, it’s important to start by clearly identifying what the project
                                        is, and what its outcomes will be. In the course, we will show you practical
                                        ways to explore and understand your goals from the outset of your project, and
                                        to consider all the factors that may affect its execution. Step by step you will
                                        learn how to plan, scope, schedule, cost and manage your project from beginning
                                        to end. Since every project relies on the people who are delivering it, the
                                        course also enables you to explore how you can effectively communicate, manage
                                        people and employ leadership skills to successfully deliver your own project.In
                                        Introduction to Project Management, you will learn practical ways to use project
                                        management skills, whether your project is large or small. Join us to explore
                                        how you can benefit from using project management techniques in your own
                                        projects.
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-sheet>
                </v-sheet>

            </v-col>

            <v-col cols="7">
                <v-sheet class="pa-2 ma-2">
                    <v-card-title>
                        Courses Information
                    </v-card-title>
                    <p>
                        Week 1: Six Sigma Introduction
                        Introduction to the Six Sigma Methodology and the DMAIC process improvement cycle. Understand
                        the contributors to the cost of quality. Discuss the difference between defects and defectives
                        in a process and how to calculate process yield, including a comparison of processes of
                        different complexity using the metric DPMO.<br><br>
                        Week 2: DEFINE - Defining the Problem
                        Discuss how to understand customer expectations, using the Kano Model to categorize quality
                        characteristics. Start the first and difficult task of a Six Sigma project, Defining the
                        Problem, and review the key content in a Project Charter.<br><br>
                        Week 3: MEASURE - Statistics Review
                        Review of random variables and probability distributions used commonly in quality engineering,
                        such as Binomial, Poisson, and Exponential. Cover descriptive statistics, emphasizing the
                        importance of clearly communicating the results of your project.<br /><br />
                        Week 4: MEASURE - Normal
                        Distribution
                        Learn the characteristics of the Normal Distribution and how to use the Standard Normal to
                        calculate probabilities related to normally distributed variables. Cover the Central Limit
                        Theorem, and how it relates to sampling theory.<br /><br />
                        Week 5: MEASURE - Process Mapping
                        Introduce Process Mapping, including SIPOC and Value Stream Mapping. We identify the
                        Critical-to-Quality characteristic for a Six Sigma project<br /><br />
                        Week 6: MEASURE - Measurement System
                        Analysis
                        Learn the basics of Measurement Theory and Sampling Plans, including
                        Precision, Accuracy, Linearity, Bias, Stability, Gage Repeatability &
                        Reproducibility<br /><br />
                        Week 7:
                        MEASURE - Process Capability
                        Introduction to Process Capability and the metrics CP/CPK for establishing our baseline process
                        performance.<br /><br />
                        Week 8: Quality Topics and Course Summary Cover the basics of Tolerance Design and
                        the risk assessment tool failure Mode and Effects Analysis (FMEA).
                        Review the complete Six Sigma Roadmap before summarizing and closing the course.
                    </p>
                </v-sheet>
                <v-sheet class="pa-2 ma-2">
                    <v-card>
                        <v-tabs v-model="tab" bg-color="muted">
                            <v-tab value="Subject">Subject</v-tab>
                            <v-tab value="two">Student</v-tab>
                            <v-tab value="three">Professores</v-tab>
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
                                                            size="small"
                                                            @click:close="data.parent.selectItem(data.item)">
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
                                    <v-container fluid>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-combobox v-model="select1" :items="student" label="Add more Student"
                                                    multiple>
                                                    <template v-slot:selection="data">
                                                        <v-chip :key="JSON.stringify(data.item)" v-bind="data.attrs"
                                                            :model-value="data.selected" :disabled="data.disabled"
                                                            size="small"
                                                            @click:close="data.parent.selectItem(data.item)">
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

                                <v-window-item value="three">
                                    <v-container fluid>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-combobox v-model="select2" :items="professors" label="Add more Profesores"
                                                    multiple>
                                                    <template v-slot:selection="data">
                                                        <v-chip :key="JSON.stringify(data.item)" v-bind="data.attrs"
                                                            :model-value="data.selected" :disabled="data.disabled"
                                                            size="small"
                                                            @click:close="data.parent.selectItem(data.item)">
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
                            </v-window>
                        </v-card-text>
                    </v-card>
                </v-sheet>
            </v-col>
        </v-row>

        <!-- <v-row no-gutters>
            <v-col>
            </v-col>

            <v-col cols="2">
                <v-sheet class="pa-2 ma-2">
                    .v-col-2
                </v-sheet>
            </v-col>

            <v-col>
                <v-sheet class="pa-2 ma-2">
                    .v-col-auto
                </v-sheet>
            </v-col>
        </v-row> -->
    </v-container>
</template>

<script>
export default {
    name: "vue-courses",
    data: () => ({
        show: false,
        tab: 'option-1',
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
        select1: ['Mohi Reza',
            'Sajan Das',],
        student: [
            'Md. Ahsan Nahiyan.',
            'Abu Tanvir Khan.',
            'Rakibul Islam Chowdhury',
            'Computer Programming.',
            'Md. Jaber Al Nahian',
            'Mohi Reza',
            'Sajan Das',
            'Md. Saidur Rahman Kohinoor',
        ],
        select2: [  'Md Sharjis Ibne Wadud',
            'Wordh Ul Hasan',],
        professors: [
            'Md. Bakiuzzaman Mohon',
            'Md. Anwar Hossen',
            'Sanjana Ruhani Tammim',
            'Md Sharjis Ibne Wadud',
            'Wordh Ul Hasan',
            'Md. Abdur Rahman Emad',
            'Md. Siratul Islam',
            'Sanjina Mostafa',
        ],
    })

}
</script>

<style>

</style>