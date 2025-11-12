import BrandsCarousel from "./BrandsCarousel";

export default function Brands() {
  return (
    <section className="mt-9.5 h-32 w-full border-y">
      <div className="max-content-width diagonal-background-pattern mx-auto h-full w-full border-x">
        {/* Content starts here */}
        <div className="pattern-section-content-width flex h-full items-center justify-between border-x bg-white px-10 py-11">
          <p className="max-w-[203px] shrink-0 text-[0.875rem]/[1.25rem] font-semibold text-text-secondary">
            Trusted by <span className="text-text">5000+</span> individuals &
            companies of all sizes
          </p>

          <BrandsCarousel />
        </div>
        {/* Content ends here */}
      </div>
    </section>
  );
}
