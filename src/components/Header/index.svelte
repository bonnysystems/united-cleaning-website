<script>
  const pages = [
    { title: "home", path: "/" },
    { title: "about", path: "/about" },
    { title: "services", path: "/services" },
  ];

  function handleHamburger(displayAttribute) {
    document.getElementsByClassName("hamburger-top-list")[0].style.display =
      displayAttribute;
  }
</script>

<header>
  <a href="/">
    <img
      class="logo"
      src="/logos/logo.png"
      alt="United cleaning logo"
      width={300}
      height={100}
    />
    <img
      class="small-logo"
      src="/logos/small-logo.png"
      alt="United cleaning small logo"
      width={100}
      height={100}
    />
  </a>
  <div class="top-actions">
    <nav class="top-nav">
      {#each pages as { title, path }}
        <a href={path}>{title.charAt(0).toUpperCase() + title.slice(1)}</a>
      {/each}
    </nav>
    <a class="contact-us" href="contact">Contact Us</a>
  </div>
  <div class="hamburger-container">
    <button class="hamburger-button" on:click={() => handleHamburger("flex")}>
      <div class="hamburger-line" />
      <div class="hamburger-line" />
      <div class="hamburger-line" />
    </button>
    <div class="hamburger-top-list">
      <div class="hamburger-top-container">
        <a class="contact-us" href="contact">Contact Us</a>
        <button class="x-button" on:click={() => handleHamburger("none")}>
          x
        </button>
      </div>
      <ul class="hamburger-actions">
        {#each pages as { title, path }}
          <li>
            <a href={path}>{title.charAt(0).toUpperCase() + title.slice(1)}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</header>

<style>
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    padding: 20px;
  }

  .logo {
    min-width: 300px;
  }

  .top-actions {
    width: 109%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .top-nav {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px;
  }

  .top-nav > a,
  .hamburger-actions > li > a,
  .contact-us {
    font-size: 1.4em;
    font-weight: 600;
    color: dodgerblue;
    text-decoration: none;
  }

  .top-nav > a:hover,
  .hamburger-actions > li > a:hover {
    color: darkslateblue;
  }

  .contact-us {
    background-color: dodgerblue;
    color: white;
    padding: 8px;
    border-radius: 16px;
    border: inherit;
    cursor: pointer;
    white-space: nowrap;
  }

  .contact-us:hover {
    background-color: darkslateblue;
  }

  .hamburger-container {
    display: none;
  }

  .hamburger-button {
    background: inherit;
    border: inherit;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-color: cornflowerblue;
  }

  .hamburger-button:hover {
    border-color: darkslateblue;
  }

  .hamburger-line {
    width: 48px;
    border: 3px solid;
    border-color: inherit;
    border-radius: 8px;
  }

  .hamburger-top-list {
    display: none;
    position: absolute;
    flex-direction: column;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 40px;
    background-color: beige;
  }

  .hamburger-actions {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .hamburger-actions > li {
    list-style-type: none;
  }

  .hamburger-top-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .x-button {
    font-size: 2em;
    cursor: pointer;
    background-color: inherit;
    border: inherit;
  }

  .x-button:hover {
    color: darkslateblue;
  }

  .small-logo {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    .top-actions {
      display: none;
    }

    .hamburger-container {
      display: block;
    }
  }

  @media only screen and (max-width: 425px) {
    .logo {
      display: none;
    }

    .small-logo {
      display: block;
    }
  }
</style>
