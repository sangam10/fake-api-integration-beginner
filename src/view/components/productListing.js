import { Link } from "react-router-dom"
import Pagination from "./pagination"

const ProductList = ({products}) => {
    return (
        <>
        <div className='row gy-1' data-masonry='{"percentPosition": true }'>
            {
                products.map(product => {
                    return (
                        <div className='col col-md-3' key={product.id}>
                            <Link to={`/products/${product.id}`}>
                            <div className='card'>
                                <img className='card-img-top' src={product.image} />
                                <div className='card-body'>
                                    <h5 className='card-title'>{product.title}</h5>
                                    <div className='d-flex justify-content-between'>
                                        <p className='card-text text-primary'>Rs.{product.price}</p>
                                        <p className='card-text text-success'>{product.rating.rate}</p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
        <div className="pt-3">
            <Pagination />
        </div>
        </>
    )
}

export default ProductList
