<template>
  <p>{{ t("message.hello") }}</p>
  <p>{{ t("message.text") }}</p>
  <el-button>{{ t('button.add') }}</el-button>
  <el-table
    v-loading="loading"
    element-loading-text="Loading..."
    :element-loading-spinner="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    element-loading-background="rgba(122, 122, 122, 0.8)"
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
  <div class="box">
    <el-switch
    v-model="value"
    class="ml-2"
    style="--el-switch-on-color: #13ce66"
    @click="change"
  />
  </div>
</template>

<script setup>
import { h } from 'vue';
import { useI18n } from 'vue-i18n';
import { ElMessage } from 'element-plus'

import { ref } from 'vue'

const value = ref(true)

const loading = ref(true)
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
const tableData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
]

const { t,locale } = useI18n();
let change = () => {
  if(locale.value == 'en'){
    locale.value = 'zhCn';
    ElMessage(t('message.success'));
  }else{
    locale.value = 'en';
    ElMessage(t('message.success'));
  }
}
</script>

<style>
.box{
  position:absolute;
  top:10px;
  right:10px;
}
.example-showcase .el-loading-mask {
  z-index: 9;
}
</style>
