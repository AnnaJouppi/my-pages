<script setup>

import { ref } from 'vue';

// Input
const longToCiderAmountSmall = ref(null)
const longToCiderAmountBig = ref(null)
const ciderToLongAmountSmall = ref(null)
const ciderToLongAmountBig = ref(null)

// Output
const longToCiderResult = ref('')
const ciderToLongResult = ref('')

function longToCider(e) {
  e.preventDefault();

  if(longToCiderAmountSmall !== null || longToCiderAmountBig !== null) {
    // Each long drink (5.5%) is ~1.17 ciders (4.7%)
    const alcoholInCider = 0.33 * 0.047; // 0.33L can of cider at 4.7%
    const alcoholinLong = ((longToCiderAmountSmall.value * 0.33)+(longToCiderAmountBig.value * 0.5)) * 0.055;
    const result = alcoholinLong / alcoholInCider;
    console.log(result);
    
    longToCiderResult.value = `${result.toFixed(2)} cans of cider (0.33L, 4.7%)`;
  }
}

function ciderToLong(e) {
  e.preventDefault();

  if(ciderToLongAmountSmall !== null || ciderToLongAmountBig !== null) {
    const alcoholAmountInLong = 0.33 * 0.055; // 0.33L can of long drink at 5.5%
    const alcoholAmountInCider = ((ciderToLongAmountSmall.value * 0.33)+(ciderToLongAmountBig.value * 0.5)) * 0.047;
    // Each cider (4.7%) is ~0.85 long drinks (5.5%)
    const result = alcoholAmountInCider / alcoholAmountInLong;
    console.log(result);

    ciderToLongResult.value = `${result.toFixed(2)} cans of Long Drink (0.33L, 5.5%)`;
  }
}

</script>

<template>
   <h2>Alcohol Conversions Magic</h2>
   <div class="result-container">
    <div class="result">{{ longToCiderResult }}</div>
    <div class="result">{{ ciderToLongResult }}</div>
    </div>
  <div class="wrapper" >

<div class="container">
  <form class="form-container" @submit="longToCider">
    <h3>Long Drink ➡️ Cider</h3>
<div class="img-container" >
    <img src="/cider.png" alt="long drink"/>
    </div>
     <label>Amount of Long Drinks as 0.33L cans:</label>
    <input min="0" v-model.number="longToCiderAmountSmall" type="number">
    <label>Amount of Long Drinks as 0.5L cans:</label>
    <input min="0" v-model.number="longToCiderAmountBig" type="number">
    <button type="submit">Convert</button>
     </form>
  
     
    
 <form class="form-container" @submit="ciderToLong">
  <h3>Cider ➡️ Long Drink</h3>
  <div class="img-container">
  <img src="/longdrink.jpg" alt="cider"/>
  </div>
    <label>Amount of Ciders as 0.33L cans:</label>
    <input min="0" v-model.number="ciderToLongAmountSmall" type="number">
    <label>Amount of Ciders as 0.5L cans:</label>
    <input  min="0" v-model.number="ciderToLongAmountBig" type="number">
    <button type="submit">Convert</button>
     </form>
     
  </div>
  </div>
</template>

<style scoped>

h2 {
  margin-top: 1rem;
  text-align: center;
  color: #2563eb;
}

h3 {
  color: #2563eb;
  letter-spacing: 1px;
  font-size: 1.3rem;
}

.result {
  text-align: center;
  font-size: 1.2rem;
  color: #2563eb;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  gap: 50px;
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #ffffff33;
  border-radius: 16px;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.08);
  padding: 32px 24px;
  min-width: 320px;
  transition: box-shadow 0.2s, background-color 1s;
  margin-top: 10px;
}

.form-container:hover {
  background-color: #fff;
  box-shadow: 0 0 20px 30px #cdeb7c;
}

.img-container {
  height: 200px;
}

.result-container {
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

img {
  display: inline-block;
  padding: 5px;
  width: 150px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 5px hsla(0, 0%, 0%, 0.068);
}

button[type="submit"] {
  background: linear-gradient(90deg, #e6ecd6 0%, #cdeb7c 100%);
  color: #2563eb;
  border: none;
  border-radius: 8px;
  padding: 10px 28px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.2s, transform 0.1s;
  font-family: "Bitcount";
}

button[type="submit"]:hover {
  background: linear-gradient(90deg, #e6ecd6 0%, #cdeb7c 100%);
  transform: translateY(-2px) scale(1.03);
}

input[type="number"] {
  border: none;
  border-bottom: 2px solid #cdeb7c;
  border-radius: 0;
  background: transparent;
  padding: 8px 4px;
  font-size: 1rem;
  outline: none;
  transition: border-color 1s;
  margin-bottom: 10px;
  font-family: "Bitcount";
}

input[type="number"]:focus {
  border-bottom: 2.5px solid #2563eb;
  background: #f8fafc; 
  }
</style>
