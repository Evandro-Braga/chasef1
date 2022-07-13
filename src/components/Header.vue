<template>
    <div class="bg-neutral-900 text-neutral-100 py-3.5 px-6 md:px-16 md:flex justify-between">
        <h1 class="text-red-600 text-2xl cursor-pointer italic font-bold">
            <router-link to="/"> Chase F1 </router-link>
        </h1>

        <span class="absolute md:hidden right-6 top-1.5 cursor-pointer text-white text-4xl" @click="menuOpen()">
            <i :class="open ? 'bi bi-x' : 'bi bi-filter-left'"></i>
        </span>

        <ul class="md:flex md:items-center md:space-x-4 md:static absolute md:w-auto w-full
        top-14 duration-300 ease-in p-8 md:p-0 bg-neutral-900"
        :class="open ? 'left-0' : 'left-[-100%]'">
            <li class="border-t border-inherit font-semibold md:border-none py-4 md:py-0 pl-8
             text-md md:text-md md:my-0" v-for="link in links" :key="link.name">
                <router-link :to="'/'+link.link"> {{ link.name }} </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',

    data() {
        return {
            links: [
                {name: "Calendario", link: "schedule"},
                {name: "Classificação", link: "standings"},
                {name: "Resultados", link: "results"}
                ],

            open: false
        }
    },

    methods: {
        menuOpen: function() {
            this.open = !this.open
        }
    }
}
</script>