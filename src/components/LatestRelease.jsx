import { Component } from 'react'
import { Container, Row, Tabs, Tab } from 'react-bootstrap'
import fantasybooks from '../data/fantasy.json'
import historybooks from '../data/history.json'
import horrorbooks from '../data/horror.json'
import romancebooks from '../data/romance.json'
import scifibooks from '../data/scifi.json'
import Cards from './Cards'


class LatestRelease extends Component {

    render(){
        return (

            <Container>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        
                    <Tab eventKey="fantasy" title="Fantasy">
                    <Row className="justify-content-center">                            
                    <Cards books={fantasybooks}/>                          
                    </Row>
                    </Tab>

                    <Tab eventKey="horror" title="Horror">
                    <Row className="justify-content-center">
                    <Cards books={horrorbooks}/>  
                    </Row>                        
                    </Tab>

                    <Tab eventKey="scfi" title="Scifi">
                    <Row className="justify-content-center">
                    <Cards books={scifibooks}/>  
                    </Row>                        
                    </Tab>

                    <Tab eventKey="romance" title="Romance">
                    <Row className="justify-content-center">
                    <Cards books={romancebooks}/>  
                    </Row>                        
                    </Tab>

                    <Tab eventKey="history" title="History">
                    <Row className="justify-content-center">
                    <Cards books={historybooks}/>  
                    </Row>                        
                    </Tab>

                    </Tabs>
            </Container>
        )
    }
}

export default LatestRelease