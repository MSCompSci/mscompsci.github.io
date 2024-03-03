<script lang="ts">
  import DarkMode from "@components/darkMode.svelte";
</script>

<nav class="bg-black text-white">
  <menu>
    <li>
      <DarkMode />
    </li>
  </menu>
  <ol>
    <li>
      <a class="text-white" href="/#home">Home</a>
    </li>
    <li>
      <a href="/#about">About</a>
    </li>
    <li>
      <a href="/#projects">Projects</a>
    </li>
    <li>
      <a href="/#contact">Contact</a>
    </li>
  </ol>
</nav>
