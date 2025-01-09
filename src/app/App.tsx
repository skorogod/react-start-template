import React from 'react';
import './App.css';
import { ProductDetails } from '../shared/productDetails/ProductDetails';
import { ProductInCart } from 'src/shared/productInCart/ProductInCart';

function App() {
  return (
    <div className="App">
      <ProductInCart
        cost={200}
        title='Telegram accounts'
        counter={3}
        images={
          [
            'https://avatars.mds.yandex.net/get-vthumb/3333356/915836b1bb9bbb4bc9257fa973baefd8/800x450',
            'https://i.ytimg.com/vi/ht1IDr80VEw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBIiNHir1hgLfxO_2g7g0zCB_OFqg',
            'https://avatars.mds.yandex.net/get-vthumb/3333356/915836b1bb9bbb4bc9257fa973baefd8/800x450',
            'https://i.ytimg.com/vi/ht1IDr80VEw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBIiNHir1hgLfxO_2g7g0zCB_OFqg',
            'https://avatars.mds.yandex.net/get-vthumb/3333356/915836b1bb9bbb4bc9257fa973baefd8/800x450',
            'https://i.ytimg.com/vi/ht1IDr80VEw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBIiNHir1hgLfxO_2g7g0zCB_OFqg',
            
          ]
        }
      />
    </div>
  );
}

export default App;
