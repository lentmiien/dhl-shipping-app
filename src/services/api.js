import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://your-server-url/api', // Replace with actual server URL
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data'
  }
});

export default {
  uploadPackageCSV(formData) {
    return apiClient.post('/orders/upload-csv', formData);
  },
  uploadBatchCSV(formData) {
    return apiClient.post('/orders/batch-upload', formData);
  },
  printLabel(identifier) {
    return apiClient.get(`/dhl/print-label/${identifier}`);
  }
};