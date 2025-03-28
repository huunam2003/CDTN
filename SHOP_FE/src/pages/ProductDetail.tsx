import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ProfileOutlined } from "@ant-design/icons";

const product = {
  id: 1,
  name: "Laptop Dell Inspiron 14 5430 I5P165W11SLD2 (i5-1340U/ 512SSD/ 16GB/ Win11SL/ MX550 2GB/ Bạc)",
  image: "/product1.png",
  oldPrice: 8990000,
  price: 25320000,
  quantity: 10,
  status: "Còn hàng",
  specs: [
    { title: "Bộ xử lý", details: [{ label: "CPU", value: "1340U" }, { label: "Loại CPU", value: "Core i5" }] },
    { title: "RAM", details: [{ label: "Dung lượng RAM", value: "16GB" }] },
    { title: "Đồ họa", details: [{ label: "VGA", value: "MX550" }, { label: "Loại VGA", value: "2GB VRAM" }] },
    { title: "Lưu trữ", details: [{ label: "Ổ cứng", value: "SSD" }, { label: "Dung lượng ổ cứng", value: "512GB" }] },
  ],
};
const accessories = [
  {
    id: 1,
    name: "Chuột Asus TUF Gaming M3 Gen II",
    image: "/mouse.png",
    price: 499000,
  },
  {
    id: 2,
    name: "PC GVN Intel i5-12400F/ VGA RTX 3050",
    image: "/pc.png",
    price: 17490000,
  },
  {
    id: 3,
    name: "Laptop Acer Swift X14 SFX14 71G 78SY",
    image: "/laptop.png",
    price: 42990000,
  },
];

export const ProductDetail = () => {
  const [currentImage] = useState(product.image);
  const specsRef = useRef<HTMLDivElement | null>(null);

  const scrollToSpecs = () => {
    specsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Đường dẫn */}
      <p className="text-gray-600 mb-5 ml-[110px]">
        <Link to="/"><span>Trang chủ</span></Link> / <span>Laptop</span>
      </p>

      <div className="container mx-auto flex gap-10 w-[85%]">
        {/* Phần bên trái - Hình ảnh & Thông số */}
        <div className="w-3/5">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src={currentImage} alt={product.name} className="w-[60%] mx-auto rounded-lg" />
          </div>

          {/* Thông số kỹ thuật */}
          <div ref={specsRef} className="bg-white p-4 rounded-lg shadow-md mt-4">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              Thông số kỹ thuật
            </h2>
            {product.specs.map((spec, index) => (
              <div key={index} className="mb-4 border rounded-lg p-4">
                <h3 className="font-semibold text-lg">{spec.title}</h3>
                <hr className="my-2 border-gray-300" />
                {spec.details.map((detail, idx) => (
                  <div key={idx} className="flex justify-between py-1">
                    <span className="text-gray-600">{detail.label}</span>
                    <span className="font-semibold">{detail.value}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Phần bên phải - Chi tiết sản phẩm */}
        <div className="w-2/5">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold">{product.name}</h1>

            {/* Nút cuộn xuống "Thông số kỹ thuật" */}
            <button onClick={scrollToSpecs} className="mt-4 flex items-center text-[#2D52A0]">
              <ProfileOutlined className="w-5 h-5 text-[#2D52A0]"/>
              Thông số
            </button>

            {/* Giá sản phẩm */}
            <div className="mt-4 p-4 rounded-lg shadow-md bg-gradient-to-b from-red-100 to-white">
              <p className="text-gray-500 mb-3">Mua với giá</p>
              <span className="text-gray-500 line-through text-lg">{product.oldPrice.toLocaleString()} đ</span>
              <p className="text-red-600 font-bold text-2xl">
                {product.price.toLocaleString()} <span className="underline">đ</span>
              </p>
            </div>

            {/* Trạng thái sản phẩm */}
            <p className="mt-5 text-green-600 font-semibold">{product.status}</p>

            {/* Nút đặt hàng */}
            <button className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-lg">
              Thêm vào giỏ hàng
            </button>

          </div>
             {/* Phụ kiện mua kèm */}
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          <h2 className="text-xl font-bold mb-4">Phụ kiện mua kèm</h2>
          <div className="space-y-4">
            {accessories.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-3 last:border-none">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                <div className="flex-1">
                  <p className="text-gray-800">{item.name}</p>
                  <p className="text-red-600 font-bold">{item.price.toLocaleString()} đ</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
