import { useState } from "react";
import { FaTrash, FaUserShield } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import DeleteUserModal from "../Modal/DeleteUserModal";
import UpdateUserModal from "../Modal/UpdateUserModal";
import useAuth from "../../../hooks/useAuth";

const UserDataRows = ({ user, refetch }) => {
    const { user: loggedUser } = useAuth();
    const [isOpen, setIsOpen] = useState(false); // Update Modal
    const [isDeleteOpen, setIsDeleteOpen] = useState(false); // Delete Modal

    // 🧩 Update user role mutation
    const { mutateAsync: updateUser } = useMutation({
        mutationFn: async (updatedUser) => {
            const { data } = await axios.patch(
                `http://localhost:8000/users/update/${user?.email}`,
                updatedUser
            );
            return data;
        },
        onSuccess: () => {
            toast.success("✅ User role updated successfully!");
            refetch();
            setIsOpen(false);
        },
        onError: () => toast.error("❌ Failed to update user role"),
    });

    // 🧩 Delete user mutation
    const { mutateAsync: deleteUser } = useMutation({
        mutationFn: async () => {
            const { data } = await axios.delete(
                `http://localhost:8000/users/${user?.email}`
            );
            return data;
        },
        onSuccess: () => {
            toast.success("🗑️ User deleted successfully!");
            refetch();
            setIsDeleteOpen(false);
        },
        onError: () => toast.error("❌ Failed to delete user"),
    });

    // 🧠 Role Update Handler
    const modalHandler = async (selectedRole) => {
        try {
            // 🚫 Prevent admin from editing their own role
            if (loggedUser?.email === user?.email) {
                toast.error("🚫 You cannot change your own role!");
                setIsOpen(false);
                return;
            }

            // 🚫 Block update if already verified
            // if (user?.status === "Verified") {
            //     toast.error("User is already verified. No role update needed.");
            //     setIsOpen(false);
            //     return;
            // }

            // ✅ Proceed only for non-verified users
            await updateUser({ role: selectedRole, status: "Verified" });
        } catch (error) {
            console.error("Role update failed:", error);
            toast.error("Something went wrong while updating the role.");
        }
    };

    // 🧠 Delete Handler (Admin cannot delete self)
    const handleDelete = async () => {
        if (loggedUser?.email === user?.email) {
            toast.error("🚫 You cannot delete your own account!");
            setIsDeleteOpen(false);
            return;
        }

        await deleteUser();
    };

    if (!user) return null;

    // Disable buttons for logged-in admin row
    const isSelf = loggedUser?.email === user?.email;

    return (
        <tbody>
            <tr className="hover:bg-gray-50 transition-colors duration-150">
                {/* Email */}
                <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm align-middle">
                    {user.email}
                </td>

                {/* Role */}
                <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm align-middle capitalize">
                    {user.role || "user"}
                </td>

                {/* Status */}
                <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm align-middle">
                    <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${user.status === "Verified"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-600"
                            }`}
                    >
                        {user.status || "inactive"}
                    </span>
                </td>

                {/* Actions */}
                <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm align-middle">
                    <div className="flex items-center justify-start gap-4">
                        {/* Delete Button */}
                        <button
                            className={`transition ${isSelf
                                    ? "text-gray-400 cursor-not-allowed"
                                    : "text-red-500 hover:text-red-700"
                                }`}
                            title={
                                isSelf
                                    ? "You cannot delete your own account"
                                    : "Delete User"
                            }
                            onClick={() => !isSelf && setIsDeleteOpen(true)}
                            disabled={isSelf}
                        >
                            <FaTrash />
                        </button>

                        {/* Update Role Button */}
                        <button
                            className={`transition ${isSelf
                                    ? "text-gray-400 cursor-not-allowed"
                                    : "text-blue-500 hover:text-blue-700"
                                }`}
                            title={isSelf ? "You cannot change your own role" : "Update Role"}
                            onClick={() => !isSelf && setIsOpen(true)}
                            disabled={isSelf}
                        >
                            <FaUserShield />
                        </button>
                    </div>

                    {/* Update Role Modal */}
                    <UpdateUserModal
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        modalHandler={modalHandler}
                        user={user}
                    />

                    {/* Delete Confirmation Modal */}
                    <DeleteUserModal
                        isOpen={isDeleteOpen}
                        setIsOpen={setIsDeleteOpen}
                        onConfirm={handleDelete}
                        message={`Are you sure you want to delete ${user.email}?`}
                    />
                </td>
            </tr>
        </tbody>
    );
};

export default UserDataRows;
