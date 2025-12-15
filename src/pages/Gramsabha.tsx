import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, FileText, Bell } from "lucide-react";

const meetings = [
  {
    date: "१ डिसेंबर २०२५",
    title: "मासिक ग्रामसभा",
    agenda: "विकास चर्चा, पाणी योजना मंजुरी, रस्ते दुरुस्ती प्रस्ताव",
    attendees: "४५ उपस्थित",
    status: "पूर्ण",
  },
  {
    date: "१५ नोव्हेंबर २०२५",
    title: "विशेष ग्रामसभा",
    agenda: "अंदाजपत्रक मंजुरी, नवीन प्रकल्प प्रस्ताव",
    attendees: "५२ उपस्थित",
    status: "पूर्ण",
  },
  {
    date: "१ नोव्हेंबर २०२५",
    title: "मासिक ग्रामसभा",
    agenda: "स्वच्छता अभियान, शाळा दुरुस्ती",
    attendees: "३८ उपस्थित",
    status: "पूर्ण",
  },
];

const resolutions = [
  { number: "ठराव क्र. १२/२०२५", title: "जलजीवन मिशन अंतर्गत पाणी योजना मंजूर", date: "१ डिसेंबर २०२५" },
  { number: "ठराव क्र. ११/२०२५", title: "रस्ते दुरुस्तीसाठी निधी मंजूर", date: "१ डिसेंबर २०२५" },
  { number: "ठराव क्र. १०/२०२५", title: "अंगणवाडी इमारत दुरुस्ती", date: "१५ नोव्हेंबर २०२५" },
  { number: "ठराव क्र. ९/२०२५", title: "पथदीप बसवणे मंजूर", date: "१५ नोव्हेंबर २०२५" },
];

const notices = [
  { title: "आगामी ग्रामसभा", date: "१५ जानेवारी २०२६", description: "सर्व नागरिकांना उपस्थित राहण्याची विनंती" },
  { title: "पाणी पट्टी भरणे", date: "३१ डिसेंबर २०२५", description: "पाणी पट्टी भरण्याची अंतिम तारीख" },
];

const Gramsabha = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-maroon-dark py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ग्रामसभा</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            ग्रामसभा बैठक मिनिट्स, ठराव आणि सूचना
          </p>
        </div>
      </section>

      {/* Notices */}
      <section className="py-12 bg-accent/10">
        <div className="container">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-6 h-6 text-accent" />
            <h2 className="text-xl font-bold text-foreground">महत्त्वाच्या सूचना</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {notices.map((notice, index) => (
              <div key={index} className="bg-card p-4 rounded-lg border-l-4 border-accent shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-foreground">{notice.title}</h3>
                  <Badge variant="outline">{notice.date}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{notice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Minutes */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-6 h-6 text-primary" />
            <h2 className="section-title mb-0 pb-0 after:hidden">अलीकडील बैठक मिनिट्स</h2>
          </div>
          <div className="space-y-6">
            {meetings.map((meeting, index) => (
              <Card key={index} className="govt-card">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <CardTitle className="text-lg">{meeting.title}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-india text-primary-foreground">{meeting.status}</Badge>
                      <span className="text-sm text-muted-foreground">{meeting.date}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2"><strong>कार्यक्रम पत्रिका:</strong> {meeting.agenda}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    {meeting.attendees}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resolutions */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-6 h-6 text-primary" />
            <h2 className="section-title mb-0 pb-0 after:hidden">निर्णय व ठराव</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {resolutions.map((resolution, index) => (
              <div key={index} className="govt-card p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-accent font-medium mb-1">{resolution.number}</p>
                    <h3 className="font-bold text-foreground">{resolution.title}</h3>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{resolution.date}</span>
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

export default Gramsabha;
