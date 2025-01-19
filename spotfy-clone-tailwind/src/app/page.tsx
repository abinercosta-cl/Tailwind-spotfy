import {
	House,
	Search,
	Library,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";

export default function Home() {
	return (
		<div className="h-screen flex flex-col">
			<div className="flex flex-1">
				<aside className="w-72 bg-zinc-950 p-6">
					<div className="flex items-center gap-2">
						<div className="w-3 h-3 bg-red-600 rounded-full"></div>
						<div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
						<div className="w-3 h-3 bg-green-600 rounded-full"></div>
					</div>
					<nav className="space-y-4 mt-10">
						<a
							href=""
							className="flex items-center gap-2 text-xs text-zinc-200"
						>
							<House />
							Home
						</a>
						<a
							href=""
							className="flex items-center gap-2 text-xs text-zinc-200"
						>
							<Search />
							Search
						</a>
						<a
							href=""
							className="flex items-center gap-2 text-xs text-zinc-200"
						>
							<Library />
							Your Library
						</a>
					</nav>
					<nav className="mt-6 pt-6 border-t border-zinc-700 flex flex-col gap-2">
						<a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
							Top Hits Brazil
						</a>
						<a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
							Treinaooo Massa
						</a>
						<a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
							Pagodeira
						</a>
						<a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
							Sertanejo Pesadoo
						</a>
					</nav>
				</aside>
				<main className="flex-1 p-6">
					<div className="flex items-center gap-3">
						<button className="rounded-full bg-black/40 p-1">
							<ChevronLeft />
						</button>
						<button className="rounded-full bg-black/40 p-1">
							<ChevronRight />
						</button>
					</div>
					<h1 className="font-semi-bold text-3xl mt-10">Good Afternoon</h1>

					<div className="grid grid-cols-3 gap-4">
						<div className="bg-white/10 rounded">
							<img
								src="/judas_album_7mz.png"
								width={80}
								height={80}
								alt="caveira branca"
							/>
						</div>
						<div className="bg-white/10 rounded">
							<img
								src="/judas_album_7mz.png"
								width={80}
								height={80}
								alt="caveira branca"
							/>
						</div>
						<div className="bg-white/10 rounded">
							<img
								src="/judas_album_7mz.png"
								width={80}
								height={80}
								alt="caveira branca"
							/>
						</div>
						<div className="bg-white/10 rounded">
							<img
								src="/judas_album_7mz.png"
								width={80}
								height={80}
								alt="caveira branca"
							/>
						</div>
						<div className="bg-white/10 rounded">
							<img
								src="/judas_album_7mz.png"
								width={80}
								height={80}
								alt="caveira branca"
							/>
						</div>
						<div className="bg-white/10 rounded">
							<img
								src="/judas_album_7mz.png"
								width={80}
								height={80}
								alt="caveira branca"
							/>
						</div>
					</div>
				</main>
			</div>
			<footer className="bg-zinc-800 border-t border-zinc-700 p-6">
				footer
			</footer>
		</div>
	);
}
