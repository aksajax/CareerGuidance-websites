import { useState } from "react";
import RoadmapForm from "./RoadmapForm";
import RoadmapResult from "./RoadmapResult";

function RoadmapSection() {

  const [roadmapData, setRoadmapData] = useState(null);

  return (
    <div className="bg-[#0f0f0f] p-6 rounded-xl border border-gray-800">

      <h2 className="text-xl font-semibold mb-4">
        Career Roadmap
      </h2>

      {!roadmapData ? (
        <RoadmapForm setRoadmapData={setRoadmapData} />
      ) : (
        <RoadmapResult roadmapData={roadmapData} />
      )}

    </div>
  );
}

export default RoadmapSection;