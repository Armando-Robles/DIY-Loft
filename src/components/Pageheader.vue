<template>
    <div class="infobox">
      <h2><slot name="lsh"></slot></h2>
      <p><slot name="lshp"></slot></p>
    </div>
  </template>
  
  <style scoped>
  p {
    padding: 1rem;
  }

  .infobox{
    padding: 2rem;
  }
  
  @media (min-width: 1024px) {
    
  }
  </style>
  