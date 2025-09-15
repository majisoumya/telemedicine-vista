import { useState } from "react";
import { 
  Video, 
  Calendar, 
  FileText, 
  Pill,
  Bot,
  Clock,
  User,
  Phone,
  MapPin,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PatientDashboard = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("");

  // Dummy data
  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Rajesh Kumar",
      specialty: "General Medicine",
      date: "2024-01-15",
      time: "10:00 AM",
      type: "Video Call",
      status: "confirmed"
    },
    {
      id: 2,
      doctor: "Dr. Priya Sharma",
      specialty: "Pediatrics",
      date: "2024-01-18",
      time: "2:30 PM",
      type: "Video Call",
      status: "pending"
    }
  ];

  const healthRecords = [
    {
      id: 1,
      date: "2024-01-10",
      doctor: "Dr. Rajesh Kumar",
      diagnosis: "Seasonal Flu",
      prescription: "Rest, fluids, paracetamol",
      status: "completed"
    },
    {
      id: 2,
      date: "2024-01-05",
      doctor: "Dr. Amit Singh",
      diagnosis: "Blood Pressure Check",
      prescription: "Regular monitoring",
      status: "completed"
    },
    {
      id: 3,
      date: "2023-12-28",
      doctor: "Dr. Priya Sharma",
      diagnosis: "Routine Checkup",
      prescription: "Healthy lifestyle maintained",
      status: "completed"
    }
  ];

  const availableDoctors = [
    { name: "Dr. Rajesh Kumar", specialty: "General Medicine", available: true },
    { name: "Dr. Priya Sharma", specialty: "Pediatrics", available: true },
    { name: "Dr. Amit Singh", specialty: "Cardiology", available: false },
    { name: "Dr. Sunita Patel", specialty: "Gynecology", available: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Patient Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your health appointments and records
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Book Appointment Section */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Video className="mr-2 h-5 w-5 text-primary" />
                  Book Video Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Select Doctor
                    </label>
                    <select 
                      className="w-full p-2 border border-border rounded-md bg-background"
                      value={selectedDoctor}
                      onChange={(e) => setSelectedDoctor(e.target.value)}
                    >
                      <option value="">Choose a doctor...</option>
                      {availableDoctors.map((doctor, index) => (
                        <option 
                          key={index} 
                          value={doctor.name}
                          disabled={!doctor.available}
                        >
                          {doctor.name} - {doctor.specialty} 
                          {!doctor.available && " (Unavailable)"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Preferred Date
                    </label>
                    <input 
                      type="date" 
                      className="w-full p-2 border border-border rounded-md bg-background"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="shadow-medical">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Appointment
                  </Button>
                  <Button variant="outline" className="shadow-card">
                    <Phone className="mr-2 h-4 w-4" />
                    Emergency Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Health Records */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-primary" />
                  Recent Health Records
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {healthRecords.map((record) => (
                    <div key={record.id} className="border border-border rounded-lg p-4 bg-gradient-card">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {record.diagnosis}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Dr. {record.doctor}
                          </p>
                        </div>
                        <Badge variant="secondary">{record.date}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Prescription: {record.prescription}
                      </p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 shadow-card">
                  <FileText className="mr-2 h-4 w-4" />
                  View All Records
                </Button>
              </CardContent>
            </Card>

            {/* Medicine Checker */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Pill className="mr-2 h-5 w-5 text-primary" />
                  Check Medicine Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  <input 
                    type="text" 
                    placeholder="Enter medicine name..."
                    className="flex-1 p-2 border border-border rounded-md bg-background"
                  />
                  <Button variant="outline" className="shadow-card">
                    Search
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Find availability at nearby pharmacies
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start shadow-card">
                  <Bot className="mr-2 h-4 w-4" />
                  AI Symptom Checker
                  <Badge variant="secondary" className="ml-auto">Coming Soon</Badge>
                </Button>
                <Button variant="outline" className="w-full justify-start shadow-card">
                  <MapPin className="mr-2 h-4 w-4" />
                  Find Nearby Clinics
                </Button>
                <Button variant="outline" className="w-full justify-start shadow-card">
                  <Activity className="mr-2 h-4 w-4" />
                  Health Reports
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Appointments */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  Upcoming Appointments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="p-3 border border-border rounded-lg bg-gradient-card">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">
                          {appointment.doctor}
                        </span>
                        <Badge 
                          variant={appointment.status === "confirmed" ? "default" : "secondary"}
                        >
                          {appointment.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {appointment.specialty}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {appointment.date} at {appointment.time}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Available Doctors */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  Available Doctors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {availableDoctors.map((doctor, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <div>
                        <p className="text-sm font-medium">{doctor.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {doctor.specialty}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full ${
                          doctor.available ? "bg-primary" : "bg-muted"
                        }`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;