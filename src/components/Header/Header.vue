<template>
    <div class="header">
        <h1>
            <router-link to="/">
                CHASE F1
            </router-link>
        </h1>
        <router-link to="#" class="toogle" @click="active">
            <span class="bar"> </span>
            <span class="bar"> </span>
            <span class="bar"> </span>
        </router-link>
        <ul id="myLinks" class="links">
            <li>
                <router-link to="/schedule">
                    Calendario
                </router-link>
            </li>
            <li>
                <router-link to="/standings">
                    Classificação
                </router-link>
            </li>
            <li>
                <router-link to="/drivers">
                    Pilotos
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',

    methods: {
        active: function () {
            var x = document.getElementById("myLinks");
            if (x.className === "links") {
                x.className += " responsive";
            } else {
                x.className = "links";
            }
        }
    }
}
</script>

<style src="./Style.scss" lang="scss" scoped></style>