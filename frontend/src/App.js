import React from 'react';
import data from'./data';
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">XYZ Mart</a>  
        </div>
        <div>
          <a href="/cart">Cart</a>  
          <a href="/signin">Sign-In</a>  
        </div>
      </header>
      <main>
        <div>
        <div className="row center">
          {data.products.map(product =>(
            <div key={product.id} className="card">
              <a href={'/product/${product._id}'}>
                {/*<!-- size:680px*830px-->*/}
                <img 
                className="medium" 
                src={product.images} 
                alt={product.name}/>
              </a>
              <div className="card-body">
                <a href={'/product/${product._id}'}>
                  <h2>{product.name}</h2>
                </a>
                <div className="rating">
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                </div>
                <div className="price">${product.price}</div>
              </div>
            </div>
          ))
          }    
        </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
                
}
export default App;
