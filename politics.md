---
layout: doc
---

<script setup>
import ResourceGrid from './components/ResourceGrid.vue'

const politicsResources = [
  // link: '/politics/xutao' 表示点击后会跳转到 politics 文件夹下的 xutao.md
  { title: '徐涛核心考案', iconText: '徐', color: '#ef4444', link: '/politics/xutao' },
  { title: '腿姐背诵手册', iconText: '腿', color: '#f97316', link: '#' },
  { title: '肖秀荣1000题', iconText: '肖', color: '#10b981', link: '#' },
  { title: '肖四肖八', iconText: '押', color: '#f43f5e', link: '#' },
  { title: '政治真题', iconText: '真', color: '#3b82f6', link: '#' },
]
</script>

# 考研政治

得选择题者得天下，肖大爷永远是你大爷。

<ResourceGrid :items="politicsResources" />