import { useEffect, useState } from 'react';

import React from 'react';
// eslint-disable-next-line no-unused-vars
import { getProducts } from './services/shopify';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // getProducts().then(setProducts);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Shopify Store</h1>
      {products.map((product) => {
        const { node } = product;
        const colorOption = node.options.find(
          (opt) => opt.name.toLowerCase() === 'color',
        );
        const colors = colorOption ? colorOption.values : [];

        return (
          <div key={node.id} style={{ marginBottom: '40px' }}>
            <h2>{node.title}</h2>
            {node.images.edges[0] && (
              <img
                src={node.images.edges[0].node.url}
                alt={node.title}
                width="200"
              />
            )}
            <p>{node.description}</p>
            <strong>Màu sắc:</strong>
            <ul>
              {colors.length > 0 ? (
                colors.map((color, i) => <li key={i}>{color}</li>)
              ) : (
                <li>Không có thông tin màu</li>
              )}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default App;
