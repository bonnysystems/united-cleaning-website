import React from "react";
import Page from "../../core/Page";
import { container, image, section, sectionInfo } from "./index.css";

interface Service {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const SERVICES: Service[] = [
  {
    title: "Filter Cleaning",
    description:
      "We take pride in cleaning your kitchen's filters. Once we're done with the job, you'll think that you just bought the filters yesterday.",
    imageSrc: "/stock/001.jpg",
    imageAlt:
      "full view of a kitchen of a restaurant after cleaning, with the lights sparkling across the hoods showing the polish",
  },
  {
    title: "Dryer Vent Cleaning",
    description: "Our team will take care of your vent and dry it up clean!",
    imageSrc: "/stock/002.jpg",
    imageAlt:
      "very polished look of a kitchen that is mostly stainless steel that shows how much united cleaning cares about keeping things clean",
  },
  {
    title: "Floor Chemical Treatment",
    description:
      "Not only do we take care of your hoods and filters, but we'll clean up your floors to make them look squeaky clean.",
    imageSrc: "/stock/003.jpg",
    imageAlt:
      "a common kitchen that united cleaning will clean with a cleaned up floor",
  },
  {
    title: "Access Panel Installation",
    description: "We provide services to install access panels.",
    imageSrc: "/stock/007.jpg",
    imageAlt:
      "close-up of the hoods with the filters cleaned and sparkly as well with the lights",
  },
  {
    title: "Motor Service and Repair",
    description:
      "Need a new motor? Want us to repair your currently existing motors? We got you covered there too!",
    imageSrc: "/stock/010.jpg",
    imageAlt:
      "close-up of an array of cleaned filters in a sparkly polished hood",
  },
];

const Services = (): React.ReactElement => (
  <Page title="Services">
    <div className={container}>
      {SERVICES.map(({ title, description, imageSrc, imageAlt }) => (
        <section className={section}>
          <div className={sectionInfo}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <img
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={300}
            className={image}
          />
        </section>
      ))}
    </div>
  </Page>
);

export default Services;
