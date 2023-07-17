<script setup>
import Steps from '../components/Steps.vue'
</script>

<template>
<div class="intro">
  <h1>Welcome to DIY Lofts!</h1>
  <p>This website was made to help people build their dream loft, without having to plan out every single step. You ccan search around and find other
    websites that are similar to this one, but there's one big difference. We won't make you pay us for the plans! Now if you'd like to leave a tip we
  would very much appreciate it, but its not required! </p>
</div>
<div class="desc"> 
  <p>This is the video that first gave me the idea to build a loft bed! I had to make some ajustments because there is a size difference between a twin and a queen. 
  </p>
  <iframe width="700" height="350" src="https://www.youtube.com/embed/5eyxo8kiPiU" title="DIY Kids Floating Loft Bed  | TimberLOK Lag Screws" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</template>

<style>
.intro {
  align-items: center;
  padding: 15px;
}
.desc{
  align-items: center;
  padding: 15px
}
.desc p{
  padding: 10px;
}
.desc iframe{
  margin-left: 20%;
}
</style>