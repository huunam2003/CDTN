import React from 'react'

interface ProductProps {
    product: {
      id: number;
      name: string;
      image: string;
      oldPrice: number;
      price: number;
      status: string;
    };
  }
export const ProductCard: React.FC<ProductProps> = ({ product }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer">
        <img src={product.image} alt={product.name} className="w-full h-40 object-contain" />
        <p>{product.name}</p>
        <p className="line-through text-gray-500">{product.oldPrice.toLocaleString()} đ</p>
        <p className="text-red-500 font-bold text-xl">{product.price.toLocaleString()} đ</p>
        <p className="text-green-600">{product.status}</p>
      </div>
    );
  };
