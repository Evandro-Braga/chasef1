<template>
    <div class="header">
        <h1>
            <router-link to="/">
                Chase F1
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
                    CALENDARIO
                </router-link>
            </li>
            <li>
                <router-link to="/standings">
                    CLASSIFICAÇÃO
                </router-link>
            </li>
            <li>
                <router-link to="/drivers">
                    PILOTOS
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

<style scoped>
.header{
    display: flex;
    justify-content: space-around;
    background-color:#101010;
}

.header h1{
    font-weight: 500;
    margin: 8px;
}

.header h1  a{
    color: red;
}

.header .links{
    display: flex;
    width: 500px;
    justify-content: space-around;
    align-items: center;
}

.header .links li{
    list-style: none;
}

.header .links li a{
    font-weight: 500;
}

@media (max-width: 700px){
    .toogle {
        position: absolute;
        top: 16px;
        right: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 21px;
    }

    .toogle .bar{
        height: 3px;
        width: 100%;
        background-color: white;
        border-radius: 10px;
    }

    .header{
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;
        min-height: 60px;
    }

    .header h1{
        margin: 8px;
        text-align: left;
    }

    .header .links{
        display: none;
    }

    .header .links.responsive{
        text-align: center;
        margin-top: 0;
        display: block;
    }

    .header .links li{
        margin: 20px;
    }

    .header p{
        display: none;
    }
}
</style>