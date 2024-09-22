'use client';

import Image from 'next/image';

/**
 * A single item in the cart.
 *
 * @prop {string} imageSrc The url of the product image.
 * @prop {string} [alt='Product Image'] The alt text for the product image.
 * @prop {string} title The name of the product.
 * @prop {number} price The price of the product.
 * @prop {string} [description=''] A description of the product.
 * @prop {number} [quantity=1] The quantity of the product in the cart.
 * @returns A JSX element representing a single item in the cart.
 */
const CartItem = ({
	imageSrc,
	alt = 'Product Image',
	title,
	price,
	description = '',
	quantity = 1,
}: {
	imageSrc: string;
	alt: string;
	title: string;
	price: number;
	description: string;
	quantity: number;
}) => {
	const toFixed = (n: number, fixed: number) =>
		`${n}`.match(new RegExp(`^-?\\d+(?:\.\\d{0,${fixed}})?`))?.[0];

	return (
		<>
			{/* ITEM */}
			<div className='flex gap-4'>
				<Image
					src={imageSrc}
					alt={alt}
					width={72}
					height={96}
					className='object-cover rounded-md'
				/>
				<div className='flex flex-col justify-between w-full'>
					{/* TOP */}
					<div className=''>
						{/* TITLE */}
						<div className='flex items-center justify-between gap-8'>
							<h3 className='font-semibold'>{title}</h3>
							<div className='p-1 bg-gray-50 rounded-sm'>
								${toFixed(price, 2)}
							</div>
						</div>
						{/* DESCRIPTION */}
						<div className='text-sm text-gray-500'>
							{description}
						</div>
					</div>
					{/* BOTTOM */}
					<div className='flex justify-between text-sm'>
						<span className='text-gray-500'>Qty. {quantity}</span>
						<button className='text-blue-500'>Remove</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartItem;
