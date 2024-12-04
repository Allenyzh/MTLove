import clsx from "clsx";
import language from "../data/language.json";

// interface NavBarTranslations {
//   rank: string;
//   rank_zh: string;
//   create: string;
//   create_zh: string;
//   username: string;
//   username_zh: string;
// }

interface NavProp {
  type: string;
  name?: string;
  languageKey: "en" | "zh";
}

export default function Nav({ type, name, languageKey }: NavProp) {
  const navContent = language.nav_bar;

  let displayUserContent = (
    <span className="text-gray-600 hidden sm:inline">
      {navContent[`username_${languageKey}`]}
    </span>
  );

  if (type === "dialogue") {
    displayUserContent = (
      <div className="flex flex-col">
        <span className="text-gray-600 hidden sm:inline">
          {navContent[`status_bar_${languageKey}`]}
        </span>
        <div className="w-full bg-gray-200 rounded-lg h-4">
          <div className="bg-blue-500 h-4 rounded-lg"></div>
        </div>
      </div>
    );
  }
  return (
    <>
      <header className="border-b border-gray-200 bg-white/30 backdrop-blur-sm sticky top-0">
        <div className="max-w-full mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">MTLove</h1>
          <div className="text-2xl font-bold">{name}</div>
          <div className="flex items-center gap-4">
            <button
              className={clsx(
                "bg-gray-700 text-white rounded px-6 py-2 hover:bg-gray-600 transition-colors",
                { hidden: type === "dialogue" }
              )}
            >
              {navContent[`rank_${languageKey}`]}
            </button>
            <button
              className={clsx(
                "bg-gray-700 text-white rounded px-6 py-2 hover:bg-gray-600 transition-colors",
                {
                  hidden: type === "dialogue",
                }
              )}
            >
              {navContent[`create_${languageKey}`]}
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
              {displayUserContent}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
