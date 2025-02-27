import PropTypes from "prop-types";
import { NavigationContentContext } from "../../../contexts/UseNavigationContentContext";
import { useContext } from "react";

export default function AsideNavigationIcon({ icon, onClick, label, index }) {
  const { navigationContentIndex } = useContext(NavigationContentContext);
  return (
    <button
      className={`flex items-center justify-center py-2 hover:bg-pink-thick rounded-xl duration-300 ${
        index === navigationContentIndex && "bg-pink-thick"
      }`}
      onClick={onClick}
      aria-label={label}
    >
      <img src={icon} alt={label} width="30px" height="30px" />
    </button>
  );
}

AsideNavigationIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
