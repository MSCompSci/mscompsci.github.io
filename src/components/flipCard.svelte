<script lang="ts">
  export let position: string;
  export let flipped = false;
</script>

<div class={position + " flip-card"}>
  <div class="flip-card-inner" class:flip={flipped}>
    <div class="flip-card-front">
      <slot name="front" />
    </div>
    <div class="flip-card-back flex items-center justify-center">
      <slot name="back" />
    </div>
  </div>
</div>
