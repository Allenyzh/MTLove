import Nav from "./components/Nav";
import ScenarioCard from "./components/ScenarioCard";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ScenarioCard number={1} />
          <ScenarioCard number={2} />
          <ScenarioCard number={3} />
          <ScenarioCard number={4} />
          <ScenarioCard number={5} />
          <ScenarioCard number={6} />
          <ScenarioCard number={7} />
        </div>
      </main>
    </div>
  );
}
