import "../App.css";
import { useState } from "react";

import {
  FaHome,
  FaCloudSun,
  FaSeedling,
  FaNewspaper,
  FaStore,
  FaSignOutAlt
} from "react-icons/fa";

import Weather from "../components/Weather";
import CropRecommendation from "../components/CropRecommendation";
import DiseaseDetection from "../components/DiseaseDetection";
import GovernmentNews from "../components/GovernmentNews";
import MarketPlace from "../components/MarketPlace";

function Dashboard() {

  const role = localStorage.getItem("role");

  const username =
    localStorage.getItem("username") || "Farmer";

  const [language, setLanguage] = useState("en");

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleTheme = () => {

    const newTheme = !darkMode;

    setDarkMode(newTheme);

    localStorage.setItem(
      "theme",
      newTheme ? "dark" : "light"
    );
  };

  const handleLogout = () => {

    localStorage.removeItem("role");
    localStorage.removeItem("username");

    window.location.href = "/login";
  };

  const translations = {

    en: {
      logo: "🌾 SmartFarmer",
      dashboard: "Dashboard",
      weather: "Weather",
      crops: "Crops",
      news: "News",
      marketplace: "Marketplace",
      welcome: "Welcome",
      select: "Select Language",
      farmer: "Farmer",
      location: "Andhra Pradesh"
    },

    te: {
      logo: "🌾 స్మార్ట్ ఫార్మర్",
      dashboard: "డాష్‌బోర్డ్",
      weather: "వాతావరణం",
      crops: "పంటలు",
      news: "వార్తలు",
      marketplace: "మార్కెట్ ప్లేస్",
      welcome: "స్వాగతం",
      select: "భాష ఎంచుకోండి",
      farmer: "రైతు",
      location: "ఆంధ్రప్రదేశ్"
    },

    hi: {
      logo: "🌾 स्मार्ट फार्मर",
      dashboard: "डैशबोर्ड",
      weather: "मौसम",
      crops: "फसलें",
      news: "समाचार",
      marketplace: "मार्केटप्लेस",
      welcome: "स्वागत है",
      select: "भाषा चुनें",
      farmer: "किसान",
      location: "आंध्र प्रदेश"
    }

  };

  const t = translations[language];

  return (

    <div className={darkMode ? "app dark" : "app"}>

      {/* Sidebar */}

      <div className="sidebar">

        <div className="logo">
          {t.logo}
        </div>

        <div style={{ padding: "10px" }}>

          <label>{t.select}</label>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "10px"
            }}
          >
            <option value="en">English</option>
            <option value="te">తెలుగు</option>
            <option value="hi">हिन्दी</option>
          </select>

        </div>

        <div className="menu-item active">
          <FaHome /> &nbsp; {t.dashboard}
        </div>

        <div className="menu-item">
          <FaCloudSun /> &nbsp; {t.weather}
        </div>

        <div className="menu-item">
          <FaSeedling /> &nbsp; {t.crops}
        </div>

        <div className="menu-item">
          <FaNewspaper /> &nbsp; {t.news}
        </div>

        {
          role === "farmer" &&

          <div className="menu-item">
            <FaStore /> &nbsp; {t.marketplace}
          </div>
        }

        <button
          onClick={handleLogout}
          style={{
            marginTop: "30px"
          }}
        >
          <FaSignOutAlt />
          &nbsp; Logout
        </button>

      </div>

      {/* Main Content */}

      <div className="main">

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            flexWrap: "wrap",
            gap: "15px"
          }}
        >

          <div className="dashboard-title">
            {t.welcome} {username} 👋
          </div>

          <button
            onClick={toggleTheme}
            className="theme-btn"
          >
            {darkMode
              ? "☀️ Light Mode"
              : "🌙 Dark Mode"}
          </button>

        </div>

        {/* Farmer Profile */}

        <div className="profile-card">

          <h3>
            👤 {username}
          </h3>

          <p>
            🌾 {t.farmer}
          </p>

          <p>
            📍 {t.location}
          </p>

        </div>

        {/* Statistics */}

        <div className="stats">

          <div className="stat-card">
            <h3>🌱 12+</h3>
            <p>Recommended Crops</p>
          </div>

          <div className="stat-card">
            <h3>🌤 Live</h3>
            <p>Weather Updates</p>
          </div>

          <div className="stat-card">
            <h3>🦠 25+</h3>
            <p>Diseases Detected</p>
          </div>

          <div className="stat-card">
            <h3>🛒 100+</h3>
            <p>Marketplace Products</p>
          </div>

        </div>

        {/* Dashboard Components */}

        <div className="grid">

          <div className="card">
            <Weather language={language} />
          </div>

          <div className="card">
            <CropRecommendation language={language} />
          </div>

          <div className="card">
            <DiseaseDetection language={language} />
          </div>

          <div className="card">
            <GovernmentNews language={language} />
          </div>

          {
            role === "farmer" &&

            <div className="card">
              <MarketPlace language={language} />
            </div>
          }

        </div>

      </div>

    </div>

  );

}

export default Dashboard;