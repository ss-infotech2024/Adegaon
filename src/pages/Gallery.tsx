import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import schoolImg from "@/assets/gallery/school.jpg";
import meetingImg from "@/assets/gallery/meeting.jpg";
import officeImg from "@/assets/gallery/office.jpg";
import anganwadiImg from "@/assets/gallery/anganwadi.jpg";

const galleryItems = [
  { src: schoolImg, title: "जिल्हा परिषद प्राथमिक शाळा", category: "शिक्षण" },
  { src: meetingImg, title: "ग्रामसभा बैठक", category: "ग्रामसभा" },
  { src: officeImg, title: "ग्रामपंचायत कार्यालय", category: "कार्यालय" },
  { src: anganwadiImg, title: "अंगणवाडी केंद्र", category: "शिक्षण" },
];

const categories = ["सर्व", "शिक्षण", "ग्रामसभा", "कार्यालय", "कार्यक्रम", "उत्सव"];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("सर्व");

  const filteredItems = activeCategory === "सर्व"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-maroon-dark py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">फोटो गॅलरी</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            अडेगांव गाव, कार्यक्रम आणि विकासकामांचे छायाचित्रे
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative"
                onClick={() => setSelectedImage(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-primary-foreground">
                    <p className="font-bold">{item.title}</p>
                    <p className="text-sm opacity-80">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">या श्रेणीत फोटो उपलब्ध नाहीत.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          {selectedImage && (
            <img src={selectedImage} alt="Gallery" className="w-full h-auto rounded-lg" />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
