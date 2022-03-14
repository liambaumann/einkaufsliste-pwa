<template>
    <div class="hello">
        <h1 class="text-4xl">Ihre Einkaufsliste</h1>
        <EinkaufsArtikel v-for="(artikel, index) in liste" :key="artikel.id" :artname="artikel.artname" :anzahl="artikel.anzahl" />
        <div class="flex border-solid border-2 max-w-2xl border-gray-200 shadow-lg p-3 rounded-lg m-4 md:m-auto md:mt-4">
            <div class="w-fit">
                <svg class="m-auto text-right w-10" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="{2}">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
            </div>
            <input class="shadow appearance-none border rounded w-fit py-3 text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="inputName" type="text" placeholder="Name" />
            <input class="ml-4 shadow appearance-none border rounded w-fit py-3 text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="inputAnzahl" type="number" placeholder="Anzahl" />
        </div>
    </div>
</template>

<script>
import EinkaufsArtikel from "@/components/EinkaufsArtikel.vue";
export default {
    name: "EinkaufsListe",
    components: {
        EinkaufsArtikel,
    },
    props: {
        msg: String,
    },
    data() {
        return {
            liste: [
                { artname: "Kaffe", anzahl: 1, id: 1 },
                { artname: "Mango", anzahl: 3, id: 2 },
            ],
        };
    },
};
</script>
