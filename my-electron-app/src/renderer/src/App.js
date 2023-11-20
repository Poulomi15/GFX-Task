import React, { useState } from 'react';
import fs from 'fs';

function App() {
  const [data, setData] = useState(null);

  const readFile = () => {
    try {
      const fileData = fs.readFileSync('path/to/your/data.json', 'utf-8');
      const jsonData = JSON.parse(fileData);
      setData(jsonData);
    } catch (error) {
      console.error('Error reading file:', error);
    }
  };

  return (
    <div className="App">
      <button onClick={readFile}>Read File</button>
      {data && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Title</th>
              <th>Price (INR)</th>
              <th>SKU</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.product_id}</td>
              <td>{data.title}</td>
              <td>{data.price}</td>
              <td>{data.sku}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
