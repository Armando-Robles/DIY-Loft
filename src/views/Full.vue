<script setup>
import Steps from "../components/Steps.vue";
import Lsh from "../components/Pageheader.vue";
import Otp from "../components/Onthispage.vue";
import Mn from "../components/Materials.vue";
import Pricing from '../components/Pricing.vue';
</script>

<template>
  <div id="about"> <!-- Loft Size Header -->
    <Lsh>
      <template #lsh> Ah the classic Full bed </template>
      <template #lshp>
        There's nothing classic, just wanted to say that.
      </template>
    </Lsh>
  </div>

  <div> <!-- On This Page -->
    <Otp>
      <template #otph>
        Here is a breakdown of what you'll find on this page!
      </template>
      <template #otpp>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#materials">Materials</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#steps">Steps</a></li>
          <li><a href="#extras">Extras</a></li>
        </ul>
      </template>
    </Otp>
  </div>

  <div id="materials"> <!-- Materials -->
    <Mn>
      <template #mnh>
        Here is a list of the materials that will be needed for this project.
      </template>
      <template #mnp>
        <ul>
          <li>Wood</li>
          <li>Tools</li>
          <li>Determination</li>
          <li>Courage</li>
          <li>A nice lunch</li>
        </ul>
      </template>
    </Mn>
  </div>

  <div id="pricing">
    <Pricing>
      <template #ph>
        What should this project cost me?
      </template>
      <template #pp>
        Let's talk about that..
      </template>
    </Pricing>
  </div>

  <div id="steps"> <!-- Steps portion -->
    <Steps>
      <template #icon> 1 </template>
      <template #heading>Step 1</template>

      Vue’s
      <a href="https://vuejs.org/" target="_blank" rel="noopener"
        >official documentation</a
      >
      provides you with all information you need to get started.
    </Steps>

    <Steps>
      <template #icon> 2 </template>
      <template #heading>Step 2</template>

      This project is served and bundled with
      <a
        href="https://vitejs.dev/guide/features.html"
        target="_blank"
        rel="noopener"
        >Vite</a
      >. The recommended IDE setup is
      <a href="https://code.visualstudio.com/" target="_blank" rel="noopener"
        >VSCode</a
      >
      +
      <a
        href="https://github.com/johnsoncodehk/volar"
        target="_blank"
        rel="noopener"
        >Volar</a
      >. If you need to test your components and web pages, check out
      <a href="https://www.cypress.io/" target="_blank" rel="noopener"
        >Cypress</a
      >
      and
      <a href="https://on.cypress.io/component" target="_blank"
        >Cypress Component Testing</a
      >.

      <br />

      More instructions are available in <code>README.md</code>.
    </Steps>

    <Steps>
      <template #icon> 3 </template>
      <template #heading>Step 3</template>

      Get official tools and libraries for your project:
      <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a
      >,
      <a href="https://router.vuejs.org/" target="_blank" rel="noopener"
        >Vue Router</a
      >,
      <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener"
        >Vue Test Utils</a
      >, and
      <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener"
        >Vue Dev Tools</a
      >. If you need more resources, we suggest paying
      <a
        href="https://github.com/vuejs/awesome-vue"
        target="_blank"
        rel="noopener"
        >Awesome Vue</a
      >
      a visit.
    </Steps>

    <Steps>
      <template #icon> 4 </template>
      <template #heading>Step 4</template>

      Got stuck? Ask your question on
      <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
        >Vue Land</a
      >, our official Discord server, or
      <a
        href="https://stackoverflow.com/questions/tagged/vue.js"
        target="_blank"
        rel="noopener"
        >StackOverflow</a
      >. You should also subscribe to
      <a href="https://news.vuejs.org" target="_blank" rel="noopener"
        >our mailing list</a
      >
      and follow the official
      <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
        >@vuejs</a
      >
      twitter account for latest news in the Vue world.
    </Steps>

    <Steps>
      <template #icon> 5 </template>
      <template #heading>Step 5</template>

      As an independent project, Vue relies on community backing for its
      sustainability. You can help us by
      <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener"
        >becoming a sponsor</a
      >.
    </Steps>
  </div>
</template>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
