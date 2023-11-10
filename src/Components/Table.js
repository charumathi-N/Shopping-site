import React from 'react';
import "./Styles/Table.css";
function Table(){
    return(
  
        <table className="custom-table">
        <thead className='tableHeader'>
          <tr>
            <th className='col'>Image</th>
            <th className='col'>ItemName</th>
            <th className='col'>Price</th>
            <th className='col'>Count</th>
            <th className='col'>Total</th>
            <th className='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
     
    );
}
export default Table;