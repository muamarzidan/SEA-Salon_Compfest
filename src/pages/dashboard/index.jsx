export default function Dashboard() {
    const users = [
        { namauser: 'John Doe', phonenumber: '081234567890', email: 'john.doe@example.com' },
        { namauser: 'Jane Smith', phonenumber: '081234567891', email: 'jane.smith@example.com' },
        { namauser: 'Alice Johnson', phonenumber: '081234567892', email: 'alice.johnson@example.com' },
    ];
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="container px-4 mx-auto">
                <div className="my-6 overflow-x-auto bg-white rounded shadow-md">
                    <table className="min-w-full bg-white">
                        <thead className="text-white bg-gray-800">
                            <tr>
                                <th className="w-1/3 px-4 py-3 text-sm font-semibold uppercase">Nama User</th>
                                <th className="w-1/3 px-4 py-3 text-sm font-semibold uppercase">Phone Number</th>
                                <th className="w-1/3 px-4 py-3 text-sm font-semibold uppercase">Email</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td className="w-1/3 px-4 py-3">{user.namauser}</td>
                                    <td className="w-1/3 px-4 py-3">{user.phonenumber}</td>
                                    <td className="w-1/3 px-4 py-3">{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}