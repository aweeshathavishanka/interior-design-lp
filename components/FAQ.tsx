import { Section, Container } from "@/components/craft";

import { ArrowUpRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

// Real-world FAQ data
const content: FAQItem[] = [
  {
    question: "What is the uptime guarantee for your service?",
    answer:
      "We provide a 99.9% uptime guarantee, ensuring your applications and services are available almost all the time. Our team monitors the infrastructure 24/7 to maintain this level of reliability.",
    link: "https://yourcompany.com/uptime",
  },
  {
    question: "How do I scale my application on your platform?",
    answer:
      "Scaling is simple on our platform. You can easily upgrade your plan or add resources directly from your dashboard. We offer flexible scaling solutions to ensure your application performs optimally, even under heavy loads.",
    link: "https://yourcompany.com/scaling",
  },
  {
    question: "Is customer support available 24/7?",
    answer:
      "Yes, our dedicated customer support team is available around the clock to assist you. You can reach us via live chat, email, or phone at any time.",
    link: "https://yourcompany.com/support",
  },
  {
    question: "What security measures do you have in place?",
    answer:
      "We prioritize security and offer features like end-to-end encryption, two-factor authentication, and regular security audits to protect your data.",
    link: "https://yourcompany.com/security",
  },
  {
    question: "Can I integrate third-party services?",
    answer:
      "Yes, our platform supports integrations with various third-party services such as payment gateways, analytics tools, and CRMs. Check out our API documentation for details.",
    link: "https://yourcompany.com/integrations",
  },
];

const FAQ = () => {
  return (
    <Section>
      <Container>
        <h3 className="!mt-0 text-xl font-bold">Frequently Asked Questions</h3>
        <h4 className="text-muted-foreground">
          Can&apos;t find the answer you&apos;re looking for? Reach out to our
          customer support team.
        </h4>
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={item.question}>
                <AccordionTrigger className="text-left text-xl">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100">
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
