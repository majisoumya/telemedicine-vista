import { useState } from "react";
import { 
  Calendar, 
  Video, 
  FileText, 
  Upload,
  Clock,
  User,
  Phone,
  CheckCircle,
  AlertCircle,
  Plus,
  Search,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const DoctorDashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState("");
  const [newRecord, setNewRecord] = useState({ diagnosis: "", prescription: "", notes: "" });

  // Dummy data
  const upcomingAppointments = [
    {
      id: 1,
      patient: "Rajinder Singh",
      age: 45,
      time: "10:00 AM",
      type: "Video Call",
      status: "scheduled",
      complaint: "Fever and cough",
      phone: "+91-9876543201"
    },
    {
      id: 2,
      patient: "Simran Kaur",
      age: 32,
      time: "11:30 AM",
      type: "Video Call",
      status: "in-progress",
      complaint: "Blood pressure check",
      phone: "+91-9876543202"
    },
    {
      id: 3,
      patient: "Gurpreet Singh",
      age: 28,
      time: "2:00 PM",
      type: "Video Call",
      status: "scheduled",
      complaint: "Skin allergy",
      phone: "+91-9876543203"
    },
    {
      id: 4,
      patient: "Manpreet Kaur",
      age: 55,
      time: "3:30 PM",
      type: "Follow-up",
      status: "scheduled",
      complaint: "Diabetes monitoring",
      phone: "+91-9876543204"
    }
  ];

  const recentPatients = [
    {
      id: 1,
      name: "Harjeet Singh",
      age: 42,
      lastVisit: "2024-01-12",
      condition: "Hypertension",
      status: "stable"
    },
    {
      id: 2,
      name: "Kuldeep Kaur",
      age: 38,
      lastVisit: "2024-01-11",
      condition: "Diabetes Type 2",
      status: "monitoring"
    },
    {
      id: 3,
      name: "Jasbir Singh",
      age: 67,
      lastVisit: "2024-01-10",
      condition: "Arthritis",
      status: "treatment"
    }
  ];

  const todayStats = {
    totalAppointments: 8,
    completed: 4,
    upcoming: 4,
    cancelled: 0
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "in-progress":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case "completed":
        return <CheckCircle className="h-4 w-4 text-primary" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "in-progress":
        return "secondary";
      case "completed":
        return "default";
      case "cancelled":
        return "destructive";
      default:
        return "outline";
    }
  };

  const handleSaveRecord = () => {
    // Handle saving patient record
    console.log("Saving record:", { selectedPatient, ...newRecord });
    setNewRecord({ diagnosis: "", prescription: "", notes: "" });
    setSelectedPatient("");
  };

  return (
    <div className="min-h-screen bg-gradient-soft py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Doctor Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage appointments and patient records - Dr. Rajesh Kumar
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">
                {todayStats.totalAppointments}
              </div>
              <div className="text-sm text-muted-foreground">
                Total Today
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">
                {todayStats.completed}
              </div>
              <div className="text-sm text-muted-foreground">
                Completed
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-secondary mb-1">
                {todayStats.upcoming}
              </div>
              <div className="text-sm text-muted-foreground">
                Upcoming
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-muted-foreground mb-1">
                {todayStats.cancelled}
              </div>
              <div className="text-sm text-muted-foreground">
                Cancelled
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Appointments */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-primary" />
                  Today's Appointments - January 15, 2024
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="border border-border rounded-lg p-4 bg-gradient-card">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-foreground">
                              {appointment.patient}
                            </h4>
                            <Badge variant="outline">
                              Age {appointment.age}
                            </Badge>
                            {getStatusIcon(appointment.status)}
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">
                            {appointment.complaint}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {appointment.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <Video className="h-3 w-3" />
                              {appointment.type}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Badge variant={getStatusBadgeVariant(appointment.status)}>
                            {appointment.status}
                          </Badge>
                          <div className="flex gap-1">
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="shadow-card"
                              onClick={() => window.open(`tel:${appointment.phone}`)}
                            >
                              <Phone className="h-3 w-3" />
                            </Button>
                            <Button 
                              size="sm"
                              className="shadow-medical"
                              disabled={appointment.status !== "scheduled"}
                            >
                              <Video className="h-3 w-3 mr-1" />
                              {appointment.status === "in-progress" ? "Join" : "Start"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Add/Update Patient Records */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-primary" />
                  Add/Update Patient Record
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Select Patient
                    </label>
                    <select 
                      className="w-full p-2 border border-border rounded-md bg-background"
                      value={selectedPatient}
                      onChange={(e) => setSelectedPatient(e.target.value)}
                    >
                      <option value="">Choose a patient...</option>
                      {upcomingAppointments.map((appointment) => (
                        <option key={appointment.id} value={appointment.patient}>
                          {appointment.patient} (Age {appointment.age})
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Diagnosis
                    </label>
                    <Input 
                      placeholder="Enter diagnosis..."
                      value={newRecord.diagnosis}
                      onChange={(e) => setNewRecord({...newRecord, diagnosis: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Prescription
                    </label>
                    <Textarea 
                      placeholder="Enter prescription details..."
                      value={newRecord.prescription}
                      onChange={(e) => setNewRecord({...newRecord, prescription: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Notes
                    </label>
                    <Textarea 
                      placeholder="Additional notes..."
                      value={newRecord.notes}
                      onChange={(e) => setNewRecord({...newRecord, notes: e.target.value})}
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      onClick={handleSaveRecord} 
                      disabled={!selectedPatient || !newRecord.diagnosis}
                      className="shadow-medical"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Save Record
                    </Button>
                    <Button variant="outline" className="shadow-card">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Files
                    </Button>
                  </div>
                </div>
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
                  <Video className="mr-2 h-4 w-4" />
                  Start Emergency Call
                </Button>
                <Button variant="outline" className="w-full justify-start shadow-card">
                  <FileText className="mr-2 h-4 w-4" />
                  View All Records
                </Button>
                <Button variant="outline" className="w-full justify-start shadow-card">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Appointment
                </Button>
              </CardContent>
            </Card>

            {/* Recent Patients */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  Recent Patients
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentPatients.map((patient) => (
                    <div key={patient.id} className="p-3 border border-border rounded-lg bg-gradient-card">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">
                          {patient.name}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          Age {patient.age}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">
                        {patient.condition}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">
                          Last visit: {patient.lastVisit}
                        </p>
                        <Badge 
                          variant={patient.status === "stable" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {patient.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-3 shadow-card">
                  <Search className="mr-2 h-4 w-4" />
                  Search Patients
                </Button>
              </CardContent>
            </Card>

            {/* Today's Schedule */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  Schedule Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Morning Slots:</span>
                    <span className="font-medium">3 appointments</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Afternoon Slots:</span>
                    <span className="font-medium">5 appointments</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Available Slots:</span>
                    <span className="font-medium text-primary">2 remaining</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-3 shadow-card">
                  <Filter className="mr-2 h-4 w-4" />
                  Manage Schedule
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;