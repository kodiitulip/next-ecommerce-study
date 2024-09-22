'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdNotifications, MdPerson, MdShoppingCart } from 'react-icons/md';
import { CartModal } from '@/components/navbar-components';

/**
 * A component that displays navigation icons in the navbar.
 *
 * It renders three icons: a person icon that toggles a dropdown when clicked,
 * a notifications icon, and a shopping cart icon that toggles a modal when clicked.
 * The dropdown displayed by the person icon contains links to the profile page
 * and a logout link. The modal displayed by the shopping cart icon displays the
 * contents of the cart.
 *
 * @returns A JSX element representing the navigation icons.
 */
const NavIcons = () => {
	const router = useRouter();

	const [isProfileOpen, setIsProfileOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);
	// const [isProfileOpen, setIsProfileOpen] = useState(false);

	const isLoggedIn = false;

	const handleProfile = () => {
		if (!isLoggedIn) {
			router.push('/auth');
			return;
		}

		setIsProfileOpen((prev) => !prev);
	};

	return (
		<div className='flex items-center gap-4 xl:gap-6 relative'>
			<button
				className='cursor-pointer'
				onClick={handleProfile}>
				<MdPerson size={22} />
			</button>
			{isProfileOpen && (
				<div className='absolute p-4 rounded-md top-12 left-0 text-sm shadow-popup z-10'>
					<Link href='/'>Profile</Link>
					<div className='mt-2 cursor-pointer'>Logout</div>
				</div>
			)}
			<MdNotifications
				size={22}
				className='cursor-pointer'
			/>
			<button
				className='relative cursor-pointer'
				onClick={() => setIsCartOpen((prev) => !prev)}>
				<MdShoppingCart size={22} />
				<div
					className='absolute -top-4 -right-4 w-6 h-6 bg-red-500 text-white
                	flex items-center justify-center text-sm rounded-full'>
					2
				</div>
			</button>
			{isCartOpen && <CartModal />}
		</div>
	);
};

export default NavIcons;
