<template>
    <div class="header">
        <h1>
            <router-link to="/">
                Chase F1
            </router-link>
        </h1>
        <router-link to="#" class="toggle" @click="active">
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

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-around;
    background-color: #101010;;
}

.header h1 {
    margin: 12px;
    font-size: 24px;
    font-style: oblique;
}

.header h1 a {
    color: #e60000;
}

.header .links {
    display: flex;
    width: 400px;
    justify-content: space-around;
    align-items: center;
}

.header .links li {
    list-style: none;
}

.header .links li a {
    font-weight: bold;
}

@media (max-width: 700px) {
    .toggle {
        position: absolute;
        top: 16px;
        right: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 21px;
    }

    .toggle .bar {
        height: 3px;
        width: 100%;
        background-color: white;
        border-radius: 10px;
    }

    .header {
        display: flex;
        flex-direction: column;
    }

    .header h1 {
        margin: 12px;
        text-align: left;
    }

    .header .links {
        display: none;
    }

    .header .links.responsive {
        display: block;
        max-width: 100%;
        text-align: center;
        font-size: 24px;
    }

    .header .links li {
        margin: 30px 0 30px 0;
    }
}
</style>