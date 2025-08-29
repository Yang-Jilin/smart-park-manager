<template>
  <el-container class="home-container" direction="vertical">
    <el-header>
      <div class="header-content">
        <div class="logo">
          <span>智慧园区管理系统</span>
        </div>
        <div class="header-right">
          <el-avatar
            :size="32"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          />
          <span class="username">管理员</span>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical"
          router
        >
          <el-menu-item index="/dashboard" >
            <el-icon><House /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="/park">
            <el-icon><User /></el-icon>
            <span>园区管理</span>
          </el-menu-item>
          <el-menu-item index="building">
            <el-icon><Setting /></el-icon>
            <span>楼宇管理</span>
          </el-menu-item>
          <el-menu-item index="floor">
            <el-icon><Setting /></el-icon>
            <span>楼层管理</span>
          </el-menu-item>
          <el-menu-item index="room">
            <el-icon><Setting /></el-icon>
            <span>房间管理</span>
          </el-menu-item>
          <el-menu-item index="parking">
            <el-icon><Setting /></el-icon>
            <span>车位管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="main-content">
          <router-view/>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { House, User, Setting } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">

.home-container {
  height: 100vh;
  width: 100vw;

  .el-header {
    --header-height: 60px;
    line-height: 60px;
    background-color: var(--primary-color);
    color: #fff;
    padding: 0 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;

      .logo {
        font-size: 20px;
        font-weight: bold;
      }

      .header-right {
        display: flex;
        align-items: center;
        gap: 10px;

        .username {
          font-size: 14px;
        }
      }
    }
  }

  > .el-container {
    flex: 1;
  }
}

</style>
