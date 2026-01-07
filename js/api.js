// js/api.js
const PolluTrackAPI = {
    // Simulate fetching data from a server with a slight delay
    fetchDashboardData: async function() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    timestamp: new Date().toLocaleTimeString(),
                    // Dashboard Cards
                    current: {
                        pm25: 86,
                        pm10: 142,
                        aqi: 168,
                        temperature: 28,
                        condition: "Haze",
                        humidity: 62
                    },
                    // Chart Data: Pollution Sources
                    sources: {
                        labels: ['Vehicles', 'Industrial', 'Construction', 'Biomass'],
                        values: [45, 30, 15, 10] // Percentages
                    },
                    // Chart Data: 12-Month History + 6-Month Prediction
                    trends: {
                        history: [156, 178, 110, 85, 45, 50, 60, 75, 105, 145, 210, 190],
                        prediction: [null, null, null, null, null, null, null, null, null, null, null, 190, 175, 160, 120, 90, 50, 55]
                    }
                });
            }, 800); // 800ms simulated network delay
        });
    }
};