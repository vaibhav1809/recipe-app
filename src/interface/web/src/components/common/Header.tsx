export default function Header() {
	return (
		<div className="bg-primary p-3">
			<div className="d-flex justify-content-between align-items-center mb-3">
				<h1 className="text-white h4">Recipe</h1>
				<div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
					VS
				</div>
			</div>
			<div className="d-flex gap-4">
				<div className="text-white cursor-pointer pb-2 border-bottom border-3 border-white">
					Explore
				</div>
				<div className="text-white cursor-pointer pb-2">
					House Parties
				</div>
			</div>
		</div>
	);
}
