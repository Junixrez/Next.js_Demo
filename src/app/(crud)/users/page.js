import { GET } from "@/app/api/user/route";
import Profile from "@/Components/profile";
import Link from "next/link";

export default async function UsersPage() {
  const res = await GET();
  const users = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Users
          </h1>
          <Link
            href="/add-user"
            className="w-full sm:w-auto text-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200 font-semibold"
          >
            Add New User
          </Link>
        </div>

        {users.length === 0 ? (
          <div className="text-center text-gray-600 bg-white p-8 rounded-lg shadow">
            No users to show. Click "Add New User" to create one.
          </div>
        ) : (
          <div className="space-y-4">
            {users.map((user) => (
              <Profile key={user._id || user.email} props={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
