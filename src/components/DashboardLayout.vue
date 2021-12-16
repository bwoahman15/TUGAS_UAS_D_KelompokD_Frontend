<template>
    <div class="dashboard">
        <v-navigation-drawer v-model="drawer" class="fullheight" width="256" app>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title"> ATMA RESTO </v-list-item-title>
                    <v-list-item-subtitle> Expect The Best </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
            <v-list dense nav>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    tag="router-link"
                    :to="item.to"
                >
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app fixed height="75px">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <VSpacer />
            <v-toolbar-items>
                <v-btn @click="logout" text router><v-icon>mdi-power</v-icon></v-btn>
            </v-toolbar-items>
        </v-app-bar>
        <div class="fullheight pa-5">
            <router-view></router-view>
        </div>
        <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom> {{ error_message }} </v-snackbar>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    data() {
        return {
            load: false,
            snackbar: false,
            error_message: "",
            color: "",
            drawer: true,
            items: [
                { title: "User", to:'/user' },
                { title: "Dashboard", to:'/dashboard' },
                { title: "Makanan", to: '/makanan'},
                { title: "Minuman", to: '/minuman' },
                { title: "Reservasi Meja", to: '/meja' },
            ],
        };
    },
    methods: {
        logout() {
            localStorage.removeItem('token');
            this.$router.push({
                name: 'Login',
            });
        }
    },
};

</script>
<style scoped>
.fullheight {
    min-height: 100vh !important;
}

.router{
    text-decoration: none;
    color: black;
}
</style>