# 🌍 PolluTrack - Real-time Air Quality Intelligence

![PolluTrack Banner](https://via.placeholder.com/1000x400?text=PolluTrack+Dashboard+Preview)
**PolluTrack** is a modern, real-time air quality monitoring application that tracks pollution levels (AQI, PM2.5, PM10) for any city worldwide. Built with a glassmorphism UI, it features interactive maps, health advice, and predictive forecasting.

🚀 **[View Live Demo](https://pollu-track-topaz.vercel.app/)**

---

## ✨ Key Features

* **🔍 Live Dashboard:** Real-time tracking of AQI, PM2.5, PM10, Temperature, and Humidity.
* **📍 GPS Auto-Location:** Instantly find air quality data for your exact location.
* **🗺️ Interactive Map:** Visualizes the monitoring station location using Leaflet.js.
* **📅 3-Day Forecast:** Predictive modeling for upcoming air quality trends.
* **🤖 AI Health Advisor:** Smart recommendations (e.g., "Wear a mask") based on pollution severity.
* **📊 Data Visualization:** Interactive charts for pollution sources and historical trends.
* **🖨️ PDF Reports:** Generate and download professional air quality reports.
* **🔔 Smart Alerts:** Browser notifications when air quality reaches hazardous levels.
* **🌓 Dark/Light Mode:** Fully responsive theme toggling.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Styling:** Tailwind CSS (CDN)
* **Mapping:** Leaflet.js & OpenStreetMap
* **Charts:** Chart.js
* **API:** World Air Quality Index (WAQI) API
* **Icons:** FontAwesome

---

## 🚀 How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/MRINALPRAKASHFSD/PolluTrack.git](https://github.com/MRINALPRAKASHFSD/PolluTrack.git)
    ```

2.  **Navigate to the project folder:**
    ```bash
    cd PolluTrack
    ```

3.  **Open `index.html`:**
    Simply open the file in your browser. No backend server is required!

---

## ⚙️ Configuration (API Key)

This project uses the **WAQI API**. While a demo key is included, it is recommended to use your own for production stability.

1.  Get a free API token here: [https://aqicn.org/data-platform/token/](https://aqicn.org/data-platform/token/)
2.  Open `index.html` in your code editor.
3.  Find this line (around line 430):
    ```javascript
    const API_TOKEN = 'YOUR_API_TOKEN_HERE';
    ```
4.  Replace it with your new token.

---

## 📸 Screenshots

| Light Mode | Dark Mode |
|:---:|:---:|
| <img src="https://via.placeholder.com/400x200?text=Light+Mode" width="400"> | <img src="https://via.placeholder.com/400x200?text=Dark+Mode" width="400"> |

---

## 🤝 Contributing

Contributions are welcome!
1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/MRINALPRAKASHFSD">Mrinal Prakash</a>
</p>
