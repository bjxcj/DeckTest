// 财年数据配置
const financialData = [
    { year: '2020年', faceValue: 100, sales: 5000, salesAmount: 500000 },
    { year: '2021年', faceValue: 120, sales: 6200, salesAmount: 744000 },
    { year: '2022年', faceValue: 150, sales: 7500, salesAmount: 1125000 },
    { year: '2023年', faceValue: 180, sales: 8800, salesAmount: 1584000 },
    { year: '2024年', faceValue: 200, sales: 9500, salesAmount: 1900000 },
    { year: '2025年', faceValue: 220, sales: 10200, salesAmount: 2244000 },
];

// 从数据中提取年份、面值和销量
function extractChartData() {
    return {
        years: financialData.map(d => d.year),
        faceValues: financialData.map(d => d.faceValue),
        sales: financialData.map(d => d.sales),
        salesAmounts: financialData.map(d => d.salesAmount)
    };
}

// 初始化数据表
function initDataTable() {
    const tbody = document.getElementById('dataTable');
    tbody.innerHTML = financialData.map(item => `
        <tr>
            <td>${item.year}</td>
            <td>¥${item.faceValue.toLocaleString()}</td>
            <td>${item.sales.toLocaleString()}</td>
            <td>¥${item.salesAmount.toLocaleString()}</td>
        </tr>
    `).join('');
}

// 初始化数据表
document.addEventListener('DOMContentLoaded', initDataTable);
