import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Bell, Megaphone, Construction } from "lucide-react";

const news = [
  {
    title: "नवीन पाणी टाकी प्रकल्प सुरू",
    date: "१० डिसेंबर २०२५",
    category: "विकास",
    description: "जलजीवन मिशन अंतर्गत नवीन पाणी साठवण टाकी बांधकाम सुरू. या प्रकल्पामुळे प्रत्येक घरात स्वच्छ पाणी पुरवठा होणार.",
  },
  {
    title: "स्वच्छता अभियान यशस्वी",
    date: "५ डिसेंबर २०२५",
    category: "स्वच्छता",
    description: "गावातील स्वच्छता अभियानात ५०० पेक्षा जास्त नागरिकांनी सहभाग घेतला. गाव स्वच्छता पुरस्कारासाठी पात्र.",
  },
  {
    title: "दिवाळी उत्सव साजरा",
    date: "२५ नोव्हेंबर २०२५",
    category: "उत्सव",
    description: "ग्रामपंचायत कार्यालयात सामूहिक दिवाळी उत्सव साजरा करण्यात आला. सर्व गावकऱ्यांना शुभेच्छा.",
  },
  {
    title: "न्यू नागपूर प्रकल्प विस्तार",
    date: "२० नोव्हेंबर २०२५",
    category: "विकास",
    description: "हिंगणा तालुक्यातील न्यू नागपूर प्रकल्प विस्ताराची घोषणा. गावासाठी नवीन रोजगार संधी उपलब्ध होणार.",
  },
];

const events = [
  {
    title: "मासिक ग्रामसभा",
    date: "१५ जानेवारी २०२६",
    time: "सकाळी ११:००",
    location: "ग्रामपंचायत कार्यालय",
  },
  {
    title: "आरोग्य तपासणी शिबीर",
    date: "२० जानेवारी २०२६",
    time: "सकाळी ९:०० ते दुपारी २:००",
    location: "प्राथमिक आरोग्य केंद्र",
  },
  {
    title: "प्रजासत्ताक दिन",
    date: "२६ जानेवारी २०२६",
    time: "सकाळी ८:००",
    location: "शाळा मैदान",
  },
];

const News = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "विकास":
        return "bg-green-india text-primary-foreground";
      case "स्वच्छता":
        return "bg-accent text-accent-foreground";
      case "उत्सव":
        return "bg-saffron text-primary-foreground";
      default:
        return "bg-primary text-primary-foreground";
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-maroon-dark py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">बातम्या आणि कार्यक्रम</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            अडेगांव ग्रामपंचायतच्या नवीनतम घोषणा आणि आगामी कार्यक्रम
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* News */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <Megaphone className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">नवीनतम बातम्या</h2>
              </div>
              <div className="space-y-6">
                {news.map((item, index) => (
                  <div key={index} className="govt-card p-6">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                      <Badge className={getCategoryColor(item.category)}>{item.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Events Sidebar */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Bell className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold text-foreground">आगामी कार्यक्रम</h2>
              </div>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="govt-card p-5 border-l-4 border-accent">
                    <h3 className="font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      📅 {event.date}
                    </p>
                    <p className="text-sm text-muted-foreground mb-1">
                      🕐 {event.time}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      📍 {event.location}
                    </p>
                  </div>
                ))}
              </div>

              {/* Alert Box */}
              <div className="mt-8 p-6 bg-destructive/10 border border-destructive/30 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Construction className="w-5 h-5 text-destructive" />
                  <h3 className="font-bold text-foreground">आपत्कालीन सूचना</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  सध्या कोणतीही आपत्कालीन सूचना नाही. सुरक्षित रहा!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
