import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Public image URLs - replace with your actual image URLs
const galleryImages = [
  "G1.jpg",
  "G2.jpg",
  "G3.jpg",
  "G4.jpg",
  "G5.jpeg",
  "G6.jpeg",
  "G7.jpeg",
  "G8.jpeg",
  "G9.jpeg",
  "G10.jpeg",
  "G11.jpeg",
  "G12.jpeg",
  "G13.jpeg",
  "G14.jpeg",
  "G15.jpeg",
  "G16.jpeg",
  "G17.jpeg",
  "G18.jpeg",
  "G19.jpeg",
  "G20.jpeg",
 
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`अडेगांव गाव - छायाचित्र ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-primary-foreground">
                    <p className="font-bold">छायाचित्र {index + 1}</p>
                    <p className="text-sm opacity-80">अडेगांव गाव</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {galleryImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">फोटो उपलब्ध नाहीत.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-transparent border-none">
          {selectedImage && (
            <div className="relative flex items-center justify-center h-full">
              <img 
                src={selectedImage} 
                alt="Gallery view" 
                className="max-w-full max-h-[85vh] object-contain rounded-lg" 
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;