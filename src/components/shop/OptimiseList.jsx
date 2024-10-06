"use client"

import { FixedSizeList as List } from 'react-window'
import ProductCard from './ProductCard'

export default function OptimiseList({ productData }) {
  const renderRow = ({ index }) => {
    const product = productData[index]
    return (
      <div key={index}>
        <ProductCard 
          id={product.id}
          imageUrl={product.imageUrl} 
          altText={product.altText} 
          title={product.title} 
          description={product.description} 
          price={product.price} 
          rating={product.rating} 
        />
      </div>
    )
  }

  return (
    <List
      height={500}
      itemCount={productData.length}
      itemSize={100}
    >
      {renderRow}
    </List>
  )
}