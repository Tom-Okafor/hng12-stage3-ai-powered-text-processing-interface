import PropTypes from "prop-types";
export default function AsideNavigationIcon({ icon, onClick, label }) {
  return (
    <button
      className="flex items-center justify-center py-2 hover:bg-pink-thick focus:bg-pink-thick rounded-xl duration-300"
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
};
