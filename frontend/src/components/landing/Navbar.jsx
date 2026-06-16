export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-[#0B0B0B]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-semibold tracking-wider">
          FORGE
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-zinc-400">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
        </div>

        <button className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium transition hover:bg-amber-500">
          Get Started
        </button>
      </div>
    </nav>
  );
}