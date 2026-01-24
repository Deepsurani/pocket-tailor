import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Scissors, MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        {
          question: "How does ThreadSync work?",
          answer: "ThreadSync connects you with skilled local tailors. Simply browse our verified tailor profiles, compare their specialties and reviews, book an appointment, and get your measurements taken. Your tailor will then create custom-fitted garments just for you.",
        },
        {
          question: "How do I find a tailor near me?",
          answer: "Once you create an account, you can browse tailors by location, specialty, and customer ratings. Our platform shows you verified tailors in your area along with their portfolios, pricing, and availability.",
        },
        {
          question: "Do I need to create an account to use ThreadSync?",
          answer: "You can browse tailor profiles without an account, but you'll need to sign up to book appointments, save your measurements, and place orders. Creating an account is free and takes less than a minute.",
        },
      ],
    },
    {
      title: "Measurements & Fittings",
      questions: [
        {
          question: "How do I get measured?",
          answer: "You can either visit your chosen tailor for an in-person measurement session, or use our guided self-measurement tool with video instructions. For best results, we recommend an in-person fitting for your first order.",
        },
        {
          question: "Can I save my measurements for future orders?",
          answer: "Yes! Once your measurements are taken, they're securely stored in your account. You can use these saved measurements for future orders, and update them anytime if your body changes.",
        },
        {
          question: "What if my measurements change?",
          answer: "You can update your measurements in your dashboard at any time. We recommend getting re-measured every 6-12 months or after significant body changes to ensure the best fit.",
        },
      ],
    },
    {
      title: "Orders & Pricing",
      questions: [
        {
          question: "How much does custom tailoring cost?",
          answer: "Pricing varies by garment type, fabric choice, and tailor expertise. Simple alterations start around $20, while custom suits can range from $300-$2000+. Each tailor sets their own prices, which are displayed on their profiles.",
        },
        {
          question: "How long does it take to complete an order?",
          answer: "Turnaround time depends on the garment complexity and tailor availability. Simple alterations take 3-7 days, while custom garments typically take 2-4 weeks. Rush orders may be available for an additional fee.",
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, debit cards, and digital payment methods. Payment is processed securely through our platform, and you only pay once you've approved your order.",
        },
        {
          question: "What is your refund policy?",
          answer: "We offer free alterations if your garment doesn't fit as expected. If issues can't be resolved, refunds are handled on a case-by-case basis. Custom orders are non-refundable once production begins.",
        },
      ],
    },
    {
      title: "Fabrics & Materials",
      questions: [
        {
          question: "Can I choose my own fabric?",
          answer: "Absolutely! Many of our tailors offer a wide selection of fabrics to choose from. You can also bring your own fabric if you have something specific in mind—just discuss this with your tailor beforehand.",
        },
        {
          question: "How do I know which fabric is right for me?",
          answer: "Our tailors are experts in fabric selection and can recommend the best materials based on your garment type, climate, budget, and personal preferences. Many tailors offer fabric samples you can feel before deciding.",
        },
        {
          question: "Do you offer sustainable or eco-friendly fabrics?",
          answer: "Yes! Many of our tailors offer organic cotton, recycled materials, and sustainably sourced fabrics. Look for the 'Eco-Friendly' badge on tailor profiles or ask your tailor about sustainable options.",
        },
      ],
    },
    {
      title: "For Tailors",
      questions: [
        {
          question: "How can I join ThreadSync as a tailor?",
          answer: "We're always looking for skilled tailors! Click 'Become a Tailor' on our homepage to apply. We'll review your portfolio, verify your credentials, and get you set up on our platform within a few business days.",
        },
        {
          question: "What are the fees for tailors?",
          answer: "ThreadSync charges a small commission on completed orders. There are no monthly fees or upfront costs—you only pay when you earn. Contact us for current commission rates.",
        },
        {
          question: "How do I manage my orders and schedule?",
          answer: "Once approved, you'll have access to a tailor dashboard where you can manage your availability, view incoming orders, communicate with customers, and track payments.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Scissors className="h-6 w-6 text-accent" />
            <span className="font-display text-xl font-bold text-primary">ThreadSync</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm">Sign In</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our tailoring services, ordering process, and more.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-10">
              <h2 className="font-display text-2xl font-bold text-primary mb-6">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {category.questions.map((item, itemIndex) => (
                  <AccordionItem
                    key={itemIndex}
                    value={`${categoryIndex}-${itemIndex}`}
                    className="bg-background border border-border/50 rounded-lg px-6 data-[state=open]:shadow-sm"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-8 w-8 text-accent" />
            </div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="gold">Contact Support</Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline">Create Account</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ThreadSync. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;
