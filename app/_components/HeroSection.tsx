import FloatingCards from "../_components/FloatingCards";

export default function HeroSection() {
  return (
    <section
      className="
        relative mx-auto
        flex min-h-screen
        max-w-[1440px]
        items-center
        overflow-hidden
        px-6 lg:px-16
      "
    >
      <FloatingCards />
    </section>
  );
}