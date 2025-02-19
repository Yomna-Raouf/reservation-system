import api from './api';

export const getBranchesRequest = () => {
  return api.get('branches?include[0]=sections&include[1]=sections.tables&size=10');
};
