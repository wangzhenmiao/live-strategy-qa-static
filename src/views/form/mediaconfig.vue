<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="systemType">
        <el-input v-model="form.systemType" />
      </el-form-item>
      <el-form-item label="systemType">
        <el-select v-model="form.systemType" placeholder="please select your zone">
          <el-option label="iOS" value="iOS" />
          <el-option label="Android" value="Android" />
        </el-select>
      </el-form-item>
      <el-form-item label="appId">
        <el-input v-model="form.appId" />
      </el-form-item>
      <el-form-item label="phoneDetail">
        <el-input v-model="form.phoneDetail" />
      </el-form-item>
      <el-form-item label="momoid">
        <el-input v-model="form.momoid" />
      </el-form-item>
      <el-form-item label="checkField">
        <el-input v-model="form.checkField" />
      </el-form-item>
      <el-form-item label="targetValue">
        <el-input v-model="form.targetValue" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getDetail } from '@/api/mediaconfig'
import { mediaStore } from '@/api/mediaconfig'


export default {
  data() {
    return {
      form: {
        systemType: '',
        appId: '',
        phoneDetail: '',
        momoid: '',
        checkField: '',
        targetValue: ''
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    onSubmit() {
      mediaStore(this.form).then(() => {
            this.$message('submit!')
            this.$router.push({ path: this.redirect || '/mediaconfig' })
          }).catch(() => {
            this.$message("Failed")
          })
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    fetchData() {
      getDetail().then(response => {
        this.form = response.data.detail
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

