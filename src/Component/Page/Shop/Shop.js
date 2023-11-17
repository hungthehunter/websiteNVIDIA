import { useState } from "react";
import PICTURE from "../../Assests/PICTURE";
import GridViewToggleButton from "../../Button/GridViewToggleButton/GridViewToggleButton";
import "../Shop/Shop.scss";
import Shop_Fake from "./Shop_Fake";
function Shop(){
    const [isGridView, setGridView] = useState(true);
  
    const handleGridViewClick = () => {
      setGridView(true);
      // Additional logic or state changes for grid view
    };
  
    const handleListViewClick = () => {
      setGridView(false);
      // Additional logic or state changes for list view
    };
return(

<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Shop GeForce Graphics Cards, Laptops, and Systems</title>
  <div className="Shop">
  <div className="row">
    <div id="content">
      <div className="grid wide">
      <h1 className="shop-header">
        Shop GeForce Graphics Cards, Laptops, and Systems
      </h1>
      {/* <div class="container"> */}
      <div className="container">
        <form className="column grid__column-3  content-product">
          <div className="Reset-Filters">
            <input
              type="button"
              aria-label="Reset-Filters"
              className="gray-button button"
              defaultValue="Reset Filters"
            />
          </div>
          <ul className="Filter-list">
            <fieldset className="filter-item">
              <div>
                <legend htmlFor="" className="filter-title">
                  Product Category
                </legend>
              </div>
              <div className="filter-content">
                <ul className="filter-values">
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input
                        type="checkbox"
                        className="small-button"
                        id="check"
                      />
                      <label htmlFor="check" className="c-checkbox__label">
                        <span htmlFor="">Graphics Cards</span>
                      </label>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">GeForce Laptops</span>
                      </label>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">NVIDIA Studio Laptops</span>
                      </label>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">Gaming Desktops</span>
                      </label>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">Gaming Monitors</span>
                      </label>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">Gaming Mice</span>
                      </label>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">NVLink</span>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </fieldset>
            <fieldset className="filter-item">
              <div>
                <legend htmlFor="" className="filter-title">
                  GPU
                </legend>
              </div>
              <div className="filter-content">
                <ul className="filter-values">
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">RTX 4090</span>
                      </label>
                      <span className="float-right">(19)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">RTX 4080</span>
                      </label>
                      <span className="float-right">(22)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">RTX 4070 Ti</span>
                      </label>
                      <span className="float-right">(18)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">RTX 4070 </span>
                      </label>
                      <span className="float-right">(20)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">RTX 4060</span>
                      </label>
                      <span className="float-right">(2)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">RTX 4050 </span>
                      </label>
                      <span className="float-right">(2)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">RTX 3090 Ti</span>
                      </label>
                      <span className="float-right">(1)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">RTX 3090</span>
                      </label>
                      <span className="float-right">(3)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <span className="title">Show More</span>
                  </li>
                </ul>
              </div>
            </fieldset>
            <fieldset className="filter-item">
              <div>
                <legend htmlFor="" className="filter-title">
                  Manufacturer
                </legend>
              </div>
              <div className="filter-content">
                <ul className="filter-values">
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">NVIDIA</span>
                      </label>
                      <span className="float-right">(4)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">ACER</span>
                      </label>
                      <span className="float-right">(20)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">ALIENWARE</span>
                      </label>
                      <span className="float-right">(4)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">AORUS</span>
                      </label>
                      <span className="float-right">(4)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">ASUS</span>
                      </label>
                      <span className="float-right">(45)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">BUILD REDUX</span>
                      </label>
                      <span className="float-right">(3)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">CLX</span>
                      </label>
                      <span className="float-right">(3)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">CORSAIR</span>
                      </label>
                      <span className="float-right">(10)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <span className="title">Show More</span>
                  </li>
                </ul>
              </div>
            </fieldset>
            <fieldset className="filter-item">
              <div>
                <legend htmlFor="" className="filter-title">
                  Screen Size
                </legend>
              </div>
              <div className="filter-content">
                <ul className="filter-values">
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">55"</span>
                      </label>
                      <span className="float-right">(1)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">43"</span>
                      </label>
                      <span className="float-right">(1)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">38"</span>
                      </label>
                      <span className="float-right">(1)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">37.5"</span>
                      </label>
                      <span className="float-right">(3)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">35"</span>
                      </label>
                      <span className="float-right">(1)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">34"</span>
                      </label>
                      <span className="float-right">(4)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" id="" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">32"</span>
                      </label>
                      <span className="float-right">(2)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">28"</span>
                      </label>
                      <span className="float-right">(1)</span>
                    </div>
                  </li>
                  <li className="filter-value">
                    <span className="title">Show More</span>
                  </li>
                </ul>
              </div>
            </fieldset>
            <fieldset className="filter-item">
              <div>
                <legend htmlFor="" className="filter-title">
                  NVIDIA Technology
                </legend>
              </div>
              <div className="filter-content">
                <ul className="filter-values">
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">Reflex</span>
                      </label>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">G SYNC</span>
                      </label>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">NVIDIA Studio Laptops</span>
                      </label>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">Gaming Desktops</span>
                      </label>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">Gaming Monitors</span>
                      </label>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">Gaming Mice</span>
                      </label>
                    </div>
                  </li>
                  <li className="filter-value">
                    <div className="c-checkbox">
                      <input type="checkbox" className="small-button" />
                      <label htmlFor="" className="c-checkbox__label">
                        <span htmlFor="">NVLink</span>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </fieldset>
          </ul>
        </form>
        <div className="column grid__column-10">
          <div className="main-container">
            <div className="form-row">
              <div className="search-form">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Example: Geforce RTX"
                />
                <button type="submit" className="submit-button">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </div>
              <div className="bounding-box">
                <div className="sort-section">
                  <label htmlFor="" className="sort-label">
                    Sort by:
                  </label>
                  <div className="dropdown">
                    <div className="select-btn">
                      <span className="span-content">Featured Products</span>
                      <span className="span-button">
                        <i />
                      </span>
                    </div>
                  </div>
                </div>
          <GridViewToggleButton
           isGridView={isGridView}
           handleGridViewClick={handleGridViewClick}
           handleListViewClick={handleListViewClick}
          />
              </div>
              <div className="total-product-list">
                <div className="total-product">221 results found</div>
              </div>
              <div className="featured-container">
                <div className="call-out search-label">Featured</div>
                <div className="product-main-container">
                  <div className="img-col-lg">
                    <div className="img-lg">
                      <img  src={PICTURE.GeForce_RTX4080} alt="" />
                    </div>
                  </div>
                  <div className="detail-main-col">
                    <h2 className="product-name">NVIDIA GeForce RTX 4080</h2>
                    <div className="specs-contain">
                      <ul>
                        <li>
                          <div className="specs p-medium">
                            Cooling System: Fan
                          </div>
                        </li>
                        <li>
                          <div className="specs p-medium">
                            Boost Clock Speed:2.52GHz
                          </div>
                        </li>
                        <li>
                          <div className="specs p-medium">
                            Cooling System: Fan
                          </div>
                        </li>
                      </ul>
                      <span className="bundle-icon">Special Offer</span>
                    </div>
                  </div>
                  <div className="buy-main-col-lg">
                    <div className="price">
                      $1,199
                      <span className="decimal">00</span>
                    </div>
                    <div className="buy-link">
                      <a
                        href=""
                        className="link-btn featured-buy-link brand-green"
                      >
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
   
           <Shop_Fake isGridView={isGridView}></Shop_Fake>
            </div>
          </div>
        </div>
      </div>
   
    <footer id="footer">
      <div className="footer-wrapper">
        <div className="left-link">
          <div className="footer-item country-link">
            <a href="">USA - United States</a>{" "}
          </div>
          <div className="footer-item">
            {" "}
            <a href="">Privacy</a>
          </div>
          <div className="footer-item">
            <a href="">Legal</a>
          </div>
          <div className="footer-item">
            <a href="">Contact</a>
          </div>
        </div>
        <div className="right-link">
          <button className="compare-btn">Compare 4/4</button>
        </div>
      </div>
    </footer>
  </div>
  </div>
  </div>
  </div>
  {/*  */}
</>

)
}

export default Shop;