import Nav from "../components/Nav";
import ScenarioCard from "../components/ScenarioCard";
import { scenarios } from "../data/scenarios.json";

export default function Scenarios() {
  return (
    <div className="min-h-screen bg-white">
      <Nav type="default" languageKey="zh"/>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(scenarios.length)].map((_, i) => (
            <ScenarioCard key={i + 1} number={i + 1} />
          ))}
        </div>
      </main>
    </div>
  );
}
