<script lang="ts">
  export let items: any;
</script>

<div class="grid gap-4 w-[80%] mx-auto">
  {#each items as item}
    <div class="hover:scale-[102%]">
      <a href={`/projects/${item.slug}/`}>
        <img
          class="rounded-xl shadow border dark:border-slate-700"
          src={item.data.image.url}
          alt={item.data.image.alt}
        />
        <div
          class=" text-xl relative z-[1] bottom-4 rounded-b-xl text-center bg-gradient-to-b from-slate-50 to-slate-300 dark:from-slate-600 dark:to-slate-700 py-8"
        >
          {item.data.title}
        </div>
      </a>
    </div>
  {/each}
</div>
