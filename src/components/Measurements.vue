<template>
    <div class="measurementbox">
      <h2><slot name="msmth"></slot></h2>
      <p><slot name="msmtp"></slot></p>
    </div>
  </template>
  
  <style scoped>
  .measurementbox{
    padding: 2rem;
  }
  
  @media (min-width: 1024px) {
    
  }
  </style>
  