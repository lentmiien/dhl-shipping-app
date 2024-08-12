import api from '@/services/api';

const state = {
  logs: []
};

const mutations = {
  SET_LOGS(state, logs) {
    state.logs = logs;
  }
};

const actions = {
  async uploadPackageCSV({ commit }, formData) {
    try {
      const response = await api.uploadPackageCSV(formData);
      // handle response
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async uploadBatchCSV({ commit }, formData) {
    try {
      const response = await api.uploadBatchCSV(formData);
      // handle response
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async printLabel({ commit }, identifier) {
    try {
      const response = await api.printLabel(identifier);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};