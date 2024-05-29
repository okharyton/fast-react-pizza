import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-800 text-stone-200 uppercase px-4 py-4 sm:px-6 flex items-center justify-between">
      <p className="space-x-4 md:text-base sm:space-x-6 text-stone-300 font-semibold">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
