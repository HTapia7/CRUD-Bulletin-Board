import Link from "next/link";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href="/admin">Admin</Link>
      </button>
    </div>
  );
};

export default Home;
