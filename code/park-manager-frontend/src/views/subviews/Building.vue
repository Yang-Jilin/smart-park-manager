<template>
  <div class="container">
    <div class="page-header">
      <h2 class="page-title">楼宇管理</h2>
      <div class="action-bar">
        <el-button type="primary" :icon="Plus" @click="handleAdd">新增楼宇</el-button>
        <el-button
          type="danger"
          :icon="Delete"
          :disabled="!selectedRows.length"
          @click="handleBatchDelete"
          >批量删除</el-button
        >
        <el-button :icon="Refresh" @click="refreshData">刷新</el-button>
      </div>
    </div>

    <el-card class="filter-card">
      <el-form :model="searchForm" label-width="80px" :inline="true">
        <el-form-item label="所属园区">
          <el-select
            v-model="searchForm.parkName"
            placeholder="请选择园区"
            clearable
            style="width: 180px"
          >
          </el-select>
        </el-form-item>
        <el-form-item label="建成时间">
          <el-date-picker
            v-model="searchForm.buildTimeRange"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            format="YYYY-MM-DD"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :icon="Search" @click="handleSearch">查询</el-button>
          <el-button @click="resetSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 表格视图 -->
    <el-card class="table-card">
      <el-table
        :data="tableData"
        border
        stripe
        highlight-current-row
        @selection-change="handleSelectionChange"
        v-loading="loading"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column type="index" label="序号" width="60" />
        <el-table-column prop="parkName" label="所属园区" min-width="150" show-overflow-tooltip />
        <el-table-column
          prop="buildingName"
          label="楼宇名称"
          min-width="200"
          show-overflow-tooltip
        />
        <el-table-column prop="totalFloors" label="总层数" width="120" />
        <el-table-column prop="buildingType" label="建筑类型" width="120" />
        <el-table-column prop="buildingArea" label="建筑面积" width="120" />
        <el-table-column label="操作" width="220" fixed="right">
          <template #default="scope">
            <el-button link type="primary" :icon="View" @click="viewDetail(scope.row)"
              >查看</el-button
            >
            <el-button link type="primary" :icon="Edit" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button link type="danger" :icon="Delete" @click="handleDelete(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <div class="pagination-container">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 50, 100]"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { Search, Plus, Delete, Refresh, View, Edit } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'

// 表格数据
const tableData = ref([])

// 分页相关
const currentPage = ref(1)
const pageSize = ref(10)
const loading = ref(false)

// 搜索表单
const searchForm = reactive({
  buildingName: '',
  parkName: '',
  buildTimeRange: [],
})

// 选中的行
const selectedRows = ref([])

// 处理表格选择变化
const handleSelectionChange = (selection) => {
  selectedRows.value = selection
}

// 搜索
const handleSearch = () => {
  loading.value = true
  // 模拟搜索请求
  setTimeout(() => {
    loading.value = false
    ElMessage.success('搜索完成')
  }, 500)
}

// 重置搜索
const resetSearch = () => {
  searchForm.buildingName = ''
  searchForm.parkName = ''
  searchForm.buildTimeRange = []
  handleSearch()
}

// 刷新数据
const refreshData = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    ElMessage.success('数据已刷新')
  }, 500)
}

// 新增园区
const handleAdd = () => {
  ElMessage.info('打开新增楼宇表单')
}

// 编辑园区
const handleEdit = (row) => {
  ElMessage.info(`编辑楼宇: ${row.buildingName}`)
}

// 查看详情
const viewDetail = (row) => {
  ElMessage.info(`查看楼宇详情: ${row.buildingName}`)
}

// 删除单个园区
const handleDelete = (row) => {
  ElMessageBox.confirm(`确定要删除楼宇 "${row.buildingName}" 吗？`, '删除确认', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      ElMessage.success(`删除成功: ${row.buildingName}`)
    })
    .catch(() => {
      ElMessage.info('已取消删除')
    })
}

// 批量删除
const handleBatchDelete = () => {
  if (selectedRows.value.length === 0) {
    ElMessage.warning('请至少选择一个楼宇')
    return
  }

  ElMessageBox.confirm(`确定要删除选中的 ${selectedRows.value.length} 个楼宇吗？`, '批量删除确认', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      ElMessage.success(`成功删除 ${selectedRows.value.length} 个楼宇`)
      selectedRows.value = []
    })
    .catch(() => {
      ElMessage.info('已取消删除')
    })
}

// 分页处理
const handleSizeChange = (val) => {
  pageSize.value = val
  refreshData()
}

const handleCurrentChange = (val) => {
  currentPage.value = val
  refreshData()
}

// 页面加载
onMounted(() => {
  // 可以在这里初始化数据
})
</script>

<style lang="scss" scoped>
.container {
  padding: 0px;

  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    .page-title {
      margin: 0;
      font-size: 22px;
      font-weight: 600;
      color: #303133;
    }
  }

  .filter-card {
    margin-bottom: 16px;
  }

  .action-bar {
    margin-bottom: 16px;
    display: flex;
    justify-self: start;
    gap: 8px;
  }

  .table-card {
    margin-bottom: 16px;
  }

  .pagination-container {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
}
</style>
