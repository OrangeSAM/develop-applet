/*
 * @Author: Lemon
 * @Date: 2023-03-24 14:50:24
 * @Description:
 */
import { defineStore } from 'pinia';
import { getTabs, getAppList, getAppResultList, getAppInfo, getMineApp } from '@/api/application';

interface ApplicationState {
  tabs: Application.tabInfoItf[];
  currentTab: number | null;
  appList: Application.appInfoItf[];
  resultList: Application.appResultItf[];
  appInfo: Application.appDetailItf;
  mineAppList: Application.appInfoItf[];
}

export const useApplicationStore = defineStore('application', {
  state: (): ApplicationState => ({
    tabs: [],
    currentTab: 0,
    appList: [],
    resultList: [],
    appInfo: {},
    mineAppList: [],
  }),
  getters: {},
  actions: {
    // 请求分类
    async getTabs() {
      const { data } = await getTabs('MINI_APP_HOME_TABS');
      this.tabs = data.tabs;
      this.setCurrentTab(this.tabs[0].category);
    },
    // 请求应用列表
    async getAppList() {
      const { data } = await getAppList(this.currentTab as number);
      this.appList = data.list;
    },

    setCurrentTab(category: number) {
      this.currentTab = category;
      this.getAppList();
    },
    // 请求应用信息
    async getApp(uuid: string) {
      const { data } = await getAppInfo(uuid as string);
      this.appInfo = data;
    },
    // 请求应用结果列表
    async getAppResult(uuid: string) {
      const { data } = await getAppResultList(uuid as string);
      this.resultList = data.list;
    },
    // 请求应用结果列表
    async getMineAppList() {
      const { data } = await getMineApp();
      this.mineAppList = data.list;
    },
  },
});
