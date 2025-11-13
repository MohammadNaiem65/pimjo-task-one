import TestimonialContent from "./TestimonialContent";
import Testimonials from "./Testimonials";

export default function TestimonialSection() {
  return (
    <section className="w-full border-b">
      <div className="border-b">
        <div className="max-content-width diagonal-background-pattern mx-auto h-full border-x">
          <div className="pattern-section-content-width border-x bg-white">
            <TestimonialContent />
          </div>
        </div>
      </div>

      <div className="max-content-width diagonal-background-pattern mx-auto h-full border-x">
        <div className="pattern-section-content-width border-x bg-white">
          <Testimonials />
        </div>
      </div>
    </section>
  );
}
