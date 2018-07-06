import request from '../utils/request';

export async function queryTask() {
  return request('/api/task');
}
