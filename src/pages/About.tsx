import { Card, CardContent } from "@/components/ui/card";
import { Shield, Globe2, Users, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Quality Assurance",
      description: "All products meet European quality standards and international food safety certifications",
    },
    {
      icon: <Globe2 className="w-12 h-12 text-primary" />,
      title: "Global Expertise",
      description: "Deep understanding of international market requirements and cultural preferences",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Trusted Partner",
      description: "Long-term relationships built on reliability and consistent quality",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Growth Focused",
      description: "Supporting your business growth with scalable supply solutions",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About DAS Group Global</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your trusted partner for premium meat and dairy exports
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                DAS Group Global has established itself as a trusted name in the international food export industry, 
                with a special focus on serving the growing markets across the globe. We bring together European quality 
                standards with deep market expertise.
              </p>
              <p>
                Our comprehensive portfolio includes premium beef, poultry, pork products, and high-quality 
                dairy items. Each product in our range is carefully selected to meet the diverse needs of 
                our B2B clients - from large retail chains to boutique restaurants.
              </p>
              <p>
                What sets us apart is our understanding that successful exports require more than just 
                quality products. It demands reliable logistics, consistent supply, transparent communication, 
                and a genuine commitment to our partners' success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To be the most trusted supplier of premium meat and dairy products to global markets, 
              combining European quality standards with exceptional service, reliable logistics, and 
              a deep commitment to our partners' long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Partner With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Quality & Certifications</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                All our products are sourced from certified European suppliers and undergo rigorous 
                quality control processes. We maintain full compliance with international food safety 
                standards including HACCP, ISO 22000, and meet all international imports requirements.
              </p>
              <p className="font-semibold text-primary">
                European Quality Standards • International Certifications • Reliable Cold Chain Logistics
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
