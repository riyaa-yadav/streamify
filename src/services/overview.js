// Tiles Data API
export const getOverviewTiles = () => {
  return {
    totalUsers: 12000,
    activeUsers: 7500,
    totalStreams: 125000,
    revenue: "$50,000",
    topArtist: "Taylor Swift",
  };
};

//  User Growth Chart API (Last 12 months)
export const getUserGrowth = () => {
  return [
    { month: "Feb 2024", totalUsers: 11000, activeUsers: 7200 },
    { month: "Mar 2024", totalUsers: 11250, activeUsers: 7300 },
    { month: "Apr 2024", totalUsers: 11500, activeUsers: 7400 },
    { month: "May 2024", totalUsers: 11800, activeUsers: 7500 },
    { month: "Jun 2024", totalUsers: 12000, activeUsers: 7600 },
    { month: "Jul 2024", totalUsers: 12300, activeUsers: 7700 },
    { month: "Aug 2024", totalUsers: 12600, activeUsers: 7800 },
    { month: "Sep 2024", totalUsers: 13000, activeUsers: 7900 },
    { month: "Oct 2024", totalUsers: 13400, activeUsers: 8000 },
    { month: "Nov 2024", totalUsers: 13800, activeUsers: 8100 },
    { month: "Dec 2024", totalUsers: 14200, activeUsers: 8200 },
    { month: "Jan 2025", totalUsers: 14500, activeUsers: 8300 },
  ];
};

//  Revenue Distribution API
export const getRevenueDistribution = () => {
  return {
    sources: [
      { name: "Subscriptions", value: 35000 },
      { name: "Advertisements", value: 12000 },
      { name: "Partnerships", value: 3000 },
    ],
  };
};

// Top 5 Streamed Songs API
export const getTopStreamedSongs = () => {
  return [
    { song: "Blinding Lights", artist: "The Weeknd", streams: 50000 },
    { song: "Shape of You", artist: "Ed Sheeran", streams: 48000 },
    { song: "Anti-Hero", artist: "Taylor Swift", streams: 46000 },
    { song: "Levitating", artist: "Dua Lipa", streams: 45000 },
    { song: "Save Your Tears", artist: "The Weeknd", streams: 44000 },
  ];
};
