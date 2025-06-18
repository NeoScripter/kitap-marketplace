export type Product = {
    id: number;
    images: string[];
    price: number;
    name: string;
    description: string;
    hardDrive: string;
    ram: string;
    processor: string;
    motherboard: string;
    screen: string;
    weight: string;
    warranty: string;
    category: string;
};

export const categories = [
    "игровые ноутбуки",
    "ультрабуки",
    "Рабочие станции",
    "для офиса",
    "для дома"
];

export const hardDrives = [
    "256 GB",
    "512 GB",
    "1 TB",
];

export const ram = [
    "8 GB",
    "16 GB",
    "32 GB"
]
export const products: Product[] = [
    {
        id: 1,
        images: ["/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp"],
        price: 147358,
        name: "HP Stealth G16 Ryzen 9 7945HX RTX 4060 8GB +WWW",
        description: "A powerful laptop equipped with a Ryzen 9 processor and RTX 4060 graphics. Perfect for gaming, work, and multimedia tasks with seamless multitasking capabilities.",
        hardDrive: "1 TB",
        ram: "32 GB",
        processor: "AMD Ryzen 9 7945HX",
        motherboard: "HP Z790 Stealth",
        screen: "16.1\" UHD IPS 165Hz",
        weight: "2.3 kg",
        warranty: "2 years",
        category: "игровые ноутбуки"
    },
    {
        id: 2,
        images: ["/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp"],
        price: 97998,
        name: "MSI Blade Alpha Intel i7-13700H RTX 4060 8GB +PRO",
        description: "Slim and sleek, this MSI Blade Alpha packs a punch with Intel's i7 chip and RTX 4060, offering a balance of performance and portability for professionals on the move.",
        hardDrive: "512 GB",
        ram: "16 GB",
        processor: "Intel Core i7-13700H",
        motherboard: "MSI B760 Alpha",
        screen: "15.6\" FHD IPS 144Hz",
        weight: "1.9 kg",
        warranty: "1 year",
        category: "ультрабуки"
    },
    {
        id: 3,
        images: ["/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp"],
        price: 148107,
        name: "MSI G5 R7000P Ryzen 7 8845HS RX 7800M XT 12GB +PRO",
        description: "Designed for heavy workloads, the G5 R7000P handles rendering and multitasking with ease. Featuring a high-end AMD GPU and ample RAM, it delivers workstation-class power.",
        hardDrive: "1 TB",
        ram: "32 GB",
        processor: "AMD Ryzen 7 8845HS",
        motherboard: "MSI Creator Pro",
        screen: "17.3\" FHD 120Hz",
        weight: "2.8 kg",
        warranty: "3 years",
        category: "Рабочие станции"
    },
    {
        id: 4,
        images: ["/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp"],
        price: 162394,
        name: "Lenovo Legion R7000P Intel i7-13700H RX 7800M XT 12GB +EVO",
        description: "Built with precision and performance in mind, this Legion laptop is engineered for serious gamers and content creators looking for stability, speed, and immersive visuals.",
        hardDrive: "512 GB",
        ram: "16 GB",
        processor: "Intel Core i7-13700H",
        motherboard: "Lenovo EVO Z790",
        screen: "16\" QHD 240Hz",
        weight: "2.4 kg",
        warranty: "2 years",
        category: "игровые ноутбуки"
    },
    {
        id: 5,
        images: ["/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp"],
        price: 112236,
        name: "Lenovo Stealth Alpha Intel i9-13980HX RX 7800M XT 12GB +WWW",
        description: "A stylish and durable machine designed for professionals needing high performance and reliability. It includes advanced thermal solutions for continuous peak operation.",
        hardDrive: "512 GB",
        ram: "16 GB",
        processor: "Intel Core i9-13980HX",
        motherboard: "Lenovo ProBoard X1",
        screen: "15.6\" OLED 4K",
        weight: "2.0 kg",
        warranty: "2 years",
        category: "для офиса"
    },
    {
        id: 6,
        images: ["/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp"],
        price: 145866,
        name: "Razer G5 V15 Ryzen 9 7945HX RTX 4080 12GB +WWW",
        description: "The ultimate gaming laptop from Razer with a high refresh display and premium specs, ideal for high-end gaming and VR experiences with minimal lag.",
        hardDrive: "1 TB",
        ram: "32 GB",
        processor: "AMD Ryzen 9 7945HX",
        motherboard: "Razer X99 Gaming",
        screen: "15.6\" QHD 240Hz",
        weight: "2.6 kg",
        warranty: "3 years",
        category: "игровые ноутбуки"
    },
    {
        id: 7,
        images: ["/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp"],
        price: 129753,
        name: "MSI Omen Alpha Ryzen 7 8845HS RTX 4060 8GB +WWW",
        description: "Balanced performance in a lightweight body, the Omen Alpha is designed for multitaskers and creatives needing reliable GPU acceleration.",
        hardDrive: "512 GB",
        ram: "16 GB",
        processor: "AMD Ryzen 7 8845HS",
        motherboard: "MSI Shadow B550",
        screen: "15.6\" FHD IPS",
        weight: "2.1 kg",
        warranty: "1 year",
        category: "для дома"
    },
    {
        id: 8,
        images: ["/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp"],
        price: 122294,
        name: "HP Predator X16 Ryzen 7 8845HS RTX 4060 8GB +PRO",
        description: "Designed with productivity in mind, the HP Predator X16 blends powerful hardware with efficiency, great for office and business applications.",
        hardDrive: "256 GB",
        ram: "8 GB",
        processor: "AMD Ryzen 7 8845HS",
        motherboard: "HP WorkMate A520",
        screen: "16\" FHD",
        weight: "2.2 kg",
        warranty: "2 years",
        category: "для офиса"
    },
    {
        id: 9,
        images: ["/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp"],
        price: 144330,
        name: "Razer Omen Alpha Ryzen 7 8845HS RTX 4060 8GB +WWW",
        description: "Perfect for power users and gamers alike, the Omen Alpha features sleek design and cutting-edge graphics with effective cooling mechanisms.",
        hardDrive: "512 GB",
        ram: "16 GB",
        processor: "AMD Ryzen 7 8845HS",
        motherboard: "Razer Alpha B760",
        screen: "15.6\" QHD 165Hz",
        weight: "2.0 kg",
        warranty: "2 years",
        category: "игровые ноутбуки"
    },
    {
        id: 10,
        images: ["/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp"],
        price: 159268,
        name: "Acer Blade V15 Ryzen 7 8845HS RTX 4080 12GB +EVO",
        description: "Power meets portability in the Acer Blade V15, ideal for gamers who need performance on the go. Great thermal control and vivid display enhance gaming sessions.",
        hardDrive: "1 TB",
        ram: "32 GB",
        processor: "AMD Ryzen 7 8845HS",
        motherboard: "Acer Nitro V790",
        screen: "15.6\" QHD 240Hz",
        weight: "2.4 kg",
        warranty: "2 years",
        category: "игровые ноутбуки"
    },
    {
        id: 11,
        images: ["/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp"],
        price: 144717,
        name: "Dell ROG G16 Ryzen 9 7945HX RTX 4060 8GB +EVO",
        description: "A versatile laptop with AMD’s powerful Ryzen 9 and RTX 4060 for enhanced visual performance. Suitable for gamers and developers requiring consistent output.",
        hardDrive: "512 GB",
        ram: "16 GB",
        processor: "AMD Ryzen 9 7945HX",
        motherboard: "Dell ROG Fusion 690",
        screen: "16\" FHD+ 165Hz",
        weight: "2.5 kg",
        warranty: "2 years",
        category: "Рабочие станции"
    },
    {
        id: 12,
        images: ["/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp"],
        price: 144678,
        name: "HP Omen R7000P Intel i9-13980HX RTX 4080 12GB +GAMING",
        description: "Crafted for serious gamers, the HP Omen R7000P offers top-tier hardware with a sleek look. Excellent for competitive gaming and creative tasks.",
        hardDrive: "1 TB",
        ram: "32 GB",
        processor: "Intel Core i9-13980HX",
        motherboard: "HP Gaming Turbo Z",
        screen: "17.3\" QHD 240Hz",
        weight: "3.0 kg",
        warranty: "3 years",
        category: "игровые ноутбуки"
    },
    {
        id: 13,
        images: ["/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp"],
        price: 172293,
        name: "HP Predator Alpha Ryzen 9 7945HX RTX 4060 8GB +EVO",
        description: "Blending power and sleek design, the Predator Alpha is fit for advanced users and gamers seeking high frame rates and efficient workflows.",
        hardDrive: "512 GB",
        ram: "16 GB",
        processor: "AMD Ryzen 9 7945HX",
        motherboard: "HP EvoCraft X900",
        screen: "15.6\" QHD IPS 165Hz",
        weight: "2.7 kg",
        warranty: "2 years",
        category: "игровые ноутбуки"
    },
    {
        id: 14,
        images: ["/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp"],
        price: 99894,
        name: "HP Blade X16 Intel i7-13700H RTX 4080 12GB +PRO",
        description: "Great for hybrid professionals, this HP Blade delivers solid GPU performance, responsive multitasking, and stylish aesthetics.",
        hardDrive: "512 GB",
        ram: "16 GB",
        processor: "Intel Core i7-13700H",
        motherboard: "HP ProEdge X",
        screen: "16\" UHD 120Hz",
        weight: "2.2 kg",
        warranty: "2 years",
        category: "ультрабуки"
    },
    {
        id: 15,
        images: ["/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp"],
        price: 141448,
        name: "Lenovo Predator TUF Intel i9-13980HX RTX 4080 12GB +GAMING",
        description: "A monster machine for high-end users. Whether gaming, rendering, or streaming, the Predator TUF handles it with raw processing power and robust build quality.",
        hardDrive: "1 TB",
        ram: "32 GB",
        processor: "Intel Core i9-13980HX",
        motherboard: "Lenovo TUF Armor 890",
        screen: "17.3\" FHD+ 240Hz",
        weight: "3.1 kg",
        warranty: "3 years",
        category: "игровые ноутбуки"
    },
    {
        id: 16,
        images: ["/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp"],
        price: 109051,
        name: "Gigabyte G5 G16 Ryzen 7 8845HS RTX 4080 12GB +PRO",
        description: "A solid option for professionals and gamers alike, offering balanced power and portability with a high-quality screen and long-lasting components.",
        hardDrive: "512 GB",
        ram: "16 GB",
        processor: "AMD Ryzen 7 8845HS",
        motherboard: "Gigabyte ProMain A780",
        screen: "15.6\" FHD 165Hz",
        weight: "2.5 kg",
        warranty: "2 years",
        category: "Рабочие станции"
    },
    {
        id: 17,
        images: ["/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp"],
        price: 90282,
        name: "MSI G5 Alpha Intel i7-13700H RX 7800M XT 12GB +WWW",
        description: "This MSI model combines impressive graphics with a vibrant display. Great choice for digital artists or home multimedia centers.",
        hardDrive: "256 GB",
        ram: "8 GB",
        processor: "Intel Core i7-13700H",
        motherboard: "MSI AlphaBoard 360",
        screen: "15.6\" IPS FHD",
        weight: "2.3 kg",
        warranty: "1 year",
        category: "для дома"
    },
    {
        id: 18,
        images: ["/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp"],
        price: 109124,
        name: "MSI Legion G16 Ryzen 7 8845HS RTX 4070 8GB +GAMING",
        description: "Fast boot times, seamless multitasking, and a responsive GPU make this an all-around great gaming laptop for competitive users.",
        hardDrive: "1 TB",
        ram: "16 GB",
        processor: "AMD Ryzen 7 8845HS",
        motherboard: "MSI Legion Core 770",
        screen: "16\" QHD 165Hz",
        weight: "2.6 kg",
        warranty: "2 years",
        category: "игровые ноутбуки"
    },
    {
        id: 19,
        images: ["/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp"],
        price: 176719,
        name: "Gigabyte Blade R7000P Ryzen 9 7945HX RTX 4070 8GB +EVO",
        description: "Ultimate desktop replacement with raw Ryzen 9 horsepower and RTX graphics for those needing real muscle on the move.",
        hardDrive: "1 TB",
        ram: "32 GB",
        processor: "AMD Ryzen 9 7945HX",
        motherboard: "Gigabyte EvoEdge X300",
        screen: "17.3\" UHD 120Hz",
        weight: "3.2 kg",
        warranty: "3 years",
        category: "Рабочие станции"
    },
    {
        id: 20,
        images: ["/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp", "/item-min.webp"],
        price: 92560,
        name: "Acer Blade TUF Intel i7-13700H RTX 4080 12GB +WWW",
        description: "Designed for modern professionals, this laptop balances top specs and elegant design. Handles heavy workloads and long hours easily.",
        hardDrive: "512 GB",
        ram: "16 GB",
        processor: "Intel Core i7-13700H",
        motherboard: "Acer PowerFlow B860",
        screen: "15.6\" IPS QHD",
        weight: "2.4 kg",
        warranty: "2 years",
        category: "ультрабуки"
    }
];
