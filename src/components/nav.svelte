<script lang="ts">
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import DarkMode from "@components/darkMode.svelte";
  let menuOpen: boolean = false;
  function toggleMenu() {
    if (!menuOpen) {
      document.getElementById("navMenu")?.classList.replace("hidden", "flex");
      document
        .getElementById("wrapper")
        ?.classList.replace("max-h-16", "max-h-96");
      menuOpen = true;
    } else {
      setTimeout(() => {
        document.getElementById("navMenu")?.classList.replace("flex", "hidden");
      }, 150);
      document
        .getElementById("wrapper")
        ?.classList.replace("max-h-96", "max-h-16");

      menuOpen = false;
    }
  }
</script>

<header class="fixed z-10 top-4 right-4 left-4 text-white">
  <div
    id="wrapper"
    class=" overflow-clip max-h-16 transition-[max-height_4s_ease-in-out] bg-slate-800 bg-opacity-80 rounded-[2rem]"
  >
    <menu
      class="mr-0 ml-auto h-fit bg-slate-300 w-fit dark:bg-slate-900 rounded-full flex justify-end p-2 gap-2"
    >
      <li>
        <DarkMode />
      </li>
      <li>
        <button
          on:click={toggleMenu}
          aria-controls="navMenu"
          title="Menu"
          class="hover:scale-105 h-11 w-11 rounded-full border bg-black"
        >
          <i aria-hidden="true" class="fa-solid fa-xl fa-bars"></i>
          <span class="sr-only">Main menu</span>
        </button>
      </li>
    </menu>
    <nav
      id="navMenu"
      class="hidden list-none justify-center pb-4 md:pb-6 rounded-3xl"
    >
      <ol
        class="flex flex-col md:flex-row md:gap-8 gap-4 text-center pt-6 md:pt-12 w-[66%]"
      >
        <li class="hover:scale-105 w-full border rounded-full">
          <a
            title="Home"
            class=" flex justify-center rounded-full py-3"
            href="/#home">Home</a
          >
        </li>
        <li class="hover:scale-105 w-full border rounded-full">
          <a
            title="About"
            class="flex justify-center rounded-full py-3"
            href="/#about">About</a
          >
        </li>
        <li class="hover:scale-105 w-full border rounded-full">
          <a
            title="Projects"
            class="flex justify-center rounded-full py-3"
            href="/#projects">Projects</a
          >
        </li>
        <li class="hover:scale-105 w-full border rounded-full">
          <a
            title="Contact"
            class="flex justify-center rounded-full py-3"
            href="/#contact">Contact</a
          >
        </li>
      </ol>
    </nav>
  </div>
</header>
