import { Outlet, useNavigate } from "react-router-dom";

import { useState, useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./helpers/Firebase";
import Loading from "./components/Loading";
import { Button, Menu, Layout, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";

export default function LayoutPage() {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    const { Title } = Typography
    const onClick = () => {
        auth.signOut()
        return navigate('/login')
    }

    useEffect(() => {
        const unsbscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                return navigate('/login')
            }
            setLoading(false)
        })
        return unsbscribe
    }, [loading, auth, navigate])

    console.log('here')
    if (loading) {
        return <Loading />
    }


    return (<>

        <Layout className="layout" style={{ width: '100%', height: '100%' }} >
            <Header style={{ alignSelf: 'stretch', display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" style={{ marginRight: '20px' }}>
                    <Title level={2} style={{ color: 'white' }}> Books Store</Title>
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={[
                        {
                            key: '/books',
                            label: 'Books',
                            onClick: () => { return navigate('/books') }
                        },
                        {
                            key: '/category',
                            label: 'Category',
                            onClick: () => { return navigate('/category') }
                        },
                    ]}
                />
                <Button style={{ marginLeft: 'auto' }} onClick={onClick} type="primary" danger > Logout</Button>
            </Header>

            <Content style={{ backgroundColor: 'white' }}>
                <Outlet />

            </Content>
        </Layout>
    </>
    )
}
