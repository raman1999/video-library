import homeImg from "../../assets/home.png";
import "./home.css";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { UseGetAxios } from "../../Hooks/UseGetAxios";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import { LoadingSpinner } from "../../Components";

export function Home() {
  useDocumentTitle("Home | FITTV");
  const {
    isLoading,
    serverData: { categories },
  } = UseGetAxios("/api/categories");

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="my">
          <section className="sec-introduction txt-center flex-column">
            <div className="intro-container">
              <h1 className="l-sp-2">
                Give Your Fitness A <br /> New Direction!{" "}
              </h1>
              <p className="txt-small l-height-lg txt-gray">
                Welcome to FitTV. We are here for your body transformation.
                <br />
                All the content needed for your fitness journey are available
                within us <br />
                by most experienced trainers.
              </p>
              <Link
                to="/videos/explore"
                className="link btn bg-theme txt-white"
              >
                Explore Now &#8594;
              </Link>
            </div>
            <img className="home-image" src={homeImg} alt="logo" />
          </section>

          <h2 className="title txt-center">Featured Categories</h2>

          <section className="featured-category flex-box">
            {categories?.map((category) => (
              <CategoryCard key={category._id} categoryItem={category} />
            ))}
          </section>
        </div>
      )}
    </>
  );
}
