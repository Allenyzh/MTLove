export default function Nav() {
  return (
    <>
      <header className="border-b border-gray-200 bg-white/30 backdrop-blur-sm sticky top-0">
        <div className="max-w-full mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">MTLove</h1>
          <div className="flex items-center gap-4">
            <button className="bg-gray-700 text-white rounded px-6 py-2 hover:bg-gray-600 transition-colors">
              Rank
            </button>
            <button className="bg-gray-700 text-white rounded px-6 py-2 hover:bg-gray-600 transition-colors">
              Create
            </button>
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-gray-600 hidden sm:inline">username</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
