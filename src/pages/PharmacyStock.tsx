import { useState } from "react";
import { 
  Search, 
  MapPin, 
  Package,
  CheckCircle,
  XCircle,
  AlertCircle,
  Phone,
  Clock,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const PharmacyStock = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");

  // Dummy data
  const medicines = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      category: "Pain Relief",
      pharmacies: [
        { name: "Nabha Medical Store", location: "Main Market", stock: "Available", quantity: "50+ strips", phone: "+91-9876543210" },
        { name: "City Pharmacy", location: "Bus Stand", stock: "Low Stock", quantity: "5 strips", phone: "+91-9876543211" },
        { name: "Health Plus", location: "Civil Lines", stock: "Out of Stock", quantity: "0", phone: "+91-9876543212" }
      ]
    },
    {
      id: 2,
      name: "Amoxicillin 250mg",
      category: "Antibiotic",
      pharmacies: [
        { name: "Nabha Medical Store", location: "Main Market", stock: "Available", quantity: "30+ bottles", phone: "+91-9876543210" },
        { name: "Wellness Pharmacy", location: "Hospital Road", stock: "Available", quantity: "20+ bottles", phone: "+91-9876543213" },
        { name: "City Pharmacy", location: "Bus Stand", stock: "Low Stock", quantity: "3 bottles", phone: "+91-9876543211" }
      ]
    },
    {
      id: 3,
      name: "Crocin Advance",
      category: "Fever",
      pharmacies: [
        { name: "Health Plus", location: "Civil Lines", stock: "Available", quantity: "40+ strips", phone: "+91-9876543212" },
        { name: "Wellness Pharmacy", location: "Hospital Road", stock: "Available", quantity: "25+ strips", phone: "+91-9876543213" },
        { name: "Nabha Medical Store", location: "Main Market", stock: "Low Stock", quantity: "8 strips", phone: "+91-9876543210" }
      ]
    },
    {
      id: 4,
      name: "Insulin Injection",
      category: "Diabetes",
      pharmacies: [
        { name: "City Pharmacy", location: "Bus Stand", stock: "Available", quantity: "10+ vials", phone: "+91-9876543211" },
        { name: "Health Plus", location: "Civil Lines", stock: "Out of Stock", quantity: "0", phone: "+91-9876543212" },
        { name: "Wellness Pharmacy", location: "Hospital Road", stock: "Available", quantity: "15+ vials", phone: "+91-9876543213" }
      ]
    },
    {
      id: 5,
      name: "Blood Pressure Monitor",
      category: "Medical Device",
      pharmacies: [
        { name: "Nabha Medical Store", location: "Main Market", stock: "Available", quantity: "5 units", phone: "+91-9876543210" },
        { name: "Health Plus", location: "Civil Lines", stock: "Low Stock", quantity: "2 units", phone: "+91-9876543212" },
        { name: "Wellness Pharmacy", location: "Hospital Road", stock: "Out of Stock", quantity: "0", phone: "+91-9876543213" }
      ]
    }
  ];

  const locations = [
    { value: "all", label: "All Locations" },
    { value: "main-market", label: "Main Market" },
    { value: "bus-stand", label: "Bus Stand" },
    { value: "civil-lines", label: "Civil Lines" },
    { value: "hospital-road", label: "Hospital Road" }
  ];

  const getStockIcon = (stock: string) => {
    switch (stock) {
      case "Available":
        return <CheckCircle className="h-4 w-4 text-primary" />;
      case "Low Stock":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case "Out of Stock":
        return <XCircle className="h-4 w-4 text-destructive" />;
      default:
        return <Package className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStockBadgeVariant = (stock: string) => {
    switch (stock) {
      case "Available":
        return "default";
      case "Low Stock":
        return "secondary";
      case "Out of Stock":
        return "destructive";
      default:
        return "outline";
    }
  };

  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-soft py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Pharmacy Stock Checker
          </h1>
          <p className="text-muted-foreground">
            Check medicine availability at local pharmacies in real-time
          </p>
        </div>

        {/* Search and Filter */}
        <Card className="shadow-card mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search medicines..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <select 
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-3 py-2 border border-border rounded-md bg-background"
                >
                  {locations.map((location) => (
                    <option key={location.value} value={location.value}>
                      {location.label}
                    </option>
                  ))}
                </select>
                <Button variant="outline" className="shadow-card">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medicine List */}
        <div className="space-y-4">
          {filteredMedicines.map((medicine) => (
            <Card key={medicine.id} className="shadow-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{medicine.name}</CardTitle>
                    <Badge variant="outline" className="mt-1">
                      {medicine.category}
                    </Badge>
                  </div>
                  <Package className="h-6 w-6 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {medicine.pharmacies.map((pharmacy, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg bg-gradient-card">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground">
                            {pharmacy.name}
                          </h4>
                          {getStockIcon(pharmacy.stock)}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {pharmacy.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Package className="h-3 w-3" />
                            {pharmacy.quantity}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Badge variant={getStockBadgeVariant(pharmacy.stock)}>
                          {pharmacy.stock}
                        </Badge>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="shadow-card"
                          onClick={() => window.open(`tel:${pharmacy.phone}`)}
                        >
                          <Phone className="h-3 w-3 mr-1" />
                          Call
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredMedicines.length === 0 && (
          <Card className="shadow-card">
            <CardContent className="text-center py-12">
              <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No medicines found
              </h3>
              <p className="text-muted-foreground mb-4">
                Try searching with different keywords or check all locations
              </p>
              <Button 
                variant="outline" 
                onClick={() => setSearchTerm("")}
                className="shadow-card"
              >
                Clear Search
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Emergency Contact */}
        <Card className="shadow-card mt-6 bg-primary-light">
          <CardContent className="text-center py-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                Emergency Medicine Required?
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Call our 24/7 emergency pharmacy helpline
            </p>
            <Button className="shadow-medical">
              <Phone className="mr-2 h-4 w-4" />
              Emergency Helpline: 1800-NABHA-MED
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PharmacyStock;