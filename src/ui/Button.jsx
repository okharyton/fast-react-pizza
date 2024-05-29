import { Link } from "react-router-dom";

export default function Button({ children, disabled, to }) {
  const className =
    "sm:px-6 sm:py-4 bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-3 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 cursor-not-allowed";
  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
}
