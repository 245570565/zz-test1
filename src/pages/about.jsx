// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Card, Row, Col, Button, Typography, Input, Form } from 'antd';
// import axios from 'axios';

const { Title, Text } = Typography;

function About() {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    phone: '',
  });
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // 假设从后端获取用户数据
    // const fetchUserData = async () => {
    //   try {
    //     const response = await axios.get('/api/user/profile');
    //     setUser(response.data);
    //     setLoading(false);
    //   } catch (error) {
    //     console.error("Error fetching user data", error);
    //   }
    // };

    // 使用 Mock 数据代替真实 API 调用
    setTimeout(() => {
      setUser({
        userName: '赵振',
        email: '245570565@qq.com',
        phone: '18888888888',
      });
      setLoading(false);
    }, 1000);

    // fetchUserData();
  }, []);

  const handleSave = (values) => {
    setUser(values);
    setEditMode(false);
    // 你可以在这里调用后端 API 来保存更改
    // axios.post('/api/user/profile', values).then(response => {
    //   console.log('Profile updated');
    // }).catch(error => {
    //   console.error('Error updating profile', error);
    // });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Row justify="center" style={{ marginTop: 50, padding: '0 20px' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={8}>
        <Card title="用户 Profile 信息" bordered={false}>
          <Title level={4}>用户 Profile 信息</Title>
          {!editMode ? (
            <>
              <p>
                <Text strong>用户名:</Text> {user.userName}
              </p>
              <p>
                <Text strong>邮箱:</Text> {user.email}
              </p>
              <p>
                <Text strong>手机号:</Text> {user.phone}
              </p>
              <Button type="primary" onClick={() => setEditMode(true)}>
                编辑信息
              </Button>
            </>
          ) : (
            <Form layout="vertical" initialValues={user} onFinish={handleSave}>
              <Form.Item name="userName" label="用户名" rules={[{ required: true, message: '请填写用户名' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="email" label="邮箱" rules={[{ required: true, type: 'email', message: '请填写邮箱' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="phone" label="手机号" rules={[{ required: true, message: '请填写手机号' }]}>
                <Input />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  保存
                </Button>
                <Button style={{ marginLeft: '8px' }} onClick={() => setEditMode(false)}>
                  取消
                </Button>
              </Form.Item>
            </Form>
          )}
        </Card>
      </Col>
    </Row>
  );
}

export default About;
