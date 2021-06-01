import { Component } from 'react'
import { Card, Container, Row, Tabs, Tab } from 'react-bootstrap'
import fantasybooks from '../data/fantasy.json'
import historybooks from '../data/history.json'
import horrorbooks from '../data/horror.json'
import romancebooks from '../data/romance.json'
import scifibooks from '../data/scifi.json'


class LatestRelease extends Component {

    render(){
        return (

            <Container>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="fantasy" title="Fantasy">
                    <Row className="justify-content-center">
                            {
                                fantasybooks.map((book, i) =>(
                                    <div  key={book.asin} className="col-12 col-md-12 col-lg-3 p-sm-3">
                                        <Card className ='card' 
                                            style={{ height: '33rem'}} 
                                           
                                            >
                                            <Card.Img className="img-fluid" style={{ height: '20rem' }} variant="top" src={book.img}/>
                                            <Card.Body className ='card-body'>
                                                <Card.Title>{book.category}</Card.Title>
                                                <Card.Text>
                                                {book.title}
                                                </Card.Text>
                                                <h5 className='bookprice'>{book.price} $</h5>
                                            </Card.Body>
                                            </Card>
                                        </div>
                                ))                        
                            }
                            </Row>
                    </Tab>
                    <Tab eventKey="horror" title="Horror">
                    <Row className="justify-content-center">
                            {
                                horrorbooks.map((book, i) =>(
                                    <div key={book.asin} className="col-12 col-md-12 col-lg-3 p-sm-3">
                                        <Card className ='card' 
                                            style={{ height: '33rem'}} 
                                            
                                            >
                                            <Card.Img className="img-fluid" style={{ height: '20rem' }} variant="top" src={book.img}/>
                                            <Card.Body className ='card-body'>
                                                <Card.Title>{book.category}</Card.Title>
                                                <Card.Text>
                                                {book.title}
                                                </Card.Text>
                                                <h5 className='bookprice'>{book.price} $</h5>
                                            </Card.Body>
                                            </Card>
                                        </div>
                                ))                        
                            }
                            </Row>                        
                       
                    </Tab>
                    <Tab eventKey="scfi" title="Scifi">
                    <Row className="justify-content-center">
                            {
                                scifibooks.map((book, i) =>(
                                    <div key={book.asin} className="col-12 col-md-12 col-lg-3 p-sm-3">
                                        <Card className ='card' 
                                            style={{ height: '33rem'}} 
                                            
                                            >
                                            <Card.Img className="img-fluid" style={{ height: '20rem' }} variant="top" src={book.img}/>
                                            <Card.Body className ='card-body'>
                                                <Card.Title>{book.category}</Card.Title>
                                                <Card.Text>
                                                {book.title}
                                                </Card.Text>
                                                <h5 className='bookprice'>{book.price} $</h5>
                                            </Card.Body>
                                            </Card>
                                        </div>
                                ))                        
                            }
                            </Row>                        
                    </Tab>
                    <Tab eventKey="romance" title="Romance">
                    <Row className="justify-content-center">
                            {
                                romancebooks.map((book, i) =>(
                                    <div key={book.asin} className="col-12 col-md-12 col-lg-3 p-sm-3">
                                        <Card className ='card' 
                                            style={{ height: '33rem'}} 
                                            
                                            >
                                            <Card.Img className="img-fluid" style={{ height: '20rem' }} variant="top" src={book.img}/>
                                            <Card.Body className ='card-body'>
                                                <Card.Title>{book.category}</Card.Title>
                                                <Card.Text>
                                                {book.title}
                                                </Card.Text>
                                                <h5 className='bookprice'>{book.price} $</h5>
                                            </Card.Body>
                                            </Card>
                                        </div>
                                ))                        
                            }
                            </Row>                        
                    </Tab>
                    <Tab eventKey="history" title="History">
                    <Row className="justify-content-center">
                            {
                                historybooks.map((book, i) =>(
                                    <div key={book.asin} className="col-12 col-md-12 col-lg-3 p-sm-3">
                                        <Card className ='card' 
                                            style={{ height: '33rem'}} 
                                            
                                            >
                                            <Card.Img className="img-fluid" style={{ height: '20rem' }} variant="top" src={book.img}/>
                                            <Card.Body className ='card-body'>
                                                <Card.Title>{book.category}</Card.Title>
                                                <Card.Text>
                                                {book.title}
                                                </Card.Text>
                                                <h5 className='bookprice'>{book.price} $</h5>
                                            </Card.Body>
                                            </Card>
                                        </div>
                                ))                        
                            }
                            </Row>                        
                    </Tab>
                    </Tabs>
                
            </Container>
        )
    }
}

export default LatestRelease