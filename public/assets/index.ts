import building from "./building.svg";
import star from "./star.svg";
import profile from "./profile.svg";
import union from "./Union.svg";
import notification from "./Group 179.png";
import message from "./message.svg";
import logo from "./Vector.svg";
import dashboard from "./Dashboard.svg";
import person from "./person.svg";
import logoDesktop from "./UIHUT.svg";
import search from "./shape.svg";
import profileImage from "./Profile image.png";
import car from "./car.svg";
import cross from "./cross.svg";
import bath from "./bath.svg";
import parking from "./parking.svg";
import kitchen from "./kitchen.svg";
import balcony from "./balcony.svg";
import wifi from "./wifi.svg";
import smoking from "./smoking.svg";
import menu from "./menu.svg";
import photo1 from "./photo1.png";
import photo2 from "./photo2.png";
import photo3 from "./photo3.png";

import image1 from "./Image 1.png";
import image2 from "./image 2.png";
import image3 from "./image3.png";
import image4 from "./image4.png";
import image5 from "./image 5.png";
import image6 from "./image 6.png";
import image7 from "./image 7.png";
import image8 from "./image 8.png";
import image9 from "./image 9.png";
import image10 from "./image 10.png";
import image01 from "./image01.png";
import image02 from "./image02.png";
import image03 from "./image03.png";
import image04 from "./image04.png";

import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";

import fullStar from "./fullStar.svg";
import halfStar from "./halfStar.svg";

export {
  logo,
  logoDesktop,
  notification,
  union,
  search,
  person,
  profileImage,
  menu,
};

export const SidebarLinks = [
  {
    title: "Dashboard",
    icon: dashboard,
    href: "/",
  },
  {
    title: "Property",
    icon: building,
    href: "/property",
  },
  {
    title: "Agent",
    icon: person,
    href: "/agent",
  },
  {
    title: "Review",
    icon: star,
    href: "/review",
  },
  {
    title: "Message",
    icon: message,
    href: "/message",
  },
  {
    title: "My Profile",
    icon: profile,
    href: "/profile",
  },
];

export const photos = [
  {
    name: "Star Sun Hotel & Apartment",
    price: 500,
    location: "North Carolina, USA",
    imageUrl: photo1,
  },
  {
    name: "Star Sun Hotel & Apartment",
    price: 500,
    location: "New Yrk City, USA",
    imageUrl: photo2,
  },
  {
    name: "Metro Jayakar Apartment",
    price: 500,
    location: "North Carolina, USA",
    imageUrl: photo3,
  },
  ,
];

export const propertyDetails = [
  {
    title: "Metro Jayakar Hotel & Spa",
    address: "North Carolina, USA",
    price: "$7400",
    imageUrl: image1,
    numberOfBedrooms: 4,
    sale: "28M",
  },
  {
    title: "Star Sun Hotel & Apartment",
    address: "Condong City, USA",
    price: "$8500",
    imageUrl: image2,
    numberOfBedrooms: 6,
    sale: "29M",
  },
  {
    title: "Lavendar Apartment",
    address: "North Carolina, USA",
    price: "$9000",
    imageUrl: image3,
    numberOfBedrooms: 3,
    sale: "26M",
  },
  {
    title: "Almander Hotel & Apartment",
    address: "North Carolina, USA",
    price: "$7400",
    imageUrl: image4,
    numberOfBedrooms: 2,
    sale: "22M",
  },
  {
    title: "Metro Jayakar Hotel & Spa",
    address: "Suryodiningratan, UK",
    price: "$8100",
    imageUrl: image5,
    numberOfBedrooms: 4,
    sale: "28M",
  },
  {
    title: "Metro Jayakar Hotel & Spa",
    address: "North Carolina, USA",
    price: "$7400",
    imageUrl: image6,
    numberOfBedrooms: 4,
    sale: "28M",
  },
  {
    title: "Lotus Apy Hotel & Spa",
    address: "Margoluwih Caloriya, USA",
    price: "$7900",
    imageUrl: image7,
    numberOfBedrooms: 3,
    sale: "25M",
  },
  {
    title: "Star Sun Hotel & Spa",
    address: "North Carolina, USA",
    price: "$4800",
    imageUrl: image8,
    numberOfBedrooms: 5,
    sale: "29M",
  },
  {
    title: "Almander Hotel & Spa",
    address: "Suryodiningratan, UK",
    price: "$6500",
    imageUrl: image9,
    numberOfBedrooms: 5,
    sale: "26M",
  },
  {
    title: "Metro Jayakar Hotel & Spa",
    address: "North Carolina, USA",
    price: "$5800",
    imageUrl: image10,
    numberOfBedrooms: 4,
    sale: "28M",
  },
];

export const AgentDetails = [
  {
    name: "Karen Eilla Boyette",
    type: "Real-Estate Agent",
    imageUrl: image01,
    email: "karenboyette@armyspy.com",
    phoneNumber: "+502-324-4194",
    address: "Machester",
    propertyNumber: 15,
  },
  {
    name: "Walter Devid Moye",
    type: "Real-Estate Agent",
    imageUrl: image02,
    email: "walterdevidmoye@armyspy.com",
    phoneNumber: "+457-324-4147",
    address: "Chicago, Canada",
    propertyNumber: 10,
  },
  {
    name: "David Smith Raddy",
    type: "Real-Estate Agent",
    imageUrl: image03,
    email: "davidsmithraddy@armyspy.com",
    phoneNumber: "+584-324-7835",
    address: "Maryland, USA",
    propertyNumber: 15,
  },
  {
    name: "Jhon Haron Bably",
    type: "Real-Estate Agent",
    imageUrl: image04,
    email: "jhonharonbably@armyspy.com",
    phoneNumber: "+502-324-3455",
    address: "Oxford, UK",
    propertyNumber: 18,
  },
];

export const serviceType = [
  "EXCELLENT",
  "GREAT",
  "BEST SERVICE",
  "BAD SERVICE",
  "UNEXPECTED",
];

export const reviewCardLists = [
  {
    imageUrl: img1,
    color: "#C01254",
    name: "James Sullivan",
    date: "Jan On 25-04-2022",
    time: "12:47PM",
    description:
      "Friendly Service John, Luna and everyone at Just Property in Hasting deserve a big Thank you from us for moving us from Jakarta to Medan during lockdown.",
    serviceType: ["EXCELLENT", "GREAT", "BEST SERVICE"],
    numberOfStars: [fullStar, fullStar, fullStar, fullStar, halfStar],
  },
  {
    imageUrl: img2,
    color: "#C01225",
    name: "Jakir Hussain",
    date: "Jan On 15-09-2022",
    time: "11:40AM",
    description:
      "Friendly Service, Regrettably, Just Property in Hasting, managed by John and Luna, failed to ease our move from Jakarta to Medan during lockdown, causing unnecessary frustration.",
    serviceType: ["BAD SERVICE", "UNEXPECTED"],
    numberOfStars: [fullStar, halfStar, halfStar, halfStar, halfStar],
  },
  {
    imageUrl: img3,
    color: "#C01254",
    name: "Deborah Saragi",
    date: "Jan On 25-15-2022",
    time: "10:22PM",
    description:
      "Friendly Service. John, Luna and everyone at Just Property in Hasting deserve a big Thank you from us for moving us from Jakarta to Medan during lockdown.",
    serviceType: ["EXCELLENT", "GREAT", "BEST SERVICE"],
    numberOfStars: [fullStar, fullStar, fullStar, fullStar, halfStar],
  },
  {
    imageUrl: img4,
    color: "#C01248",
    name: "Delwar Hussen",
    date: "Jan On 15-10-2022",
    time: "12:42AM",
    description:
      "Friendly Service, Regrettably, Just Property in Hasting, managed by John and Luna, failed to ease our move from Jakarta to Medan during lockdown, causing unnecessary frustration.",
    serviceType: ["BAD SERVICE", "UNEXPECTED"],
    numberOfStars: [fullStar, halfStar, halfStar, halfStar, halfStar],
  },
  {
    imageUrl: img5,
    color: "#C01287",
    name: "Jubed Ahmed",
    date: "Jan On 24-04-2022",
    time: "08:47PM",
    description:
      "Friendly Service, John, Luna and everyone at Just Property in Hasting deserve a big Thank you from us for moving us from Jakarta to Medan during lockdown.",
    serviceType: ["EXCELLENT", "GREAT", "BEST SERVICE"],
    numberOfStars: [fullStar, fullStar, fullStar, fullStar, halfStar],
  },
];

export const stars = [fullStar, fullStar, fullStar, fullStar, fullStar];

export const facilities = [
  {
    title: "4 Beds",
    icon: car,
  },
  {
    title: "Baths",
    icon: bath,
  },
  {
    title: "28M Area",
    icon: cross,
  },
  {
    title: "Smoking Area",
    icon: smoking,
  },
  {
    title: "Kitchen",
    icon: kitchen,
  },
  {
    title: "Balcony",
    icon: balcony,
  },
  {
    title: "Wifi",
    icon: wifi,
  },
  {
    title: "Parking Area",
    icon: parking,
  },
];

export const extraProperties = [
  {
    imageUrl: image1,
    price: 6901,
    location: "3517W. Gray St, Utica, Pennsylvania 57867",
    numberOfBedrooms: 5,
    numberOfBathrooms: 2,
    sale: 60
  },
  {
    imageUrl: image3,
    price: 6901,
    location: "3517W. Gray St, Utica, Pennsylvania 57867",
    numberOfBedrooms: 3,
    numberOfBathrooms: 2,
    sale: 60
  },
  {
    imageUrl: image8,
    price: 6901,
    location: "3517W. Gray St, Utica, Pennsylvania 57867",
    numberOfBedrooms: 3,
    numberOfBathrooms: 2,
    sale: 60
  },
  {
    imageUrl: image10,
    price: 6901,
    location: "3517W. Gray St, Utica, Pennsylvania 57867",
    numberOfBedrooms: 3,
    numberOfBathrooms: 2,
    sale: 60
  }
]