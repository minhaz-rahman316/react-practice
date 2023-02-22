import axios from 'axios'
import React, { Component } from 'react'
import  {Row,Col,Card,Carousel} from 'react-bootstrap'
import Slider from './Slider';

export default class HomeBanner2 extends Component {

  constructor() {
    super();
    this.state = {
      products: []
    }
  }

  // ! componentWillMount


  componentDidMount() { 

  // ! API calls
    setTimeout(() => { 
      axios.get('https://dummyjson.com/products').then((res)=> {
      this.setState({
        products:(res.data.products)
      })
    })
      .catch((err) => { 
        alert(err)
      })
    },3000)
      
  }

  render() {

    const ProductList = this.state.products &&
      this.state.products.map((item, i) => {
      
      return (
        <Col key={i} lg={3}>
          <Card style={{ width: "18rem", height: "100%" }}>
            <Carousel><Slider images={item.images } /></Carousel>
            <Card.Body style={{ height: "40%" }} className="mb-3 d-flex-col">
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                <p>{item.description}</p>
              </Card.Text>
              <Card.Text>
                <h3>{item.price}</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );

    });
    return (
      <div className='container'>
        <Row>
          {ProductList}
        </Row>
      </div>
    )
  }
}

