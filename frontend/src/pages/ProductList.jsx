import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;

  useEffect(() => {
    fetch(`${BASEURL}/api/products/`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch products");
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-white pt-28 pb-24 overflow-hidden">

      {/* 🌐 Grid background */}
      <div className="absolute inset-0 
        bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
        bg-[size:40px_40px]" />

      {/* 💚 Glow blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-lime-400/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1 rounded-full border border-lime-400 text-lime-400 text-sm">
            Learn & Grow
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-lime-400">Courses</span>
          </h1>

          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Career-focused courses designed to guide students with clarity,
            structure, and real-world relevance.
          </p>
        </div>

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-80 rounded-3xl bg-white/5 animate-pulse
                           border border-white/10 backdrop-blur-xl"
              />
            ))}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="max-w-xl mx-auto text-center text-red-400
                          bg-red-400/10 border border-red-400/30
                          rounded-2xl py-6">
            ❌ {error}
          </div>
        )}

        {/* Product Grid */}
        {!loading && !error && (
          <>
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="hover:scale-[1.03] transition duration-300
                               hover:shadow-[0_0_40px_rgba(163,230,53,0.15)]"
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-white/50 py-24">
                No courses available right now.
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default ProductList;
