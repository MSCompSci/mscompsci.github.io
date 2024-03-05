<script lang="ts">
    export let position: string;
  </script>
  
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <div class={position + " flip-card group"}>
    <div class="flip-card-inner group-hover:flip ">
      <div class="flip-card-front">
        <slot name="front" />
      </div>
      <div class="flip-card-back flex items-center justify-center">
        <slot name="back" />
      </div>
    </div>
  </div>