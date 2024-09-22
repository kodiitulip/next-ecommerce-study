/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'picsum.photos',
			},
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'ui-avatars.com',
			},
			{
				protocol: 'https',
				hostname: 'logoipsum.com',
			},
		],
	},
};

export default nextConfig;
