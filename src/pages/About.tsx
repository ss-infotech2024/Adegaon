import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Landmark, Wheat, Eye, Target, Calendar, MapPin, Droplets } from "lucide-react";
import officeImg from "@/assets/gallery/office.jpg";
import meetingImg from "@/assets/gallery/meeting.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-maroon-dark py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">आमच्याबद्दल</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            अडेगांव ग्रामपंचायतची संपूर्ण माहिती - इतिहास, संस्कृती, आणि विकास दृष्टी
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">गाव इतिहास</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                अडेगांव हे हिंगणा तहसीलमधील एक ग्रामीण गाव आहे, नागपूर जिल्ह्यात वसलेले. विदर्भ क्षेत्रातील भाग असून, हिंगणा पासून सुमारे ४२ किमी दूर आहे.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ऐतिहासिकदृष्ट्या शेतीप्रधान गाव असून, येथील लोक पारंपरिक शेती आणि पशुपालनाशी संबंधित आहेत. गावाची स्थापना अनेक शतकांपूर्वी झाली असून, १९६१ मध्ये ग्रामपंचायतची स्थापना झाली.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-secondary p-4 rounded-lg text-center">
                  <Calendar className="w-8 h-8 mx-auto text-accent mb-2" />
                  <span className="font-bold text-primary">१९६१</span>
                  <p className="text-sm text-muted-foreground">स्थापना वर्ष</p>
                </div>
                <div className="bg-secondary p-4 rounded-lg text-center">
                  <MapPin className="w-8 h-8 mx-auto text-accent mb-2" />
                  <span className="font-bold text-primary">४२ किमी</span>
                  <p className="text-sm text-muted-foreground">हिंगणा पासून</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-gold/30">
              <img src={officeImg} alt="ग्रामपंचायत कार्यालय" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Festivals */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl border-4 border-gold/30">
              <img src={meetingImg} alt="ग्रामसभा" className="w-full h-auto" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="section-title">संस्कृती आणि उत्सव</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ग्रामीण महाराष्ट्राची समृद्ध संस्कृती येथे जपली जाते. पारंपरिक सण आणि लोककला यांचे विशेष महत्त्व आहे.
              </p>
              <div className="space-y-3 mt-6">
                {[
                  { name: "दिवाळी", desc: "दिव्यांचा सण - घरोघरी दीप प्रज्वलित" },
                  { name: "होळी", desc: "रंगांचा सण - आनंद आणि उत्साह" },
                  { name: "गणेश चतुर्थी", desc: "गणपती बाप्पाचे आगमन" },
                  { name: "पोळा", desc: "शेतकरी उत्सव - बैलांची पूजा" },
                ].map((festival) => (
                  <div key={festival.name} className="bg-card p-4 rounded-lg border border-border">
                    <h4 className="font-bold text-foreground">{festival.name}</h4>
                    <p className="text-sm text-muted-foreground">{festival.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-16">
        <div className="container">
          <h2 className="section-title text-center mx-auto mb-12">गावाची माहिती</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, label: "लोकसंख्या", value: "१५२७", sublabel: "पुरुष: ७९५ | स्त्री: ७३२" },
              { icon: Landmark, label: "एकूण क्षेत्रफळ", value: "११७१.६३ हेक्टर", sublabel: "शेती व निवासी" },
              { icon: Droplets, label: "पाणी स्रोत", value: "भूजल", sublabel: "स्थानिक जलस्रोत" },
              { icon: Wheat, label: "मुख्य पीके", value: "कापूस, सोयाबीन", sublabel: "संत्री, भाजीपाला" },
            ].map((stat, index) => (
              <div key={index} className="govt-card p-6 text-center">
                <stat.icon className="w-12 h-12 mx-auto text-accent mb-4" />
                <h3 className="font-bold text-foreground text-lg">{stat.value}</h3>
                <p className="text-primary font-medium">{stat.label}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gradient-to-r from-primary to-maroon-dark text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-10 h-10 text-gold" />
                <h2 className="text-2xl font-bold">दृष्टी</h2>
              </div>
              <p className="opacity-90 leading-relaxed">
                अडेगांव गावाला एक आदर्श, स्वावलंबी आणि डिजिटल ग्राम बनवणे. शाश्वत विकास, पर्यावरण संरक्षण आणि नागरिकांचे कल्याण या आमच्या प्राथमिकता आहेत.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-10 h-10 text-gold" />
                <h2 className="text-2xl font-bold">ध्येय</h2>
              </div>
              <ul className="space-y-2 opacity-90">
                <li>• प्रत्येक घरात स्वच्छ पाणी पुरवठा</li>
                <li>• १००% स्वच्छता आणि आरोग्य</li>
                <li>• डिजिटल सेवांचा विस्तार</li>
                <li>• महिला सशक्तीकरण</li>
                <li>• युवा रोजगार निर्मिती</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
