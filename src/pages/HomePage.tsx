import Header from "../layouts/Header";
import valley from "../assets/valley.svg";
export default function HomePage() {
  return (
    <>
      <Header />
      <section className="relative w-full min-h-screen">
        <img
          src={valley}
          alt="Imagen valle del cocora"
          className="absolute w-full h-full object-cover"
        />
      </section>
      <div>
        <h1>hola</h1>
      </div>
    </>
  );
}
