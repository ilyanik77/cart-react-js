import './cartFooter.css'
import priceFormatter from '../../utils/priceFopmatter';

const CartFooter = ({total}) => {
    const {count, price} = total;
	return (
		<footer className='cart-footer'>
			<div className='cart-footer__count'>Кол-во: {count} ед.</div>
			<div className='cart-footer__price'>
				{priceFormatter.format(price)} руб.
			</div>
		</footer>
	)
}

export default CartFooter
