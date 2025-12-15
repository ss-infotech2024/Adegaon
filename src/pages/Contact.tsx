import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "संदेश पाठवला!",
      description: "आम्ही लवकरच आपल्याशी संपर्क साधू.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-maroon-dark py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">संपर्क करा</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            आपल्या प्रश्न, सूचना किंवा तक्रारींसाठी आमच्याशी संपर्क साधा
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="govt-card p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">संदेश पाठवा</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">नाव *</Label>
                    <Input
                      id="name"
                      placeholder="आपले नाव"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">मोबाइल नंबर</Label>
                    <Input
                      id="phone"
                      placeholder="आपला मोबाइल नंबर"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">ईमेल *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="आपला ईमेल"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">संदेश *</Label>
                  <Textarea
                    id="message"
                    placeholder="आपला संदेश लिहा..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full btn-hero">
                  संदेश पाठवा
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="govt-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">पत्ता</h3>
                    <p className="text-muted-foreground">
                      ग्रामपंचायत कार्यालय,<br />
                      At. Po. अडेगांव,<br />
                      ता. हिंगणा, जि. नागपूर,<br />
                      महाराष्ट्र - 441110
                    </p>
                  </div>
                </div>
              </div>

              <div className="govt-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">दूरध्वनी</h3>
                    <p className="text-muted-foreground">तहसीलदार: ०७१०४-२७६१३४</p>
                    <p className="text-muted-foreground">जिल्हाधिकारी: ०७१२-२५६४९७३</p>
                  </div>
                </div>
              </div>

              <div className="govt-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">ईमेल</h3>
                    <a href="mailto:grampanchayatadegaon@gmail.com" className="text-accent hover:underline">
                      grampanchayatadegaon@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="govt-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">कार्यालय वेळ</h3>
                    <p className="text-muted-foreground">सोमवार ते शनिवार</p>
                    <p className="text-muted-foreground">सकाळी १०:०० ते संध्याकाळी ५:००</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-xl border-4 border-gold/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29717.843775826775!2d78.92!3d21.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0c9a4b3b3b3%3A0x3b3b3b3b3b3b3b3b!2sAdegaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="अडेगांव नकाशा"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
