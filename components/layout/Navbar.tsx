import Link from 'next/link';
import { Menu, NavIcons, SearchBar } from '@/components/navbar-components';
import Image from 'next/image';

/**
 * A responsive navbar component.
 *
 * On mobile devices, the navbar consists of just the LAMA logo and a menu icon.
 * On bigger screens, the navbar consists of the LAMA logo and navigation links
 * on the left, and a search bar and navigation icons on the right.
 */
const Navbar = () => {
	return (
		<div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
			{/* MOBILE */}
			<div className='h-full flex items-center justify-between md:hidden'>
				<Link
					href={'/'}
					className='text-2xl tracking-wide'>
					LAMA
				</Link>
				<Menu />
			</div>
			{/* BIGGER SCREENS */}
			<div
				className='hidden md:flex items-center justify-between gap-8
                h-full'>
				{/* LEFT */}
				<div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
					<Link
						href='/'
						className='text-2xl tracking-wide flex items-center gap-3'>
						<Image
							src={'https://img.logoipsum.com/295.svg'}
							width={24}
							height={24}
							alt='Logo'
						/>
						LAMA
					</Link>
					<div className='hidden xl:flex gap-4'>
						<Link href=''>Homepage</Link>
						<Link href=''>Shop</Link>
						<Link href=''>Deals</Link>
						<Link href=''>About</Link>
						<Link href=''>Contact</Link>
					</div>
				</div>
				{/* RIGHT */}
				<div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
					<SearchBar />
					<NavIcons />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
