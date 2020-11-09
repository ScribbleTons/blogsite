<template>
<layout :show="pageTitle">
    <template #header>
        <nav id="navbar">
            <div id="navbar-link">
                <router-link to="/" class="nav-link">Home</router-link>
                <router-link to="/blog" class="nav-link">Blog </router-link>
                <router-link to="/about" class="nav-link">About</router-link>
            </div>
        </nav>
    </template>
    <div id="page-contents">
        <router-view></router-view>
    </div>

    <template #footer>
        <div id="footer">
            &copy; {{year()}}, All right reserved.
        </div>
    </template>
</layout>
</template>

<script>
import Layout from './../layouts/AppLayout'
export default {
    components: {
        Layout,
    },
    data() {
        return {
            pageTitle: false,
        }
    },
    computed: {

    },
    methods: {
        year() {
            let date = new Date().getFullYear();
            return date;

        },

    }
}
</script>

<style>
body {
    background-color: silver;
}

#navbar {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: flex-end;
    padding: 4px 10px 4px 10px;
    z-index: 1;
    background: rgba(2, 26, 29, 0.753);
    color: floralwhite;
    width: 100vw;
}

#navbar-link {
    display: flex;
    justify-content: space-evenly;
    margin: 4px 10px 4px 10px;
    font-size: 20px;
    font-weight: 300;
}

.nav-link {
    color: white;
}

#page-contents {
    position: relative;
    top: 60px;
}

#footer {
    position: relative;
    top: 60px;
    bottom: 0;
    text-align: center;
    background: mintcream;
    color: rgba(2, 26, 29, 0.753);
    padding: 20px;
    font-weight: bold;
}
</style>
