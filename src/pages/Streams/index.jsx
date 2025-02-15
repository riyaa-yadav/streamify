import React, { useState, useEffect } from "react";
import Table from "../../components/Table";
import useDebounce from "../../hooks/useDebounce";

const Stream = () => {
  const columns = [
    { key: "songName", label: "Song Name", width: "28.57%" },
    { key: "artist", label: "Artist", width: "28.57%" },
    { key: "dateStreamed", label: "Date Streamed", width: "14.28%" },
    { key: "streamCount", label: "Stream Count", width: "14.28%" },
    { key: "userId", label: "User ID", width: "14.28%" },
  ];

  const sortableColumns = ["dateStreamed", "streamCount"];
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const fetchStreams = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/streams");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching streams:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStreams();
  }, []);

  const filteredData = data.filter(
    (row) =>
      row.songName.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      row.artist.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div>
      <div className="mb-4 sm:flex sm:justify-between">
        <h2 className="text-2xl font-bold mb-2 sm:mb-0">Recent Streams</h2>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by artist or song name..."
          className="w-full sm:w-64 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <Table
        columns={columns}
        data={filteredData}
        pageSize={10}
        sortableColumns={sortableColumns}
        loading={loading}
      />
    </div>
  );
};

export default Stream;
