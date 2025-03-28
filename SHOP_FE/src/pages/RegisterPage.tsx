import { Button, Form, Input } from 'antd';
import { LockOutlined, MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

interface RegisterFormValues {
    email: string;
    phone: string;
    address: string;
    password: string;
    confirmPassword: string;
}

export const RegisterPage = () => {
    const onFinish = (values: RegisterFormValues) => {
        console.log('Received values: ', values);
    };

    return (
        <div className="relative flex h-screen justify-center items-center">
            <p className="absolute top-6 left-[95px] text-gray-600">
                <Link to="/">
                    <span>Trang chủ</span>
                </Link>{' '}
                / <span>Đăng Ký</span>
            </p>
            <div className="w-[50%] h-[80%] bg-gray-100 flex flex-col justify-center items-center p-6 rounded-tl-3xl rounded-bl-3xl">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl mb-3">Đăng ký</h2>
                    <p className="text-gray-600 mb-4">Chào mừng bạn đến với Laptop Store. Đăng ký ngay!</p>

                    <Form onFinish={onFinish} layout="vertical">
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
                            className="mb-3"
                        >
                            <Input
                                size="large"
                                placeholder="Email của bạn"
                                prefix={<MailOutlined className="text-gray-400 mr-1" />}
                                className="bg-gray-200"
                            />
                        </Form.Item>

                        <Form.Item
                            name="phone"
                            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                            className="mb-3"
                        >
                            <Input
                                size="large"
                                placeholder="Số điện thoại"
                                prefix={<PhoneOutlined className="text-gray-400 mr-1" />}
                                className="bg-gray-200"
                            />
                        </Form.Item>

                        <Form.Item
                            name="address"
                            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
                            className="mb-3"
                        >
                            <Input
                                size="large"
                                placeholder="Địa chỉ của bạn"
                                prefix={<HomeOutlined className="text-gray-400 mr-1" />}
                                className="bg-gray-200"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                            className="mb-3"
                        >
                            <Input.Password
                                size="large"
                                placeholder="Mật khẩu"
                                prefix={<LockOutlined className="text-gray-400 mr-1" />}
                                className="bg-gray-200"
                            />
                        </Form.Item>

                        <Form.Item
                            name="confirmPassword"
                            dependencies={['password']}
                            rules={[
                                { required: true, message: 'Vui lòng xác nhận mật khẩu!' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
                                    },
                                }),
                            ]}
                            className="mb-3"
                        >
                            <Input.Password
                                size="large"
                                placeholder="Xác nhận mật khẩu"
                                prefix={<LockOutlined className="text-gray-400 mr-1" />}
                                className="bg-gray-200"
                            />
                        </Form.Item>

                        <Button
                            type="primary"
                            block
                            size="large"
                            htmlType="submit"
                            className="mb-3"
                            style={{ backgroundColor: '#2D52A0' }}
                        >
                            Đăng ký
                        </Button>
                    </Form>

                    <p className="text-center text-gray-600">
                        Bạn đã có tài khoản?
                        <Link to="/Login" className="text-[#2D52A0] ml-1">
                            Đăng nhập
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
