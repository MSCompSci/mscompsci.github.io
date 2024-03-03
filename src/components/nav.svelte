<script lang="ts">
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import DarkMode from "@components/darkMode.svelte";
</script>

<header class="fixed z-10 top-4 right-4 left-4 text-white">
  <div class="bg-slate-800 rounded-[2rem]">
    <menu
      class="mr-0 ml-auto h-fit bg-slate-300 w-fit dark:bg-slate-900 rounded-full flex justify-end p-2 gap-2"
    >
      <li>
        <DarkMode />
      </li>
      <li>
        <button class="h-11 w-11 rounded-full border bg-black">
          <i aria-hidden="true" class="fa-solid fa-xl fa-bars"></i>
          <span class="sr-only">Menu</span>
        </button>
      </li>
    </menu>
    <nav class="list-none flex justify-center pb-4 rounded-3xl">
      <ol class="flex flex-col gap-4 text-center pt-6 w-[66%]">
        <li class="w-full border py-2 rounded-full">
          <a class="flex justify-center" href="/#home">Home</a>
        </li>
        <li class="w-full border py-2 rounded-full">
          <a class="flex justify-center" href="/#about">About</a>
        </li>
        <li class="w-full border py-2 rounded-full">
          <a class="flex justify-center" href="/#projects">Projects</a>
        </li>
        <li class="w-full border py-2 rounded-full">
          <a class="flex justify-center" href="/#contact">Contact</a>
        </li>
      </ol>
    </nav>
  </div>
  <!-- 
   -->
</header>
