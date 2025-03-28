import { useState } from 'react';
import { Button, Input, Select } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

export const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Sạc dự phòng Anker Nano 1C 35W 10000mah (Built-In USB-C, Made for Apple Watch) Đen',
            price: 1200000,
            originalPrice: 2100000,
            quantity: 1,
            image: 'mouse.png', // Thay bằng link hình ảnh thật
        },
        {
            id: 2,
            name: 'Sạc dự phòng Anker Nano 1C 35W 10000mah (Built-In USB-C, Made for Apple Watch) Đen',
            price: 1200000,
            originalPrice: 2100000,
            quantity: 1,
            image: 'mouse.png', // Thay bằng link hình ảnh thật
        },
    ]);

    const handleQuantityChange = (id: number, amount: number) => {
        setCartItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item)),
        );
    };

    const handleRemoveItem = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6">
                {/* Bên trái: Giỏ hàng, Thông tin đặt hàng, Thông tin nhận hàng, Phương thức thanh toán */}
                <div className="col-span-2 space-y-6">
                    {/* Giỏ hàng của bạn */}
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Giỏ hàng của bạn</h2>
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div key={item.id} className="flex items-center justify-between border-b py-4">
                                    {/* Hình ảnh sản phẩm */}
                                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />

                                    {/* Thông tin sản phẩm */}
                                    <div className="flex-1 ml-4">
                                        {/* Tên sản phẩm + Giá (hiển thị ngang hàng) */}
                                        <div className="flex items-center justify-between">
                                            <h3 className="w-2/3 text-md font-medium">{item.name}</h3>
                                            <div className="flex flex-col">
                                                <span className="text-gray-500 line-through text-sm text-right">
                                                    {item.originalPrice.toLocaleString()} đ
                                                </span>
                                                <span className="text-red-500 font-bold text-lg">
                                                    {item.price.toLocaleString()} đ
                                                </span>
                                            </div>
                                        </div>

                                        {/* Điều chỉnh số lượng */}
                                        <div className="flex justify-between items-center mt-2">
                                            <div className="flex items-center rounded-md p-1">
                                                <Button
                                                    icon={<MinusOutlined />}
                                                    size="small"
                                                    className="bg-gray-200 rounded-full"
                                                    onClick={() => handleQuantityChange(item.id, -1)}
                                                />
                                                <span className="px-4">{item.quantity}</span>
                                                <Button
                                                    icon={<PlusOutlined />}
                                                    size="small"
                                                    className="bg-gray-200 rounded-full"
                                                    onClick={() => handleQuantityChange(item.id, 1)}
                                                />
                                            </div>

                                            {/* Nút xóa, căn ngang với số lượng */}
                                            <Button
                                                type="text"
                                                className="ml-4 px-3 py-1 rounded-md !bg-gray-300 !text-white"
                                                onClick={() => handleRemoveItem(item.id)}
                                            >
                                                Xóa
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">Giỏ hàng trống</p>
                        )}
                    </div>

                    {/* Thông tin đặt hàng */}
<div className="bg-white p-6 shadow-md rounded-2xl">
    <h3 className="text-lg font-semibold">Thông tin đặt hàng</h3>
    <div className="flex gap-4 mt-4">
        <Input placeholder="Họ và tên" className="flex-1 bg-gray-200 py-2 text-lg rounded-2xl" />
        <Input placeholder="Số điện thoại" className="flex-1 bg-gray-200 py-2 text-lg" />
        <Input placeholder="Email" className="flex-1 bg-gray-200 py-2 text-lg" />
    </div>
</div>



                    {/* Thông tin nhận hàng */}
                    <div className="bg-white p-6 shadow-md rounded-2xl">
                        <h3 className="text-lg font-semibold">Thông tin nhận hàng</h3>
                        <div className="flex gap-4 mt-4">
                            <Select placeholder="Tỉnh/ Thành phố" className="flex-1" />
                            <Select placeholder="Quận/ Huyện" className="flex-1" />
                        </div>
                        <Input placeholder="Địa chỉ" className="mt-4" />
                    </div>

                    {/* Phương thức thanh toán */}
                    <div className="bg-white p-4 shadow-md rounded-2xl">
                        <h3 className="text-lg font-semibold">Phương thức thanh toán</h3>
                        <div className="mt-3 flex flex-col gap-2">
                            <label className="flex items-center gap-2">
                                <input type="radio" name="payment" defaultChecked />
                                <span>Thanh toán khi nhận hàng</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="payment" />
                                <span>Cổng thanh toán Alepay</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Bên phải: Thông tin đơn hàng */}
                <div className="bg-white p-6 shadow-md rounded-lg h-fit">
                    <h3 className="text-lg font-semibold">Thông tin đơn hàng</h3>
                    <div className="mt-4 border p-4 rounded-lg">
                        <div className="flex justify-between">
                            <span>Tổng giá sản phẩm:</span>
                            <span className="font-semibold">
                                {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString()}{' '}
                                đ
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span>Mã giảm giá:</span>
                            <span className="font-semibold">-0 đ</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Phí giao hàng:</span>
                            <span className="font-semibold text-green-500">Miễn phí</span>
                        </div>
                        <div className="flex justify-between mt-2 text-lg font-semibold text-red-500">
                            <span>Cần thanh toán:</span>
                            <span>
                                {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString()}{' '}
                                đ
                            </span>
                        </div>
                    </div>

                    <Button type="primary" className="mt-6 w-full" size="large">
                        Đặt hàng
                    </Button>
                </div>
            </div>
        </div>
    );
};
