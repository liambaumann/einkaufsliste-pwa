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
      :checked="artikel.checked"
    />
  </div>
</template>

<script>
import EinkaufsArtikel from "@/components/EinkaufsArtikel.vue";
import AddArtikel from "@/components/AddArtikel.vue";
import axios from 'axios';
const baseURL = "https://pwa.liambaum.de/gettest"
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
      //info: [],
      liste: null,
      id: 3,
    };
  },
  async created () {
    console.log("in created lifecycle")
    try {
      const res = await axios.get(baseURL);
      this.data = res.data;
    } catch(e) {
      console.error(e)
    }
    console.log(this.data);
    this.liste = this.data.liste;
  },
  mounted() {
    console.log("abcde");
    //this.liste = JSON.parse(localStorage.getItem('elist'));
    console.log(this.liste);
    /*if (this.liste == null) {
      this.liste =  [
        {
          artname: "Milch",
          artanzahl: 2,
          id: 1,
          checked: false,
        }
      ];
    }*/
  },
  methods: {
    /*async pushArticle(par_name, par_anzahl) {
      const res = await axios.post(baseURL, {artname: "Testobject", artanzahl: 99, id:30, checked:true});
    },*/
    saveLocally() {
      localStorage.setItem('elist', JSON.stringify(this.liste));
    },
    addArticle(par_name, par_anzahl) {
      let neueliste = [];
      neueliste.push({
        artname: par_name,
        artanzahl: par_anzahl,
        id: this.liste.length+1,
      });
      this.liste.forEach((element) => {
        neueliste.push(element);
      });
      this.liste = neueliste;
      //alert(this.liste)
      this.saveLocally();
    },
    removeArticle(index) {
      this.liste.splice(index, 1);
      //alert(this.liste)
      this.saveLocally();
    },
    markChecked(index, checkState) {
      this.liste[index].checked = checkState;
      let tempList = [];
      this.liste.forEach((article) => {
        if (!article.checked) {
          tempList.push(article);
        }
      });
      this.liste.forEach((article) => {
        if (article.checked) {
          tempList.push(article);
        }
      });
      this.liste = tempList;
      this.saveLocally()
    },
  },
};
</script>
