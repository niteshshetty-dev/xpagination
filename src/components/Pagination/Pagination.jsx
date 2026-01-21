import { useEffect, useState } from "react";

function Pagination({ data }) {
  const [page, setPage] = useState(1);
  const [displayedData, setDisplayedData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const maxRecords = 10;

  useEffect(() => {
    const startIndex = (page - 1) * maxRecords;
    const endIndex = Math.min(data.length, startIndex + maxRecords); // Ensure endIndex does not exceed the total number of records.startIndex + maxRecords;
    const newData = data.slice(startIndex, endIndex);
    setDisplayedData(newData);
    setTotalPage(Math.ceil(data.length / maxRecords));
  }, [data, page]);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {displayedData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          type="button"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>{page}</span>
        <button
          type="button"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPage}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
