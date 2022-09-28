<script>
  const pages = [
    { title: "home", path: "/" },
    { title: "about", path: "/about" },
    { title: "services", path: "/services" },
    { title: "contact", path: "/contact" },
  ];
</script>

<header>
  {#each pages as { title, path }, index}
    <a href={path}>{title}</a>
  {/each}
</header>

<style>
  header {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px;
  }
</style>
