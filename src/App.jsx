import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./components/Pagination/Pagination";
import "./App.css";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json",
        );
        setData(response.data);
      } catch (error) {
        alert("failed to fetch data");
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="App">
        <h1>Employee Data Table</h1>
        <Pagination data={data} />
      </div>
    </>
  );
}

export default App;
