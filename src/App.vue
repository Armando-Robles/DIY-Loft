<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import Home from './components/Home.vue'
</script>

<template>
  <header>
    <div class="greetings">
      <h1>Welcome to DIY-Lofts!</h1>
      </div>
      <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/twin">Twin</RouterLink>
        <RouterLink to="/full">Full</RouterLink>
        <RouterLink to="/queen">Queen</RouterLink>
        <RouterLink to="/king">King</RouterLink>
      </nav>
    </div>
  </header>
  <div>
    <RouterView />
    <Footing />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  /* justify-content: center; */
  padding: 25px;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  /* position: fixed; */
}
.greetings h1 {
  text-align: center;
}


.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    /* display: flex; */
    align-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .greetings {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
  /* .greetings h1 {
    text-align: left;
  } */
}
</style>
