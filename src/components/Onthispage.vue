<template>
    <div class="otpbox">
      <h2><slot name="otph"></slot></h2>
      <p><slot name="otpp"></slot></p>
    </div>
  </template>
  
  <style scoped>
  .otpbox{
    border-style: solid;
    border-width: 2px;
    border-radius: 1rem;
    border-color: hsla(160, 100%, 37%, 1);
    padding: 2rem;
  }
  
  @media (min-width: 1024px) {
    
  }
  </style>
  