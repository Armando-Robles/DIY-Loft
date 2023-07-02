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
      <template #lsh> The twin! </template>
      <template #lshp>
        The SMALLEST matress size there is. 
        Perfect for 1 if you don't toss and turn.
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

  <div id="pricing"> <!-- Pricing -->
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ex.
     </Steps>

    <Steps>
      <template #icon> 2 </template>
      <template #heading>Step 2</template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ex.
    </Steps>

    <Steps>
      <template #icon> 3 </template>
      <template #heading>Step 3</template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ex.a
    </Steps>

    <Steps>
      <template #icon> 4 </template>
      <template #heading>Step 4</template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ex.
    </Steps>

    <Steps>
      <template #icon> 5 </template>
      <template #heading>Step 5</template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ex.
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
