<script lang="ts">
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import DarkMode from "@components/darkMode.svelte";
  let menuOpen: boolean = false;
  let links: string[] = ["Home", "About", "Projects", "Contact"];

  // Open/close nav menu
  function toggleMenu() {
    if (!menuOpen) {
      menuOpen = true;
    } else {
      menuOpen = false;
    }
  }
</script>

<header
  class=" fixed z-10 right-0 left-0 top-0 m-4 flex justify-end overflow-clip rounded-[2rem]"
>
  <div
    id="wrapper"
    class:animate-move-left={menuOpen}
    class:md:animate-move-left-md={menuOpen}
    class:animate-move-right={!menuOpen}
    class:md:animate-move-right-md={!menuOpen}
    class="bg-slate-200 h-16 dark:bg-slate-800 bg-opacity-80 rounded-[2em] w-40"
  >
    <menu
      id="menuBlock"
      class="mr-0 ml-auto h-16 bg-slate-300 w-40 rounded-l-[2rem] dark:bg-slate-900 flex justify-center p-2 gap-2"
    >
      <li class="self-center">
        <DarkMode />
      </li>
      <li class="self-center">
        <button
          on:click={toggleMenu}
          aria-controls="navMenu"
          title="Menu"
          class=" hover:scale-105 h-11 w-11 rounded-full bg-slate-100 border-slate-300 dark:border-slate-800 border text-slate-950 dark:bg-slate-700 dark:text-slate-50"
        >
          <i aria-hidden="true" class="fa-solid fa-xl fa-bars"></i>
          <span class="sr-only">Main menu</span>
        </button>
      </li>
    </menu>
    <nav
      id="navMenu"
      class:flex={menuOpen}
      class:hidden={!menuOpen}
      class=" list-none justify-center pb-4 rounded-3xl"
    >
      <ol
        class="flex flex-col md:flex-row gap-4 text-center pt-6 w-[80%] max-w-[48rem]"
      >
        {#each links as link}
          <li
            class="md:w-48 w-full text-lg text-slate-950 dark:text-slate-50 hover:scale-105 border-2 border-slate-600 dark:border-slate-500 rounded-full"
          >
            <a
              title={link}
              class=" flex justify-center rounded-full py-3"
              href={"/#" + link.toLowerCase()}>{link}</a
            >
          </li>
        {/each}
      </ol>
    </nav>
  </div>
</header>
