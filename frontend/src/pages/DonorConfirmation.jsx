import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, MapPin, Home, Car, Stethoscope, Brain } from "lucide-react";

export default function DonorConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const requestData = location.state?.request;

  const [selectedService, setSelectedService] = useState("");
  const [selectedTest, setSelectedTest] = useState("");
  const [donationMethod, setDonationMethod] = useState("");
  const [needsCab, setNeedsCab] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const medicalTests = [
    {
      id: "cbc",
      name: "Complete Blood Count (CBC)",
      description: "Comprehensive blood analysis including RBC, WBC, platelets",
      duration: "15 minutes",
    },
    {
      id: "sugar",
      name: "Blood Sugar Test",
      description: "Random blood glucose level check",
      duration: "5 minutes",
    },
    {
      id: "hba1c",
      name: "HbA1c Test",
      description: "3-month average blood sugar level",
      duration: "10 minutes",
    },
    {
      id: "widal",
      name: "Widal Test",
      description: "Typhoid fever detection test",
      duration: "20 minutes",
    },
    {
      id: "lipid",
      name: "Lipid Profile",
      description: "Cholesterol and triglyceride levels",
      duration: "10 minutes",
    },
    {
      id: "liver",
      name: "Liver Function Test",
      description: "Check liver health and enzyme levels",
      duration: "15 minutes",
    },
  ];

  const therapySessions = [
    {
      id: "meditation",
      name: "Guided Meditation Session",
      description: "30-minute relaxation and mindfulness session",
      duration: "30 minutes",
    },
    {
      id: "massage",
      name: "Therapeutic Massage",
      description: "Professional stress-relief massage therapy",
      duration: "45 minutes",
    },
    {
      id: "counseling",
      name: "Wellness Counseling",
      description: "One-on-one session with wellness expert",
      duration: "30 minutes",
    },
    {
      id: "yoga",
      name: "Yoga Session",
      description: "Gentle yoga for stress relief and flexibility",
      duration: "40 minutes",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      const confirmationData = {
        requestId: requestData?.id,
        selectedService,
        selectedTest,
        donationMethod,
        needsCab: donationMethod === "center" ? needsCab : false,
        timestamp: new Date().toISOString(),
      };

      console.log("Donation confirmation:", confirmationData);

      // Here you would send this data to your backend
      // await fetch('/api/confirm-donation', { ... })

      setTimeout(() => {
        alert("Thank you! Your donation has been confirmed. You'll receive further instructions shortly.");
        navigate("/donor-response");
      }, 2000);
    } catch (error) {
      console.error("Error confirming donation:", error);
      alert("There was an error processing your confirmation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!requestData) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Invalid Request</h2>
        <p className="text-gray-600 mb-6">No request data found. Please go back and try again.</p>
        <button
          onClick={() => navigate("/donor-response")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Back to Requests
        </button>
      </div>
    );
  }

  return (
    <div className="py-10 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-green-600 mb-2">
          Thank You for Your Generosity!
        </h1>
        <p className="text-gray-600">
          You've accepted to donate blood to <strong>{requestData.hospital}</strong>
        </p>
      </div>

      {/* Request Details */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
        <h3 className="font-semibold text-lg mb-4">Donation Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium">Hospital:</span> {requestData.hospital}
          </div>
          <div>
            <span className="font-medium">Blood Type:</span> {requestData.bloodType}
          </div>
          <div>
            <span className="font-medium">Units Needed:</span> {requestData.units}
          </div>
          <div>
            <span className="font-medium">Urgency:</span> {requestData.urgency}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Service Selection */}
        <div className="bg-white border rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-blue-600" />
            Choose Your Complimentary Service
          </h3>
          <p className="text-gray-600 mb-6">
            As a token of appreciation, please select one complimentary service:
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-3 text-blue-700">Medical Tests (Free Health Checkup)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {medicalTests.map((test) => (
                  <label
                    key={test.id}
                    className={`border rounded-lg p-4 cursor-pointer transition ${
                      selectedService === "medical" && selectedTest === test.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="service"
                      value="medical"
                      checked={selectedService === "medical" && selectedTest === test.id}
                      onChange={() => {
                        setSelectedService("medical");
                        setSelectedTest(test.id);
                      }}
                      className="sr-only"
                    />
                    <div className="font-medium text-sm">{test.name}</div>
                    <div className="text-xs text-gray-600 mt-1">{test.description}</div>
                    <div className="text-xs text-blue-600 mt-2">Duration: {test.duration}</div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-purple-700">Stress-Busting Therapy Sessions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {therapySessions.map((therapy) => (
                  <label
                    key={therapy.id}
                    className={`border rounded-lg p-4 cursor-pointer transition ${
                      selectedService === "therapy" && selectedTest === therapy.id
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200 hover:border-purple-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="service"
                      value="therapy"
                      checked={selectedService === "therapy" && selectedTest === therapy.id}
                      onChange={() => {
                        setSelectedService("therapy");
                        setSelectedTest(therapy.id);
                      }}
                      className="sr-only"
                    />
                    <div className="font-medium text-sm">{therapy.name}</div>
                    <div className="text-xs text-gray-600 mt-1">{therapy.description}</div>
                    <div className="text-xs text-purple-600 mt-2">Duration: {therapy.duration}</div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Donation Method */}
        <div className="bg-white border rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-600" />
            Donation Location Preference
          </h3>
          <p className="text-gray-600 mb-6">
            How would you prefer to donate blood?
          </p>

          <div className="space-y-4">
            <label className={`border rounded-lg p-4 cursor-pointer flex items-center gap-4 transition ${
              donationMethod === "center" ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-red-300"
            }`}>
              <input
                type="radio"
                name="donationMethod"
                value="center"
                checked={donationMethod === "center"}
                onChange={(e) => setDonationMethod(e.target.value)}
                className="w-4 h-4 text-red-600"
              />
              <MapPin className="w-6 h-6 text-red-600" />
              <div className="flex-1">
                <div className="font-medium">Visit Hospital/Blood Center</div>
                <div className="text-sm text-gray-600">
                  Donate at {requestData.location || "the hospital location"}
                </div>
              </div>
            </label>

            <label className={`border rounded-lg p-4 cursor-pointer flex items-center gap-4 transition ${
              donationMethod === "pickup" ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-red-300"
            }`}>
              <input
                type="radio"
                name="donationMethod"
                value="pickup"
                checked={donationMethod === "pickup"}
                onChange={(e) => setDonationMethod(e.target.value)}
                className="w-4 h-4 text-red-600"
              />
              <Home className="w-6 h-6 text-red-600" />
              <div className="flex-1">
                <div className="font-medium">Home Pickup Service</div>
                <div className="text-sm text-gray-600">
                  Our medical team will visit your location
                </div>
              </div>
            </label>
          </div>

          {/* Cab Service Option */}
          {donationMethod === "center" && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={needsCab}
                  onChange={(e) => setNeedsCab(e.target.checked)}
                  className="w-4 h-4 text-blue-600"
                />
                <Car className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium">Free Cab Service</div>
                  <div className="text-sm text-gray-600">
                    We'll arrange free transportation to and from the donation center
                  </div>
                </div>
              </label>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={!selectedService || !donationMethod || isSubmitting}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition ${
              !selectedService || !donationMethod || isSubmitting
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700 hover:shadow-lg"
            }`}
          >
            {isSubmitting ? "Confirming..." : "Confirm Donation & Book Services"}
          </button>
        </div>
      </form>

      {/* Footer Note */}
      <div className="mt-8 text-center text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
        <p>
          <strong>Note:</strong> After confirmation, you'll receive an SMS with detailed instructions, 
          timing, and location details. Our team will contact you within 30 minutes to coordinate the donation.
        </p>
      </div>
    </div>
  );
}
