// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";

// Asset imports
import Placeholder from "@/public/placeholder.jpg";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className=" pt-[10rem]">
      <Section>
        <Container>
          <div>
            <Button
              asChild
              className="mb-6 w-fit"
              size={"sm"}
              variant={"outline"}>
              <Link className="not-prose" href="https://9d8.dev">
                Transforming Spaces, Elevating Lifestyles{" "}
                <ArrowRight className="w-4" />
              </Link>
            </Button>
            <h1>
              <Balancer>Designing Interiors for Modern Living.</Balancer>
            </h1>
            <h3 className="text-muted-foreground">
              <Balancer>
                We specialize in designing beautiful, functional spaces that are
                tailored to your unique style and personality. Whether it&apos;s
                your home, office, or any space in between, our expert team
                blends creativity with practicality to bring your vision to
                life. From concept to completion, we focus on every detail to
                ensure a seamless experience and a space that truly feels like
                your own. Let us transform your space today.
              </Balancer>
            </h3>
            <div className="not-prose my-[5rem] h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
              <Image
                className="h-full w-full object-cover object-bottom"
                src={Placeholder}
                width={1920}
                height={1080}
                alt="hero image"
                placeholder="blur"
              />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Hero;
