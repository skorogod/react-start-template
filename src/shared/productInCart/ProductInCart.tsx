import React, {FC} from "react"
import { Product } from "../../interfaces/product.interface"
import producInCartCss from './productInCart.module.scss'

import delteIcon from '../../assets/icons/delete.svg'

type ProductInCartProps = Product & {counter: number}

export const ProductInCart:FC<ProductInCartProps> = (props) => {
    return (
        <article className={producInCartCss.productInCart}>
            <div className={producInCartCss.main}>
                <div className={producInCartCss.imageContainer}>
                    <img className={producInCartCss.image}  src={props.images[0]} alt="product-image" />
                </div>
                <div className={producInCartCss.info}>
                    <p className={producInCartCss.title}>{props.title}</p>
                    <div className={producInCartCss.infoGrid}>
                        <label className={producInCartCss.costLabel} htmlFor="cost"></label>
                        <p id="cost" className={producInCartCss.cost}>{props.cost}</p>
                    </div>
                </div>
            </div>
            {
                props.counter > 1 &&
                <p className={producInCartCss.counter}>({props.counter})</p>
            }
            <div className={producInCartCss.deleteContainer}>
                <img className={producInCartCss.deleteIcon} src={delteIcon} alt="delete-icon" />
            </div>
        </article>
    )
}