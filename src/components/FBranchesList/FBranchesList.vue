<script setup lang="ts">
import { onMounted, computed } from 'vue';

import { useBranchesStore } from '@/stores/branches';

import { FAddBrancehsModal } from '../FAddBrancehsModal';
import { FBranchesTable } from '../FBranchesTable';

const branchesStore = useBranchesStore();

const status = computed(() => branchesStore.status);

onMounted(() => {
  branchesStore.getBranches();
});
</script>

<template>
  <div class="brancehList">
    <div v-if="['PENDING', 'IDLE'].includes(status)" class="brancehList_container">Loading ..</div>
    <div v-else-if="status === 'ERROR'">Oooops! Something went worng.</div>
    <div v-else class="brancehList_container">
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
