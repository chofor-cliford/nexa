import exp from "constants";
import { z } from "zod";

export const CardList = [
  {
    title: "Property for Sale",
    amount: 684,
    data: {
      datasets: [
        {
          data: [300, 100],
          backgroundColor: ["#475BE8", "#E4E8EF"],
          hoverOffset: 4,
        },
      ],
    },
  },
  {
    title: "Property for Rent",
    amount: 546,
    data: {
      datasets: [
        {
          data: [300, 150],
          backgroundColor: ["#FD8539", "#E4E8EF"],
          hoverOffset: 4,
        },
      ],
    },
  },
  {
    title: "Total Customers",
    amount: 5732,
    data: {
      datasets: [
        {
          data: [300, 50],
          backgroundColor: ["#2ED480", "#E4E8EF"],
          hoverOffset: 4,
        },
      ],
    },
  },
  {
    title: "Total City",
    amount: 90,
    data: {
      datasets: [
        {
          data: [300, 20],
          backgroundColor: ["#FE6D8E", "#E4E8EF"],
          hoverOffset: 4,
        },
      ],
    },
  },
];

export const propertyReferral = [
  {
    title: "Social Media",
    percentage: 64,
    color: "#CFC8FF",
  },
  {
    title: "Marketpaces",
    percentage: 40,
    color: "#7FBA7A",
  },
  {
    title: "Websites",
    percentage: 50,
    color: "#FFCE73",
  },
  {
    title: "Digital Adds",
    percentage: 80,
    color: "#FFA2C0",
  },
  {
    title: "Others",
    percentage: 15,
    color: "#F45252",
  },
];

export const propertyList = [
  { title: "Popular" },
  { title: "Recommended" },
  { title: "Newest" },
  {
    title: "Most Recent",

    others: [
      "Most Recent",
      "Trending",
      "Nearby",
      "Following",
      "Custom",
      "All",
      "Featured",
    ],
  },
];

export const initialValues = {
  address: "",
  country: "uk",
  price: "",
  imageUrl: "",
  title: "",
};

export type Property = {
  address: string;
  pricing: {
    label: string;
  };
  imageUris: string[];
  title: string;
};

export const realEstateStatus = [
  "Any Status",
  "Active",
  "Pending",
  "Sold",
  "Rented",
  "Under Contract",
  "Off Market",
  "Expired",
  "Withdrawn",
  "Coming Soon",
  "New Listing",
];

export const realEstateType = [
  "Single Family",
  "Multi Family",
  "Condo",
  "Townhouse",
  "Apartment",
  "Land",
  "Commercial",
  "Other",
];

export const realEstateCountriesAndStates = [
  // United States
  {
    country: "United States",
    states: ["California", "Texas", "Florida", "New York"],
  },
  // Canada
  {
    country: "Canada",
    states: ["Ontario", "British Columbia", "Alberta", "Quebec"],
  },
  // Germany
  {
    country: "Germany",
    states: [
      "Bavaria (Bayern)",
      "North Rhine-Westphalia (Nordrhein-Westfalen)",
      "Baden-Württemberg",
      "Hesse (Hessen)",
    ],
  },
  // United Arab Emirates
  {
    country: "United Arab Emirates",
    states: ["Dubai", "Abu Dhabi", "Sharjah", "Ras Al Khaimah"],
  },
  // Turkey
  {
    country: "Turkey",
    states: ["Istanbul", "Ankara", "Izmir", "Antalya"],
  },
  // Portugal
  {
    country: "Portugal",
    states: ["Lisbon (Lisboa)", "Porto", "Faro", "Madeira"],
  },
  // India
  {
    country: "India",
    states: ["Maharashtra", "Karnataka", "Delhi", "Tamil Nadu"],
  },
];

export const reviewLists = ["All Reviews", "Published", "Deleted"];

export const agentStatuses = [
  {
    title: "Total Listings",
    amount: 1050,
    data: {
      datasets: [
        {
          data: [190, 300],
          backgroundColor: ["#FE6D8E", "#E4E8EF"],
          hoverOffset: 4,
        },
      ],
    },
  },
  {
    title: "Properties Sold",
    amount: 650,
    data: {
      datasets: [
        {
          data: [200, 300],
          backgroundColor: ["#2ED480", "#E4E8EF"],
          hoverOffset: 4,
        },
      ],
    },
  },
  {
    title: "Properties Rent",
    amount: 400,
    data: {
      datasets: [
        {
          data: [120, 200],
          backgroundColor: ["#475BE8", "#E4E8EF"],
          hoverOffset: 4,
        },
      ],
    },
  },
];

export const formSchema = z.object({
  firstname: z
    .string()
    .min(2, {
      message: "firstName must be at least 2 characters.",
    })
    .max(50, { message: "lastName cannot be more than 50 characters." }),
  lastname: z
    .string()
    .min(2, {
      message: "lastName must be at least 2 characters.",
    })
    .max(50, { message: "lastName cannot be more than 50 characters." }),
  phone: z
    .string()
    .min(10, { message: "phone number must be at least 10 characters." }),
 dob: z.date({
    required_error: "A date of birth is required.",
  }),
  gender: z.string(),
  email: z.string().email(),
  country: z.string(),
  properties: z.string(),
  picture: z.string().optional(),
});

export const defaultValues= {
  firstname: "",
  lastname: "",
  phone: "",
  dob: new Date(),
  gender: "Male",
  email: "",
  country: "",
  properties: 12,
  picture: "",
};

export const genders = 
  [
    "Male",
    "Female",
    "Non-binary",
    "Genderqueer",
    "Agender",
    "Genderfluid",
    "Bigender",
    "Gender nonconforming",
    "Two-spirit",
    "Rather Not Say",
    "Other",
  ];
