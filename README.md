# 财年数据分析 - 动态柱状图

一个基于 ECharts 的动态柱状图可视化项目，用于展示各财年面值和销量的变化趋势。

## 功能特性

✨ **动态动画**: 使用 ECharts 提供平滑的柱状图动画效果  
📊 **双轴数据**: 同时展示面值和销量两组数据  
🎨 **现代设计**: 渐变色彩、响应式布局、交互友好  
📱 **响应式**: 支持桌面和移动设备  
🔄 **交互功能**: 支持重新播放动画和数据切换  

## 文件结构

```
DeckTest/
├── index.html       # 主HTML页面
├── styles.css       # 样式文件
├── data.js          # 数据配置文件
├── chart.js         # 图表初始化和交互逻辑
└── README.md        # 说明文档
```

## 快速开始

### 方式一：本地运行

1. 克隆本仓库
```bash
git clone https://github.com/bjxcj/DeckTest.git
cd DeckTest
```

2. 用浏览器打开 `index.html` 文件
   - 直接双击 `index.html` 或
   - 使用本地服务器（推荐）：
   ```bash
   python -m http.server 8000
   # 或使用 Node.js 的 http-server
   npx http-server
   ```

3. 在浏览器中访问：`http://localhost:8000`

### 方式二：在线预览

可以将此项目部署到 GitHub Pages，然后在线查看。

## 使用说明

### 按钮功能

- **重新播放动画**: 重新触发图表的进入动画效果
- **切换数据视图**: 在不同的数据视图之间切换

### 数据配置

在 `data.js` 文件中修改 `financialData` 数组来更新数据：

```javascript
const financialData = [
    { year: '2020年', faceValue: 100, sales: 5000, salesAmount: 500000 },
    // ... 更多数据
];
```

每条记录包含：
- `year`: 财年名称
- `faceValue`: 面值（元）
- `sales`: 销量（单位）
- `salesAmount`: 销售额（元）

## 定制化

### 修改颜色

在 `chart.js` 中找到 `itemStyle` 部分，修改 `LinearGradient` 的颜色值：

```javascript
itemStyle: {
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#667eea' },    // 渐变色1
        { offset: 1, color: '#764ba2' }     // 渐变色2
    ])
}
```

### 修改动画时长

在 `chart.js` 中调整 `animationDuration` 参数（单位：毫秒）：

```javascript
animationDuration: 1000,  // 改为其他数值
```

### 修改图表高度

在 `styles.css` 中修改 `.chart-container` 的高度：

```css
.chart-container {
    height: 500px;  /* 改为其他高度 */
}
```

## 依赖

- **ECharts 5**: 用于图表绘制（通过 CDN 引入）
- 无其他第三方依赖

## 技术栈

- HTML5
- CSS3（Flexbox、Grid、渐变）
- JavaScript（ES6+）
- ECharts 5

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge
- IE 11+ (需要 Polyfill)

## 常见问题

### Q: 如何添加更多数据？
A: 在 `data.js` 的 `financialData` 数组中添加新的对象即可。

### Q: 如何修改图表类型？
A: 在 `chart.js` 中修改 `series` 的 `type` 属性（如改为 'line' 折线图）。

### Q: 能否导出图表为图片？
A: ECharts 内置了导出功能，右键点击图表选择保存，或使用 ECharts 的 `saveAsImage` 功能。

## 许可证

MIT

## 作者

bjxcj

## 更新日志

### v1.0.0 (2025-06-11)
- 初始版本发布
- 支持动态柱状图展示
- 实现基本交互功能
- 响应式设计
