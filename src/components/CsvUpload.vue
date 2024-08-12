<template>
  <div>
    <h2>Upload CSV for Package Data</h2>
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
        const response = await this.$store.dispatch('order/uploadPackageCSV', formData);
        alert('Upload Successful');
      } catch (error) {
        alert('Failed to upload CSV');
      }
    },
  },
};
</script>