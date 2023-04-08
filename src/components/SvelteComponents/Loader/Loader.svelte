<script>
  import { TEXTS } from "../../../constants/constants";
</script>

<div class="flex flex-col gap-5">
  <img class="w-24 animate-pulse" src="../assets/images/model-load.svg" alt="loading icon" />
  <p class="text-lg">{TEXTS.intro}</p>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: radial-gradient(at 50% 50%, #171720 0%, #171720 40%, #070710 80%, #070710 100%);
  }
</style>