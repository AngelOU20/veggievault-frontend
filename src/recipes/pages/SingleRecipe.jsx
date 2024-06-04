import axios from 'axios';
import { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate, useParams } from 'react-router-dom';
import { Spinner } from '../../components';

const SingleRecipe = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [singleRecipe, setSingleRecipe] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSingleRecipe = async () => {
      setIsLoading(true);

      try {
        const resp = await axios.get(`http://localhost:3000/api/recipes/${id}`);
        const data = resp.data;
        setSingleRecipe(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message || 'Error loading recipe');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSingleRecipe();
  }, [id]);

  if (isLoading) {
    return <Spinner />;
  }

  const onNavigateBack = () => {
    navigate(-1);
  };

  return (
    <section className="overflow-hidden px-6 lg:px-12 py-20">
      {error && <div>{error}</div>}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden relative">
        <button
          onClick={onNavigateBack}
          className="absolute top-4 left-4 z-50 rounded-full bg-btnColor hover:bg-btnColor/85 shadow-lg p-3"
        >
          <BiArrowBack className="text-white h-5 w-5" />
        </button>

        <img
          src={singleRecipe.thumbnail_image}
          alt={singleRecipe.name}
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <h1 className="capitalize text-center text-3xl py-4 font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
            {singleRecipe.name}
          </h1>
          <div className="flex justify-around items-center gap-6 my-4">
            <p className="text-center text-gray-500 italic mb-6">
              Category: {singleRecipe.category}
            </p>
            <p className="capitalize text-center text-gray-500 italic mb-6">
              Difficulty: {singleRecipe?.more?.[0].difficulty}
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>

            <ul className="ml-4 list-disc list-inside space-y-1">
              {singleRecipe?.ingredients?.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.quantity} {ingredient.name}{' '}
                  {ingredient.optional && (
                    <span className="text-gray-500">(optional)</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
            {singleRecipe?.instructions
              ?.split(/(?=\d+\.\s)/)
              .map((instruction, index) => (
                <p key={index} className="ml-4 mb-2">
                  {instruction}
                </p>
              ))}
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Preparation Time:</h2>
            <p className="ml-4">
              Preparation: {singleRecipe?.more?.[0].prep_time}
            </p>
            <p className="ml-4">Total: {singleRecipe?.more?.[0].cook_time}</p>
            <p className="ml-4">Servings: {singleRecipe?.more?.[0].servings}</p>
            {/* <p className="ml-4">Difficulty: {singleRecipe?.more?.[0].difficulty}</p> */}
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Source:</h2>
            <p className="ml-4">
              <a
                href={`https://${singleRecipe?.more?.[0].source}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline cursor-pointer"
              >
                {singleRecipe?.more?.[0].source}
              </a>
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Comments:</h2>

            <form className="mb-6">
              <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows="6"
                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Write a comment..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="ml-2 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-btnColor rounded-lg focus:ring-4 focus:ring-btnColor/40 hover:bg-btnColor/80"
              >
                Post comment
              </button>
            </form>

            {singleRecipe?.comments?.map((comment, index) => (
              <div key={index} className="mb-2 p-4 bg-gray-100 rounded">
                <p className="font-semibold">{comment.user}</p>
                <p>{comment.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleRecipe;
