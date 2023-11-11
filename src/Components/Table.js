import React from 'react';
import Button from "react-bootstrap/esm/Button";
import { useState } from 'react';
import "./Styles/Table.css";

function Table({ selecteditems }) {
  //DataTable hide and show functionality
  const [visibilitydata, setVisibilitydata] = useState(true);
  //Clear table data
  const tableHandlerClear = ()=>{
    setVisibilitydata(false);
  }
  const tableHandlerHide = ()=>{
    setVisibilitydata(true);
  }
  return (
    <>
    { visibilitydata&& (
      <table className="custom-table">
        <thead className='tableHeader'>
          <tr>
            <th className='col'>Image</th>
            <th className='col'>ItemName</th>
            <th className='col'>Price</th>        
          </tr>
        </thead>
        <tbody>
          {selecteditems.map((item, index) => (
            <tr key={index} className='rowWithBackground'>
              <td className='data'>
                <img src={item.img} alt={item.Title} style={{ width: '150px', height: '150px' }} />
              </td>
              <td className='data'>{item.Title}</td>
              <td className='data'>{item.Rate}</td>
            </tr>
          ))} 
        </tbody>
      </table>
    )}
    <Button variant="danger" size="lg" className='btn' onClick={tableHandlerClear}>Clear</Button>
    <Button variant="success" size="lg" className='btn' onClick={tableHandlerHide}>Show</Button>
  </>
  );
}

export default Table;