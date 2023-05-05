/*
 * @Author: Sandy
 * @Date: 2023-03-22 14:01:29
 * @Description:
 */
import { http } from '@/utils/http';
import { Result, ResultList } from '@/utils/http/types';
import { RequestOptions } from '@/utils/http/types';

export function getUsersList(
  data: { ids: number[] },
  requestOptions?: RequestOptions
): Promise<ResultList<User.UserInfoItf>> {
  return http.request(
    {
      method: 'POST',
      url: `/api/users/list`,
      data,
    },
    requestOptions
  );
}

export function getUserInfo() {
  return http.request({
    method: 'get',
    url: '/api/users/me/info',
  });
}
// 批量读取用户信息
export function getUserByIds(data: { ids: number[] }) {
  return http.request({
    method: 'post',
    url: '/api/users/list',
    data
  });
}
// 请求积分
export function getIntegral() {
  return http.request({
    method: 'get',
    url: '/api/points/total',
  });
}
// 请求积分明细
export function getIntegralDetails() {
  return http.request({
    method: 'get',
    url: '/api/points',
  });
}
// 请求积分充值明细
export function getIntegralOrders() {
  return http.request({
    method: 'get',
    url: '/api/points-orders ',
  });
}

// 新手引导完成状态
export function getGuideState() {
  return http.request({
    method: 'get',
    url: `/api/users/me/guidance`,
  });
}

// 完成新手引导
export function accomplishGuide() {
  return http.request({
    method: 'post',
    url: `/api/users/me/guidance/completion`,
  });
}