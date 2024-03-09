<script lang="ts">
  export let position: string;
  export let background: string;
  export let flipped = false;
  export let aspect: string;
</script>

<div class={position + aspect + " flip-card"}>
  <div class={ aspect +" flip-card-inner border-slate-700"} class:flip={flipped}>
    <div class={background +" flip-card-front"}>
      <slot name="front" />
    </div>
    <div class="flip-card-back flex items-center justify-center border-slate-700">
      <slot name="back" />
    </div>
  </div>
</div>
