export default function StatContent() {
  return (
    <div className="h-72.5 w-full border-b">
      <div className="max-content-width diagonal-background-pattern mx-auto h-full border-x">
        <div className="pattern-section-content-width flex h-full items-end justify-start border-x bg-white">
          {/* Content starts here */}
          <div className="w-200 pb-10 pl-10">
            <h2 className="max-w-141 text-[2.5rem]/[3rem] font-medium text-text">
              The perfect foundation to kickstart any project.
            </h2>

            <p className="mt-4.5 text-text-secondary">
              A comprehensive UI kit — thoughtfully crafted with{" "}
              <span className="text-text font-medium">
                Auto Layout 5.0, smart variants, variables,
              </span>{" "}
              and built-in WCAG accessibility for a seamless design experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
