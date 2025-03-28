import { Card, Avatar, Button } from "antd";
import { EditOutlined, UserOutlined } from "@ant-design/icons";
export const ProfilePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md shadow-lg rounded-2xl p-6">
        <div className="flex flex-col items-center">
          <Avatar size={100} icon={<UserOutlined />} className="mb-4" />
          <h2 className="text-xl font-semibold">Nguyễn Văn A</h2>
          <p className="text-gray-500">Khách hàng VIP</p>
        </div>
        <div className="mt-6 space-y-3">
          <p><strong>Email:</strong> nguyenvana@example.com</p>
          <p><strong>Số điện thoại:</strong> 0123 456 789</p>
          <p><strong>Địa chỉ:</strong> 123 Đường ABC, Quận 1, TP.HCM</p>
        </div>
        <div className="mt-4 w-full flex justify-center">
          <Button type="primary" icon={<EditOutlined />}>Chỉnh sửa thông tin</Button>
        </div>
      </Card>
    </div>
  )
}

