<template>
<div>
    <div id="blog-box">
        <div id="blog-content">
            <div id="post-box">
                <div id="post-welcome">
                    <h2>Welcome to our blog page</h2>
                </div>
            </div>
            <div id="article-section">
                <router-view></router-view>
            </div>

            <button id="sidebar-button" type="button" @click="openNav()">Select article</button>

        </div>
        <div id="blog-title">
            <h2>Latest Articles</h2>
            <ul>
                <router-link class="blog-link" to="">
                    <li class="blog-title">
                        <h3>How to Choose a Programming Language</h3>
                        <p>Learn what it takes to be a programming beast.</p>
                    </li>
                </router-link>
                <router-link class="blog-link" to="#">
                    <li class="blog-title">
                        <h3>How to fly in JavaScript</h3>
                        <p>Learn what it takes to be a JavaScript beast.</p>
                    </li>
                </router-link>
                <router-link class="blog-link" to="#">
                    <li class="blog-title">
                        <h3>How to fly in JavaScript</h3>
                        <p>Learn what it takes to be a JavaScript beast.</p>
                    </li>
                </router-link>
                <router-link class="blog-link" to="#">
                    <li class="blog-title">
                        <h3>How to fly in JavaScript</h3>
                        <p>Learn what it takes to be a JavaScript beast.</p>
                    </li>
                </router-link>
                <router-link class="blog-link" to="#">
                    <li class="blog-title">
                        <h3>How to fly in JavaScript</h3>
                        <p>Learn what it takes to be a JavaScript beast.</p>
                    </li>
                </router-link>

            </ul>
        </div>
        <div id="side-bar" v-show="show">
            <a href="javascript:void(0)" id="closenav" @click="closeNav()">X</a>
            <h2>Latest Articles</h2>
            <ul>
                <router-link class="blog-link" to="">
                    <li class="side-blog-title">
                        <h3>How to Choose a Programming Language</h3>
                        <p>Learn what it takes to be a programming beast.</p>
                    </li>
                </router-link>
                <router-link class="blog-link" to="#">
                    <li class="side-blog-title">
                        <h3>How to fly in JavaScript</h3>
                        <p>Learn what it takes to be a JavaScript beast.</p>
                    </li>
                </router-link>
                <router-link class="blog-link" to="#">
                    <li class="side-blog-title">
                        <h3>How to fly in JavaScript</h3>
                        <p>Learn what it takes to be a JavaScript beast.</p>
                    </li>
                </router-link>
                <router-link class="blog-link" to="#">
                    <li class="side-blog-title">
                        <h3>How to fly in JavaScript</h3>
                        <p>Learn what it takes to be a JavaScript beast.</p>
                    </li>
                </router-link>
                <router-link class="blog-link" to="#">
                    <li class="side-blog-title">
                        <h3>How to fly in JavaScript</h3>
                        <p>Learn what it takes to be a JavaScript beast.</p>
                    </li>
                </router-link>

            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
        }
    },
    methods: {
        openNav() {
            document.getElementById('side-bar').style.width = "250px";
            document.getElementById('sidebar-button').style.visibility = "hidden";
            document.getElementById('closenav').style.display = "block";
            this.show = true;
        },
        closeNav() {
            document.getElementById('side-bar').style.width = "0";
            document.getElementById('sidebar-button').style.visibility = "visible";
            document.getElementById('closenav').style.display = "none";
            this.show = false;
        }
    }
}
</script>

<style lang="css">
/**Article section */
#article-section {
    background: rgba(2, 26, 29, 0.753);
}

/**Post section style */
#post-welcome {
    padding: 40px;
    text-align: center;
    background: mintcream;
}

#post-welcome h2 {
    font-size: 2.5em;
}

#post-welcome #post-button {
    border-radius: 15px;
    color: mintcream;
    background-color: rgba(2, 26, 29, 0.753);
    padding: 2px 9px 2px 9px;
    margin-top: 25px;
}

/**Blog box styling */
#blog-box {
    display: flex;
}

#blog-content {
    margin-bottom: 0;
    width: 76%;
}

/** Blog title styling */

#blog-title {
    width: 24%;
    height: auto;
    border-left: 2px solid black;
    padding: 10px;
    margin: 5px;
    background: white;

}

#blog-title h2 {
    text-align: center;
    font-size: 2.3em;
    font-weight: 300;
}

#blog-title ul {
    text-decoration: none;
    list-style: none;
    margin: auto;
    padding: 0 !important;
}

#blog-title ul a,
#side-bar ul a {
    color: black;
}

#blog-title ul a:hover,
#side-bar ul a:hover {
    text-decoration: none;
}

#blog-title h3 {
    font-size: 15px;
    font-family: 'Courier New', Courier, Arial, Helvetica, sans-serif;
    font-weight: bolder;

}

#blog-title li {
    border-top: 2px solid rgba(2, 26, 29, 0.753);
    border-top-right-radius: 25px;
    background: silver;
    padding: 20px 20px 5px 20px;
    margin: 4px 0px 0px 8px;
    font-family: 'Courier New', Courier, Arial, Helvetica, sans-serif;

}

#blog-title li:hover {
    background: rgba(2, 26, 29, 0.753);
    color: white;
    transform: scaleX(1.03);
    border-top: 2px solid silver;
}

#blog-title p {
    text-align: justify;
    padding: 0px 5px 0px 5px;
    font-size: 10px;

}

/**Side bar styling */
#side-bar {
    display: none;
    position: fixed;
    top: 70px;
    float: right;
    width: 0;
    z-index: 1;
    transition: 1.5s;
    background: white;
    color: rgba(2, 26, 29, 0.753);

}

#side-bar ul {

    list-style: none;
    padding: 10px;
}

#side-bar li:hover {
    background: rgba(2, 26, 29, 0.753);
    color: white;
    transform: scaleX(1.03);
    border-top: 2px solid silver;
}

#side-bar h2 {
    font-size: 1.5em;
    padding: 0px 30px 0px 30px;
}

#side-bar h3 {
    font-size: 1em;
    font-weight: bold;
    padding: 6px;
}

#side-bar p {

    line-height: 11px;
    font-size: 14px;
    font-style: italic;
    color: gray;
    padding: 2px;
    margin: 6px;
}

#side-bar p:hover {
    color: whitesmoke;
}

.side-blog-title {
    font-size: 1em;
    width: 100%;

    border-top: 2px solid rgba(2, 26, 29, 0.753);
    border-top-right-radius: 25px;
    font-family: 'Courier New', Courier, Arial, Helvetica, sans-serif;

}

/**side nav botton */
#sidebar-button {
    position: fixed;
    right: -35px;
    z-index: 1;
    transform: rotate(90deg);
    visibility: collapse;
    top: 200px;
    background: rgba(2, 26, 29, 0.753);
    color: white;
}

/**close nav link style */
#closenav {
    display: none;
    margin-left: 198px;
    padding: 6px;
    display: block;
    font-size: 1.3em;
    transition: 1.2s;
}

/**Media queries */
@media screen and (max-width: 768px) {
    #blog-box {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    #blog-title {
        display: none;
    }

    #side-bar {
        display: block;
    }

    #sidebar-button {
        visibility: visible;
    }

    #blog-content {
        margin-bottom: 0;
        width: 100%;
    }
}

@media screen and (min-width: 768px) {}
</style>
