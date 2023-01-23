function importAll(r: any) {
  let images: any = {};
  r.keys().forEach((item: any, index: any) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../assets/images", false, /\.(png|jpe?g|webp|svg)$/)
);

export const clientsImages = [
  {
    id: 1,
    name: "Axe Capital",
    images: {
      webpOne: images["axe-capital.webp"],
      webPTwo: images["axe-capital@2x.webp"],
      png: images["axe-capital.png"],
    },
    aos: "flip-left",
  },
  {
    id: 2,
    name: "Hamp Deville",
    images: {
      webpOne: images["hamp-deville.webp"],
      webPTwo: images["hamp-deville@2x.webp"],
      png: images["hamp-deville.png"],
    },
    aos: "flip-right",
  },
  {
    id: 3,
    name: "Oscorp",
    images: {
      webpOne: images["oscorp.webp"],
      webPTwo: images["oscorp@2x.webp"],
      png: images["oscorp.png"],
    },
    aos: "flip-up",
  },
];

export const worksImages = [
  {
    id: 1,
    name: "Admin Dashboard",
    images: {
      webpOne: images["admin-dashboard.webp"],
      webPTwo: images["admin-dashboard@2x.webp"],
      png: images["admin-dashboard.png"],
    },
    aos: "zoom-in-up",
  },
  {
    id: 1,
    name: "E-Commerce",
    images: {
      webpOne: images["e-commerce.webp"],
      webPTwo: images["e-commerce@2x.webp"],
      png: images["e-commerce.png"],
    },
    aos: "zoom-in-up",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "James Wittings",
    position: "Marketing Director at Axe Capital",
    content:
      "Working with John has been an absolute pleasure and we'll definitely turn to his expertise for new projects.",
    images: [
      {
        id: 1,
        webpOne: images["client-axe.png"],
        webPTwo: images["client-axe@2x.png"],
        png: images["client-axe.png"],
      },
      {
        id: 2,
        webpOne: images["client-company.png"],
        webPTwo: images["client-company@2x.png"],
        png: images["client-company.png"],
      },
    ],
  },
  {
    id: 2,
    name: "Ella Walsh",
    position: "CEO at Hampton Deville",
    content:
      "John is great. We worked together well, and we'll contract his services in the future.",
    images: [
      {
        id: 1,
        webpOne: images["client-hampton.png"],
        webPTwo: images["client-hampton@2x.png"],
        png: images["client-hampton.png"],
      },
      {
        id: 2,
        webpOne: images["client-company2.png"],
        webPTwo: images["client-company2@2x.png"],
        png: images["client-company.png"],
      },
    ],
  },
];
