<script lang="ts">
  export let src:string = "";
  export let alt:string = "";
  export let id:string = "";
  export let classOpt:string = "";
  let modal:HTMLDialogElement;
</script>
<button aria-controls={id+"-modal"} class="bg-transparent peer rounded-xl sr-only  " on:click={()=>modal.showModal()}><span class="sr-only">Toggle image zoom</span></button>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<img {id} {src} {alt} class={classOpt+" w-full peer-focus:border-4 border-slate-950 dark:border-slate-50 cursor-pointer hover:scale-[101%] "} on:click={()=>modal.showModal()} />
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog bind:this={modal} id={id+"-modal"} class="rounded-xl backdrop:bg-slate-800 backdrop:opacity-75 transition-all" on:click={()=>modal.close()}>
  <img {id} {src} {alt} class={classOpt+" w-full peer-focus:border-4 border-slate-950 dark:border-slate-50"}/>
</dialog>
