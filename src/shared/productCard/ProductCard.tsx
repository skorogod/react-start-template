import React, { FC } from 'react';
import productCardCss from './productCard.module.scss';
import { ToCart } from '../toCart/ToCart';
import { Product } from '../../interfaces/product.interface';

export type ProductCardProps = { count: number; backgroundColor?: string; color?: string; image: string } & Omit<
  Product,
  'category' | 'images'
>;

export const ProductCard: FC<ProductCardProps> = (props) => {
  return (
    <article
      className={productCardCss.productCard}
      style={{ backgroundColor: props.backgroundColor, color: props.color }}
    >
      <header className={productCardCss.header}>
        <p className={productCardCss.title}>{props.title}</p>
      </header>
      <main className={productCardCss.main}>
        <div className={productCardCss.imageContainer}>
          <img className={productCardCss.image} src={props.image} alt="product-image" />
        </div>
        <p className={productCardCss.description}>{props.description}</p>
        <div className={productCardCss.info}>
          <label className={productCardCss.costLabel} htmlFor="cost"></label>
          <p id="cost">{props.costFull}</p>
        </div>
      </main>
      <footer className={productCardCss.footer}>
        <ToCart counter={props.count}></ToCart>
      </footer>
    </article>
  );
};
