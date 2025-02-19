<script setup lang="ts">
import { ref, reactive, computed } from 'vue';

import { useBranchesStore } from '@/stores/branches';

import type { Branch } from './types';

import { FEditBranchForm } from '../FEditBranchForm';

const branchesStore = useBranchesStore();
const isEditBranchModalOpen = ref(false);
const selectedBranch = reactive({ id: '', name: '' });
const branchesData = computed(() => branchesStore.branches);

const getSelectedRow = (row: Branch) => {
  selectedBranch.id = row.id;
  selectedBranch.name = row.name;
  isEditBranchModalOpen.value = true;
};

const getRowKey = (row: Branch) => {
  return row.id;
};
</script>

<template>
  <div>
    <el-table
      :data="branchesData"
      :row-key="getRowKey"
      @row-click="getSelectedRow"
      style="width: 100%; background-color: transparent"
      max-height="250"
    >
      <el-table-column fixed prop="name" label="Branch"> </el-table-column>
      <el-table-column prop="reference" label="Reference"> </el-table-column>
      <el-table-column prop="tablesCount" label="Number Of Tables"> </el-table-column>
      <el-table-column prop="duration" label="Reservation Duration"> </el-table-column>
    </el-table>

    <el-dialog
      :title="`Edit ${selectedBranch.name} branch reservation settings`"
      :visible.sync="isEditBranchModalOpen"
    >
      <f-edit-branch-form />
      <span slot="footer" class="dialog-footer">
        <el-button @click="isEditBranchModalOpen = false" round>Cancel</el-button>
        <el-button type="primary" @click="isEditBranchModalOpen = false" round>Save</el-button>
      </span>
    </el-dialog>
  </div>
</template>
