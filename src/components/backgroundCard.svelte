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
  let backTitle: string;
  let description: string;
  function showBack(i: string, d: string) {
    let ar = Array.prototype.slice.call(
      document.getElementsByClassName("fc-bg")
    );
    ar.forEach((e) => {
      e.classList.remove("flip");
    });

    setTimeout(() => {
      document.getElementById(i + "-fc")?.classList.toggle("flip");
      backTitle = i;
      description = d;
    }, 250);
  }
</script>

<!-- <div class=""> -->
<div
  id="bg-div"
  class=" shadow-xl border border-slate-300 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 dark:border-slate-700 rounded-2xl w-full aspect-square flex flex-col items-center justify-center sm:row-span-2 lg:col-start-1 lg:row-start-2 lg:col-span-2 lg:aspect-[2/1] lg:row-span-1"
>
  <h3 class="text-center mx-auto h-fit w-fit text-2xl my-8">{title}</h3>
  <ul
    class="w-[80%] pb-4 flex flex-col lg:grid lg:grid-cols-4 lg:w-[85%] gap-2"
  >
    {#each items as item}
      <li
        class=" flip-card border border-slate-300 dark:border-slate-700 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-600 dark:to-slate-700 hover:from-slate-300 hover:to-slate-400 dark:hover:from-slate-700 dark:hover:to-slate-800 dark:hover:border-slate-800 rounded-2xl w-full text-center"
      >
        <div
          id={item.item + "-fc"}
          class="flip-card-inner fc-bg aspect-video lg:aspect-[3/5]"
        >
          <div
            class="  flip-card-front flex flex-row lg:flex-col gap-4 w-2/3 mx-auto items-center"
          >
            <button
              class="w-full h-full"
              title={item.item}
              on:click={() => showBack(item.item, item.desc)}
            >
              <i aria-hidden="true" class={item.icon}></i>
              <div>{item.item}</div>
            </button>
          </div>
          <div class="flip-card-back w-full h-full dark:border-slate-700">
            <div class="w-full flex mt-1">
              <button
                class="border border-slate-600 shadow-xl aspect-square h-fit w-8 rounded-full ml-2"
                on:click={() =>
                  document
                    .getElementById(item.item + "-fc")
                    ?.classList.toggle("flip")}
                ><i aria-hidden="true" class="fa-solid fa-chevron-left"
                ></i><span class="sr-only">Back</span></button
              >
            </div>
            <!-- <h3 class="mt-2 self-start">{backTitle}</h3> -->

            <p class="my-3 mx-1">{description}</p>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</div>
<!-- </div> -->
