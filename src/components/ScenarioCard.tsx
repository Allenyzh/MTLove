import { useNavigate } from "react-router-dom";
import scenariosData from "../data/scenarios.json"; // 假设导入的是 JSON 数据

interface ScenarioProps {
  number: number; // 接收的场景编号
}

interface Scenario {
  name: string; // 场景名称
  img: string; // 场景图片路径
  description: string; // 场景描述
  total_win: number; // 胜利的总数
  total_lose: number; // 失败的总数
}

export default function ScenarioCard({ number }: ScenarioProps) {
  const navigate = useNavigate();

  // 解析 JSON 数据为 Scenario[] 类型
  const scenarios: Scenario[] = scenariosData.scenarios;

  // 获取当前的场景数据
  const currentScenario = scenarios[number - 1];

  if (!currentScenario) {
    return <div>Invalid Scenario</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        {currentScenario.name || `Scenario ${number - 1}`}
      </h2>
      {/* <div className="bg-gray-100 aspect-video mb-6 flex items-center justify-center">
        <div className="w-16 h-16 bg-gray-300 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div> */}
      <div className="space-y-2 mb-6 min-h-20 sm:h-96 text-center break-words">
        {/* {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="h-4 bg-gray-300 rounded w-full"
            style={{ width: `${Math.random() * 40 + 60}%` }}
          />
        ))} */}
        {currentScenario.description}
      </div>
      <div className="space-y-4">
        <button
          className="w-full bg-gray-700 text-white rounded py-2 px-4 hover:bg-gray-600 transition-colors"
          onClick={() => navigate(`/dialogue/${currentScenario.name}`)}
        >
          Get Started
        </button>
        <button className="w-full bg-gray-200 text-gray-700 rounded py-2 px-4 hover:bg-gray-300 transition-colors">
          Others' History
        </button>
        <div className="text-gray-600">
          <p>Win: {currentScenario.total_win}</p>
          <p>Lose: {currentScenario.total_lose}</p>
        </div>
      </div>
    </div>
  );
}
