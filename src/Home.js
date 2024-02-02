import React from 'react'
import "./Home.css"
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="4903850"
            title="Tree of Life Vitamin C, Retinol and Hyaluronic Acid serum for Brightening, Firming, & Hydrating for Face - 3 Ct x 1 Fl Oz"
            price={45.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/7115EDvsS5L._SL1080_.jpg"
          />
          <Product
            id="23445930"
            title="Estee Lauder Beautiful Eau De Parfum Spray for Women, 2.5 Ounce"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51c6ejBV9HL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="Beauty of Joseon Ginseng Essence Water, 150ml, 5fl.oz."
            price={13.95}
            rating={4}
            image="https://m.media-amazon.com/images/I/61MjIC920xL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="Cetaphil Body Moisturizer, Hydrating Moisturizing Lotion for All Skin Types, Suitable for Sensitive Skin, NEW 20 oz, Fragrance Free, Hypoallergenic, Non-Comedogenic"
            price={24.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61RWF4wBpDL._AC_UL600_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="4903850"
            image="https://m.media-amazon.com/images/I/51ZBT9athoL._AC_UL600_FMwebp_QL65_.jpg"
            title="Chânél Coco Mademoiselle For Women Eau de Parfum Spray 3.4 Fl. OZ. / 100ML.z"
            rating={5}
            price={101.99}
          />
          <Product
            id="23445930"
            title="L'Oreal Paris Revitalift Miracle Blur Instant Skin Smoother - 1.18 Fl Oz"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61TWtLTndHL._SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="CeraVe Moisturizing Cream | Body and Face Moisturizer for Dry Skin | Body Cream with Hyaluronic Acid and Ceramides | Hydrating Moisturizer| Fragrance Free Non-Comedogenic | 19 Ounce "
            price={19.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71Z-Dmc7RoL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="
Click image to open expanded view
Botanical Beauty CALENDULA OIL Egyptian Calendula  Oil 100% Pure Natural for Face, Skin, Body, Hair, Nail Care 1 Fl.oz.- 30 ml Skin Moisturizer, "
            price={14.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61lGPvTtWDL._AC_UL600_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="4903850"
            title="Botanical Beauty Organic CALENDULA OIL BUTTER Calendula Officinalis Marigold Oil Butter 100% Pure Natural for FACE, SKIN, BODY, HAIR, NAILS, Foot Care. Foot oil butter 8 Fl.oz.- 240 ml"
            price={11.95}
            rating={4}
            image="https://m.media-amazon.com/images/I/61NWKWxFKML._AC_UL600_FMwebp_QL65_.jpg"
          />
          <Product
            id="23445930"
            title="Covergirl Lash Blast Volume Mascara, Volumizing Mascara, Very Black, Pack of 2"
            price={6.94}
            rating={5}
            image="https://m.media-amazon.com/images/I/612xoEPennL._AC_UL600_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="Italia Deluxe Top Five Mousse Matte Lipstick Set Chola Browns"
            price={8.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/610wtV9lZuL._AC_UL600_QL65_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="4903850"
            title="NYX PROFESSIONAL MAKEUP Ultimate Shadow Palette, Eyeshadow Palette, Warm Neutrals,1 Count"
            price={12.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61SWjLCijsL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <Product
            id="23445930"
            title="hhseyewell Luxury Beauty Products Eyemask 60 Sheets Collagen Hyaluronicacid Eyemask To Dark Circles Puffiness And Wrinkles For Any Skin Type Eye Care Moisturizing Eyemask Suitable 82ml Eye Bright"
            price={9.94}
            rating={5}
            image="https://m.media-amazon.com/images/I/61sBBorhsVL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="Carolina Herrera Good Girl Eau de Parfum 2.7 oz/ 80 mL Eau de Parfum Spray null 2.7 oz/ 80 mL"
            price={79.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/611LTFSCqoL._AC_UL600_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="12321341"
            title="Beauty Creations Banana Setting Power"
            price={4.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/51hZZ16znPL._AC_UL600_QL65_.jpg"
          />

          <Product
            id="49538094"
            title="Botanical Beauty ORGANIC CARROT SEED OIL BUTTER RAW. 100% Natural/VIRGIN/UNREFINED. 8 Fl oz - 240 ml. For Skin, Hair, Lip and Nail Care"
            price={14.95}
            rating={5}
            image="https://m.media-amazon.com/images/I/71pS2hXbAsL._AC_UL600_QL65_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="12321341"
            title="RMS Beauty - Beauty Oil – Buriti, Rosehip & Jojoba Oil Blend Protects & Moisturizes Skin on Face, Neck & Body - Cruelty-Free (1 Ounce)"
            price={9.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/41ma++4B5QL._AC_UL600_QL65_.jpg"
          />

          <Product
            id="49538094"
            title="Chebe Hair Butter for Hair Growth, Hair Thickening, Chebe Hair Growth Butter, Ayurvedic Hair Butter with Shea, cocoa, mango butter, Fenugreek, rosemary, Aloe vera - Jamaican Black Castor Oil- Deep Conditioner. for all hair types. 8 oz …"
            price={17.45}
            rating={5}
            image="https://m.media-amazon.com/images/I/71S8ISy-YgL._AC_UL600_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="90829332"
            title="L’Oréal Paris Makeup Infallible Fresh Wear Foundation in a Powder, Up to 24H Wear, Waterproof, Golden Beige, 0.31 oz."
            price={8.24}
            rating={5}
            image="https://m.media-amazon.com/images/I/81KnQq17beL._AC_UL600_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home