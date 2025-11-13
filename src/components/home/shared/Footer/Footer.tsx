import CompanyInfo from "./CompanyInfo";
import Copyright from "./Copyright";
import Links from "./Links";
import Products from "./Products";

export default function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="max-content-width diagonal-background-pattern mx-auto border-x">
        <div className="pattern-section-content-width border-x bg-white pb-15">
          <div className="flex items-start justify-between px-10 pt-20 pb-22">
            <CompanyInfo />

            <Links />
          </div>

          <Products />

          <Copyright />
        </div>
      </div>
    </footer>
  );
}
