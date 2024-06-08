<script>
  import { count, dataInfo } from "../../context/store.ts";
  import { TEXTS } from "../../constants/";

  function decrement() {
    count.update((n) => (n <= 0 ? dataInfo.length - 1 : n - 1));
  }

  function increment() {
    count.update((n) => (n >= dataInfo.length - 1 ? 0 : n + 1));
  }
</script>

<div class="flex flex-col items-center content-between w-1/2 m-auto">
  <div class="absolute top-4 left-1/2 -translate-x-1/2 hover:opacity-50">
    <button on:click={decrement}>
      <img
        class="w-12 md:w-20 rotate-180 m-auto"
        src="../assets/images/arrow.svg"
        alt="arrow"
      />
      <p class="text-xs md:text-lg m-auto mt-3">{TEXTS.model.previous}</p>
    </button>
  </div>
  <div class="absolute bottom-4 left-1/2 -translate-x-1/2 hover:opacity-50">
    <button on:click={increment}>
      <p class="text-xs md:text-lg m-auto mb-3">{TEXTS.model.next}</p>
      <img
        class="w-12 md:w-20 m-auto"
        src="../assets/images/arrow.svg"
        alt="arrow"
      />
    </button>
  </div>
</div>
