import React, {FC, useEffect, useRef, useState} from "react"
import type { Product } from "../../interfaces/product.interface"
import productDetailsCss from './productDetails.module.scss'

export const ProductDetails:FC<Product> = (props) => {
    const ref = useRef<null | HTMLParagraphElement>(null)
    const [descriptionOverflow, setDescriptionOverflow] = useState(false)
    const [showFullDescription, setShowFullDescription] = useState(false)

    const onToggleFullDescription = () => {
        setShowFullDescription(!showFullDescription)
    }

    useEffect(() => {
        if (ref.current) {
            setDescriptionOverflow(ref.current.scrollHeight > ref.current.clientHeight)
        }
    })
    
    return (
        <div className={productDetailsCss.productDetails}>
            <div className={productDetailsCss.images}>
                <div className={productDetailsCss.otherImagesContainer}>
                    {
                        props.images.slice(1, props.images.length)
                                    .map(el => {
                                                return (
                                                    <img className={productDetailsCss.otherImage} src={`${el}`}></img>
                                                )
                                            }
                                        )
                    }
                </div>
                <div className={productDetailsCss.mainImageContainer}>
                    <img className={productDetailsCss.mainImage} src={props.images[0]} alt="" />
                </div>
            </div>
            <div className={productDetailsCss.info}>
                <h1 className={productDetailsCss.title}>
                    {props.title}
                </h1>
                <div className={productDetailsCss.categoryContainer}>
                    <label className={productDetailsCss.categoryLabel} htmlFor="category"></label>
                    <p id="category">{props.category.name}</p>
                </div>
                <div>
                    <p id="description" ref={ref} className={`${productDetailsCss.description} ${showFullDescription ? productDetailsCss.full : ''}`}>
                        {props.description}
                    </p>
                    {
                        descriptionOverflow || showFullDescription ?
                        <div className={productDetailsCss.moreToggle}>
                            <a href="#" onClick={onToggleFullDescription} role="button">
                                {!showFullDescription ? 'ещё' : 'свернуть'}
                            </a>
                        </div>: ''
                    }
                </div>
                <div className={productDetailsCss.costContainer}>
                    <label className={productDetailsCss.costLabel} htmlFor="cost"></label>
                    <p  className={productDetailsCss.cost} id="cost">{props.cost}</p>
                </div>
                <div className={productDetailsCss.addToCart}>
                    <button className={productDetailsCss.addToCartBtn}>
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    )
}