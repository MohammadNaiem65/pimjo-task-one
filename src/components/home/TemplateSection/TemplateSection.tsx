import TemplateContent from "./TemplateContent";
import TemplateGallery from "./TemplateGallery";

export default function TemplateSection() {
  return (
    <section className="mt-20 w-full border-y">
      <div className="max-content-width diagonal-background-pattern mx-auto h-full border-x">
        <div className="pattern-section-content-width border-x bg-white">
          <TemplateContent />
        </div>
      </div>

      <div className="w-full border-y">
        <div className="max-content-width diagonal-background-pattern mx-auto h-full border-x">
          <div className="pattern-section-content-width border-x bg-white">
            <TemplateGallery />
          </div>
        </div>
      </div>
    </section>
  );
}
