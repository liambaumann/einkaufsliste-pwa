<template>
  <div class="home">
    <EinkaufsListe msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import EinkaufsListe from "@/components/EinkaufsListe.vue";

export default {
  name: "HomeView",
  components: {
    EinkaufsListe,
  },
  data() {
    return {
      items: [
        {
          name: "Milch",
          anzahl: 2,
        },
      ],
    };
  },
};
</script>
