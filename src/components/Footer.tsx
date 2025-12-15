import { Link } from "react-router-dom";
import { Facebook, Youtube, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import schoolImg from "@/assets/gallery/school.jpg";
import officeImg from "@/assets/gallery/office.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">संपर्क</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 text-gold shrink-0" />
                <span className="text-sm opacity-90">
                  At. Po. अडेगांव,<br />
                  ता. हिंगणा, जि. नागपूर,<br />
                  महाराष्ट्र - 441110
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span className="text-sm opacity-90">०७१०४-२७६१३४</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href="mailto:grampanchayatadegaon@gmail.com" className="text-sm opacity-90 hover:text-gold transition-colors">
                  grampanchayatadegaon@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-maroon-dark transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-maroon-dark transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-maroon-dark transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-maroon-dark transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">महत्त्वाचे दुवे</h3>
            <ul className="space-y-2">
              {[
                { path: "/schemes", label: "शासकीय योजना" },
                { path: "/documents", label: "अर्ज नमुने" },
                { path: "/projects", label: "विकास प्रकल्प" },
                { path: "/gramsabha", label: "ग्रामसभा" },
                { path: "/downloads", label: "डाउनलोड्स" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">ग्रामपंचायत सेवा</h3>
            <ul className="space-y-2">
              {[
                "जन्म दाखला",
                "मृत्यू दाखला",
                "निवासी प्रमाणपत्र",
                "उत्पन्न प्रमाणपत्र",
                "बांधकाम परवाना",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm opacity-90 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery Preview */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">फोटो गॅलरी</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/gallery" className="aspect-square rounded-lg overflow-hidden group">
                <img src={schoolImg} alt="शाळा" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link to="/gallery" className="aspect-square rounded-lg overflow-hidden group">
                <img src={officeImg} alt="कार्यालय" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>
            <Link to="/gallery" className="text-sm text-gold hover:underline mt-2 inline-block">
              सर्व फोटो पहा →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-maroon-light/20">
        <div className="container py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm opacity-80">
          <p>© २०२५ ग्रामपंचायत अडेगांव | सर्व हक्क राखीव</p>
          <p>विकसित केलेले: xAI द्वारे</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
