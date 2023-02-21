import axios from 'axios'
import React, { Component } from 'react'

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

    const ProductList = this.state.products.map((item,i)=> {
      
      return (
        <tr>
          
          <td><img src={item.images[0]} alt="" /></td>
            <td>{ item['title'] }</td>
            <td>{ item['description'] }</td>
            <td>{ item['rating'] }</td>
            <td>{ item['price'] }</td>
        </tr>
      )

    });
    return (
      <div className='container'>
        <thead>
          <th>Item</th>
          <th>Title</th>
          <th>Description</th>
          <th>Rating</th>
          <th>Price</th>
        </thead>
        <tbody>
          {ProductList}
        </tbody>
      </div>
    )
  }
}

