'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

/**
 * A responsive menu component.
 *
 * On mobile devices, the menu is hidden by default and a menu icon is displayed.
 * When the menu icon is clicked, the menu appears from the top of the screen.
 * On bigger screens, the menu is displayed as a horizontal list of links.
 *
 * @returns A JSX element representing the menu.
 */
const Menu = () => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<MdMenu
				size={28}
				className='cursor-pointer'
				onClick={() => setOpen((prev) => !prev)}
			/>
			{open && (
				<div
					className='absolute text-background bg-foreground left-0 top-20
                    w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center
                    gap-8 text-xl z-10'>
					<Link href=''>Home Page</Link>
					<Link href=''>Shop</Link>
					<Link href=''>Deals</Link>
					<Link href=''>About</Link>
					<Link href=''>Contact</Link>
					<Link href=''>Logout</Link>
					<Link href=''>Cart(1)</Link>
				</div>
			)}
		</div>
	);
};

export default Menu;
