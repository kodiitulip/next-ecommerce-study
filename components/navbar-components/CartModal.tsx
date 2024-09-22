'use client';

import { CartItem } from '@/components/navbar-components';

/**
 * A modal that appears when the user clicks on the cart icon in the navbar.
 *
 * If the cart is empty, it displays a message saying "Cart Is Empty".
 * Otherwise, it displays a list of CartItem components, representing each item in the cart.
 *
 * @returns A JSX element representing the CartModal.
 */
const CartModal = () => {
	const cartItems = true;

	return (
		<div
			className='absolute p-4 rounded-md shadow-popup bg-background
            top-12 right-0 flex flex-col gap-6 z-20 w-max'>
			{!cartItems ? (
				<div className=''>Cart Is Empty</div>
			) : (
				<div className='flex flex-col gap-8'>
					<CartItem
						imageSrc='https://picsum.photos/72/96'
						alt=''
						title='Product Name'
						price={9.999}
						description='availabe'
						quantity={1}
					/>
					<CartItem
						imageSrc='https://picsum.photos/72/96'
						alt=''
						title='Product Name'
						price={9.999}
						description='availabe'
						quantity={1}
					/>
				</div>
			)}
		</div>
	);
};

export default CartModal;
