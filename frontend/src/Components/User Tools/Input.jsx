const Input = ({ icon: Icon, ...props }) => {
	return (
		<div className='relative mb-6'>
			<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
				<Icon className='size-5 text-[#C68EFD]' />
			</div>
			<input
				{...props}
				className='w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 
				focus:border-[#E9A5F1] focus:ring-2 focus:ring-[#E9A5F1] text-white 
				placeholder-gray-400 transition duration-200'
			/>
		</div>
	);
};
export default Input;