import { Carousel } from 'antd';
import { ProductCard } from '../components/ProductCard';
const mainImages = ['/slide1.png', '/slide2.png'];

const subImages = ['/promotion1.png', '/promotion.png'];

const products = [
    {
        id: 1,
        name: 'Laptop ASUS Zenbook 14 OLED',
        image: '/product1.png',
        oldPrice: 34990000,
        price: 32540700,
        status: 'Còn hàng',
    },
    {
        id: 2,
        name: 'Laptop ASUS Vivobook 14 OLED',
        image: '/product2.png',
        oldPrice: 18990000,
        price: 17850600,
        status: 'Còn hàng',
    },
    {
        id: 3,
        name: 'Laptop ASUS Vivobook 15 OLED',
        image: '/product3.png',
        oldPrice: 22990000,
        price: 14713600,
        status: 'Còn hàng',
    },
    {
        id: 4,
        name: 'Laptop ASUS Vivobook 15 OLED',
        image: '/product4.png',
        oldPrice: 24990000,
        price: 20991600,
        status: 'Còn hàng',
    },
    {
        id: 5,
        name: 'Laptop ASUS Zenbook 14 OLED',
        image: '/product5.png',
        oldPrice: 34990000,
        price: 32540700,
        status: 'Còn hàng',
    },
];

const benefits = [
    { icon: '/icon-price.svg', text: 'Cam kết', highlight: 'giá tốt nhất' },
    { icon: '/icon-shipping.svg', text: 'Miễn phí', highlight: 'vận chuyển' },
    { icon: '/icon-payment.svg', text: 'Thanh toán', highlight: 'khi nhận hàng' },
    { icon: '/icon-return.svg', text: 'Đổi trả', highlight: '10 ngày' },
];

export const HomePage = () => {
    return (
        <>
            <div className="relative w-full h-full">
                {/* Carousel chính */}
                <Carousel autoplay dotPosition="bottom" autoplaySpeed={2000}>
                    {mainImages.map((src, index) => (
                        <div key={index} className="relative w-full h-full">
                            <img src={src} alt={`Main Slide ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </Carousel>

                {/* Khung chứa carousel phụ + quảng cáo (lớn hơn) */}
                <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 w-[90%] md:w-[85%] lg:w-[85%] bg-white p-2 rounded-xl shadow-2xl flex gap-6">
                    {/* Carousel phụ (chiếm 60%) */}
                    <div className="w-3/5">
                        <Carousel autoplay autoplaySpeed={3000}>
                            {subImages.map((src, index) => (
                                <div key={index} className="w-full">
                                    <img
                                        src={src}
                                        alt={`Sub Slide ${index + 1}`}
                                        className="w-full h-auto object-cover rounded-lg"
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    {/* Phần quảng cáo (hiển thị ảnh trên & ảnh dưới) */}
                    <div className="w-2/5 flex flex-col gap-4">
                        <div className="w-full flex items-center justify-center">
                            <img src="/promotion1.png" alt="Advertisement 1" className="w-full h-auto rounded-lg" />
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <img src="/promotion.png" alt="Advertisement 2" className="w-full h-auto rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Phần sản phẩm */}
            <div className="bg-gray-100 w-full">
                <div className="bg-gray-100 w-[85%] mx-auto">
                    {/* Banner trên cùng */}
                    <div className="mb-6 ">
                        <img src="/banner-laptop.png" alt="Banner" className="w-full h-40 object-cover rounded-lg" />
                    </div>

                    {/* Danh sách sản phẩm */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {/* Banners phụ */}
                    <div className="mb-6 mt-6  flex gap-4">
                        <img src="/banner1.png" alt="Banner 1" className="w-1/2 h-40 object-cover rounded-lg" />
                        <img src="/banner2.png" alt="Banner 2" className="w-1/2 h-40 object-cover rounded-lg" />
                    </div>

                    {/* Danh sách sản phẩm tiếp theo */}
                    <h2 className='mb-6 text-3xl font-bold'>Phụ kiện bán chạy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="py-6 flex justify-between items-center bg-gray-100 rounded-lg">
                        {benefits.map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center w-1/4">
                                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md">
                                    <img src={item.icon} alt="icon" className="w-15 h-15" />
                                </div>
                                <p className="mt-2 text-[#2D52A0]">
                                    {item.text} <span className="font-bold text-[#2D52A0] text-xl">{item.highlight}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
