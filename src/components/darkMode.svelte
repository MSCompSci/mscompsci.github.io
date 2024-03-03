<script lang="ts">
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import { onMount } from "svelte";
  let darkTheme: boolean = false;
  onMount(() => {
    let theme = sessionStorage.getItem("theme");
    if (theme === "true") {
      darkTheme = true;
    }
  });

  function setTheme() {
    if (darkTheme === true) {
      sessionStorage.setItem("theme", "true");
      document.documentElement.classList.add("dark");
    } else {
      sessionStorage.setItem("theme", "false");
      document.documentElement.classList.remove("dark");
    }
  }
</script>

<label
  for="dm-toggle"
  title="Toggle Dark Mode"
  class="flex items-center cursor-pointer select-none text-dark dark:text-white"
>
  <div class="relative hover:scale-105">
    <input
      id="dm-toggle"
      type="checkbox"
      class="sr-only peer"
      value=""
      bind:checked={darkTheme}
      on:change={setTheme}
    />
    <div
      class="block h-11 rounded-full shadow border peer-focus-within:border-black peer-focus-within:border-2 dark:peer-focus-within:border-white"
    ></div>
    <div
      class="preload absolute text-white shadow-xl border-2 flex justify-center w-10 h-10 rounded-full left-[2px] top-[2px] peer-checked:translate-x-7 transition"
    >
      <i
        aria-hidden="true"
        class=" fa-solid fa-xl self-center"
        class:fa-moon={darkTheme}
        class:fa-sun={!darkTheme}
      ></i>
    </div>
    <span class="sr-only">Toggle Dark Mode</span>
  </div>
</label>
