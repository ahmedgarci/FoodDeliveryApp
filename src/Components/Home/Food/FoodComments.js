import { useParams } from "react-router";
import { PostData } from "../../../Functions/Common/PostDataToBackend";
import { useState } from "react";
// TO FIX
function FoodComments({ comments }) {

  const {id} = useParams()
  const [userComment,setUserComment] = useState(null)

  async function PostComment(){
    const {error,response} = await PostData({url:`http://localhost:3500/food/${id}/comment`,
    data:{"comment":userComment}})

  }

  return (
    <div className="bg-gray-50 p-6 mt-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Food Comments</h2>

      <div className="mb-6">
        <textarea
          onChange={(e)=>setUserComment(e.target.value)}
          className="w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-lg p-3 text-gray-700"
          rows="3"
          placeholder="Write your comment about the food..."
        ></textarea>
        <button
        onClick={()=>PostComment()}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg mt-3">
          Submit Comment
        </button>
      </div>

      <div className="space-y-4">
        {comments && comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <div className="flex items-start space-x-4">
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">{comment._username}</h4>
                  <span className="text-xs text-gray-500">{comment._dateOfCreation}</span>
                  <p className="mt-2 text-sm text-gray-700">{comment._comment}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No comments available.</p>
        )}
      </div>
    </div>
  );
}

export { FoodComments };
