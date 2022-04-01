import { Link } from "react-router-dom";
import { useFilterContext } from "../../Context";
export default function ({ categoryItem }) {
  const { categoryName, img, _id } = categoryItem;
  const { filterDispatch } = useFilterContext();
  return (
    <Link to="/videos/explore" className="link">
      <div
        className="card"
        onClick={() =>
          filterDispatch({
            type: "SET_CATEGORY",
            payload: categoryName,
          })
        }
      >
        <img className="card-img" alt={categoryName} src={img} />
        <p className="heading-3 l-sp-1 txt-white">{categoryName}</p>
      </div>
    </Link>
  );
}
