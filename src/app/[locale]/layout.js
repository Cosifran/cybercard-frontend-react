//Import bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import "react-phone-number-input/style.css";
import BootstrapClient from "@/components/BoostrapClient";
// Supports weights 100-900
import "@fontsource-variable/epilogue";
//Import own components
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
//Import traslate
import {useTranslations} from "next-intl";
export const metadata = {
  title: "Coibox",
  description: "En Coibox, conectamos a viajeros de todo el mundo con hospedajes ideales y aventuras deliciosas.",
};

export default function LocaleLayout({children, params: {locale}}) {
  const FooterTraslate = useTranslations("FooterSection");
  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true}>
        <div className="container-fluid px-0">
          <Nav />
          {children}
          <BootstrapClient />

          <Footer
            formularyTitle={FooterTraslate("folmularyTitle")}
            inputName={FooterTraslate("inputName")}
            inputEmail={FooterTraslate("inputEmail")}
            inputPhone={FooterTraslate("inputPhone")}
            buttonFormulary={FooterTraslate("buttonFormulary")}
            contactSubtitle={FooterTraslate("subtitleContact")}
            contactTitle={FooterTraslate("titleContact")}
            selectPlaceholder={FooterTraslate("selectPlacholder")}
            selectValue1= {FooterTraslate("selectValue2")}
            selectValue2={FooterTraslate("titleContact")}
          />
        </div>
      </body>
    </html>
  );
}
