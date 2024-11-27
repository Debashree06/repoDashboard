import { useEffect, useState } from "react";
import Activities from "./activities/Activities";
import Dashboard from "./dashboard/dashboard";
import morning from "../../../assets/admin/morning.jpg";
import noon from "../../../assets/admin/afternoon.jpg";
import evening from "../../../assets/admin/evening.jpg";
import night from "../../../assets/admin/night.jpg";
import RightContent from "./dashboardComponents/RightsideContent";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [message, setMessage] = useState("");
  const [greeting, setGreeting] = useState("");
  const [background, setBackground] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Good Morning...");
      setBackground(morning);
      setMessage(
        "Rise and shine! Every morning is a chance to start fresh, chase your dreams, and make today amazing."
      );
    } else if (currentHour >= 12 && currentHour < 17) {
      setGreeting("Good Afternoon...");
      setBackground(noon);
      setMessage(
        "Keep going! The sun may be at its peak, but so is your potential to accomplish something great today."
      );
    } else if (currentHour >= 17 && currentHour < 22) {
      setGreeting("Good Evening...");
      setBackground(evening);
      setMessage(
        "Take a moment to breathe. The evening is your time to reflect on your wins and recharge for tomorrow."
      );
    } else {
      setGreeting("Good Night...");
      setBackground(night);
      setMessage(
        "As the stars light up the sky, let gratitude light up your heart. Sleep well and dream big for a brighter tomorrow."
      );
    }
  }, []);

  return (
    <div className="flex flex-wrap gap-6 p-4">
      {/* Greeting Section */}
      <div
        className="w-full h-[300px] bg-cover bg-center relative rounded-lg overflow-hidden"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-3xl md:text-4xl font-bold">{greeting}</h1>
          <p className="mt-2 text-sm md:text-lg">{message}</p>
        </div>
      </div>

      {/* RightContent for Mobile */}
      <div className="w-full lg:hidden">
        <RightContent />
      </div>

      {/* Main Content */}
      <div className="flex w-full">
        {/* Left Section: Tabs & Main Content */}
        <div className="w-full lg:w-3/4 lg:overflow-y-auto lg:h-[calc(100vh-148px)] pr-4">
          <div className="flex space-x-4 border-b border-gray-300 mb-4">
            <button
              className={`py-2 px-4 font-semibold text-lg ${
                activeTab === "dashboard"
                  ? "text-golden border-b-2 border-golden"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </button>
            <button
              className={`py-2 px-4 font-semibold text-lg ${
                activeTab === "activities"
                  ? "text-golden border-b-2 border-golden"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("activities")}
            >
              Activities
            </button>
          </div>
          <div>
            {activeTab === "dashboard" && <Dashboard />}
            {activeTab === "activities" && <Activities />}
          </div>
        </div>

        {/* RightContent for Larger Screens */}
        <div className="hidden lg:block lg:w-1/4">
          <div className="sticky top-4">
            <RightContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
