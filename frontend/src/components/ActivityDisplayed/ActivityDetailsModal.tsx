import { useNavigate } from "react-router-dom"; // Import useNavigate
import { CloseIcon } from "./Icons";
import { Link } from "react-router-dom";

interface ActivityDetailsModalProps {
  activity: {
    title: string;
    category: string;
    imageUrl?: string;
    description?: string;
  };
  onClose: () => void;
}
const buttonBaseClass =
  "w-full text-sm text-white rounded-md border border-black border-solid bg-[linear-gradient(180deg,#017BA3_0%,#025E7C_52%,#017BA3_100%)] h-[54px]";

export const ActivityDetailsModal = ({
  activity,
  onClose,
}: ActivityDetailsModalProps) => {
  const navigate = useNavigate(); // Initialize navigation function

  const handleScheduleClick = () => {
    navigate("/scheduleForm"); // Navigate directly to /scheduleForm
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[1000]"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-full max-w-sm relative mx-4 border border-gray-200 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>

        <div className="flex flex-col items-center gap-4">
          {activity.imageUrl ? (
            <img
              src={activity.imageUrl}
              alt={activity.title}
              className="w-[150px] h-[150px] border border-gray-200 shadow-md mb-4 object-cover rounded-lg"
            />
          ) : (
            <div className="w-[150px] h-[150px] border border-gray-200 shadow-md mb-4 bg-gray-100 rounded-lg" />
          )}

          <h2 className="text-xl font-bold text-center">{activity.title}</h2>
          <p className="text-sm text-gray-600">Category: {activity.category}</p>

          <div className="w-full p-4 bg-gray-50 rounded-lg mb-4">
            {activity.description ? (
              <p className="text-base text-center">{activity.description}</p>
            ) : (
              <p className="text-base text-center text-gray-500">
                No additional description available.
              </p>
            )}
          </div>

          <Link
            to={`/scheduleForm?activity=${encodeURIComponent(activity.title)}`}
          >
            <button className={buttonBaseClass}>Schedule This Activity</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
