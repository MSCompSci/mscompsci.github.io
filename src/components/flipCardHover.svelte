<script lang="ts">
  export let position: string;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class={position + " flip-card group"}>
  <div class="flip-card-inner group-hover:flip aspect-[1/1]">
    <div class="flip-card-front border-slate-700 shadow-xl">
      <slot name="front" />
    </div>
    <div
      class="flip-card-back flex items-center justify-center bg-slate-200 dark:bg-slate-600 border-slate-300 dark:border-slate-700 shadow-xl"
    >
      <slot name="back" />
    </div>
  </div>
</div>
