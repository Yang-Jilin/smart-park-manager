<template>
  <el-row>园区管理</el-row>
  <el-container>
    <el-row :gutter="20">
      <el-col span="4">
        <el-input placeholder="请输入园区名称"></el-input>
      </el-col>
      <el-col span="4">
        <el-button type="primary">查询</el-button>
      </el-col>
      <el-col span="4">
        <el-button type="success">新增</el-button>
      </el-col>
      <el-col span="4">
        <el-button type="danger">删除</el-button>
      </el-col>
    </el-row>
  </el-container>
  <el-table :data="tableData" :border="true" style="width: 100%">
    <el-table-column fixed prop="date" label="Date" width="150" />
    <el-table-column prop="name" label="Name" width="120" />
    <el-table-column prop="state" label="State" width="120" />
    <el-table-column prop="city" label="City" width="120" />
    <el-table-column prop="address" label="Address" width="600" />
    <el-table-column prop="zip" label="Zip" width="120" />
    <el-table-column fixed="right" label="Operations" min-width="120">
      <template #default>
        <el-button link type="primary" size="small" @click="handleClick">
          Detail
        </el-button>
        <el-button link type="primary" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup></script>

<style lang="scss"></style>
