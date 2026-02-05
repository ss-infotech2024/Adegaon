import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeaderCard from "@/components/LeaderCard";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Building2,
  Droplets,
  Trash2,
  Briefcase,
  Users,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

// Direct public image URLs (royalty-free or publicly available)

const heroImg = "../../G2.jpg"; // Scenic Maharashtra rural village at sunset

const devImg = "../../public/G1.jpg"

const fadnavisImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPp8e9QX0NTNtpFZXHdtRBeTYMNdSvva5v0h4SGZYzTfnODZlz8VE5syU1ht1_Py6HKRuhTQlVLPRzYukE1rNrPalAd8SJyvqHvn657Q&s=10"; // Recent official portrait of Devendra Fadnavis

const shindeImg = "https://bsmedia.business-standard.com/_media/bs/img/topic-profile/profile-images/thumb/900_900/1730798245.jpg?im=FitAndFill=(826,465)"; // Recent portrait of Eknath Shinde

const ajitpawarImg = "https://cdn.siasat.com/wp-content/uploads/2022/07/Ajit-Pawar.png"; // Official portrait of Ajit Pawar

const bawankuleImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMYczVL_PsbrHn6mrftkrmopcL4-fmTr0qUA&s"; // Chandrashekhar Bawankule with PM (clear portrait visible)

const itankarImg = "https://www.thehitavada.com/Encyc/2022/8/19/Dr-Vipin-Itankar_202208190903065198_H@@IGHT_300_W@@IDTH_500.jpg"; // Official photo of Dr. Vipin Itankar
 const Vinayaka= "https://static.toiimg.com/thumb/msid-112908113,width-1280,height-720,resizemode-72/112908113.jpg";
const leaders = [
  { name: "श्री. देवेंद्र फडणवीस", position: "माननीय मुख्यमंत्री, महाराष्ट्र", image: fadnavisImg },
  { name: "श्री. एकनाथ शिंदे", position: "माननीय उपमुख्यमंत्री, महाराष्ट्र", image: shindeImg },
  {
    name: "विनायक महामुनी",
    position: "मुख्य कार्यकारी अधिकारी",
    image:Vinayaka
   
  }
];

const services = [
  { icon: Building2, title: "ग्रामसेवक कार्यालय", description: "ग्राम विकासासाठी आवश्यक प्रशासकीय सेवा उपलब्ध." },
  { icon: Droplets, title: "पाणीपुरवठा योजना", description: "जलजीवन मिशन अंतर्गत पाणी पुरवठा." },
  { icon: Trash2, title: "कचरा व्यवस्थापन", description: "कचरा संकलन आणि व्यवस्था." },
  { icon: Briefcase, title: "रोजगार हमी योजना", description: "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी योजना." },
  { icon: Users, title: "महिला बचत गट", description: "महिलांसाठी आर्थिक सशक्तीकरण." },
  { icon: GraduationCap, title: "शिक्षण व शाळा सुविधा", description: "अंगणवाडी आणि शाळा सुविधा." },
];

const developmentPoints = [
  "पाण्याची सोय: जलजीवन मिशनद्वारे सुधारित पाणीपुरवठा.",
  "ग्राम स्वच्छता अभियान: स्वच्छ भारत अभियान अंतर्गत गाव स्वच्छता.",
  "कचरा व्यवस्थापन: कचरा संकलन आणि पुनर्वापर प्रणाली.",
  "महिला शाश्वत विकास: महिला बचत गट आणि सशक्तीकरण कार्यक्रम.",
  "डिजिटल ग्रामपंचायत: ई-गव्हर्नन्स आणि ऑनलाइन सेवा.",
  "रस्ते व पायाभूत सुविधा: रस्ते दुरुस्ती आणि विद्युतीकरण.",
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="अडेगांव गाव"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark/90 via-maroon-dark/70 to-transparent" />
        </div>
        <div className="container relative z-10 text-primary-foreground">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              आधुनिक <span className="text-gold">ग्रामपंचायत</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-6 leading-relaxed">
              अडेगांव ग्रामपंचायत विकास, लोककल्याण, स्वच्छता, पाणीपुरवठा, शिक्षण आणि पायाभूत सुविधांच्या दिशेने निरंतर प्रयत्नशील आहे. आमच्या गावाची लोकसंख्या १५२७ असून, आम्ही डिजिटल आणि शाश्वत विकासावर लक्ष केंद्रित करतो.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn-hero">
                अधिक पहा
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-maroon-dark px-6 py-3 h-auto">
                  संपर्क करा
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

  {/* Leaders Section */}
<section className="py-20 bg-secondary">
  <div className="container">
    <h2 className="section-title text-center mx-auto mb-12">महाराष्ट्र सरकार नेतृत्व</h2>
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl">
        {leaders.map((leader, index) => (
          <div key={leader.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
            <LeaderCard {...leader} />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Development Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">आमचा महत्त्वाकांक्षी गाव विकास योजना</h2>
              <ul className="space-y-4">
                {developmentPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${index * 80}ms` }}>
                    <CheckCircle2 className="w-6 h-6 text-green-india shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <Link to="/projects" className="btn-hero mt-8 inline-flex">
                सर्व प्रकल्प पहा
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/30">
                <img src={devImg} alt="गाव विकास" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="section-title text-center mx-auto mb-12">सुविधांची यादी</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={service.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 80}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="section-title text-center mx-auto mb-12">गाव आकडेवारी</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value="१५२७" label="एकूण लोकसंख्या" sublabel="पुरुष: ७९५ | स्त्री: ७३२" />
            <StatCard value="११७१.६३" label="एकूण क्षेत्रफळ" sublabel="हेक्टर" />
            <StatCard value="५" label="शाळा व संस्था" sublabel="अंगणवाडी, शाळा, इत्यादी" />
            <StatCard value="१९६१" label="स्थापना वर्ष" sublabel="ग्रामपंचायत" />
          </div>
        </div>
      </section>

      {/* Panchayat Members */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="section-title text-center mx-auto mb-12">ग्रामपंचायत सदस्य</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "सरपंच", position: "ग्रामपंचायत प्रमुख" },
              { name: "उपसरपंच", position: "सहायक प्रमुख" },
              { name: "सदस्य १", position: "ग्रामपंचायत सदस्य" },
              { name: "सदस्य २", position: "ग्रामपंचायत सदस्य" },
            ].map((member, index) => (
              <div key={index} className="leader-card p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center border-4 border-gold/30">
                  <Users className="w-10 h-10 text-muted-foreground" />
                </div>
                <h4 className="font-bold text-foreground">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.position}</p>
                <p className="text-xs text-accent mt-2">माहिती उपलब्ध नाही</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;