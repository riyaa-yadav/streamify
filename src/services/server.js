import { createServer } from "miragejs";

import {
  getOverviewTiles,
  getUserGrowth,
  getTopStreamedSongs,
  getRevenueDistribution,
} from "./overview";

import { getStreamData } from "./streams";

export function makeServer() {
  createServer({
    routes() {
      this.namespace = "api";

      // Overview APIs
      this.get("/overview/tiles", () => getOverviewTiles());
      this.get("/overview/user-growth", () => getUserGrowth());
      this.get("/overview/top-songs", () => getTopStreamedSongs());
      this.get("/overview/revenue", () => getRevenueDistribution());

      // Streams API
      this.get("/streams", () => getStreamData());
    },
  });
}
