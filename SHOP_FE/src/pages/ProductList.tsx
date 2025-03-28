import { useState } from "react";
import { Select, Pagination } from "antd";
import { ProductCard } from "../components/ProductCard";
import { Link } from "react-router-dom";

const { Option } = Select;

const productsData = [
  { id: 1, name: "Laptop ASUS Zenbook 14 OLED", image: "/product1.png", oldPrice: 34990000, price: 32540700, status: "Còn hàng" },
  { id: 2, name: "Laptop ASUS Vivobook 14 OLED", image: "/product2.png", oldPrice: 18990000, price: 17850600, status: "Còn hàng" },
  { id: 3, name: "Laptop ASUS Vivobook 15 OLED", image: "/product3.png", oldPrice: 22990000, price: 14713600, status: "Còn hàng" },
  { id: 4, name: "Laptop ASUS Vivobook 15 OLED", image: "/product4.png", oldPrice: 24990000, price: 20991600, status: "Còn hàng" },
  { id: 5, name: "Laptop ASUS Zenbook 14 OLED", image: "/product5.png", oldPrice: 34990000, price: 32540700, status: "Còn hàng" },
  { id: 6, name: "Laptop ASUS Zenbook 14 OLED", image: "/product5.png", oldPrice: 34990000, price: 32540700, status: "Còn hàng" },
  { id: 7, name: "Laptop ASUS Zenbook 14 OLED", image: "/product5.png", oldPrice: 34990000, price: 32540700, status: "Còn hàng" },
  { id: 8, name: "Laptop ASUS Zenbook 14 OLED", image: "/product1.png", oldPrice: 34990000, price: 32540700, status: "Còn hàng" },
  { id: 9, name: "Laptop ASUS Vivobook 14 OLED", image: "/product2.png", oldPrice: 18990000, price: 17850600, status: "Còn hàng" },
  { id: 10, name: "Laptop ASUS Vivobook 15 OLED", image: "/product3.png", oldPrice: 22990000, price: 14713600, status: "Còn hàng" },
  { id: 11, name: "Laptop ASUS Vivobook 15 OLED", image: "/product4.png", oldPrice: 24990000, price: 20991600, status: "Còn hàng" },
  { id: 12, name: "Laptop ASUS Zenbook 14 OLED", image: "/product5.png", oldPrice: 34990000, price: 32540700, status: "Còn hàng" },
  { id: 13, name: "Laptop ASUS Zenbook 14 OLED", image: "/product5.png", oldPrice: 34990000, price: 32540700, status: "Còn hàng" },
  { id: 14, name: "Laptop ASUS Zenbook 14 OLED", image: "/product5.png", oldPrice: 34990000, price: 32540700, status: "Còn hàng" },
  { id: 15, name: "Laptop ASUS Zenbook 14 OLED", image: "/product1.png", oldPrice: 34990000, price: 32540700, status: "Còn hàng" },
  { id: 16, name: "Laptop ASUS Vivobook 14 OLED", image: "/product2.png", oldPrice: 18990000, price: 17850600, status: "Còn hàng" },
  { id: 17, name: "Laptop ASUS Vivobook 15 OLED", image: "/product3.png", oldPrice: 22990000, price: 14713600, status: "Còn hàng" },
  { id: 18, name: "Laptop ASUS Vivobook 15 OLED", image: "/product4.png", oldPrice: 24990000, price: 20991600, status: "Còn hàng" },
  { id: 19, name: "Laptop ASUS Zenbook 14 OLED", image: "/product5.png", oldPrice: 34990000, price: 32540700, status: "Còn hàng" },
  { id: 20, name: "Laptop ASUS Zenbook 14 OLED", image: "/product5.png", oldPrice: 34990000, price: 32540700, status: "Còn hàng" },
  { id: 21, name: "Laptop ASUS Zenbook 14 OLED", image: "/product5.png", oldPrice: 34990000, price: 32540700, status: "Còn hàng" },
];

export const ProductList = () => {
  const [products, setProducts] = useState(productsData);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20; // Số sản phẩm trên mỗi trang

  // Hàm thay đổi trang
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Hàm sắp xếp sản phẩm
  const handleSortChange = (value: string) => {
    const sortedProducts = [...products].sort((a, b) => {
      return value === "asc" ? a.price - b.price : b.price - a.price;
    });
    setProducts(sortedProducts);
  };

  // Cắt danh sách sản phẩm theo trang
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedProducts = products.slice(startIndex, startIndex + pageSize);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto w-[85%]">
        {/* Breadcrumb */}
        <p className="text-gray-600">
          <Link to="/"><span>Trang chủ</span></Link> / <span>Laptop</span>
        </p>

        {/* Tiêu đề & Sắp xếp */}
        <div className="flex justify-between items-center my-6">
          <h2 className="text-3xl font-bold">Laptop</h2>
          <Select defaultValue="" style={{ width: 150 }} onChange={handleSortChange}>
            <Option value="">Sắp xếp theo</Option>
            <Option value="asc">Giá tăng dần</Option>
            <Option value="desc">Giá giảm dần</Option>
          </Select>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="grid grid-cols-5 gap-6">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <Pagination
            current={currentPage}
            total={products.length}
            pageSize={pageSize}
            onChange={handlePageChange}
            showSizeChanger={false}
          />
        </div>
      </div>
    </div>
  );
};
