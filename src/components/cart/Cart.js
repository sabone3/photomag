// import React from "react";
// import maxell from "../../assets/images/products-images/maxell.png";
// import murata from "../../assets/images/products-images/murata.png";
// import renata from "../../assets/images/products-images/renata.jpg";
// import seizaken from "../../assets/images/products-images/seizaken.jpg";

// const cart = () => {
//   return (
//     <div className="section-cart">
//       ;
//       <header className="cart-header">
//         <div className="container">
//           <h1 className="title-1">Корзина товаров</h1>
//         </div>
//       </header>
//       <div className="section-cart-body">
//         <div className="container">
//           <section className="cart">
//             <header className="cart-header">
//               <div className="cart-header-title">Наименование</div>
//               <div className="cart-header-title">Количество</div>
//               <div className="cart-header-title">Стоимость</div>
//             </header>

//             <section className="product">
//               <div className="product-img">
//                 <img src={renata} height="100px" />
//               </div>
//               <div className="product-title">renata 377</div>
//               <div className="product-count">
//                 <div className="count">
//                   <div className="count-box">
//                     {/* <input
//                       type="number"}
//                       className="count-input"
//                       min={1}
//                       max={100}
//                       value={1}
//                     ></input> */}
//                     <div className="count-controls">
//                       <button type="button" className="count-up">
//                         img up
//                       </button>
//                       <button type="button" className="count-down">
//                         img down
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="product-price">55rub</div>
//               <div className="product-controls">
//                 <button type="button">img delete</button>
//               </div>
//             </section>

//             <section className="product">
//               <div className="product-img">
//                 <img src={maxell} height="100px" />
//               </div>
//               <div className="product-title">maxell 377</div>
//               <div className="product-count">
//                 <div className="count">
//                   <div className="count-box">
//                     {/* <input
//                       type={number}
//                       className="count-input"
//                       min={1}
//                       max={100}
//                       value={1}
//                     ></input> */}
//                     <div className="count-controls">
//                       <button type="button" className="count-up">
//                         img up
//                       </button>
//                       <button type="button" className="count-down">
//                         img down
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="product-price">45rub</div>
//               <div className="product-controls">
//                 <button type="button">img delete</button>
//               </div>
//             </section>

//             <section className="product">
//               <div className="product-img">
//                 <img src={seizaken} height="100px" />
//               </div>
//               <div className="product-title">seizaken 377</div>
//               <div className="product-count">
//                 <div className="count">
//                   <div className="count-box">
//                     {/* <input
//                       type={number}
//                       className="count-input"
//                       min={1}
//                       max={100}
//                       value={1}
//                     ></input> */}
//                     <div className="count-controls">
//                       <button type="button" className="count-up">
//                         img up
//                       </button>
//                       <button type="button" className="count-down">
//                         img down
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="product-price">45rub</div>
//               <div className="product-controls">
//                 <button type="button">img delete</button>
//               </div>
//             </section>
//             <section className="product">
//               <div className="product-img">
//                 <img src={murata} height="100px" />
//               </div>
//               <div className="product-title">murata 377</div>
//               <div className="product-count">
//                 <div className="count">
//                   <div className="count-box">
//                     {/* <input
//                       type={number}
//                       className="count-input"
//                       min={1}
//                       max={100}
//                       value={1}
//                     ></input> */}
//                     <div className="count-controls">
//                       <button type="button" className="count-up">
//                         img up
//                       </button>
//                       <button type="button" className="count-down">
//                         img down
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="product-price">45rub</div>
//               <div className="product-controls">
//                 <button type="button">img delete</button>
//               </div>
//             </section>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default cart;
import React, { useEffect, useState } from "react";
import CartFooter from "./cartfooter/CartFooter";
import CartHeader from "./cartheader/CartHeader";
import Product from "./product/Product";
import macbook from "../../assets/images/products/macbook.jpg";
import applewatch from "../../assets/images/products/apple-watch.jpg";
import macpro from "../../assets/images/products/mac-pro.jpg";

const cartArr = [
  {
    id: 1,
    img: macbook,
    title: "Apple MacBook Air 13",
    count: 2,
    price: 100000,
    priceTotal: 200000,
  },
  {
    id: 2,
    img: applewatch,
    title: "Apple watch",
    count: 1,
    price: 29000,
    priceTotal: 29000,
  },
  {
    id: 3,
    img: macpro,
    title: "Mac Pro",
    count: 1,
    price: 190000,
    priceTotal: 190000,
  },
];

const Cart = () => {
  const [cart, setCart] = useState(cartArr);
  const [total, setTotal] = useState({
    price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
    count: cart.reduce((prev, curr) => prev + curr.count, 0),
  });

  useEffect(() => {
    setTotal({
      price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
      count: cart.reduce((prev, curr) => prev + curr.count, 0),
    });
  }, [cart]);

  const deleteProduct = (id) => {
    setCart((cart) => cart.filter((product) => id !== product.id));
  };

  const increase = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count + 1,
            priceTotal: (product.count + 1) * product.price,
          };
        }
        return product;
      });
    });
  };

  const decrease = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          const newCount = product.count - 1 > 1 ? product.count - 1 : 1;

          return {
            ...product,
            count: newCount,
            priceTotal: newCount * product.price,
          };
        }
        return product;
      });
    });
  };

  const changeValue = (id, value) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.price,
          };
        }
        return product;
      });
    });
  };

  const products = cart.map((product) => {
    return (
      <Product
        product={product}
        key={product.id}
        deleteProduct={deleteProduct}
        increase={increase}
        decrease={decrease}
        changeValue={changeValue}
      />
    );
  });

  return (
    <section className="cart">
      <CartHeader />
      {products}
      <CartFooter total={total} />
    </section>
  );
};

export default Cart;
