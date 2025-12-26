---
layout: doc
---

<script setup>
import ResourceGrid from './components/ResourceGrid.vue'

const majorResources = [
  { title: '计算机 (408)', iconText: '计', color: '#6366f1', link: '/major/408' },
  { title: '法硕联考', iconText: '法', color: '#8b5cf6', link: '#' },
  { title: '教育学 (311)', iconText: '教', color: '#ec4899', link: '#' },
  { title: '心理学', iconText: '心', color: '#14b8a6', link: '#' },
  { title: '管理类联考', iconText: '管', color: '#f59e0b', link: '#' },
]
</script>

# 考研专业课

这里收录了热门统考专业课及部分自命题资料。

<ResourceGrid :items="majorResources" />