import { PropellerRotation, Propeller } from "../types/propeller";

export const propeller: Propeller[] = [
  {
    id: "propeller-1",
    category: "propeller",
    description: "",
    imageUrl:
      "https://shop.helix-propeller.de/media/image/3a/87/4c/H30F-L-NL.jpg",
    link: "https://shop.helix-propeller.de/en/paramotor/assortment/997/h30f-1-15m-l-nml-12-2",
    brand: "Helix",
    model: "H30F 1,15m L-NML-12-2",
    rotation: PropellerRotation.LEFT,
    diameter: 1.15,
    bladeCount: 2,
    boltPatern: {
      amountScrew: 6,
      typeScrew: "M6",
      diameter: 50,
      holeDiameter: 25,
    },
    // engines: [
    //   {
    //     id: "engine-1",
    //     reduction: 2.68,
    //   },
    // ],
  },
  {
    id: "propeller-2",
    category: "propeller",
    description: "",
    imageUrl: "https://ppg.e-props.fr/images/PLUG/1307012.jpg",
    link: "https://ppg.e-props.fr/product_info.php?products_id=1786",
    brand: "e-props",
    model: "PLUG-2 dia 115 cm Vittorazi Moster 185 réducteur 2.68 6M6d60",
    rotation: PropellerRotation.LEFT,
    diameter: 1.15,
    bladeCount: 2,
    boltPatern: {
      amountScrew: 6,
      typeScrew: "M6",
      diameter: 50,
      holeDiameter: 25,
    },
    // engines: [
    //   {
    //     id: "engine-1",
    //     reduction: 2.68,
    //   },
    // ],
  },
  {
    id: "propeller-3",
    category: "propeller",
    description: "",
    imageUrl:
      "https://shop.helix-propeller.de/media/image/3f/cc/80/H30F_125_R_EZ_600x600.jpg",
    link: "https://shop.helix-propeller.de/en/paramotor/assortment/1777/h30f-1-25m-r-gez-04-2",
    brand: "helix",
    model: "H30F 1,25m R-GEZ-04-2",
    rotation: PropellerRotation.RIGHT,
    diameter: 1.25,
    bladeCount: 2,
    boltPatern: {
      amountScrew: 6,
      typeScrew: "M6",
      diameter: 50,
      holeDiameter: 25,
    },
    // engines: [
    //   {
    //     id: "engine-1",
    //     reduction: 2.68,
    //   },
    // ],
  },
];
