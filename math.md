---
layout: doc
---

<script setup>
import ResourceGrid from './components/ResourceGrid.vue'

// 这里是【数学】的数据
const mathResources = [
  // 注意：第一个卡片我特意设置了跳转到下载详情页
  { title: '数学真题', iconText: '数', color: '#ff9900', link: '/math/zhenti' },
  { title: '张宇', iconText: '张', color: '#f59e0b', link: 'https://pan.baidu.com/...' },
  { title: '汤家凤', iconText: '汤', color: '#f59e0b', link: 'https://pan.baidu.com/...' },
  { title: '武忠祥', iconText: '武', color: '#f59e0b', link: 'https://pan.baidu.com/...' },
  { title: '李永乐', iconText: '李', color: '#f59e0b', link: 'https://pan.baidu.com/...' },
]
</script>

# 考研数学

这里汇集了历年考研数学真题及名师课程资料。

<ResourceGrid :items="mathResources" />