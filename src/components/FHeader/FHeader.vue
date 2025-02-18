<script setup lang="ts">
import { Button } from 'element-ui'

const log = () => {
  console.log('clicked')
}
</script>

<template>
  <header>
    <h1>Reservations</h1>
    <Button @click="log" round>Disable Reservations</Button>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: var(--surface-50);
  box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #fff, 0 1px 2px 0 black;
}

h1 {
  color: var(--highlight-text-color);
  font-weight: 500;
}
</style>
