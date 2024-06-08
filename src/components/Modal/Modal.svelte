<script>
  import { TEXTS } from "../../constants";
  import { openModal } from "../../context/store.ts";

  function isClose() {
    openModal.update(() => false);
  }
</script>

<div
  class="absolute bg-background w-3/4 p-5 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
>
  <div>
    <p class="my-2">{TEXTS.knowMore.p1}</p>
    <p class="my-2">{TEXTS.knowMore.p2}</p>
    <p class="my-2">{TEXTS.knowMore.p3}</p>
  </div>
  <div class="text-center font-bold mt-5 my-2">
    <button on:click={isClose}> CERRAR </button>
  </div>
</div>
