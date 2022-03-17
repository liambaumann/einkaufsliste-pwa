<template>
  <div
    class="
      flex
      justify-between
      border-solid border-2 border-gray-200
      shadow-md
      p-3
      rounded-lg
      m-4
      md:m-auto md:mt-4
    "
    :class="{
      'border-gray-100': checked,
      'shadow-none': checked,
      'bg-gray-50': checked,
    }"
  >
    <div class="flex">
      <div
        class="
          border-2 border-solid
          shadow-md
          rounded-lg
          hover:scale-110
          border-gray-300
          m-2
          w-10
          h-10
          mr-4
          transition-all
          duration-300
        "
        :class="{
          'bg-gradient-to-tr': checked,
          'from-green-500': checked,
          'to-lime-500': checked,
          'bg-gray-100': !checked,
          'active:bg-green-600': !checked,
          'active:text-white': !checked,
          'hover:bg-green-200': !checked,
          'text-white': checked,
          'text-gray-500': !checked,
          'transition-all': checked,
          'duration-300': checked,
          'transition-all': !checked,
          'duration-300': !checked,
          //'border-2': checked,
          //'border-2': !checked,
        }"
        @click="checkbox()"
      >
        <svg
          class="w-9"
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
      <div
        class="text-left pt-0.5 transition-all duration-300"
        :class="{
          'text-gray-400': checked,
          'text-black': !checked,
        }"
      >
        <h2 class="text-xl font-semibold">
          {{ artname }}
        </h2>
        <p>Anzahl: {{ anzahl }}</p>
      </div>
    </div>
    <div @click="removeThis()" class="flex">
      <svg
        class="
          w-9
          text-red-500
          mv-auto
          hover:rotate-90
          transition-all
          duration-300
        "
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
  props: ["artname", "artanzahl", "index"],
  data() {
    return {
      checked: false,
      name: this.artname,
      anzahl: this.artanzahl,
      index: this.index,
    };
  },
  methods: {
    checkbox() {
      this.checked = !this.checked;
    },
    removeThis() {
      this.$parent.removeArticle(this.index);
    },
  },
};
</script>
