import { ref } from 'vue';

import { defineStore } from 'pinia';

import { apiStatus } from '@/api/constants/apiStatuses';
import { getBranchesRequest } from '@/api/getBranches';
import { withAsync } from '@/api/utils/withAsync';

export const useBranchesStore = defineStore('branches', () => {
  const branches = ref();
  const addBranchList = ref();
  const status = ref(apiStatus.IDLE);

  const getBranches = async () => {
    status.value = apiStatus.PENDING;
    // TODO: create branches types
    const { response, error } = await withAsync<any>(getBranchesRequest);

    console.log({ response, error });

    if (error) {
      status.value = apiStatus.ERROR;
      return;
    }
    addBranchList.value = response?.data?.data?.map((item: any) => ({
      label: item.name,
      value: item.id,
    }));
    branches.value = response?.data?.data;
    status.value = apiStatus.SUCCESS;
  };

  return { getBranches, branches, addBranchList, status };
});
