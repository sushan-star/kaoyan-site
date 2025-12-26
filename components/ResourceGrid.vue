<script setup>
    defineProps({
      items: {
        type: Array,
        required: true
      }
    })
    </script>
    
    <template>
      <div class="grid-container">
        <a v-for="(item, index) in items" :key="index" :href="item.link" class="card" target="_blank">
          <div class="icon" :style="{ backgroundColor: item.color || '#3b82f6' }">
            {{ item.iconText }}
          </div>
          <div class="info">
            <div class="title">{{ item.title }}</div>
          </div>
        </a>
      </div>
    </template>
    
    <style scoped>
    /* 电脑端默认样式 */
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 24px;
      margin-top: 30px;
    }
    
    .card {
      display: flex;
      flex-direction: column; /* 上下结构 */
      align-items: center;
      justify-content: center;
      background: white;
      border: 1px solid #e2e8f0;
      padding: 30px 20px;
      border-radius: 16px;
      text-decoration: none !important;
      transition: all 0.3s;
      height: 100%;
    }
    
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px -5px rgba(59, 130, 246, 0.15);
      border-color: #3b82f6;
    }
    
    .icon {
      width: 56px;
      height: 56px;
      border-radius: 16px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 22px;
      margin-bottom: 16px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    
    .title {
      font-weight: 700;
      color: #1e293b;
      font-size: 16px;
      text-align: center;
    }
    
    /* --- 📱 手机端变形魔法 --- */
    @media (max-width: 768px) {
      .grid-container {
        grid-template-columns: 1fr; /* 强制变成1列 */
        gap: 15px;
      }
      .card {
        flex-direction: row; /* 变成“左图右文” */
        justify-content: flex-start; /* 靠左对齐 */
        padding: 15px;
        min-height: 80px;
      }
      .icon {
        width: 45px;
        height: 45px;
        font-size: 18px;
        margin-bottom: 0;
        margin-right: 15px; /* 图标右边加点空隙 */
      }
      .title {
        font-size: 15px;
        text-align: left;
      }
    }
    </style>