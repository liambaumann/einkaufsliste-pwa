<template>
  <div
    class="md:flex border-solid border-2 border-gray-200 shadow-lg p-3 rounded-lg m-4 md:m-auto md:mt-4"
  >
    <div class="w-[20%]">
      <div
        class="flex w-12 h-12 items-center bg-gradient-to-tr from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 active:from-blue-700 active:to-teal-600 text-white shadow-lg rounded-lg m-2 mr-4 transition-all duration-200"
      >
        <svg
          class="m-auto text-right w-10 align-middle"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="{2}"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
    </div>

    <input
      class="m-auto align-middle h-13 shadow appearance-none border rounded-xl py-3 text-xl w-[60%] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="inputName"
      type="text"
      placeholder="Name"
    />
    <input
      class="m-auto align-middle h-13 ml-4 mr-2 shadow appearance-none border rounded-xl py-3 w-[20%] text-xl px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="inputAnzahl"
      type="number"
      placeholder="Anzahl"
    />
  </div>
</template>

<script>
export default {
  name: "AddArtikel",
  components: {},
  props: {},
  data() {
    return {};
  },
};
</script>
