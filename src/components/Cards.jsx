import { Card} from 'react-bootstrap'
import { MDBIcon } from "mdbreact";

const Cards = (props)=>{
    console.log(props)
    return props["books"].map((book, i) =>(
        <div  key={book.asin} className="col-12 col-md-12 col-lg-3 pt-3">
            <Card className ='card' 
                style={{ height: '33rem'}} 
               
                >
                <Card.Img className="img-fluid" style={{ height: '20rem' }} variant="top" src={book.img}/>
                <Card.Body className ='card-body'>
                    <Card.Title>{book.category}</Card.Title>
                    <Card.Text>
                    {book.title}
                    </Card.Text>
                    <div className = "d-flex justify-content-between">
                        <div className="d-inline ">
                            <MDBIcon className="d-inline cart" icon="cart-plus" spin size="lg" fixed />                                       
                            <h5 className='bookprice d-inline'>{book.price} $</h5>
                        </div>
                        <div className="pay-icons d-lg-none">
                        <MDBIcon className="pr-2" fab icon="cc-visa" size="lg"/>
                        <MDBIcon className="pr-2" fab icon="cc-paypal" size="lg"/>
                        <MDBIcon className="pr-2" fab icon="cc-mastercard" size="lg"/>
                        <MDBIcon className="pr-2" fab icon="cc-apple-pay" size="lg"/>
                        <MDBIcon className="pr-2" fab icon="cc-amazon-pay" size="lg"/>
                        </div>
                        <div className="pay-icons-lg d-none d-lg-flex">
                        <MDBIcon className="pr-2" fab icon="cc-visa" size="lg"/>
                        <MDBIcon className="pr-2" fab icon="cc-paypal" size="lg"/>
                        <MDBIcon className="pr-2" fab icon="cc-mastercard" size="lg"/>
                        <MDBIcon className="pr-2" fab icon="cc-apple-pay" size="lg"/>
                        <MDBIcon className="pr-2" fab icon="cc-amazon-pay" size="lg"/>
                        </div>
                   </div>  
                </Card.Body>
                </Card>
            </div>
    ))                        
}

export default Cards