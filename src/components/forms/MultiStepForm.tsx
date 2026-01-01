import { useState } from "react";
import { ChevronRight, ChevronLeft, Check, Home, Palette, Calendar, DollarSign, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { id: 1, title: "Project Type", icon: Home },
  { id: 2, title: "Style & Features", icon: Palette },
  { id: 3, title: "Timeline", icon: Calendar },
  { id: 4, title: "Budget", icon: DollarSign },
  { id: 5, title: "Contact Info", icon: User },
];

const projectTypes = [
  "Full Kitchen Remodel",
  "Cabinet Replacement",
  "Countertop Installation",
  "Backsplash Installation",
  "Kitchen Island",
  "Flooring",
  "Lighting Update",
  "Minor Updates",
];

const styles = [
  "Modern/Contemporary",
  "Traditional",
  "Transitional",
  "Farmhouse",
  "Industrial",
  "Coastal",
  "Minimalist",
  "Not Sure Yet",
];

const timelines = [
  "As soon as possible",
  "Within 1-2 months",
  "Within 3-6 months",
  "6+ months out",
  "Just exploring options",
];

const budgets = [
  "Under $15,000",
  "$15,000 - $30,000",
  "$30,000 - $50,000",
  "$50,000 - $75,000",
  "$75,000+",
  "Not sure yet",
];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    projectType: [] as string[],
    style: "",
    features: "",
    timeline: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const updateFormData = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleProjectType = (type: string) => {
    const current = formData.projectType;
    if (current.includes(type)) {
      updateFormData("projectType", current.filter((t) => t !== type));
    } else {
      updateFormData("projectType", [...current, type]);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.projectType.length > 0;
      case 2:
        return formData.style !== "";
      case 3:
        return formData.timeline !== "";
      case 4:
        return formData.budget !== "";
      case 5:
        return formData.name && formData.email && formData.phone;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsComplete(true);
    
    toast({
      title: "Request Submitted!",
      description: "We'll contact you within 24 hours to discuss your project.",
    });
  };

  if (isComplete) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-heading font-bold mb-4">Thank You!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Your project details have been submitted. A member of our team will contact you within 24 hours to discuss your kitchen remodeling project.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8 overflow-x-auto pb-2">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div
              className={`flex flex-col items-center ${
                index < steps.length - 1 ? "flex-1" : ""
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  currentStep > step.id
                    ? "bg-green-500 text-white"
                    : currentStep === step.id
                    ? "bg-accent text-primary"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {currentStep > step.id ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <step.icon className="w-5 h-5" />
                )}
              </div>
              <span
                className={`text-xs mt-2 whitespace-nowrap ${
                  currentStep >= step.id
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-0.5 w-8 md:w-16 mx-2 ${
                  currentStep > step.id ? "bg-green-500" : "bg-muted"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Form Steps */}
      <div className="min-h-[300px]">
        {/* Step 1: Project Type */}
        {currentStep === 1 && (
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-heading font-bold mb-2">
              What type of project are you planning?
            </h3>
            <p className="text-muted-foreground mb-6">Select all that apply</p>
            <div className="grid grid-cols-2 gap-3">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => toggleProjectType(type)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    formData.projectType.includes(type)
                      ? "border-accent bg-accent/10 text-foreground"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <span className="font-medium">{type}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Style */}
        {currentStep === 2 && (
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-heading font-bold mb-2">
              What style are you going for?
            </h3>
            <p className="text-muted-foreground mb-6">
              Select your preferred kitchen style
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {styles.map((style) => (
                <button
                  key={style}
                  type="button"
                  onClick={() => updateFormData("style", style)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    formData.style === style
                      ? "border-accent bg-accent/10 text-foreground"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <span className="font-medium">{style}</span>
                </button>
              ))}
            </div>
            <div>
              <Label htmlFor="features">Any specific features you want?</Label>
              <Textarea
                id="features"
                placeholder="E.g., large island, double oven, walk-in pantry..."
                value={formData.features}
                onChange={(e) => updateFormData("features", e.target.value)}
                className="mt-2"
              />
            </div>
          </div>
        )}

        {/* Step 3: Timeline */}
        {currentStep === 3 && (
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-heading font-bold mb-2">
              When are you looking to start?
            </h3>
            <p className="text-muted-foreground mb-6">
              This helps us plan our schedule
            </p>
            <div className="grid gap-3">
              {timelines.map((timeline) => (
                <button
                  key={timeline}
                  type="button"
                  onClick={() => updateFormData("timeline", timeline)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    formData.timeline === timeline
                      ? "border-accent bg-accent/10 text-foreground"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <span className="font-medium">{timeline}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Budget */}
        {currentStep === 4 && (
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-heading font-bold mb-2">
              What's your estimated budget?
            </h3>
            <p className="text-muted-foreground mb-6">
              This helps us recommend the best options for you
            </p>
            <div className="grid gap-3">
              {budgets.map((budget) => (
                <button
                  key={budget}
                  type="button"
                  onClick={() => updateFormData("budget", budget)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    formData.budget === budget
                      ? "border-accent bg-accent/10 text-foreground"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <span className="font-medium">{budget}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Contact Info */}
        {currentStep === 5 && (
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-heading font-bold mb-2">
              Almost there! How can we reach you?
            </h3>
            <p className="text-muted-foreground mb-6">
              We'll contact you within 24 hours
            </p>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    placeholder="John Smith"
                    className="mt-1.5"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    placeholder="(253) 555-0123"
                    className="mt-1.5"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  placeholder="john@example.com"
                  className="mt-1.5"
                  required
                />
              </div>
              <div>
                <Label htmlFor="address">Project Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => updateFormData("address", e.target.value)}
                  placeholder="123 Main St, Tacoma, WA"
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="message">Additional Notes</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => updateFormData("message", e.target.value)}
                  placeholder="Anything else you'd like us to know?"
                  className="mt-1.5"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8 pt-6 border-t border-border">
        <Button
          type="button"
          variant="outline"
          onClick={() => setCurrentStep((prev) => prev - 1)}
          disabled={currentStep === 1}
          className="gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </Button>

        {currentStep < 5 ? (
          <Button
            type="button"
            onClick={() => setCurrentStep((prev) => prev + 1)}
            disabled={!canProceed()}
            className="gap-2 bg-accent text-primary hover:bg-accent/90"
          >
            Continue
            <ChevronRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={!canProceed() || isSubmitting}
            className="gap-2 bg-accent text-primary hover:bg-accent/90"
          >
            {isSubmitting ? "Submitting..." : "Get My Free Estimate"}
          </Button>
        )}
      </div>
    </div>
  );
}
