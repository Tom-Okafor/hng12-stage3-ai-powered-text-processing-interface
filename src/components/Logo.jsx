import PropTypes from 'prop-types';

export default function Logo({height, fontSize}) {
  return (
    <div className="flex gap-4 px-4 py-2 items-center">
      <img
        src="linguaSwift-logo.png"
        alt="logo"
        aria-hidden="tru
        e"
        className={`h-[${height}px] object-contain animate-spin hover:animate-none duration-300`}
      />
      <p className={`font-itim font-black text-${fontSize} tracking-[3px]`}>LinguaSwift</p>
    </div>
  );
}

Logo.propTypes = {
  height: PropTypes.number.isRequired,
  fontSize: PropTypes.oneOf(['sm', 'md', 'lg', '2xl']),
};