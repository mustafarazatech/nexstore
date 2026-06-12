import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-extrabold text-slate-200">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold text-slate-900">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-slate-500">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Back to Home
        </Link>

        <Link
          to="/products"
          className="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Browse Products
        </Link>
      </div>

      <div className="mt-12 text-6xl">
        🛒
      </div>
    </section>
  );
};

export default NotFound;