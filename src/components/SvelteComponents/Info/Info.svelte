<script>
  export let dataSensor;
  export let color;
  import { count, dataInfo } from '../../../context/store.js';
</script>

<div class="absolute left-16 top-40">
  <h1 class="text-6xl font-bold lg:text-9xl">{dataInfo[$count].name}</h1>
  <div class="flex flex-col gap-2 text-3xl lg:text-4xl mt-7">
    <p class="{color}">___</p>
    <p class="mt-2 font-bold">{dataInfo[$count].userName}</p>
    <p class="text-sm mb-6">[ {dataInfo[$count].fetchId} ]</p>
    <p>{dataInfo[$count].city}</p>
    <p class="text-5xl font-semibold">{dataInfo[$count].country}</p>
    <div class="flex flex-col mt-10">
      <p class="text-2xl">SENSOR CO2</p>
      <p class="font-bold text-8xl {color}">{dataSensor}<span class="text-2xl">ppm</span></p>
    </div>
    <p>_</p>
  </div>
</div>

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