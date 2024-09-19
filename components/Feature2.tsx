// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// UI component imports
import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import InteriorDesignImage from "@/public/interior-design.jpg"; // Replace this with your actual image

const Feature2 = () => {
  return (
    <Craft.Section>
      <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src={InteriorDesignImage}
            alt="Interior Design Showcase"
            className="fill object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 py-8">
          <h3 className="!my-0">Tailored Interior Design Solutions</h3>
          <p className="font-light leading-[1.4] opacity-70">
            Transform your living or working space with our bespoke interior
            design services. We blend creativity with functionality to bring
            your vision to life, offering designs that are unique to your
            personality and needs.
          </p>
          <div className="not-prose flex items-center gap-2">
            <Button className="w-fit" asChild>
              <Link href="#">Get Started</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="#">Learn More {"->"}</Link>
            </Button>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Feature2;
