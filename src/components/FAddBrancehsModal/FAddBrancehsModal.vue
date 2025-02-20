<script setup lang="ts">
import { ref, computed } from 'vue';

import { useBranchesStore } from '@/stores/branches';

const branchesStore = useBranchesStore();

const isDialogVisible = ref(false);
const selectedBranch = ref();

const branches = computed(() => branchesStore.addBranchList);

const onAddBranchesClicked = () => {
  isDialogVisible.value = true;
};

const enableBranchReservations = () => {
  branchesStore.enableBranchReservation(selectedBranch.value);
  isDialogVisible.value = false;
};
</script>

<template>
  <div>
    <el-button round @click="onAddBranchesClicked"> Add Branches </el-button>

    <el-dialog title="Add Branches" :visible.sync="isDialogVisible">
      <el-form label-position="top" label-width="500px">
        <el-form-item label="Branches" size="medium">
          <el-select
            v-model="selectedBranch"
            placeholder="Please select a branch"
            size="large"
            style="width: 100%"
          >
            <el-option
              v-for="branch in branches"
              :key="branch.value"
              :label="branch.label"
              :value="branch.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isDialogVisible = false" round>Cancel</el-button>
        <el-button type="primary" @click="enableBranchReservations" round>Save</el-button>
      </span>
    </el-dialog>
  </div>
</template>
