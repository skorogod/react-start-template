import React from 'react';
import './App.css';
import { ToCart } from '../shared/toCart/ToCart';

import { Modal } from '../shared/modal/Modal';
import { ProductCard } from 'src/shared/productCard/ProductCard';

function App() {
  return (
    <div className="App">
      <ProductCard
        description='test'
        cost={20}
        title='test'
        image=''
        count={2}
      ></ProductCard>
    </div>
  );
}

export default App;
