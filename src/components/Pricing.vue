<template>
    <div class="pricingbox">
      <h2><slot name="ph"></slot></h2>
      <p><slot name="pp"></slot></p>
    </div>
  </template>
  
  <style scoped>
  .pricingbox{
    padding: 2rem;
  }
  
  @media (min-width: 1024px) {
    
  }
  </style>
  