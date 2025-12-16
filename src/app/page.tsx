"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Sparkles, Award, Target, Palette, TrendingUp, Heart, Zap, Star, Handshake, HelpCircle, Mail, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="mediumSizeExtraLargeTitles"
      background="fluid"
      cardStyle="glass-flat"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765894567240-2phmi7o5.jpg"
          logoAlt="Marketing Business Logo"
          brandName="MarketHub"
          bottomLeftText="Strategy Driven"
          bottomRightText="hello@markethub.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Elevate Your Brand's Growth"
          description="Strategic marketing solutions designed to transform your business. We combine creative excellence with data-driven insights to deliver measurable results."
          tag="Marketing Excellence"
          tagIcon={Sparkles}
          buttons={[
            { text: "Start Your Journey", href: "contact" },
            { text: "Explore Our Services", href: "services" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765894568059-2thga30g.jpg"
          imageAlt="Marketing team collaborating on strategy"
          frameStyle="browser"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose MarketHub"
          description="We're a forward-thinking marketing agency dedicated to transforming how brands connect with their audiences. Our proven strategies and innovative approach have helped hundreds of businesses achieve their growth goals."
          tag="Our Story"
          tagIcon={Award}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          imagePosition="right"
          bulletPoints={[
            {
              title: "Strategic Planning",
              description: "Tailored marketing strategies built on deep audience insights and market analysis",
              icon: Target
            },
            {
              title: "Creative Excellence",
              description: "Award-winning creative team delivering compelling campaigns that resonate with your audience",
              icon: Palette
            },
            {
              title: "Data-Driven Results",
              description: "Every decision backed by analytics and performance metrics to maximize your ROI",
              icon: TrendingUp
            },
            {
              title: "Dedicated Support",
              description: "Your success is our priority with ongoing optimization and strategic guidance",
              icon: Heart
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765894571621-gf1f5905.jpg"
          imageAlt="Creative agency team collaboration"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardSix
          title="Our Core Services"
          description="Comprehensive marketing solutions tailored to accelerate your business growth and maximize market impact"
          tag="Service Offerings"
          tagIcon={Zap}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          features={[
            {
              id: 1,
              title: "Strategic Marketing Planning",
              description: "Develop comprehensive go-to-market strategies that align with your business objectives and target audience needs",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765894568957-p09b6zox.jpg"
            },
            {
              id: 2,
              title: "Digital Analytics & Insights",
              description: "Leverage advanced analytics to understand customer behavior and optimize every touchpoint in your marketing funnel",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765894569704-lq05fev1.jpg"
            },
            {
              id: 3,
              title: "Social Media Management",
              description: "Build authentic connections with your audience through strategic social media content and community engagement",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765894570531-3cucw5v0.jpg"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Our Clients Say"
          description="Hear from businesses that have transformed their marketing strategy and achieved remarkable growth"
          tag="Client Success"
          tagIcon={Star}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "@sarahj_ceo",
              testimonial: "MarketHub transformed our entire marketing approach. Their strategic insights increased our leads by 150% in just six months.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765894572413-21vwnfk0.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              handle: "@mchen_founder",
              testimonial: "The team's creativity combined with data-driven decisions helped us launch our product successfully. Outstanding results!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765894573392-0szy41ox.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              handle: "@emily_marketing",
              testimonial: "Professional, strategic, and results-oriented. MarketHub consistently delivers measurable ROI on every campaign.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765894574185-x98ue8ws.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              handle: "@david_startup",
              testimonial: "Partnering with MarketHub was the best decision for our growth. Their insights shaped our entire brand positioning.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765894575085-m9tdgvoq.jpg",
              imageAlt: "David Kim"
            },
            {
              id: "5",
              name: "Jessica Anderson",
              handle: "@jessica_brand",
              testimonial: "Exceptional team with deep marketing expertise. They helped us build a cohesive brand strategy that resonates with our target market.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765894575870-6fz8iu5j.jpg",
              imageAlt: "Jessica Anderson"
            },
            {
              id: "6",
              name: "Robert Wilson",
              handle: "@robert_exec",
              testimonial: "Impressive results and professional service. MarketHub is a true partner in achieving our business objectives.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765894576426-2ou0tfc0.jpg",
              imageAlt: "Robert Wilson"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Leading companies across industries partner with us for strategic marketing solutions"
          tag="Our Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765894578830-ne10en89.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765894579597-alw9mqf9.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765894580642-qs5gk447.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765894581587-56meo9ka.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765894582310-j92bp8it.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765894583116-jjpsolam.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765894583852-iip2hml0.jpg"
          ]
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our marketing services and process"
          tag="Help & Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          mediaPosition="left"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765894577261-48t2h8ix.jpg"
          imageAlt="Customer support team"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What makes MarketHub different from other agencies?",
              content: "We combine strategic expertise with creative excellence. Our data-driven approach ensures every campaign is optimized for maximum ROI. We don't believe in one-size-fits-all solutions - we craft customized strategies aligned with your unique business goals."
            },
            {
              id: "2",
              title: "How long does it take to see results?",
              content: "Results timelines vary by strategy and industry. Most clients see meaningful improvements within 60-90 days. We focus on sustainable growth rather than quick fixes, establishing foundations for long-term success and brand building."
            },
            {
              id: "3",
              title: "Do you work with startups or only established companies?",
              content: "We work with businesses at all stages - from ambitious startups to established enterprises. We've successfully helped early-stage companies find product-market fit and scale their growth through strategic marketing."
            },
            {
              id: "4",
              title: "What services are included in a standard package?",
              content: "Our packages are customized based on your needs. Typically they include strategy development, campaign planning and execution, analytics reporting, and ongoing optimization. We discuss your specific needs during our initial consultation."
            },
            {
              id: "5",
              title: "How do you measure campaign success?",
              content: "We establish clear KPIs aligned with your business objectives at project start. We track metrics like lead generation, conversion rates, customer acquisition cost, and revenue impact. You'll receive regular reports with transparent performance data."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Grow Your Business"
          description="Join hundreds of successful companies that trust MarketHub to drive their marketing strategy. Subscribe to our newsletter for exclusive insights and marketing tips."
          useInvertedBackground="noInvert"
          mediaPosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765894577895-gv4lso7k.jpg"
          imageAlt="Marketing team collaboration"
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe Now"
          termsText="We respect your privacy. Unsubscribe anytime. No spam, just valuable marketing insights."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="MarketHub"
          logoWidth={120}
          logoHeight={40}
          copyrightText="© MarketHub, Inc. 2025. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "#team" },
                { label: "Blog", href: "#blog" },
                { label: "Careers", href: "#careers" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Marketing Strategy", href: "services" },
                { label: "Digital Marketing", href: "services" },
                { label: "Analytics", href: "services" },
                { label: "Consulting", href: "services" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "FAQs", href: "faq" },
                { label: "Case Studies", href: "#cases" },
                { label: "Resources", href: "#resources" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#privacy" },
                { label: "Terms of Service", href: "#terms" },
                { label: "Cookie Policy", href: "#cookies" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}