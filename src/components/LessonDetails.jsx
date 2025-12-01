import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const LessonDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const lessons = data.filter(item => item.lesson_no === Number(id));

    const [currentIndex, setCurrentIndex] = useState(0);
    const current = lessons[currentIndex];

    const handleNext = () => {
        let nextIndex = currentIndex + 1;
        if (nextIndex < lessons.length) {
            setCurrentIndex(nextIndex);
        } else {
            setCurrentIndex(0);
        }
    };    

    if (lessons.length === 0) {
        return <h1>No lesson data found for lesson {id}</h1>;
    }

    return (
      <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-purple-100 flex items-center justify-center xl:py-10 py-6 px-4">
        <section className="bg-white xl:shadow-xl shadow rounded-md sm:rounded-lg lg:max-w-3xl p-4 xl:p-8 w-full sm:max-w-xl xl:max-w-6xl border border-gray-200">

          <h1 className="xl:text-3xl text-xl font-bold text-indigo-700 text-center mb-4 xl:mb-6">
            Lesson {id}
          </h1>

          <div className="xl:space-y-4 space-y-2 text-lg">
            <p>
              <span className="font-medium text-indigo-600">Id :</span>{" "}
              <span className="text-gray-800 ">{current.id}</span>
            </p>
            <p>
              <span className="font-medium tracking-wide text-indigo-600">Word :</span>{" "}
              <span className="text-gray-800 tracking-wide font-medium">{current.word}</span>
            </p>

            <p>
              <span className="font-medium text-indigo-600">Meaning: </span>
              <span className="text-gray-800 tracking-wide">{current.meaning}</span>
            </p>

            <p>
              <span className="font-medium text-indigo-600">Pronunciation: </span>
              <span className="text-gray-800 italic tracking-wide">{current.pronunciation}</span>
            </p>
          </div>

          {current.video && (
            <div className="mt-6">
              <iframe
                src={current.video}
                className="w-full h-44 xl:h-72 rounded-lg"
                allowFullScreen
                title={current.word}
              ></iframe>
            </div>
          )}

          <button
            onClick={handleNext}
            className="mt-4 xl:mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-1 xl:py-3 text-base rounded  shadow-md transition-all"
          >
            Next Word
          </button>

          <Link to='/' className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-1 px-4 inline-block mt-4 rounded shadow-md transition-all">
            Home
          </Link>

        </section>
      </div>
    );
};

export default LessonDetails;
