// React and Next.js
import React from "react";

// Layout Components
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Icons
import { Coins } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Bespoke Residential Design",
    description:
      "Transform your home with custom designs that reflect your lifestyle, preferences, and personality. Our experts ensure every detail is tailored to you.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Commercial Space Design",
    description:
      "Create innovative and functional workspaces that boost productivity and reflect your company’s brand identity, all while maintaining style and comfort.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Space Planning & Optimization",
    description:
      "Maximize every inch of your space with our expert space planning services. We create layouts that balance beauty and functionality for any room or office.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Furniture Sourcing & Customization",
    description:
      "We source unique furniture pieces or design custom solutions to perfectly match your space, ensuring cohesion with the overall design aesthetic.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "3D Visualization & Virtual Tours",
    description:
      "Experience your design before it’s built with high-quality 3D renderings and virtual tours that bring your vision to life in stunning detail.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Turnkey Project Management",
    description:
      "From concept to completion, we manage your entire project, including timelines, budgets, and contractors, ensuring a stress-free process and timely delivery.",
  },
];

const Feature1 = () => {
  return (
    <Section className="border-b">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>Our Comprehensive Interior Design Services</Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>
              From custom designs to complete project management, we provide
              end-to-end solutions for transforming your space.
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-10 md:mt-12 md:grid-cols-3">
            {featureText.map(({ icon, title, description }, index) => (
              <div className="flex flex-col gap-4" key={index}>
                {icon}
                <h4 className="text-xl text-primary">{title}</h4>
                <p className="text-base opacity-75">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature1;
