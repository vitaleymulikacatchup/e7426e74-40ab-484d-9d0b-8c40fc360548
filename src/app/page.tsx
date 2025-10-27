"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Star, Gift, Sparkles, Crown, Trophy, Users, Heart, ChefHat, MessageCircle, Handshake, HelpCircle, Mail } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Sweet Delights Bakery"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Freshly Baked Perfection"
          description="From artisan breads to custom wedding cakes, we create delicious memories with the finest ingredients and traditional techniques passed down through generations."
          tag="Est. 2015"
          tagIcon={Award}
          buttons={[
            { text: "View Menu", href: "products" },
            { text: "Order Online", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/4048668/pexels-photo-4048668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern bakery interior with fresh bread and pastries"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Started in 2015 with a passion for traditional baking methods and premium ingredients, Sweet Delights has become the neighborhood's favorite destination for fresh, artisanal baked goods.",
            "We believe in the power of handcrafted treats to bring people together, celebrating life's special moments with cakes, pastries, and breads made with love and expertise."
          ]}
          buttons={[
            { text: "Learn More", href: "about" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="products" data-section="products">
        <FeatureCardOne
          title="Our Specialties"
          description="Discover our signature creations, made fresh daily with the finest ingredients"
          tag="Featured"
          tagIcon={Star}
          features={[
            {
              title: "Fresh Croissants",
              description: "Buttery, flaky croissants baked fresh every morning with imported French butter",
              imageSrc: "https://images.pexels.com/photos/6205522/pexels-photo-6205522.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Golden fresh croissants"
            },
            {
              title: "Wedding Cakes",
              description: "Custom wedding cakes designed to make your special day unforgettable",
              imageSrc: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant white wedding cake"
            },
            {
              title: "Artisan Breads",
              description: "Traditional sourdough and specialty breads with authentic European techniques",
              imageSrc: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Artisan sourdough bread loaves"
            },
            {
              title: "French Pastries",
              description: "Delicate macarons, éclairs, and tarts crafted by our expert pastry chefs",
              imageSrc: "https://images.pexels.com/photos/4906454/pexels-photo-4906454.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Colorful french pastries and macarons"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Custom Order Packages"
          description="Perfect pricing for your special occasions and events"
          tag="Packages"
          tagIcon={Gift}
          plans={[
            {
              id: "basic",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$150+",
              subtitle: "Perfect for small gatherings",
              features: [
                "Custom birthday cake",
                "Up to 20 servings",
                "Basic decoration",
                "1 flavor choice"
              ]
            },
            {
              id: "premium",
              badge: "Best Value",
              badgeIcon: Award,
              price: "$350+",
              subtitle: "Ideal for special celebrations",
              features: [
                "Multi-tier cake design",
                "Up to 50 servings",
                "Advanced decoration",
                "Multiple flavor layers",
                "Delivery included"
              ]
            },
            {
              id: "wedding",
              badge: "Luxury",
              badgeIcon: Crown,
              price: "$750+",
              subtitle: "Your dream wedding cake",
              features: [
                "Full wedding cake suite",
                "100+ servings",
                "Premium decoration",
                "Unlimited design revisions",
                "Setup & delivery",
                "Cake tasting session"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Sweet Success"
          description="Numbers that showcase our commitment to quality and community"
          tag="Achievements"
          tagIcon={Trophy}
          metrics={[
            {
              id: "1",
              value: "15K+",
              title: "happy customers",
              description: "Satisfied customers who keep coming back",
              icon: Users
            },
            {
              id: "2",
              value: "500+",
              title: "wedding cakes",
              description: "Beautiful wedding cakes created",
              icon: Heart
            },
            {
              id: "3",
              value: "1000+",
              title: "daily items",
              description: "Fresh items baked every single day",
              icon: ChefHat
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Customers Say"
          description="Real reviews from our valued customers"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "@sarahj_events",
              testimonial: "The wedding cake was absolutely perfect! Every guest asked where we got it from. The attention to detail and taste exceeded our expectations.",
              imageSrc: "https://images.pexels.com/photos/8558897/pexels-photo-8558897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Mike Chen",
              handle: "@mike_foodie",
              testimonial: "Best croissants in the city! I come here every morning for my coffee and pastry. The quality is consistently amazing.",
              imageSrc: "https://images.pexels.com/photos/3777565/pexels-photo-3777565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mike Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              handle: "@emma_parties",
              testimonial: "They saved my daughter's birthday party! Last-minute order and they delivered the most beautiful custom cake. Forever grateful!",
              imageSrc: "https://images.pexels.com/photos/23496599/pexels-photo-23496599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              handle: "@david_baker",
              testimonial: "As a fellow baker, I can appreciate true craftsmanship. Their sourdough technique is exceptional. Highly recommend!",
              imageSrc: "https://images.pexels.com/photos/8000609/pexels-photo-8000609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim"
            },
            {
              id: "5",
              name: "Lisa Thompson",
              handle: "@lisa_events",
              testimonial: "Professional service and incredible taste. They handled our corporate event beautifully. Will definitely use them again.",
              imageSrc: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Thompson"
            },
            {
              id: "6",
              name: "James Wilson",
              handle: "@chef_james",
              testimonial: "Their pastries are works of art. The French techniques are authentic and the flavors are outstanding. A true gem!",
              imageSrc: "https://images.pexels.com/photos/7552730/pexels-photo-7552730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Wilson"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Local Businesses"
          description="Proud partners with restaurants, hotels, and event venues across the city"
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "https://images.pexels.com/photos/12370141/pexels-photo-12370141.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/8153487/pexels-photo-8153487.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6867964/pexels-photo-6867964.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/34429876/pexels-photo-34429876.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/8761561/pexels-photo-8761561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/762028/pexels-photo-762028.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={30}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about our products and services"
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "How far in advance should I place my order?",
              content: "For custom cakes, we recommend ordering at least 1-2 weeks in advance. For wedding cakes, please order 4-6 weeks ahead to ensure availability."
            },
            {
              id: "2",
              title: "Do you offer gluten-free options?",
              content: "Yes! We have a dedicated gluten-free menu including breads, pastries, and custom cakes. Please mention dietary requirements when ordering."
            },
            {
              id: "3",
              title: "Can I schedule a cake tasting?",
              content: "Absolutely! We offer complimentary cake tastings for wedding and large event orders. Contact us to schedule your appointment."
            },
            {
              id: "4",
              title: "What are your delivery options?",
              content: "We offer delivery within a 15-mile radius. Delivery fees vary by distance. We also provide setup services for wedding cakes and large orders."
            },
            {
              id: "5",
              title: "Do you cater events?",
              content: "Yes, we provide catering services for corporate events, parties, and special occasions. Contact us for a custom quote based on your needs."
            },
            {
              id: "6",
              title: "What payment methods do you accept?",
              content: "We accept cash, credit cards, and digital payments. A 50% deposit is required for custom orders, with the balance due upon pickup or delivery."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          tagIcon={Mail}
          title="Ready to Order?"
          description="Contact us today to discuss your custom order or visit our bakery to see our fresh daily selection."
          inputPlaceholder="Enter your email"
          buttonText="Get Quote"
          termsText="By submitting, you agree to receive updates about your order and our latest offerings."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Products",
              items: [
                { label: "Wedding Cakes", href: "products" },
                { label: "Birthday Cakes", href: "products" },
                { label: "Pastries", href: "products" },
                { label: "Artisan Breads", href: "products" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Custom Orders", href: "pricing" },
                { label: "Catering", href: "contact" },
                { label: "Delivery", href: "contact" },
                { label: "Cake Tasting", href: "contact" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Location", href: "contact" },
                { label: "Reviews", href: "testimonials" }
              ]
            }
          ]}
          copyrightText="© 2025 Sweet Delights Bakery"
        />
      </div>
    </ThemeProvider>
  );
}