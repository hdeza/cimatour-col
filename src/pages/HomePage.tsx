import FeaturedWeather from "../layouts/FeaturedWeather";
import Header from "../layouts/Header";
import Main from "../layouts/Main";
export default function HomePage() {
  return (
    <>
      <Header isInHome={true} />
      <Main />
      <FeaturedWeather />
    </>
  );
}
