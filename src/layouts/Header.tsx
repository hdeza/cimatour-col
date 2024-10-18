import HamburguerButton from "../components/common/HamburguerButton";

export default function Header() {
  return (
    <header
      style={{ height: "10dvh" }}
      className="flex bg-gray-500/15 py-4 px-4 justify-between items-center absolute z-10 w-full top-0 left-0"
    >
      <h1 className="font-playfair font-bold text-white text-2xl">
        Clima<span className="text-primary-orange">Tour</span>
      </h1>
      <HamburguerButton />
    </header>
  );
}
