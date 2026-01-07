// js/charts.js

// Global chart instances (so we can update them later)
let sourcePieChart = null;
let sourceBarChart = null;
let trendChart = null;

// 1. Initialize All Charts
function initCharts(data) {
    // Common Config
    Chart.defaults.font.family = 'Inter';
    Chart.defaults.color = '#94a3b8'; // Default text color (slate-400)
    
    const colors = getThemeColors();

    // --- PIE CHART ---
    const pieCtx = document.getElementById('sourcePieChart');
    if (pieCtx) {
        sourcePieChart = new Chart(pieCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: data.labels,
                datasets: [{
                    data: data.values,
                    backgroundColor: ['#ef4444', '#f97316', '#eab308', '#10b981'],
                    borderWidth: 0,
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { padding: 20 } }
                },
                cutout: '70%'
            }
        });
    }

    // --- BAR CHART ---
    const barCtx = document.getElementById('sourceBarChart');
    if (barCtx) {
        sourceBarChart = new Chart(barCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Contribution %',
                    data: data.values,
                    backgroundColor: ['#ef4444', '#f97316', '#eab308', '#10b981'],
                    borderRadius: 6
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { display: false }, ticks: { color: colors.text } },
                    y: { grid: { display: false }, ticks: { color: colors.text } }
                }
            }
        });
    }

    // --- TREND LINE CHART ---
    // Note: We need to pass the trend data (history + prediction) here
    // For this example, we access the global 'window.trendData' or pass it in.
    // To keep it simple, we will initialize the frame here and update data in app.js
}

function initTrendChart(trendData) {
    const ctx = document.getElementById('trendChart');
    if (!ctx) return;

    const colors = getThemeColors();
    
    trendChart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan*', 'Feb*', 'Mar*', 'Apr*', 'May*', 'Jun*'],
            datasets: [
                {
                    label: 'Historical AQI',
                    data: trendData.history, // [156, 178, ...]
                    borderColor: '#8B5CF6',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Predicted AQI',
                    data: trendData.prediction, // [null, ..., 190, 175]
                    borderColor: '#10B981',
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            interaction: { mode: 'index', intersect: false },
            plugins: {
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    padding: 12,
                    cornerRadius: 8
                },
                legend: { labels: { color: colors.text } }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: colors.grid },
                    ticks: { color: colors.text }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: colors.text }
                }
            }
        }
    });
}

// Helper: Get Grid/Text colors based on current theme
function getThemeColors() {
    const isDark = document.documentElement.classList.contains('dark');
    return {
        text: isDark ? '#cbd5e1' : '#64748b', // Slate-300 vs Slate-500
        grid: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
    };
}

// 2. Listen for Theme Changes (from theme.js)
window.addEventListener('themeChanged', () => {
    const colors = getThemeColors();
    
    if (trendChart) {
        trendChart.options.scales.y.grid.color = colors.grid;
        trendChart.options.scales.y.ticks.color = colors.text;
        trendChart.options.scales.x.ticks.color = colors.text;
        trendChart.options.plugins.legend.labels.color = colors.text;
        trendChart.update();
    }
    
    if (sourceBarChart) {
        sourceBarChart.options.scales.x.ticks.color = colors.text;
        sourceBarChart.options.scales.y.ticks.color = colors.text;
        sourceBarChart.update();
    }
});