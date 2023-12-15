import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Colbox from "./components/Colbox";
function App() {
  const [data, setData] = useState(null);
  const [currData, setCurrData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setfilter] = useState();
  useEffect(() => {
    // if(isLoading === true){
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => {
        setData(res.data.tickets);
        // setIsLoading(false);
        console.log(data);
      });
  }, [data !== null]);

  const sortByStatus = () => {
    setCurrData(Object.groupBy(data, ({ status }) => status));
    setfilter("status");
  };
  const sortByUser = () => {
    setCurrData(Object.groupBy(data, ({ userId }) => userId));
    setfilter("userId");
  };
  const sortByPriority = () => {
    setCurrData(Object.groupBy(data, ({ priority }) => priority));
    setfilter("priority");
  };

  return (
    <div className="App">
      <nav style={{ height: "60px" }}>
        <input
          type="radio"
          placeholder="Priority"
          onClick={sortByPriority}
          name="Priority"
        />
        <p>Priority</p>
        <input
          type="radio"
          placeholder="User"
          onClick={sortByUser}
          name="Priority"
        />
        <p>User</p>
        <input
          type="radio"
          placeholder="Status"
          onClick={sortByStatus}
          name="Priority"
        />
        <p>Status</p>
      </nav>
      <div className="columns">
        {Object.entries(currData).map(([key, item], i) => (
          <Colbox data={item} criteria={filter} />
        ))}
      </div>
    </div>
  );
}

export default App;
