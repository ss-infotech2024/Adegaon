import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import developmentImg from "@/assets/development.jpg";
import officeImg from "@/assets/gallery/office.jpg";

const projects = [
  {
    title: "रस्ते विकास",
    description: "गावातील सर्व रस्त्यांची दुरुस्ती आणि नवीन रस्ते बांधकाम. सिमेंट काँक्रीट रस्ते तयार करणे.",
    status: "चालू",
    image: developmentImg,
  },
  {
    title: "पाणीपुरवठा टाकी",
    description: "जलजीवन मिशन अंतर्गत नवीन पाणी साठवण टाकी बांधकाम. प्रत्येक घरात नळ कनेक्शन.",
    status: "पूर्ण",
    image: officeImg,
  },
  {
    title: "सार्वजनिक शौचालय",
    description: "स्वच्छ भारत अभियान अंतर्गत सार्वजनिक शौचालय बांधकाम.",
    status: "पूर्ण",
    image: developmentImg,
  },
  {
    title: "सीसीटीव्ही प्रकल्प",
    description: "गावातील महत्त्वाच्या ठिकाणी सुरक्षेसाठी सीसीटीव्ही कॅमेरे बसवणे.",
    status: "चालू",
    image: officeImg,
  },
  {
    title: "प्रकाश व्यवस्था",
    description: "सौर ऊर्जा आधारित एलईडी पथदीप बसवणे. रात्रीच्या वेळी सुरक्षित वातावरण.",
    status: "पूर्ण",
    image: developmentImg,
  },
  {
    title: "आरोग्य तपासणी शिबिरे",
    description: "नियमित आरोग्य तपासणी शिबिरे आयोजित करणे. मोफत औषध वाटप.",
    status: "चालू",
    image: officeImg,
  },
  {
    title: "न्यू नागपूर प्रकल्प",
    description: "हिंगणा तालुक्यातील मोठा विकास प्रकल्प. व्यावसायिक हब म्हणून विकास. नवीन रोजगार संधी.",
    status: "आगामी",
    image: developmentImg,
  },
];

const Projects = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "पूर्ण":
        return "bg-green-india text-primary-foreground";
      case "चालू":
        return "bg-accent text-accent-foreground";
      case "आगामी":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-maroon-dark py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">विकास प्रकल्प</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            अडेगांव ग्रामपंचायत अंतर्गत चालू, पूर्ण आणि आगामी विकास प्रकल्पांची माहिती
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="govt-card overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-lg text-foreground">{project.title}</h3>
                    <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
