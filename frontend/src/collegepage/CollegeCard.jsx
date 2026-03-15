import { Link } from "react-router-dom";

function CollegeCard({ college }) {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
  return (
    <Link to={`/college/${college.id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform p-4 cursor-pointer">
        <img
          src={`${BASEURL}${college.image}`}
          alt={college.name}
          className="w-full h-56 object-cover rounded-lg mb-4"
        />
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {college.name}
        </h2>
        <p className="text-gray-600 font-medium">₹{college.fees.toLocaleString()}</p>
      </div>
    </Link>
  );
}

export default CollegeCard;
