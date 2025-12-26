---
layout: doc
---

<script setup>
import ResourceGrid from './components/ResourceGrid.vue'

// 这里录入你的数据
const englishResources = [
  { title: '英语真题', iconText: '英', color: '#f59e0b', link: 'https://pan.baidu.com/...' },
  { title: '词汇闪过', iconText: '词', color: '#f97316', link: '#' },
  { title: '唐迟', iconText: '唐', color: '#f97316', link: '#' },
  { title: '刘晓艳', iconText: '刘', color: '#f97316', link: '#' },
  { title: '石雷鹏', iconText: '石', color: '#f97316', link: '#' },
]
</script>

# 考研英语

这里汇集了历年考研英语真题及名师课程资料。

<ResourceGrid :items="englishResources" />