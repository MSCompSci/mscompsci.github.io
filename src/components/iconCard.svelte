<script lang="ts">
  import FlipCard from "@components/flipCard.svelte";
  type IconButton = [
    { item: string; icon: string; desc: string },
    { item: string; icon: string; desc: string },
    { item: string; icon: string; desc: string },
    { item: string; icon: string; desc: string },
  ];
  export let title: string;
  export let items: IconButton;
  export let position: string;
  export let background: string;
  let flipCard: boolean = false;
  let backTitle: string;
  let description: string;
  function showBack(i: string, d: string) {
    backTitle = i;
    description = d;
    // console.log(i)
    flipCard = true;
  }
</script>

<FlipCard aspect="aspect-square " {position} {background} flipped={flipCard}>
  <div
    slot="front"
    class="w-full h-full shadow-xl border border-slate-300 dark:border-slate-700 rounded-2xl flex flex-col items-center justify-center"
  >
    <h3 class="text-center mx-auto h-fit w-fit text-2xl my-3">
      {title}
    </h3>
    <ul
      class="w-[70%] aspect-square mx-auto flex flex-wrap gap-x-4 justify-evenly items-center"
    >
      {#each items as item}
        <li
          class="border border-slate-300 dark:border-slate-700 shadow-lg w-[40%] h-[40%] flex flex-col justify-center items-center rounded-2xl text-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-600 dark:to-slate-700 hover:from-slate-300 hover:to-slate-400 dark:hover:from-slate-700 dark:hover:to-slate-800 dark:hover:border-slate-800 hover:scale-105"
        >
          <button
            class="w-full h-full"
            title={item.item}
            on:click={() => showBack(item.item, item.desc)}
          >
            <i aria-hidden="true" class={item.icon + " fa-2x"}></i>
            <div>{item.item}</div>
          </button>
        </li>
      {/each}
    </ul>
  </div>
  <div slot="back">
    <div class="w-[85%] mx-auto">
      <h3 class="text-xl">{backTitle}</h3>
      <p class="my-4">{description}</p>
      <button
        class="border shadow-xl rounded-full px-3 py-2"
        on:click={() => (flipCard = false)}>Back</button
      >
    </div>
  </div>
</FlipCard>
