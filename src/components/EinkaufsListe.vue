<template>
  <div class="container mx-auto max-w-2xl mb-32">
    <h1 class="text-4xl">Ihre Einkaufsliste</h1>
    <AddArtikel />
      <EinkaufsArtikel
        v-for="(artikel, index) in liste"
        :key="artikel.id"
        :index="index"
        :artname="artikel.artname"
        :artanzahl="artikel.artanzahl"
        :enter-active-class="animate-pulse"
        :leave-active-class="animate-pulse"
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
      id: 2,
    };
  },
  methods: {
    addArticle(par_name, par_anzahl) {
      this.id += 1;
      let neueliste = [];
      neueliste.push({
        artname: par_name,
        artanzahl: par_anzahl,
        id: this.id,
      });
      this.liste.forEach(element => {
        neueliste.push(element);
      });
      this.liste = neueliste;
      //alert(this.liste)
    },
    removeArticle(index) {
      this.liste.splice(index, 1);
      //alert(this.liste)
    },
  },
};
</script>
