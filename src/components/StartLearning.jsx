import { Link, useLoaderData } from "react-router-dom";

const StartLearning = () => {
    const data = useLoaderData();
    const lessons = data.lessons;

    return (
        <div className="w-11/12 mx-auto py-10">

            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-indigo-700">
                Start Learning German
            </h2>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                {lessons.map(item => (
                    <Link to={`/explore/${item.id}`} key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100">
                        <div className="relative overflow-hidden rounded-t-xl">
                            <img src={item.image} className="w-full h-56 object-cover rounded-t-xl transform hover:scale-105 transition duration-500"
                            />
                            <p className="absolute bottom-3 left-3 bg-black/40 text-white px-3 py-1 text-sm rounded-md backdrop-blur-sm">
                                Lesson {item.id}
                            </p>
                        </div>

                        <div className="p-4">
                            <p className="text-lg font-semibold text-gray-800">
                                Learn German With Us
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                                Explore this chapter and build your vocabulary step by step.
                            </p>
                        </div>
                    </Link>
                ))}
                
            </section>
        </div>
    );
};

export default StartLearning;
