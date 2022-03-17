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
      :enter-active-class="animate - pulse"
      :leave-active-class="animate - pulse"
      :checked="artikel.checked"
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
        { artname: "Kaffe", artanzahl: 1, id: 1, checked: false },
        { artname: "Apfel", artanzahl: 4, id: 2, checked: false },
        { artname: "Mango", artanzahl: 2, id: 3, checked: true },
      ],
      id: 3,
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
    markChecked(index, checkState) {
      this.liste[index].checked = checkState;
      let tempList = [];
      this.liste.forEach(article => {
        if(!article.checked){
          tempList.push(article)
        }
      });
      this.liste.forEach(article => {
        if(article.checked){
          tempList.push(article)
        }
      });
      this.liste = tempList;

    },
  },
};
</script>
