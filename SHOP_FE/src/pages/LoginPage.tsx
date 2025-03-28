import { Button, Form, Input } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

interface LoginFormValues {
    email: string;
    password: string;
}

export const LoginPage = () => {
    const onFinish = (values: LoginFormValues) => {
        console.log('Received values: ', values);
    };

    return (
        <div className="relative flex h-screen bg-white justify-center items-center">
            <p className="absolute top-6 left-[95px] text-gray-600">
            <Link to = '/'><span>Trang chủ</span></Link> / <span>Đăng nhập</span>
          </p>
            <div className="w-[50%] h-[80%] flex flex-col justify-center items-center bg-gray-100 p-8 rounded-tl-3xl rounded-bl-3xl">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl mb-4">Đăng nhập</h2>
                    <p className="text-gray-600 mb-6">Chào mừng bạn đến với Laptop Store. Đăng nhập ngay!</p>

                    <Form onFinish={onFinish} layout="vertical">
                        <Form.Item
                            name="email"
                            rules={[
                                { required: true, message: 'Vui lòng nhập email!' },
                                { type: 'email', message: 'Email không hợp lệ!' },
                            ]}
                            className="mb-4"
                        >
                            <Input
                                size="large"
                                placeholder="Email của bạn"
                                prefix={<MailOutlined className="text-gray-400 mr-1" />}
                                className="bg-gray-200"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                { required: true, message: 'Vui lòng nhập mật khẩu!' },
                                { min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự!' },
                            ]}
                            className="mb-4"
                        >
                            <Input.Password
                                size="large"
                                placeholder="Mật khẩu"
                                prefix={<LockOutlined className="text-gray-400 mr-1" />}
                                className="bg-gray-200"
                            />
                        </Form.Item>

                        <Button
                            type="primary"
                            block
                            size="large"
                            htmlType="submit"
                            className="mb-4"
                            style={{ backgroundColor: '#2D52A0' }}
                        >
                            Đăng nhập
                        </Button>
                    </Form>

                    <p className="text-center text-gray-600">
                        Bạn là khách hàng mới?
                        <Link to="/Register" className="text-[#2D52A0] ml-1">
                            Đăng ký
                        </Link>
                    </p>
                </div>
            </div>

            <div className="w-[44%] h-[80%] relative hidden md:block rounded-tr-3xl rounded-br-3xl overflow-hidden">
                <img src="/login-bg.jpg" alt="Background" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};
