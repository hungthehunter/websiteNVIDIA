import React, { useRef } from "react";
import PICTURE from "../../Assests/PICTURE";
import "../Shop/Shop.scss"; // Make sure to replace with the correct CSS file

const Shop_Fake = ({ isGridView }) => {
  const card_gtx_4080="card_gtx_4080";
  const card_gtx_4090="card_gtx_4090";
  const laptop="laptop";
  const productRefs = {
    item: useRef(null),
    detail: useRef(null),
    buy: useRef(null),
    container: useRef(null),
    picture: useRef(null),
  };

  return (
   
    <div >
         
      <div
        className={`${
          isGridView ?  "load-more-container-column" : "load-more-product"
        }` }
      >
           <div class="call-out search-label">
                                    Featured
                                </div>
        <div ref={productRefs.container} id="product-container">
          <div
        
            className={`${
                isGridView ?  "load-more-column" : "product-container"
              }`}
            
            ref={productRefs.item}
            id="product-item"
          >
            <div className="img-col-lg" ref={productRefs.picture}>
              <img
                src={PICTURE.laptop}
                alt=""
                className={` ${
                  isGridView ? "load-more-img-lg" : "img-lg"
                }`}
                id="product-img"
              />
            </div>
            <div
              className={`${
                isGridView ? "load-more-column-product" : "detail-col"
              }`}
              ref={productRefs.detail}
              id="product-detail"
            >
              <h2 className="product-name">
                Viewsonic VA2432-H-W 24" IPS 100Hz Thin Bezel Monitor.
              </h2>
              <div className="specs-contain">
                <ul>
                  <li>
                    <div className="specs p-medium">SuperClear® IPS Panel</div>
                  </li>
                  <li>
                    <div className="specs p-medium">
                      Full HD 1080p Resolution
                    </div>
                  </li>
                  <li>
                    <div className="specs p-medium">
                      Scanning Frequency of 100Hz combined with AMD FreeSync™
                    </div>
                  </li>
                  <li>
                    <div className="specs p-medium">
                      1ms (MPRT) Response Time
                    </div>
                  </li>
                  <li>
                    <div className="specs p-medium">
                      Integrated Blue Light Filter
                    </div>
                  </li>
                </ul>
                <span className="bundle-icon">Special Offer</span>
              </div>
            </div>
            <div  className={`${
                isGridView ? "load-more-column-buy": "buy-col-lg" 
              }`}>

          
              <div className="price">
                $12,199
                <span className="decimal">00</span>
              </div>
              <div className="buy-link">
                <a href="/Products" className="link-btn featured-buy-link brand-green" >
                  Add to Cart
                 
                </a>
              </div>
              <div className="buy-bfp">
                <button className="buy-from-partner featured-buy-link no-brand">
                  Buy from Partners
                </button>
              </div>
              <div>
                <button className="featured-buy-link compare link-regular">
                  Compare
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isGridView ? "load-more-container-column" : "load-more-product"
        }`}
      >
           <div class="call-out search-label">
                                    Featured
                                </div>
        <div ref={productRefs.container} id="product-container">
          <div
            className={`${
                isGridView ?  "load-more-column" : "product-container"
              }`}
            ref={productRefs.item}
            id="product-item"
          >
            <div className="img-col-lg" ref={productRefs.picture}>
              <img
                src={PICTURE.GeForce_RTX4090}
                alt=""
                className={` ${
                  isGridView ? "load-more-img-lg" : "img-lg"
                }`}
                id="product-img"
              />
            </div>
            <div
             className={`${
                isGridView ? "load-more-column-product": "detail-col" 
              }`}
              ref={productRefs.detail}
              id="product-detail"
            >
              <h2 className="product-name">
                Viewsonic VA2432-H-W 24" IPS 100Hz Thin Bezel Monitor.{" "}
              </h2>
              <div className="specs-contain">
                <ul>
                  <li>
                    <div className="specs p-medium">
                      Boost Clock Speed: 2.52 GHz
                    </div>
                  </li>
                  <li>
                    <div className="specs p-medium">GPU Memory Size: 24 GB</div>
                  </li>
                  <li>
                    <div className="specs p-medium">Cooling System: Fan</div>
                  </li>
                </ul>
                <span className="bundle-icon">Special Offer</span>
              </div>
            </div>
            <div  className={`${
                isGridView ?  "load-more-column-buy": "buy-col-lg"
              }`}>
              <div className="price">
                $3,199
                <span className="decimal">00</span>
              </div>
              <div className="buy-link">
                <a href="/Products_gtx_4090" className="link-btn featured-buy-link brand-green" >
                  Add to Cart
                  
                </a>
              </div>
              <div className="buy-bfp">
                <button className="buy-from-partner featured-buy-link no-brand">
                  Buy from Partners
                </button>
              </div>
              <div>
                <button className="featured-buy-link compare link-regular">
                  Compare
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isGridView ? "load-more-container-column" :  "load-more-product"
        }`}
      >
           <div class="call-out search-label">
                                    Featured
                                </div>
        <div ref={productRefs.container} id="product-container">
          <div
            className={`${
                isGridView ?  "load-more-column" : "product-container"
              }`}
            ref={productRefs.item}
            id="product-item"
          >
            <div className="img-col-lg" ref={productRefs.picture}>
              <img
                src={PICTURE.GeForce_RTX4080}
                alt="GeForce-RTX4080-Back.png"
                className={`
                ${
                  isGridView ? "load-more-img-lg" :  "img-lg"
                }`}
                id="product-img"
              />
            </div>
            <div
             className={`${
                isGridView ? "load-more-column-product":  "detail-col"
              }`}
              ref={productRefs.detail}
              id="product-detail"
            >
              <h2 className="product-name">
                Viewsonic VA2432-H-W 24" IPS 100Hz Thin Bezel Monitor.{" "}
              </h2>
              <div className="specs-contain">
                <ul>
                  <li>
                    <div className="specs p-medium">
                      Boost Clock Speed:2.52GHz
                    </div>
                  </li>
                  <li>
                    <div className="specs p-medium">GPU Memory Size: 20 GB</div>
                  </li>
                  <li>
                    <div className="specs p-medium">Cooling System: Fan</div>
                  </li>
                </ul>
                <span className="bundle-icon">Special Offer</span>
              </div>
            </div>
            <div  className={`${
                isGridView ?  "load-more-column-buy": "buy-col-lg"
              }`}>
              <div className="price">
                $1,199
                <span className="decimal">00</span>
              </div>
              <div className="buy-link">
                <a href="/Products_gtx_4080" className="link-btn featured-buy-link brand-green" >
                  Add to Cart
                 
                </a>
              </div>
              <div className="buy-bfp">
                <button className="buy-from-partner featured-buy-link no-brand">
                  Buy from Partners
                </button>
              </div>
              <div>
                <button className="featured-buy-link compare link-regular">
                  Compare
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Shop_Fake;
