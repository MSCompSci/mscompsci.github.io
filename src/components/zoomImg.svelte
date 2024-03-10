<script>
  import mediumZoom from "medium-zoom";

  export let src = undefined;
  export let alt = undefined;
  export let options = {
    background: "dimgray",
    opacity: 1,
    margin: 0,
    scrollOffset: 0,
  };

  let zoom = null;

  function getZoom() {
    if (zoom === null) {
      zoom = mediumZoom(options);
    }

    return zoom;
  }

  function attachZoom(image) {
    const zoom = getZoom();
    zoom.attach(image);

    zoom.on("open", (e) => {
      document.getElementById("nav-header").classList.add("opacity-0");
    });
    zoom.on("closed", (e) => {
      document.getElementById("nav-header").classList.remove("opacity-0");
    });

    return {
      update(newOptions) {
        zoom.update(newOptions);
      },
      destroy() {
        zoom.detach();
      },
    };
  }
</script>

<img {src} {alt} {...$$restProps} use:attachZoom={options} />

<style>
  .medium-zoom-overlay,
  .medium-zoom-image--opened {
    z-index: 999;
  }
</style>
