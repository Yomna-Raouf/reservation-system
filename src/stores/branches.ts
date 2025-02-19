import { ref } from 'vue';

import { defineStore } from 'pinia';

import { apiStatus } from '@/api/constants/apiStatuses';
import { getBranchesRequest } from '@/api/getBranches';
import { withAsync } from '@/api/utils/withAsync';

// TODO: create branches types
const getTablesCount = (sections: any[]) => {
  return sections
    .map(
      (section: any) =>
        section.tables.filter((table: any) => table.accepts_reservations === true).length
    )
    .reduce((partialSum, a) => partialSum + a, 0);
};

export const useBranchesStore = defineStore('branches', () => {
  const branches = ref();
  const addBranchList = ref();
  const status = ref(apiStatus.IDLE);

  const getBranches = async () => {
    status.value = apiStatus.PENDING;

    const { response, error } = await withAsync<any>(getBranchesRequest);

    console.log({ response, error });

    if (error) {
      status.value = apiStatus.ERROR;
      return;
    }
    addBranchList.value = response?.data?.data?.map((branch: any) => ({
      label: branch.name,
      value: branch.id,
    }));
    branches.value = response?.data?.data?.map((branch: any) => {
      return {
        id: branch.id,
        name: branch.name,
        reference: branch.reference ?? '_',
        tablesCount: getTablesCount(branch.sections) ?? 0,
        duration: `${branch.reservation_duration} minutes`,
      };
    });
    status.value = apiStatus.SUCCESS;
  };

  return { getBranches, branches, addBranchList, status };
});
