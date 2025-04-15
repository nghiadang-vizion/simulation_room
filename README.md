# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Dự án Simulations Room

Dự án bạn đang xây dựng là một 2D Simulation Room tích hợp trực tiếp với Shopify, có khả năng: 1. Hiển thị danh sách sản phẩm từ Shopify (ảnh, giá, màu), 2. Kéo thả các sản phẩm vào một hình ảnh căn phòng, 3. Tùy chỉnh màu sản phẩm theo tùy chọn có sẵn (variant từ Shopify), 4. Cho phép thêm sản phẩm vào giỏ hàng Shopify.

🧩 PHÂN TÍCH CHI TIẾT CÁC COMPONENT CẦN THIẾT

1. ProductMenu
   Chức năng:
   • Lấy danh sách sản phẩm từ Shopify và hiển thị dưới dạng danh sách để chọn.
   • Mỗi sản phẩm hiển thị hình ảnh, tên, giá, và các tùy chọn màu (nếu có).
   Props/Input:
   • Không cần props, dữ liệu lấy từ Shopify API.
   Tương tác:
   • Khi người dùng kéo sản phẩm từ menu, dữ liệu sẽ được đưa vào Room.

2. RoomCanvas
   Chức năng:
   • Hiển thị ảnh nền của căn phòng.
   • Là khu vực cho phép kéo thả sản phẩm từ ProductMenu.
   • Mỗi sản phẩm được thêm vào là một instance với vị trí và màu riêng.
   Props:
   • Danh sách sản phẩm đã được thêm vào room.
   Tính năng nâng cao:
   • Kéo thả vị trí sản phẩm.
   • Resize / rotate (nâng cao).

3. ProductItem (trong Room)
   Chức năng:
   • Hiển thị sản phẩm trong Room.
   • Cho phép chọn sản phẩm và mở ColorPicker.
   Props:
   • Thông tin sản phẩm (id, image, price, selectedColor, position).

4. ColorPicker
   Chức năng:
   • Cho phép người dùng đổi màu sản phẩm dựa trên variant có trong Shopify.
   • Sử dụng thư viện như react-colorful.
   Props:
   • Danh sách màu lấy từ product.variant.
   • Callback khi màu được chọn để update sản phẩm trong Room.

5. ShopifyCart
   Chức năng:
   • Danh sách sản phẩm đã chọn trong Room để thêm vào giỏ hàng.
   • Gọi Shopify Storefront API để thêm vào giỏ.

🔌 SERVICES - Tích hợp với Shopify

👉 Shopify API cần dùng:
• REST Admin API: để lấy thông tin sản phẩm (ảnh, variant, option).
• Storefront API: để thêm sản phẩm vào giỏ hàng (checkout).

🧱 Tổng hợp lại folder structure chi tiết

src/
├── assets/
├── components/
│ ├── ProductMenu/ # Hiển thị danh sách sản phẩm từ Shopify
│ ├── RoomCanvas/ # Canvas chính render hình phòng + sản phẩm
│ ├── ProductItem/ # Sản phẩm được render trong phòng
│ ├── ColorPicker/ # Đổi màu theo variant
│ └── ShopifyCart/ # Hiển thị giỏ hàng + checkout
├── services/
│ ├── shopifyService.js # Gọi REST Admin API
│ └── storefrontService.js # Gọi GraphQL Storefront API
├── store/ # State cho room, sản phẩm, cart
├── utils/ # Hàm xử lý màu, map variant, v.v.
├── App.js
└── index.js
