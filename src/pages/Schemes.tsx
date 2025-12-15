import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Users, Home, Briefcase, GraduationCap, Droplets, Heart } from "lucide-react";

const schemes = [
  {
    icon: Home,
    title: "प्रधानमंत्री आवास योजना",
    description: "गरीब कुटुंबांना पक्के घर बांधण्यासाठी आर्थिक सहाय्य.",
    eligibility: "गरीब कुटुंबे, BPL कार्डधारक",
    documents: "आधार कार्ड, उत्पन्न प्रमाणपत्र, जमिनीचे कागदपत्रे",
    howToApply: "ऑनलाइन pmayg.nic.in किंवा ग्रामपंचायत कार्यालयात",
  },
  {
    icon: Droplets,
    title: "जलजीवन मिशन",
    description: "प्रत्येक घरात नळ कनेक्शन देऊन स्वच्छ पाणी पुरवठा.",
    eligibility: "सर्व गावकरी",
    documents: "आधार कार्ड, घराचा पुरावा",
    howToApply: "ग्रामपंचायत कार्यालयात अर्ज",
  },
  {
    icon: Heart,
    title: "स्वच्छ भारत अभियान",
    description: "वैयक्तिक शौचालय बांधकामासाठी अनुदान.",
    eligibility: "ज्यांच्या घरी शौचालय नाही अशी कुटुंबे",
    documents: "आधार कार्ड, घराचा पुरावा",
    howToApply: "ग्रामपंचायत कार्यालयात अर्ज",
  },
  {
    icon: Users,
    title: "महिला बचत गट योजना",
    description: "महिलांचे आर्थिक सशक्तीकरण आणि स्वयंरोजगार.",
    eligibility: "१८ वर्षांवरील महिला",
    documents: "आधार कार्ड, फोटो, बँक खाते",
    howToApply: "ग्रामपंचायत किंवा तालुका कार्यालयात",
  },
  {
    icon: Briefcase,
    title: "शेतकरी सुविधा योजना",
    description: "शेतीसाठी अनुदान, बियाणे आणि खते मदत.",
    eligibility: "नोंदणीकृत शेतकरी",
    documents: "७/१२ उतारा, आधार कार्ड, बँक खाते",
    howToApply: "कृषी विभाग कार्यालयात",
  },
  {
    icon: GraduationCap,
    title: "विद्यार्थी शिष्यवृत्ती",
    description: "शिक्षणासाठी आर्थिक मदत आणि शिष्यवृत्ती.",
    eligibility: "विद्यार्थी, उत्पन्न मर्यादा लागू",
    documents: "शाळेचे प्रमाणपत्र, आधार कार्ड, उत्पन्न प्रमाणपत्र",
    howToApply: "mahadbt.maharashtra.gov.in वर ऑनलाइन",
  },
];

const Schemes = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-maroon-dark py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">शासकीय योजना</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            ग्रामपंचायत स्तरावर उपलब्ध असलेल्या शासकीय योजनांची संपूर्ण माहिती
          </p>
        </div>
      </section>

      {/* Schemes */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {schemes.map((scheme, index) => (
              <Card key={index} className="govt-card">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <scheme.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">{scheme.title}</CardTitle>
                      <CardDescription>{scheme.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">पात्रता:</h4>
                    <p className="text-sm text-muted-foreground">{scheme.eligibility}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">आवश्यक कागदपत्रे:</h4>
                    <p className="text-sm text-muted-foreground">{scheme.documents}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">अर्ज कसे करावे:</h4>
                    <p className="text-sm text-muted-foreground">{scheme.howToApply}</p>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <FileText className="w-4 h-4 mr-2" />
                    अधिक माहिती
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schemes;
