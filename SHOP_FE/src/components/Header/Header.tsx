import { Dropdown } from 'antd';
import { LaptopOutlined, MenuOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Header.css';

const categories = [
    {
        title: 'Laptop',
        subCategories: [
            { title: 'Laptop Dell', icon: '/dell-icon.png' },
            { title: 'Laptop HP', icon: '/hp-icon.png' },
            { title: 'Laptop Lenovo', icon: '/lenovo-icon.png' },
            { title: 'Laptop Asus', icon: '/asus-icon.png' },
            { title: 'Laptop MSI', icon: '/msi-icon.png' },
            { title: 'Laptop Acer', icon: '/acer-icon.png' },
            { title: 'Laptop LG', icon: '/lg-icon.png' },
        ],
    },
    {
        title: 'Phụ kiện',
        subCategories: [
            { title: 'Tai nghe', icon: '/headphones.png' },
            { title: 'Chuột', icon: '/mouse.png' },
        ],
    },
];

const menuItems = {
    items: categories.map((category) => ({
        key: category.title,
        label: (
            <div className="px-4 py-3 rounded-md">
                <h3 className="text-lg font-bold text-gray-700 mb-2">{category.title}</h3>
                <hr className="border-gray-300 mb-2" />
                <div className="grid grid-cols-6 gap-4">
                    {category.subCategories.map((sub) => (
                        <Link key={sub.title} to={`/productlist?category=${encodeURIComponent(sub.title)}`}>
                            <div className="flex flex-col items-center text-sm text-gray-600 transition">
                                <img
                                    src={sub.icon}
                                    alt={sub.title}
                                    className="w-10 h-10 object-contain transition-transform duration-200 hover:-translate-y-1"
                                />
                                <span>{sub.title}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        ),
    })),
};


export const Header = () => {
    return (
        <header className="sticky top-0 w-full flex items-center justify-around bg-black p-4 text-white z-50">
            <Link to="/">
                <div className="flex items-center gap-4">
                    <LaptopOutlined className="text-2xl" />
                    <span className="font-bold text-xl">Laptop Store</span>
                </div>
            </Link>
            <Dropdown
                menu={menuItems}
                trigger={['hover']}
                placement="bottomLeft"
                dropdownRender={(menu) => (
                    <div className="bg-white shadow-lg rounded-md max-h-64 overflow-y-auto mt-3">
                        <div className="max-h-56 overflow-y-auto">{menu}</div>
                    </div>
                )}
            >
                <button className="flex items-center gap-2 bg-[#2E2E2E] px-4 py-2 rounded-full hover:bg-[#2D52A0] transition">
                    <MenuOutlined /> Danh mục
                </button>
            </Dropdown>

            <div className="relative w-96">
                <input
                    type="text"
                    placeholder="Bạn muốn tìm gì hôm nay?"
                    className="w-full px-4 py-2 rounded-full text-black border border-gray-300 pr-10 outline-none"
                />
                <SearchOutlined className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer p-2 rounded-full hover:bg-gray-200" />
            </div>
            <div className="flex items-center gap-4">
                <Link to="/Login">
                    <button className="bg-[#2E2E2E] px-4 py-2 rounded-full hover:bg-[#2D52A0]">Đăng nhập</button>
                </Link>
                <Link to="/cart">
                    <button className="flex items-center gap-2 bg-[#2E2E2E] px-4 py-2 rounded-full hover:bg-[#2D52A0]">
                        <ShoppingCartOutlined /> Giỏ hàng (0)
                    </button>
                </Link>
            </div>
        </header>
    );
};
