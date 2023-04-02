<script>
  import { count, dataInfo } from '../../../context/store.js';

  // setInterval(() => {
  //   increment();
  // }, 20000)

  function decrement() {
    count.update(n => n <= 0 ? dataInfo.length - 1 : n - 1);
	}

  function increment() {
    count.update(n => n >= dataInfo.length - 1 ? 0 : n + 1);
  }
</script>

<div class="flex flex-col items-center content-between w-1/2 m-auto">
  <div class="absolute top-4 left-1/2 -translate-x-1/2 hover:opacity-50">
    <button on:click={decrement}>
      <img class="w-20 rotate-180 m-auto" src="../../../public/assets/images/arrow.svg" alt="arrow" />
      <p class="text-lg m-auto mt-3">MODELO ANTERIOR</p>
    </button>
  </div>
  <div class="absolute bottom-4 left-1/2 -translate-x-1/2 hover:opacity-50">
    <button on:click={increment}>
      <p class="text-lg m-auto mb-3">SIGUIENTE MODELO</p>
      <img class="w-20 m-auto" src="../../../public/assets/images/arrow.svg" alt="arrow" />
    </button>
  </div>
</div>