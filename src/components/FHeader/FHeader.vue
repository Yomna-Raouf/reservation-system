<script setup lang="ts">
import { useBranchesStore } from '@/stores/branches';

const branchesStore = useBranchesStore();

const toggleReservations = () => {
  branchesStore.toggleDisableReservations();
};
</script>

<template>
  <header>
    <h1>Reservations</h1>
    <el-button @click="toggleReservations" type="danger" round plain
      >Disable Reservations</el-button
    >
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
