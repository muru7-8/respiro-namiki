<script>
  export let dataSensor;
  export let color;
  import { count, dataInfo, date, openModal } from "../../context/store.ts";
  import Modal from "../Modal/Modal.svelte";

  function isOpen() {
    openModal.update(() => true);
  }
</script>

<div class="absolute left-8 top-28 md:top-40 md:left-16">
  <h1 class="text-4xl font-bold lg:text-8xl">{dataInfo[$count].name}</h1>
  <div class="flex flex-col text-2xl lg:text-4xl md:mt-7">
    <p class={color}>___</p>
    <p class="mt-2 font-bold">{dataInfo[$count].userName}</p>
    <p class="text-xs mb-6">[ {dataInfo[$count].fetchId} ]</p>
    <p class="text-xl md:text-3xl">{dataInfo[$count].city}</p>
    <p class="text-2xl font-semibold md:text-5xl">{dataInfo[$count].country}</p>
    <div class="flex flex-col mt-3 md:mt-10">
      <p class="text-sm md:text-2xl">SENSOR CO2</p>
      <p class="font-bold text-4xl md:text-7xl {color}">
        {dataSensor}<span class="text-lg md:text-2xl ml-1">ppm</span>
      </p>
    </div>
    <div class="text-xs mt-3">
      <p>{$date}</p>
    </div>
    <p class="hidden lg:block">_</p>
    <button class="w-10 mt-3 lg:hidden" on:click={isOpen}>
      <img src="/assets/images/info-2.svg" alt="" />
    </button>
  </div>
</div>

{#if $openModal}
  <Modal />
{/if}

<style>
  .green {
    color: #339900;
  }

  .limeGreen {
    color: #99cc00;
  }

  .yellow {
    color: #ffcc00;
  }

  .orange {
    color: #ff6600;
  }

  .red {
    color: #ff0000;
  }
</style>
