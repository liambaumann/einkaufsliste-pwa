<template>
  <div class="container mx-auto max-w-2xl">
    <h1 class="text-4xl">Ihre Einkaufsliste</h1>
    <AddArtikel />
    <EinkaufsArtikel
      v-for="(artikel, index) in liste"
      :key="artikel.id"
      :artname="artikel.artname"
      :artanzahl="artikel.artanzahl"
    />
  </div>
</template>

<script>
import EinkaufsArtikel from "@/components/EinkaufsArtikel.vue";
import AddArtikel from "@/components/AddArtikel.vue";
export default {
  name: "EinkaufsListe",
  components: {
    EinkaufsArtikel,
    AddArtikel,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      liste: [
        { artname: "Kaffe", artanzahl: 1, id: 1 },
        { artname: "Mango", artanzahl: 3, id: 2 },
      ],
    };
  },
};
</script>
