// services/shopify.js
import axios from 'axios';

const domain = '930psq-ny.myshopify.com';
const storefrontAccessToken = '5ad60aba1158f7fda07dc70e98f42159';

export const getProducts = async () => {
  const query = `
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            description
            options {
              name
              values
            }
            images(first: 1) {
              edges {
                node {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;

  const response = await axios.post(
    `https://${domain}/api/2023-07/graphql.json`,
    { query },
    {
      headers: {
        'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
        'Content-Type': 'application/json',
      },
    },
  );
  console.log('🚀 ~ getProducts ~ response:', response.data.data);

  return response.data.data.products.edges;
};
