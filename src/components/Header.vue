<template>
    <div class="fixed top-0 left-0 w-full shadow-md">
        <div class="bg-neutral-800 text-neutral-100 py-3.5 px-8 md:px-20 justify-between md:flex">
            <h1 class="text-red-700 text-2xl cursor-pointer italic font-bold">
                <router-link to="/"> chase_f1 </router-link>
            </h1>

            <span class="absolute md:hidden right-6 top-1.5 cursor-pointer text-white text-4xl" @click="menuOpen()">
                <i :class="open ? 'bi bi-x' : 'bi bi-list'"></i>
            </span>

            <ul class="md:flex md:items-center absolute md:static md:z-auto z-[-1] left-0 bg-neutral-800
                    w-full md:w-auto transition-all duration-500 ease-in md:space-x-8 p-8 md:p-0 
                    space-y-8 md:space-y-0"
                :class="open ? 'top-14 opacity-100' : 'top-[-390px] opacity-0 md:opacity-100'">
                <li class="md:text-base font-semibold hover:border-b-2 border-red-700" v-for="link in links" :key="link.name">
                    <router-link :to="'/'+link.link" @click="menuOpen()"> {{ link.name }} </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',

    data() {
        return {
            links: [
                {name: "Calendario", link: "calendario"},
                {name: "Classificação", link: "classificaçao"},
                {name: "Resultados", link: "resultados"}
                ],

            open: false
        }
    },

    methods: {
        menuOpen: function() {
            this.open = !this.open
            this.$emit('opacity')
        }
    }
}
</script>