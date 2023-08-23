import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useState, useEffect, useRef } from 'react'
import { firestore } from "../../helpers/Firebase";
import Book from "../../models/book";
import { Skeleton, Typography, Card, Space, Row, Col } from "antd";
import { motion } from "framer-motion";
const { Title } = Typography
export default function Books() {

    const [loading, setLoading] = useState(true)
    const [books, setBooks] = useState<Book[]>([])
    const [width, setWidth] = useState<number>(0)
    const ref = useRef<HTMLInputElement>(null)
    useEffect(() => {
        getDocs(query(collection(firestore, "books"), orderBy('price', 'asc'), limit(8)))
            .then((querySnap) => {
                setBooks(querySnap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as unknown as Book)))
                setLoading(false)
            }
                , (error) => {
                    console.error(error);
                }
            );

        ref.current && setWidth(ref.current?.scrollWidth - ref.current?.offsetWidth)
    }, [])


    return (
        <div>
            <Title level={1} style={{ textAlign: 'center', marginTop: 15 }}>Explore Books</Title>

            {loading ? <Space> {Array(3).fill(null).map((_, i) => <Card style={{ margin: '15px auto' }} loading={loading} key={i}>
                <Skeleton loading={loading} active avatar>
                    <p>wqwdwqdqwdqqq</p>
                </Skeleton>
            </Card>)}</Space>
                :
                <Row >
                    <Col
                        span={18}
                        style={{
                            margin: '0 auto',
                            display: 'flex',
                            padding: ' 1em',
                            flex: '1',
                            gap: '1rem',
                            overflowX: 'hidden'
                        }}
                        ref={ref}
                    >
                        <motion.div
                            drag='x'
                            dragConstraints={{ right: 0, left: -width }}
                            style={{
                                margin: '0 auto',
                                display: 'flex',
                                padding: ' 1em',
                                flex: '1',
                                gap: '1rem',
                            }}>
                            {books.map((book) => {
                                return <Card
                                    className="bookDiv"
                                    bordered
                                    key={book.id}
                                    style={{
                                        height: '100%',
                                        minWidth: '200px',
                                        pointerEvents: 'none'
                                    }}
                                    cover={<img
                                        alt="book cover"
                                        src={'https://i.pinimg.com/1200x/bd/29/34/bd293499ee09b8fa4182f2ae24d83133.jpg'}
                                    />}
                                >
                                    <div className="" style={{ marginBottom: '30px' }}>
                                        <p style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '10px' }}>{book.name}</p>
                                        <p> {book.author}</p>
                                    </div>
                                    <p style={{ position: 'absolute', right: '0', bottom: '0', fontSize: '1.2rem', margin: '0px', padding: '1rem' }}>
                                        Price :<span style={{ fontSize: '1.3rem', color: '#264' }}> {book.price as unknown as String} $</span></p>
                                </Card>
                            })}
                        </motion.div>
                    </Col>
                </Row>
            }
        </div >
    )
}
