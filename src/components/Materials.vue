<template>
    <div class="materialbox">
      <h2><slot name="mnh"></slot></h2>
      <p><slot name="mnp"></slot></p>
    </div>
  </template>
  
  <style scoped>
  .materialbox{
    padding: 2rem;
  }
  
  @media (min-width: 1024px) {
    
  }
  </style>
  