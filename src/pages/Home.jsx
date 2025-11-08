import { Link } from "react-router-dom";

export default function Home() {
  const token = localStorage.getItem("token");

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div
        className="h-[70vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <h1 className="text-5xl font-extrabold text-white drop-shadow-xl">
          Design Faster. Launch Smarter.
        </h1>

        <p className="text-white mt-4 text-lg max-w-2xl drop-shadow-md">
          Create, save and reuse UI templates to speed up your development workflow.
        </p>

        {token ? (
          <Link
            to="/create"
            className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg text-lg shadow hover:bg-blue-700 transition"
          >
            + Start Creating
          </Link>
        ) : (
          <Link
            to="/login"
            className="mt-8 px-8 py-3 bg-green-600 text-white rounded-lg text-lg shadow hover:bg-green-700 transition"
          >
            Login to Get Started
          </Link>
        )}
      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            alt="Fast"
            className="w-16 mx-auto mb-4 opacity-80"
          />
          <h3 className="text-xl font-semibold text-gray-800">Create Quickly</h3>
          <p className="text-gray-600 mt-2">
            Build ready-to-use templates in minutes.
          </p>
        </div>

        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            alt="Save"
            className="w-16 mx-auto mb-4 opacity-80"
          />
          <h3 className="text-xl font-semibold text-gray-800">Save & Reuse</h3>
          <p className="text-gray-600 mt-2">
            Store templates and reuse them across projects.
          </p>
        </div>

        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1829/1829232.png"
            alt="Share"
            className="w-16 mx-auto mb-4 opacity-80"
          />
          <h3 className="text-xl font-semibold text-gray-800">Share with Team</h3>
          <p className="text-gray-600 mt-2">
            Collaborate and share templates easily.
          </p>
        </div>

      </div>
    </div>
  );
}
