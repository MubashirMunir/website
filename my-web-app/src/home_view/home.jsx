import { useState } from "react";
import "./home.css";

export default function Home() {
  const [active, setActive] = useState("home");

  const renderContent = () => {
    switch (active) {
      case "home":
        return (
          <>
            <div className="hero">
              <div className="hero-text">
                <p className="tag">Welcome Back</p>
                <h1>Modern Dashboard Experience</h1>
                <p className="desc">
                  Manage your profile, services, and settings from one beautiful
                  and organized dashboard.
                </p>
                <div className="hero-buttons">
                  <button className="primary-btn">Get Started</button>
                  <button className="secondary-btn">Learn More</button>
                </div>
              </div>

              <div className="hero-card">
                <h3>Quick Overview</h3>
                <p>Your workspace is looking clean and ready to go.</p>
                <div className="stats">
                  <div className="stat-box">
                    <h2>24</h2>
                    <span>Projects</span>
                  </div>
                  <div className="stat-box">
                    <h2>12</h2>
                    <span>Tasks</span>
                  </div>
                  <div className="stat-box">
                    <h2>08</h2>
                    <span>Updates</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="cards">
              <div className="card">
                <h3>Analytics</h3>
                <p>Track your progress and monitor your latest activity.</p>
              </div>
              <div className="card">
                <h3>Team Access</h3>
                <p>Collaborate with your team in a smooth modern environment.</p>
              </div>
              <div className="card">
                <h3>Notifications</h3>
                <p>Stay updated with real-time alerts and important messages.</p>
              </div>
            </div>
          </>
        );

      case "profile":
        return (
          <div className="page-box">
            <h1>👤 Profile Page</h1>
            <p>
              Update your personal details, profile photo, and account
              information here.
            </p>
          </div>
        );

      case "services":
        return (
          <div className="page-box">
            <h1>⚙️ Services Page</h1>
            <p>
              Explore all available services and manage your subscriptions with
              ease.
            </p>
          </div>
        );

      case "settings":
        return (
          <div className="page-box">
            <h1>🔧 Settings Page</h1>
            <p>
              Customize your app preferences, notifications, and privacy
              settings.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="home-wrapper">
      <header className="header">
        <div className="logo">MyBrand</div>
        <div className="header-right">
          <span className="welcome-text">Hello, User</span>
          <div className="avatar">M</div>
        </div>
      </header>

      <nav className="navbar">
        <button
          className={active === "home" ? "nav-btn active" : "nav-btn"}
          onClick={() => setActive("home")}
        >
          Home
        </button>

        <button
          className={active === "profile" ? "nav-btn active" : "nav-btn"}
          onClick={() => setActive("profile")}
        >
          Profile
        </button>

        <button
          className={active === "services" ? "nav-btn active" : "nav-btn"}
          onClick={() => setActive("services")}
        >
          Services
        </button>

        <button
          className={active === "settings" ? "nav-btn active" : "nav-btn"}
          onClick={() => setActive("settings")}
        >
          Settings
        </button>
      </nav>

      <main className="content">{renderContent()}</main>

      <footer className="footer">
        <p>© 2026 MyBrand. All rights reserved.</p>
      </footer>
    </div>
  );
}