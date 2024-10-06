import React from 'react'

export default function ConfirmAddToCartPopup({ product, onClose }) {
  if (!product) return null

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" >
      <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative" >
        <h2 className="text-xl font-semibold mb-4">{product.name}</h2>
        <p className="mb-2"><strong>Description:</strong> {product.description}</p>
        
        <p className="mb-2">
          <strong>Ingredients:</strong> {product.ingredients && product.ingredients.length > 0 
            ? product.ingredients.join(', ') 
            : 'No ingredients listed'}
        </p>
        
        <p className="mb-4"><strong>Price:</strong> ${product.price}</p>
        
        <button onClick={onClose} className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition" >
          Close
        </button>
      </div>
    </div>
  )
}
