import React, { useState } from "react";

const UserTable = ({ userObj }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const search = (rows) => {
    return rows.filter(
      (row) =>
        row.name.toLowerCase().indexOf(searchTerm) > -1 ||
        row.number.toLowerCase().indexOf(searchTerm) > -1 ||
        row.email.toLowerCase().indexOf(searchTerm) > -1 ||
        row.birthday.toLowerCase().indexOf(searchTerm) > -1 ||
        row.gender.toLowerCase().indexOf(searchTerm) > -1 ||
        row.city.toLowerCase().indexOf(searchTerm) > -1
    );
  };
  let data = search(userObj);
  const columns = data[0] && Object.keys(data[0]);
  return (
    <div>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
      </div>

      <table className="table-custom">
        <thead>
          <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
        </thead>
        {data && data.length > 0 ? (
          data.map((row) => (
            <tr>
              {columns.map((column) => (
                <td>{row[column]}</td>
              ))}
            </tr>
          ))
        ) : (
          <h1>Plase add data</h1>
        )}
      </table>
    </div>
  );
};

export default UserTable;
