<template>
  <div>
    <h2>Print Shipping Label</h2>
    <input type="text" v-model="identifier" placeholder="Order Number or Barcode" />
    <button @click="printLabel">Print Label</button>
    <div v-if="labelData">
      <!-- display label data -->
      <h3>Label Data</h3>
      <p>{{ labelData }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      identifier: '',
      labelData: null,
    };
  },
  methods: {
    async printLabel() {
      try {
        const response = await this.$store.dispatch('order/printLabel', this.identifier);
        this.labelData = response;
        alert('Label is ready and will be printed');
      } catch (error) {
        alert('Error printing label');
      }
    },
  },
};
</script>
