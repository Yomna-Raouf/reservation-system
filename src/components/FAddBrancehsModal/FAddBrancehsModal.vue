<script setup lang="ts">
import { ref } from 'vue';

import { apiStatus } from '@/api/constants/apiStatuses';
import { withAsync } from '@/api/utils/withAsync';
import { getBranchesRequest } from '@/api/getBranches';

const isDialogVisible = ref(false);
const selectedBranch = ref();
const getBranchesStatus = ref(apiStatus.IDLE);
const branches = ref();

const getBranches = async () => {
  getBranchesStatus.value = apiStatus.PENDING;
  // TODO: create branches types
  const { response, error } = await withAsync<any>(getBranchesRequest);

  console.log({ response, error });

  if (error) {
    getBranchesStatus.value = apiStatus.ERROR;
    return;
  }

  branches.value = response?.data?.data?.map((item: any) => ({ label: item.name, value: item.id }));
  getBranchesStatus.value = apiStatus.SUCCESS;
};

const onAddBranchesClicked = () => {
  getBranches();
  isDialogVisible.value = true;
};
</script>

<template>
  <div>
    <el-button round @click="onAddBranchesClicked"> Add Branches </el-button>

    <el-dialog title="Add Branches" :visible.sync="isDialogVisible">
      <el-form label-position="top" label-width="500px">
        <el-form-item label="Branches" size="medium">
          <el-select
            multiple
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
        <el-button type="primary" @click="isDialogVisible = false" round>Save</el-button>
      </span>
    </el-dialog>
  </div>
</template>
