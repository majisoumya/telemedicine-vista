import { Link } from "react-router-dom";
import { 
  Video, 
  Pill, 
  FileText, 
  Bot,
  Heart,
  Users,
  Stethoscope,
  Shield,
  Clock,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-telemedicine.jpg";

const Landing = () => {
  const features = [
    {
      icon: Video,
      title: "Video Consultations",
      description: "Connect with qualified doctors from anywhere"
    },
    {
      icon: Pill,
      title: "Medicine Availability",
      description: "Check stock at local pharmacies instantly"
    },
    {
      icon: FileText,
      title: "Health Records",
      description: "Secure digital health record management"
    },
    {
      icon: Bot,
      title: "AI Symptom Checker",
      description: "Smart preliminary health assessment"
    }
  ];

  const stats = [
    { number: "50+", label: "Rural Areas Served" },
    { number: "100+", label: "Qualified Doctors" },
    { number: "1000+", label: "Patients Helped" },
    { number: "24/7", label: "Emergency Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary-light rounded-full shadow-glow">
                <Heart className="h-12 w-12 text-primary" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Accessible Rural Healthcare
              <span className="block text-primary">Nabha Telemedicine Platform</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Video consultations, medicine availability & offline health records
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="shadow-medical">
                <Link to="/patient">
                  <Video className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="shadow-card">
                <Link to="/pharmacy">
                  <Pill className="mr-2 h-5 w-5" />
                  Check Medicine Availability
                </Link>
              </Button>
              
              <Button asChild variant="secondary" size="lg" className="shadow-card">
                <Link to="/patient">
                  <FileText className="mr-2 h-5 w-5" />
                  View Health Records
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Healthcare Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bringing quality healthcare to rural communities through technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-medical transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary-light rounded-full">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-light">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Healthcare When You Need It
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Access quality healthcare services from the comfort of your home. Our platform is designed to work even with limited internet connectivity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-medical">
                <Link to="/patient">
                  <Users className="mr-2 h-5 w-5" />
                  Get Started as Patient
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="shadow-card">
                <Link to="/doctor">
                  <Stethoscope className="mr-2 h-5 w-5" />
                  Doctor Portal
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center mt-8 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-2" />
              Available 24/7 for emergency consultations
              <MapPin className="h-4 w-4 ml-4 mr-2" />
              Serving 50+ rural communities
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;