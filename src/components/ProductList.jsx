import React from 'react';
import Product from './Product';

class ProductList extends React.Component { 
  generateVoteCount = () => {
    return Math.floor((Math.random() * 50) + 15);
  }

  state = {
    products: [
      {
      id: 1,
      title: 'Yellow Pail',
      description: 'On-demand sand castle construction expertise.',
      url: '#',
      votes: this.generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/daniel.jpg',
      productImageUrl: 'images/products/image-aqua.png',
    },
    {
      id: 2,
      title: 'Supermajority: The Fantasy Congress League',
      description: 'Earn points when your favorite politicians pass legislation.',
      url: '#',
      votes: this.generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/kristy.png',
      productImageUrl: 'images/products/image-rose.png',
    },
    {
      id: 3,
      title: 'Tinfoild: Tailored tinfoil hats',
      description: 'We already have your measurements and shipping address.',
      url: '#',
      votes: this.generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/veronika.jpg',
      productImageUrl: 'images/products/image-steel.png',
    },
    {
      id: 4,
      title: 'Haught or Naught',
      description: 'High-minded or absent-minded? You decide.',
      url: '#',
      votes: this.generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/molly.png',
      productImageUrl: 'images/products/image-yellow.png',
      },
    ]
  }

  handleProductUpVote = (id) => { 
    let products = this.state.products.map(product => {
      if (product.id === id) {
        return Object.assign({}, product, {
          votes: product.votes + 1
        });
      } else {
        return product
      }
    });

    this.setState({
      products: products  
    });
  }


  render() { 
    console.log(this.state.products)

    const products = this.state.products.sort((a, b) => (
      b.votes - a.votes
    ));
    const mappedProducts = products.map(product => ( 
      <Product
        key={'key-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        upVote={this.handleProductUpVote}
      />
    ))

    return (
      <div className='ui unstackable items'>
        {mappedProducts}
      </div>
    );
  }
}

export default ProductList;