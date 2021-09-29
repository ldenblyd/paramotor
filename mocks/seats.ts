import { Sizes, Seat } from "types/seat";

export const seats: Seat[] = [
  {
    category: "seat",
    description: "",
    id: "seat-1",
    imageUrl:
      "https://dudek.eu/wp-content/uploads/2021/05/powerseat-comfort-low-01.jpg",
    pdf: "https://www.dropbox.com/sh/wsqf4z5ewg6xrwf/AADp7uuqMLyQYFnB_cbL-MH9a?dl=0&preview=PowerSeat+Comfort+DP+-+Manual+EN.pdf",
    brand: "dudek",
    model: "PowerSeat Comfort",
    weight: 3,
    size: [
      {
        value: [Sizes.S, Sizes.M],
        weight: 100,
        height: {
          min: 160,
          max: 175,
        },
      },
      {
        value: [Sizes.L, Sizes.XL],
        weight: 100,
        height: {
          min: 170,
          max: 195,
        },
      },
    ],
  },
  {
    category: "seat",
    description: "",
    id: "seat-2",
    imageUrl:
      "https://www.apcoaviation.com/wp-content/uploads/2020/05/Apco_SLT_LOW_MKII_1920x1280_360_17.jpg",
    pdf: "https://www.apcoaviation.com/wp-content/uploads/2021/04/Apco_SLT_LOW_MKII_Manual_2021-04-06.pdf",
    brand: "apco",
    model: "SLT",
    weight: 2.45,
    size: [
      {
        value: [Sizes.ALL],
        weight: 120,
        height: {
          min: 155,
          max: 210,
        },
      },
    ],
  },
];
