enum Starter {
  MANUAL,
  ELECTRIC,
  DUAL,
}

enum Clutch {
  WITH,
  WITOUT,
  CHOOSE,
}

export const engines = [
  {
    category: "engine",
    description:
      "An advanced, sporty but very balanced product, able to offer superior performance, perfect both for competitions and for free and adventurous flying. The Moster 185 is all this and much more. It is the engine that has enabled to achieve the most important objectives over the years, the engine with which various races and championships have been won, record achieved and the most difficult challenges faced. It is available in two different versions, Plus and Silent. The Silent is the basic version of the Plus, much appreciated by those who love a structure simplified to the maximum, where the weight/power ratio is optimized at the highest levels.",
    id: "engine-1",
    imageUrl:
      "https://vittorazi.com/wp-content/uploads/2020/02/Moster-185-MY-20-800x800.png",
    pdf: "https://vittorazi.com/brochure/Moster%20185%20Plus%20ENG.pdf?_t=1616500136.pdf",
    brand: "vittorazi",
    model: "moster 185+ MY20",
    cc: 184.7,
    reduction: [2.68, 2.87],
    power: {
      hp: 25,
      rpm: 7800,
    },
    consumption: {
      litter: 3,
      thrust: 30,
    },
    clutch: Clutch.CHOOSE,
    starter: [
      {
        name: Starter.MANUAL,
        weight: 14.3,
      },
      {
        name: Starter.DUAL,
        weight: 15.6,
      },
    ],
  },
  {
    category: "engine",
    description:
      "Cosmos 300 is the latest engine born in the Vittorazi house whose name tells a lot; is the synthesis of the company's ambition to overcome its own limits to head towards conquering new flying possibilities by officially entering the market for trikes, hang gliders and minimal ultralights. An important step that only true leaders can dare.",
    id: "engine-2",
    imageUrl:
      "https://vittorazi.com/wp-content/uploads/2020/02/Cosom-SliderHome-1.png",
    pdf: "https://vittorazi.com/brochure/Cosmos%20300%20ENG.pdf?_t=1625155656",
    brand: "vittorazi",
    model: "cosmos 300",
    cc: 293.9,
    power: {
      hp: 36,
      rpm: 7500,
    },
    consumption: {
      litter: 3.2,
      thrust: 40,
    },
    clutch: Clutch.WITH,
    starter: [
      {
        name: Starter.MANUAL,
        weight: 25,
      },
      {
        name: Starter.ELECTRIC,
        weight: 26.5,
      },
      {
        name: Starter.DUAL,
        weight: 27,
      },
    ],
  },
  {
    category: "engine",
    description:
      "The Atom 80 is able to satisfy both the needs of those who are starting to fly now, thanks to its ease of use and maintenance, and of those who are already experience pilots and want an agile product. It’s also the ideal engine for flying schools, designed for everyone, thanks to a right amount of power and the possibility of a simple management. The MY’20 version has new features: new design, new fusion technology of the engine crankcase and of the reduction drive. Then, a new carburetor, a reinforced plate, new performances and a greater stability.",
    id: "engine-3",
    imageUrl:
      "https://vittorazi.com/wp-content/uploads/2020/02/Atom80_MY20-800x800.png",
    pdf: "https://vittorazi.com/brochure/Atom%2080%20ENG.pdf?_t=1591809133.pdf",
    brand: "vittorazi",
    model: "atom 80",
    cc: 78.2,
    reduction: [3.8],
    power: {
      hp: 16,
      rpm: 9500,
    },
    consumption: {
      litter: 2.7,
      thrust: 30,
    },
    clutch: Clutch.WITH,
    starter: [
      {
        name: Starter.MANUAL,
        weight: 10.4,
      },
    ],
  },
];
