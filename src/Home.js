import React from 'react';
import './Home.css'
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className= "home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/TFM2/Launch/1500x600_Hero-Tall_JPN._CB667917551_.jpg"
                alt=""
                />
            </div>

            <div className="home_row">
                <Product title="Samsung Galaxy S21 Plus 5G (Phantom Violet, 8GB RAM, 128GB Storage)" 
                id={123}
                price={100000} 
                image="https://images-na.ssl-images-amazon.com/images/I/91QuYeAEXVL._SL1500_.jpg"
                rating={5} />
                <Product title="HP Envy x360 Convertible Touchscreen 13.3-inch FHD Laptop (11th Gen Intel Core i7-1165G7/16GB/512GB SSD/Win 10 Home/Alexa Built-in/Pale Gold/1.32kg), 13-bd0063TU" 
                id={1233}
                price={114975} 
                image="https://images-na.ssl-images-amazon.com/images/I/61REfEuUWbL._SL1500_.jpg"
                rating={4} />
            </div>
            <div className="home_row">
            <Product title="Redmi 164 cm (65 inches) 4K Ultra HD Android Smart LED TV X65|L65M6-RA (Black) (2021 Model)" 
                id={1236}
                price={57999} 
                image="https://images-na.ssl-images-amazon.com/images/I/81%2BolvrT65L._SX569_.jpg"
                rating={4} />
                <Product title="HP Laserjet Pro M126nw Multi-Function Direct Wireless Network Laser Printer (Print, Copy, Scan, Black)" 
                id={1239}
                price={16799} 
                image="https://images-na.ssl-images-amazon.com/images/I/61%2Bh3559FyL._SL1500_.jpg"
                rating={4} />
                <Product title="Papergrid Notebook - Long Book (31 cm x 19 cm), Single Line, 160 Pages, Soft Cover - Pack of 6" 
                id={1723}
                price={360} 
                image="https://images-na.ssl-images-amazon.com/images/I/71jTn3ZWw1L._SL1500_.jpg"
                rating={5} />
            </div>
            <div className="home_row">
            <Product title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)" 
                id={12300}
                price={2799} 
                image="https://m.media-amazon.com/images/I/41tEQogY3qL.jpg"
                rating={5} />
                
            </div>



        </div>
    )
}

export default Home;
