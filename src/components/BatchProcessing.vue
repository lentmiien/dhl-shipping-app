<template>
  <div>
    <h2>Batch Processing Orders</h2>
    <input type="file" @change="handleFileUpload" accept=".csv" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
      if (this.file) {
        const formData = new FormData();
        formData.append('file', this.file);
        this.uploadCSV(formData);
      }
    },
    async uploadCSV(formData) {
      try {
        // Call server API to upload the file
        const response = await this.$store.dispatch('order/uploadBatchCSV', formData);
        alert('Batch Upload Successful');
      } catch (error) {
        alert('Failed to upload batch CSV');
      }
    },
  },
};
</script>
