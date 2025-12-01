import { useContext, useEffect } from "react";
import { authContext } from "../provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Profile = () => {
    const { myUser, loading } = useContext(authContext);

    useEffect(() => {
        if (myUser) {
            toast.success(`Welcome, ${myUser.displayName}` )
        }
    }, [myUser]);

    // if (loading) {
    //     return <p className="text-center text-lg">Loading...</p>;
    // }

    return (
        <section className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
            <Toaster />
            
            <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center">
                
                <img 
                    src={myUser?.photoURL}
                    alt="User"
                    className="sm:w-32 sm:h-32 w-20 h-20 rounded-full mx-auto overflow-hidden hover:shadow-xl duration-200 transition-all hover:scale-105 shadow-lg object-cover"
                />

                <h2 className="text-2xl font-bold text-gray-700 mt-4">
                    {myUser.displayName || "No Name Set"}
                </h2>

                <p className="text-gray-600 mt-2">
                    {myUser.email}
                </p>

            <Link to='/' className="bg-blue-500 w-full block shadow-md hover:shadow-lg transition-all hover:bg-blue-600 text-white rounded-md py-1 my-2 font-medium hover:scale-[1.02] cursor-pointer">Home</Link>
            </div>
        </section>
    );
};

export default Profile;
