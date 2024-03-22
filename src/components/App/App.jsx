import './_reset.css'
import './_base.css'
import './section-cart.css'
import Title from '../Title/Title'
import Cart from '../Cart/Cart'

function App() {
	return (
		<section className='section-cart'>
			<header className='section-cart__header'>
				<div className='container'>
					<Title />
				</div>
			</header>
			<div className='section-cart__body'>
				<div className='container'>
					<Cart />
				</div>
			</div>
		</section>
	)
}

export default App
