<script setup lang="ts">
import { FAddBrancehsModal } from '../FAddBrancehsModal';
import { FBranchesTable } from '../FBranchesTable';
</script>

<template>
  <div class="brancehList">
    <div class="brancehList_container">
      <div class="brancehList_header"><f-add-brancehs-modal /></div>
      <f-branches-table />
    </div>
  </div>
</template>

<style scoped>
.brancehList {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100dvh - 64px);
  width: 100%;
}

.brancehList_container {
  width: 60%;
  background: var(--surface-0);
  border-radius: 20px;
  padding: 24px 20px;
  box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #fff, 0 1px 2px 0 black;
}

.brancehList_header {
  width: fit-content;
  margin-left: auto;
  margin-bottom: 12px;
}
</style>
