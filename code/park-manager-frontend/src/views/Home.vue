<template>
  <el-container class="home-container">
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
    <el-container class="aside-content">
      <el-aside width="200px">
        <el-menu
          default-active="home"
          class="el-menu-vertical"
        >
          <el-menu-item index="home">
            <el-icon><House /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="park">
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
          <h2>欢迎使用智慧园区管理系统</h2>
          <el-card class="welcome-card">
            <p>这是一个基于Element Plus构建的智慧园区管理系统界面。</p>
            <p>左侧为导航菜单，右侧为主要内容区域。</p>
          </el-card>
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
    height: 60px;
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

  .home-content {
    height: calc(100vh - 60px);

    .el-aside {
      background-color: var(--secondary-color);

      .el-menu-vertical {
        border-right: none;
      }
    }

    .el-main {
      background-color: #f5f5f5;
      padding: 20px;

      .main-content {
        .welcome-card {
          max-width: 600px;
          margin: 20px 0;

          p {
            line-height: 1.6;
            margin: 10px 0;
          }
        }
      }
    }
  }
}

</style>
