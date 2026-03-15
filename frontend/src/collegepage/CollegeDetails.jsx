import { useParams, Link } from "react-router-dom"; // Link use karein href ki jagah
import { useEffect, useState } from "react";

function CollegeDetails() {
  const { id } = useParams(); // URL se ID nikalne ke liye (e.g., /college/1)
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL || "http://127.0.0.1:8000";
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return; // Agar ID nahi hai toh fetch na karein

    setLoading(true);
    // Note: URL wahi rakhein jo aapne Django urls.py mein banaya hai
    fetch(`${BASEURL}/api/colleges/${id}/`) 
      .then((response) => {
        if (!response.ok) {
          throw new Error("College ki details nahi mil payi!");
        }
        return response.json();
      })
      .then((data) => {
        setCollege(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id, BASEURL]);

  if (loading) return <div className="min-h-screen flex justify-center items-center">Loading details...</div>;
  if (error) return <div className="min-h-screen flex justify-center items-center text-red-500">Error: {error}</div>;
  if (!college) return <div className="min-h-screen flex justify-center items-center">College not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-10 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
        <div className="flex flex-col md:flex-row">
          {/* College Image Section */}
          <div className="md:w-1/2 relative">
            <img
              src={college.image_url || college.image} // Django field name ke hisaab se
              alt={college.name}
              className="w-full h-full object-cover min-h-[400px]"
            />
            <div className="absolute top-4 left-4 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
               ⭐ {college.rating || "4.5"}
            </div>
          </div>

          {/* Details Section */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-medium mb-6 flex items-center gap-2 transition">
              &larr; Back to Dashboard
            </Link>
            
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
              {college.name}
            </h1>
            
            <div className="flex items-center gap-2 text-gray-500 mb-6 font-medium">
              <span>📍</span> {college.location}
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-8">
               <p className="text-gray-700 leading-relaxed italic">
                 "{college.description}"
               </p>
            </div>

            <div className="flex items-end justify-between gap-4 mt-auto">
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Annual Fees</p>
                <p className="text-3xl font-black text-indigo-600">
                  ₹{college.fees?.toLocaleString()}
                </p>
              </div>
              
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition shadow-xl shadow-indigo-100 active:scale-95">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollegeDetails;