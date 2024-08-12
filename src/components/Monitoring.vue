<template>
  <div>
    <h2>Monitoring Dashboard</h2>
    <div>
      <h3>Status Log</h3>
      <ul>
        <li v-for="log in logs" :key="log.id">{{ log.message }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logs: [],
    };
  },
  created() {
    // Fetch log data initially and set up periodic updates if needed
    this.fetchLogs();
  },
  methods: {
    fetchLogs() {
      // Fetch logs from server
      this.logs = this.$store.state.order.logs;
    },
  },
};
</script>
