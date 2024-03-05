<script lang="ts">
  import FlipCard from "@components/flipCard.svelte";
  type IconButton = [
    { item: string; icon: string },
    { item: string; icon: string },
    { item: string; icon: string },
    { item: string; icon: string },
  ];
  export let title: string;
  export let items: IconButton;
  export let position: string;
  let flipCard:boolean = false;
  let backTitle:string;
  function showBack(i:string){
    backTitle = i;
    // console.log(i)
    flipCard = true;
  }
</script>

<FlipCard position={position} flipped={flipCard}>
    <div slot="front" class="w-full h-full border rounded-2xl flex flex-col items-center justify-center">
        <h3 class="text-center mx-auto h-fit w-fit text-2xl my-3">
            {title}
          </h3>
          <ul
            
            class="w-[70%] aspect-square mx-auto flex flex-wrap gap-x-4 justify-evenly items-center"
          >
            {#each items as item}
              <li
                class="border w-[40%] h-[40%] flex flex-col justify-center items-center rounded-2xl text-center bg-slate-600 hover:bg-slate-800 hover:scale-105"
              >
                <button class="w-full h-full" title={item.item} on:click={()=>showBack(item.item)}>
                  <i aria-hidden="true" class={item.icon + " fa-2x"}></i>
                  <div>{item.item}</div>
                </button>
              </li>
            {/each}
          </ul>
    </div>
    <div slot="back">
        <h3>{backTitle}</h3>
        <button class="border rounded-full px-3 py-2" on:click={()=>flipCard=false}>Back</button>
    </div>

</FlipCard>
