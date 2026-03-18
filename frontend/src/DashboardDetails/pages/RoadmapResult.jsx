export default function RoadmapResult({ roadmapData }) {

  return (
    <div className="space-y-3">

      {roadmapData.map((step, index) => (

        <div
          key={index}
          className="bg-black p-3 border border-gray-700 rounded"
        >
          {index + 1}. {step}
        </div>

      ))}

    </div>
  );
}

