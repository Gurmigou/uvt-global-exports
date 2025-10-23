import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Globe, Award, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import beefImage from "@/assets/beef.jpg";
import chickenImage from "@/assets/chicken.jpg";
import sausagesImage from "@/assets/sausages.png";
import brisketImage from "@/assets/brisket.jpg";
import porkBalykImage from "@/assets/pork-balyk.jpg";
import mozzarellaImage from "@/assets/mozzarella.jpg";
import cheddarImage from "@/assets/cheddar.jpg";

const Home = () => {
  const products = [
    { name: "Premium Beef", image: beefImage, description: "Finest cuts for discerning markets" },
    { name: "Chicken Fillet", image: chickenImage, description: "Fresh, high-quality poultry" },
    { name: "Grilling Sausages", image: sausagesImage, description: "Gourmet sausages for every occasion" },
    { name: "Brisket", image: brisketImage, description: "Premium brisket cuts" },
    { name: "Pork Balyk", image: porkBalykImage, description: "Delicate smoked pork delicacy" },
    { name: "Mozzarella", image: mozzarellaImage, description: "Fresh Italian-style cheese" },
    { name: "Cheddar Cheese", image: cheddarImage, description: "Aged to perfection" },
  ];

  const features = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Reach",
      description: "Specialized expertise in global foods supplies and reliable logistics",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "European Quality",
      description: "Meeting the highest international food safety standards",
    },
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "Reliable Supply",
      description: "Consistent delivery and long-term partnership focus",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium meat and dairy products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Premium Meat & Dairy Exports
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Your trusted partner for high-quality food exports
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/products">View Products</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-foreground">
              <Link to="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Welcome to DAS Group Global</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a leading international exporter, we specialize in delivering premium meat and dairy products 
              to distributors, retail chains, and restaurants.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose DAS Group Global</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Premium Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              High-quality meat and dairy products meeting international standards
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join leading distributors and retailers who trust DAS Group Global for their premium food supply needs
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-foreground hover:bg-white/90">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
