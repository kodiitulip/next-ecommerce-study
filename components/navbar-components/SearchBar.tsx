'use client';

import { useRouter } from 'next/navigation';
import { MdSearch } from 'react-icons/md';

/**
 * A search bar component.
 *
 * It renders a form with an input and a button containing a search icon.
 * When the form is submitted, it navigates to the list page with a search query
 * parameter.
 *
 * @returns A JSX element representing the search bar.
 */
const SearchBar = () => {
	const router = useRouter();

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const search = formData.get('search') as string;

		if (search) {
			router.push(`/list?search=${search}`);
		}
	};

	return (
		<form
			className='flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1'
			onSubmit={handleSearch}>
			<input
				type='search'
				name='search'
				placeholder='Search'
				className='flex-1 bg-transparent outline-none'
			/>
			<button className='cursor-pointer'>
				<MdSearch size={16} />
			</button>
		</form>
	);
};

export default SearchBar;
