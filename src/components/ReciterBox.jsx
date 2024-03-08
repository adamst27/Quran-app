import { Link } from "react-router-dom";
import PropTypes from "prop-types";

ReciterBox.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default function ReciterBox({ name, id }) {
  return (
    <div
      className="reciter-box bg-brilliant text-center flex justify-start items-center p-10 rounded 
    text-goodBlack font-extrabold shadow-lg
    hover:text-slate-600 hover:scale-105 transition duration-300"
    >
      <button className="reciter">
        {/* Use Link component instead of <a> tag */}
        <Link to={`/quran/${id}`}>{name}</Link>
      </button>
    </div>
  );
}
