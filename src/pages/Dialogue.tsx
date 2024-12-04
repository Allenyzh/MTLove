import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";

interface Message {
  id: number;
  content: string;
  score?: number;
  user: {
    avatar: string;
  };
}

export default function Dialogue() {
  const navigate = useNavigate();
  const { scenarioName } = useParams();

  const [messages] = useState<Message[]>([
    {
      id: 1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      user: { avatar: "user1" },
    },
    {
      id: 2,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      score: -5,
      user: { avatar: "user2" },
    },
    {
      id: 3,
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      user: { avatar: "user3" },
    },
    {
      id: 4,
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      score: 5,
      user: { avatar: "user4" },
    },
  ]);

  return (
    <>
      <div className="h-screen flex flex-col bg-white text-gray-800">
        <Nav type="dialogue" name={scenarioName} languageKey="zh" />

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <aside className="w-80 border-r p-6 flex flex-col gap-6">
            <h2 className="text-xl italic">{scenarioName}</h2>
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <div className="text-gray-400">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-2">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="h-2 bg-gray-200 rounded w-full"
                  style={{ width: `${Math.random() * 40 + 60}%` }}
                ></div>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-3xl mx-auto space-y-8">
              {messages.map((message) => (
                <div key={message.id} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-sm">U</span>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="space-y-1">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div
                          key={i}
                          className="h-2 bg-gray-200 rounded"
                          style={{ width: `${Math.random() * 40 + 60}%` }}
                        ></div>
                      ))}
                    </div>
                    {message.score !== undefined && (
                      <div className="flex items-center gap-2 text-sm">
                        {message.score > 0 ? (
                          <span className="text-green-500">
                            +{message.score}
                          </span>
                        ) : (
                          <span className="text-red-500">{message.score}</span>
                        )}
                        <span className="text-gray-400">
                          {message.score > 0 ? "😊" : "😞"}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-sm">U</span>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>

        {/* Input Area */}
        <div className="border-t p-4">
          <div className="max-w-3xl mx-auto flex gap-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <button className="p-2 rounded-md hover:bg-gray-100">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>

        <button
          className="max-w-32 bg-gray-700 text-white text-center rounded px-6 py-2 my-5 hover:bg-gray-600 transition-colors"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
    </>
  );
}
