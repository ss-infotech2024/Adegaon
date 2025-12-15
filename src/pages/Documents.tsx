import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const documents = [
  { name: "जन्म दाखला अर्ज नमुना", type: "PDF", size: "125 KB" },
  { name: "मृत्यू दाखला अर्ज नमुना", type: "PDF", size: "118 KB" },
  { name: "निवासी प्रमाणपत्र अर्ज", type: "PDF", size: "142 KB" },
  { name: "उत्पन्न प्रमाणपत्र अर्ज", type: "PDF", size: "135 KB" },
  { name: "विवाह नोंदणी अर्ज", type: "PDF", size: "168 KB" },
  { name: "बांधकाम परवाना अर्ज", type: "PDF", size: "195 KB" },
  { name: "जात प्रमाणपत्र अर्ज", type: "PDF", size: "128 KB" },
  { name: "अधिवास प्रमाणपत्र अर्ज", type: "PDF", size: "132 KB" },
];

const Documents = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-maroon-dark py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">दस्तऐवज आणि अर्ज</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            प्रमाणपत्रे आणि विविध सेवांसाठी आवश्यक अर्ज नमुने डाउनलोड करा
          </p>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div key={index} className="govt-card p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                  <FileText className="w-7 h-7 text-destructive" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground truncate">{doc.name}</h3>
                  <p className="text-sm text-muted-foreground"></p>
                </div>

              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-secondary rounded-2xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">अधिक मदत हवी आहे?</h3>
            <p className="text-muted-foreground mb-4">
              अर्ज भरण्यासाठी किंवा अधिक माहितीसाठी ग्रामपंचायत कार्यालयाशी संपर्क साधा.
            </p>
            <Button className="btn-hero">
              संपर्क करा
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Documents;
