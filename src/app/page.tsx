import GoogleMapSection from "@/components/Home/GoogleMapSection";
import SearchSection from "@/components/Home/SearchSection";

export default function Home() {
	return (
		<>
			<div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
				<div className="">
					<SearchSection />
				</div>
				<div className="cols-span-2">
					<GoogleMapSection />
				</div>
			</div>
		</>
	);
}
