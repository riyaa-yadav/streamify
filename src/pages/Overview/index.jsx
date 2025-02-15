import React, { useState } from "react";
import Tabs from "../../components/Tabs";
import Tiles from "./components/Tiles";
import UserGrowthChart from "./components/UserGrowthChart";
import RevenueChart from "./components/RevenueChart";
import TopSongsChart from "./components/TopSongsChart";

const tabList = ["User Growth", "Revenue Distribution", "Top 5 Streamed Songs"];

const Overview = () => {
  const [activeTab, setActiveTab] = useState(tabList[0]);

  return (
    <div className="flex flex-col gap-6 p-6">
      <Tiles />

      <div className="hidden sm:block">
        <Tabs tabs={tabList} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      <div>
        <div className="hidden sm:block">
          {activeTab === "User Growth" && <UserGrowthChart />}
          {activeTab === "Revenue Distribution" && <RevenueChart />}
          {activeTab === "Top 5 Streamed Songs" && <TopSongsChart />}
        </div>

        <div className="sm:hidden flex flex-col gap-6">
          <UserGrowthChart />
          <RevenueChart />
          <TopSongsChart />
        </div>
      </div>
    </div>
  );
};

export default Overview;
