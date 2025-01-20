import {
	House,
	Search,
	Library,
	ChevronLeft,
	ChevronRight,
	Play,
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

					<div className="grid grid-cols-3 gap-4 mt-8">
						<a className="flex items-center gap-4 bg-white/10 rounded hover:bg-white/20 group">
							<img
								src="/judas_album_7mz.png"
								width={104}
								height={104}
								alt="caveira branca"
							/>
							<strong>Pancadao</strong>
							<button className="w-12 h-12 flex items-center justify-center invisible group-hover:visible p-2 rounded-full bg-green-500 text-black ml-auto mr-8">
								<Play />
							</button>
						</a>
						<a className="flex items-center gap-4 bg-white/10 rounded hover:bg-white/20 group">
							<img
								src="/judas_album_7mz.png"
								width={104}
								height={104}
								alt="caveira branca"
							/>
							<strong>Pancadao</strong>
							<button className="w-12 h-12 flex items-center justify-center invisible group-hover:visible p-2 rounded-full bg-green-500 text-black ml-auto mr-8">
								<Play />
							</button>
						</a>
						<a className="flex items-center gap-4 bg-white/10 rounded hover:bg-white/20 group">
							<img
								src="/judas_album_7mz.png"
								width={104}
								height={104}
								alt="caveira branca"
							/>
							<strong>Pancadao</strong>
							<button className="w-12 h-12 flex items-center justify-center invisible group-hover:visible p-2 rounded-full bg-green-500 text-black ml-auto mr-8">
								<Play />
							</button>
						</a>
						<a className="flex items-center gap-4 bg-white/10 rounded hover:bg-white/20 group">
							<img
								src="/judas_album_7mz.png"
								width={104}
								height={104}
								alt="caveira branca"
							/>
							<strong>Pancadao</strong>
							<button className="w-12 h-12 flex items-center justify-center invisible group-hover:visible p-2 rounded-full bg-green-500 text-black ml-auto mr-8">
								<Play />
							</button>
						</a>
						<a className="flex items-center gap-4 bg-white/10 rounded hover:bg-white/20 group">
							<img
								src="/judas_album_7mz.png"
								width={104}
								height={104}
								alt="caveira branca"
							/>
							<strong>Pancadao</strong>
							<button className="w-12 h-12 flex items-center justify-center invisible group-hover:visible p-2 rounded-full bg-green-500 text-black ml-auto mr-8">
								<Play />
							</button>
						</a>
						<a className="flex items-center gap-4 bg-white/10 rounded hover:bg-white/20 group">
							<img
								src="/judas_album_7mz.png"
								width={104}
								height={104}
								alt="caveira branca"
							/>
							<strong>Pancadao</strong>
							<button className="w-12 h-12 flex items-center justify-center invisible group-hover:visible p-2 rounded-full bg-green-500 text-black ml-auto mr-8">
								<Play />
							</button>
						</a>
					</div>
					<h2 className="font-semi-bold text-2xl mt-10">
						Made for Abiner Costa
					</h2>

					<div className="grid grid-cols-8 gap-4 mt-4">
						<a
							href=""
							className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10"
						>
							<img
								src="/judas_album_7mz.png"
								width={104}
								height={104}
								alt="caveira branca"
							/>
							<strong className="font-semibold">Daily Mix 1</strong>
							<span className="text-xs text-zinc-500"> Mix de musicas 7Mz</span>
						</a>
						<a
							href=""
							className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10"
						>
							<img
								src="/judas_album_7mz.png"
								width={104}
								height={104}
								alt="caveira branca"
							/>
							<strong className="font-semibold">Daily Mix 1</strong>
							<span className="text-xs text-zinc-500"> Mix de musicas 7Mz</span>
						</a>
						<a
							href=""
							className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10"
						>
							<img
								src="/judas_album_7mz.png"
								width={104}
								height={104}
								alt="caveira branca"
							/>
							<strong className="font-semibold">Daily Mix 1</strong>
							<span className="text-xs text-zinc-500"> Mix de musicas 7Mz</span>
						</a>
						<a
							href=""
							className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10"
						>
							<img
								src="/judas_album_7mz.png"
								width={104}
								height={104}
								alt="caveira branca"
							/>
							<strong className="font-semibold">Daily Mix 1</strong>
							<span className="text-xs text-zinc-500"> Mix de musicas 7Mz</span>
						</a>
						<a
							href=""
							className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10"
						>
							<img
								src="/judas_album_7mz.png"
								width={104}
								height={104}
								alt="caveira branca"
							/>
							<strong className="font-semibold">Daily Mix 1</strong>
							<span className="text-xs text-zinc-500"> Mix de musicas 7Mz</span>
						</a>
					</div>
				</main>
			</div>
			<footer className="bg-zinc-800 border-t border-zinc-700 p-6">
				footer
			</footer>
		</div>
	);
}
