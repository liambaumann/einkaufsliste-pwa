<template>
  <div
    class="flex justify-between border-solid border-2 border-gray-200 shadow-lg p-3 rounded-lg m-4 md:m-auto md:mt-4"
  >
    <div class="flex">
      <div
        class="border-2 border-solid shadow-lg rounded-lg border-gray-300 m-2 w-12 h-12 mr-4 transition-all duration-300"
        :class="{
          'bg-green-600': checked,
          'bg-gray-100': !checked,
          'active:bg-green-700': !checked,
          'active:text-white': !checked,
          'hover:bg-green-200': !checked,
          'text-white': checked,
          'text-gray-500': !checked,
          'transition-all': checked,
          'transition-all': !checked,
          //'border-2': checked,
          //'border-2': !checked,
        }"
        @click="checkbox()"
      >
        <svg
          class="w-11"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="{2}"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <div class="text-left pt-0.5">
        <h2 class="text-2xl font-semibold">
          {{ artname }}
        </h2>
        <p>Anzahl: {{ anzahl }}</p>
      </div>
    </div>
    <div class="flex">
      <svg
        class="w-10 mv-auto"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="{2}"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "EinkaufsArtikel",
  props: ["artname", "artanzahl"],
  data() {
    return {
      checked: false,
      name: this.artname,
      anzahl: this.artanzahl,
    };
  },
  methods: {
    checkbox() {
      this.checked = !this.checked;
    },
  },
};
</script>
