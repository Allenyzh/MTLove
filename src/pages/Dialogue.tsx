import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Dialogue() {
  const navigate = useNavigate();
  const { scenarioName } = useParams();
  return (
    <>
      <Nav />
      <div className="max-w-4xl mx-auto py-8 flex flex-col place-items-center">
        <h1 className="text-3xl font-bold mb-4 p-4">
          Welcome to {scenarioName} Dialogue Page
        </h1>
        <p className="text-gray-600 mb-5">Coming Soon...</p>
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
