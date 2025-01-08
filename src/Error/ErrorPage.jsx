import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
const ErrorPage = () => {
  return (
    <div
      data-tooltip-id="my-tooltip-1"
      className="flex flex-col gap-6 mt-8 justify-center items-center"
    >
      <h1 className="font-bold text-4xl  sm:text-6xl"> !404</h1>
      <Link className="btn-error btn" to="/">
        Back to home
      </Link>
      <ReactTooltip
        id="my-tooltip-1"
        place="bottom"
        content="Please back To home something worng"
      />
    </div>
  );
};

export default ErrorPage;
