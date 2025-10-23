import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import beefImage from "@/assets/beef.jpg";
import chickenImage from "@/assets/chicken.png";
import sausagesImage from "@/assets/sausages.png";
import brisketImage from "@/assets/brisket.png";
import porkBalykImage from "@/assets/pork-balyk.png";
import mozzarellaImage from "@/assets/mozzarella.png";
import cheddarImage from "@/assets/cheddar.jpg";

const Products = () => {
  const products = [
    {
      name: "Premium Beef",
      image: beefImage,
      category: "Meat",
      description: "High-quality beef cuts sourced from certified European suppliers. Perfect for retail chains and restaurants requiring consistent quality.",
      features: ["Various cuts available", "Vacuum sealed", "Certified origin", "Wholesale packaging"],
    },
    {
      name: "Chicken Fillet",
      image: chickenImage,
      category: "Poultry",
      description: "Fresh, tender chicken fillets meeting the highest food safety standards. Ideal for diverse culinary applications.",
      features: ["Boneless cuts", "Quick-freeze technology", "HACCP certified", "Customizable packaging"],
    },
    {
      name: "Sausages for Grilling",
      image: sausagesImage,
      category: "Meat",
      description: "Premium grilling sausages crafted with traditional recipes. Perfect for retail distribution and food service.",
      features: ["Multiple varieties", "Natural casings", "No artificial additives", "Extended shelf life"],
    },
    {
      name: "Brisket",
      image: brisketImage,
      category: "Meat",
      description: "Prime brisket cuts ideal for smoking and slow cooking. Popular choice for restaurants and specialty food distributors.",
      features: ["Premium marbling", "Consistent quality", "Portion control options", "Frozen or chilled"],
    },
    {
      name: "Pork Balyk",
      image: porkBalykImage,
      category: "Delicatessen",
      description: "Traditional smoked pork delicacy, expertly cured. A premium offering for delicatessen sections and upscale retailers.",
      features: ["Traditional recipe", "Carefully smoked", "Sliced or whole", "Premium packaging"],
    },
    {
      name: "Mozzarella",
      image: mozzarellaImage,
      category: "Dairy",
      description: "Fresh mozzarella cheese in brine, Italian-style quality. Perfect for pizzerias, restaurants, and retail distribution.",
      features: ["Multiple sizes", "Fresh daily production", "Extended shelf life", "Food service packaging"],
    },
    {
      name: "Cheddar Cheese",
      image: cheddarImage,
      category: "Dairy",
      description: "Aged cheddar cheese with rich, distinctive flavor. Available in various maturity levels for diverse market preferences.",
      features: ["Multiple aging options", "Blocks or sliced", "Consistent quality", "Retail-ready packaging"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Product Range</h1>
            <p className="text-xl text-muted-foreground">
              Premium meat and dairy products meeting international quality standards for wholesale distribution
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-square overflow-hidden flex items-center justify-center bg-muted/20">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-2xl">{product.name}</CardTitle>
                        <Badge variant="secondary" className="ml-2">{product.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="space-y-2">
                        <p className="font-semibold text-sm">Key Features:</p>
                        <ul className="space-y-1">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-center">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Custom Orders & Packaging</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We understand that different markets have unique requirements. All our products can be 
              customized in terms of packaging sizes, cuts, and specifications to meet your exact needs. 
              Contact us to discuss your specific requirements and minimum order quantities.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
