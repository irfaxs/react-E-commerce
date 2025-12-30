import Carousel from "../../Carousel/Carousel";
import './HomePage.css'
import { products } from "../../../data/products";
import { carousel_images } from "../../../data/carousel_images";
import ProductCard from "../../ProductCard/ProductCard";






function HomePage () {
    return(
        <>
        <div className="container">
            <div className="row home_banner">
        <div className="col bg-">
        <Carousel images = {carousel_images}/>
        </div>
        
        <div className="col bg-secondary">

        </div>        
            </div>
            <div className="productContainer p-3 d-grid gap-2">
                {
                    products.map((product, index) => (
                        <ProductCard product={product} key = {product.id} />
                    ))
                }

            </div>
        </div>
        </>
    )
}

export default HomePage;