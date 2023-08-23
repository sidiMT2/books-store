import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from 'react'
import { firestore } from "../../helpers/Firebase";
import Book from "../../models/book";
import { Skeleton, List, Typography, Card } from "antd";

const { Title } = Typography
export default function Books() {

    const [loading, setLoading] = useState(true)
    const [books, setBooks] = useState<Book[]>([])

    useEffect(() => {
        getDocs(query(collection(firestore, "books"), orderBy('price', 'asc')))
            .then((querySnap) => {
                setBooks(querySnap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as unknown as Book)))
                setLoading(false)
            }
                , (error) => {
                    console.error(error);
                }
            );
    }, [])

    return (
        <div>
            <Title level={1} style={{ textAlign: 'center', marginTop: 15 }}>Books</Title>

            {loading ? Array(3).fill(null).map((_, i) => <Card style={{ width: '60%', margin: '15px auto' }} loading={loading} key={i}>
                <Skeleton loading={loading} active avatar>
                    <p></p>
                </Skeleton>
            </Card>)
                :
                <List
                    pagination={{ position: 'bottom', align: 'center' }}
                    style={{ width: '60%', margin: '30px auto' }}
                    itemLayout="vertical"
                    size="large"
                    dataSource={books}
                    renderItem={(item) => (
                        <List.Item
                            key={item.id as string}
                        >
                            <Card loading={loading}>
                                <List.Item.Meta
                                    title={item.name}
                                    description={item.author}

                                />
                                <p>{item.price as unknown as String}</p>

                            </Card>
                        </List.Item>
                    )
                    }
                />
            }
        </div >
    )
}
