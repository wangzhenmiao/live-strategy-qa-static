<template :data="detail">
  <div class="dashboard-container">
    <div class="dashboard-text">systemType: {{ detail.systemType }}</div>
    <div class="dashboard-text">appId: {{ detail.appId }}</div>
    <div class="dashboard-text">phoneDetail: {{ detail.phoneDetail }}</div>
    <div class="dashboard-text">momoid: {{ detail.momoid }}</div>
    <div class="dashboard-text">checkField: {{ detail.checkField }}</div>
    <div class="dashboard-text">targetValue: {{ detail.targetValue }}</div>
  </div>
</template>

<script>
import { getDetail } from '@/api/mediaconfig'

export default {
  data() {
    return {
      detail: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getDetail().then(response => {
        this.detail = response.data.detail
      })
      
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
