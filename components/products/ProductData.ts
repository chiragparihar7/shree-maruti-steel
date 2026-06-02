import {
  Cylinder,
  LayoutPanelTop,
  Settings2,
  CircleGauge,
  Wrench,
  ShieldCheck,
  Bolt,
  Flame,
  HardHat,
  Gauge,
  Cable,
  Warehouse,
  Pipette,
  Cog,
  Shield,
  Drill,
  Thermometer,
} from "lucide-react";

export const products = [
  {
    title: "Stainless Steel Pipes",
    description:
      "Premium stainless steel welded & seamless pipes conforming to ASTM A312 / A213 standards for industrial applications.",
    icon: Cylinder,
    image: "/Product/product1.jpg",

    specs: {
      size: '1/2" to 24"',
      grades: ["304", "304L", "309", "316", "316L"],
      make: [
        "Venus",
        "Remi",
        "Sumitoma Nippon",
        "Suraj",
        "Ratnamani",
      ],
    },
  },

  {
    title: "M.S. / G.I. ERW Pipes",
    description:
      "Industrial ERW pipes including square, rectangular and round pipe solutions as per IS standards.",
    icon: Cylinder,
    image: "/Product/Product2.jpg",

    specs: {
      size: '1/2" to 36"',
      standards: [
        "IS1239",
        "IS3589",
        "ISS4923",
        "ASTM A500",
      ],
      make: [
        "Tata",
        "Asian",
        "Zenith",
        "Jindal",
        "Bhushan",
        "Apollo",
      ],
    },
  },

  {
    title: "C.S. Seamless Pipes",
    description:
      "Heavy-duty carbon steel ERW & seamless boiler tubes for industrial and engineering projects.",
    icon: Cylinder,
    image: "/Product/Product3.jpg",

    specs: {
      size: '1/2" to 36"',
      standards: [
        "A106 Grade B",
        "SA179",
        "DIN17175",
        "A333",
        "API-5L",
      ],
      make: ["MSL", "ISMT", "JSL"],
    },
  },

  {
    title: "Alloy Steel Pipes",
    description:
      "Premium alloy steel seamless pipes suitable for IBR & non-IBR industrial applications.",
    icon: Cylinder,
    image: "/Producct/Product4.jpg",

    specs: {
      size: '1/2" to 18"',
      grades: ["P11", "P12", "P22"],
      standards: ["ASTM A335"],
    },
  },

  {
    title: "Stainless Steel Plates",
    description:
      "Industrial stainless steel sheets, coils and heavy-duty plates for fabrication industries.",
    icon: LayoutPanelTop,
    image: "/Product/product5.jpg",

    specs: {
      thickness: "1mm to 100mm",
      grades: [
        "304",
        "304L",
        "316",
        "316L",
        "321",
        "309",
        "310S",
      ],
    },
  },

  {
    title: "Boiler Steel Plates",
    description:
      "Boiler quality steel plates, channels, beams and structural steel products.",
    icon: LayoutPanelTop,
    image: "/Product/Product6.jpg",

    specs: {
      thickness: "3mm to 150mm",
      grades: [
        "IS2062",
        "IS2002-62",
        "ASTM A516 Gr.70/60",
      ],
    },
  },

  {
    title: "S.S. Pipe Fittings",
    description:
      "Stainless steel welded & seamless pipe fittings conforming to A403 / A182F standards.",
    icon: Settings2,
    image: "/Product/Product7.jpg",

    specs: {
      grades: ["304", "316"],
      standards: ["A403", "A182F", "A240"],
    },
  },

  {
    title: "C.S. Pipe Fittings",
    description:
      "Carbon steel fittings, flanges and welded industrial connection solutions.",
    icon: Settings2,
    image: "/Product/Product8.jpg",

    specs: {
      standards: ["A234", "A105", "IS2062"],
      types: [
        "SORF",
        "SOFF",
        "BLRF",
        "SW",
        "Weld Neck",
      ],
    },
  },

  {
    title: "Industrial Valves",
    description:
      "Ball valves, gate valves, globe valves, safety valves and check valves.",
    icon: CircleGauge,
    image: "/Product/Product9.jpg",

    specs: {
      make: [
        "L&T",
        "Audco",
        "KSB",
        "Zoloto",
        "Unik",
        "Leader",
        "Karan",
      ],
    },
  },

  {
    title: "Hydraulic Tube Fittings",
    description:
      "Hydraulic tube fittings for instrumentation & pneumatic control systems.",
    icon: Wrench,
    image: "/Product/Product10.jpg",

    specs: {
      materials: ["S.S.", "M.S.", "Brass"],
    },
  },

  {
    title: "Nut Bolt & Washer",
    description:
      "Industrial fasteners including washers, bolts, threaded rods and rivets.",
    icon: Bolt,
    image: "/Product/Product11.jpg",

    specs: {
      grades: [
        "304",
        "304L",
        "304H",
        "316",
        "316L",
        "316Ti",
        "321",
        "321H",
        "317",
        "317L",
        "310",
        "310S",
      ],
    },
  },

  {
    title: "Fire Safety Equipment",
    description:
      "Industrial fire protection systems, PPE safety gear and emergency solutions.",
    icon: Flame,
    image: "/Product/Product12.jpg",

    specs: {
      products: [
        "Fire Extinguishers",
        "Hydrant Valves",
        "Hose Pipes",
        "Safety PPE",
      ],
    },
  },

  {
    title: "Hand Tools",
    description:
      "Professional industrial hand tools and engineering workshop equipment.",
    icon: HardHat,
    image: "/Product/Product13.jpg",

    specs: {
      tools: [
        "Spanners",
        "Cutting Tools",
        "Wrenches",
        "Industrial Kits",
      ],
    },
  },

  {
    title: "Brass Fittings",
    description:
      "Industrial brass fittings for piping and engineering applications.",
    icon: Pipette,
    image: "/Product/Product14.jpg",

    specs: {
      materials: ["Brass"],
      applications: [
        "Piping",
        "Instrumentation",
        "Engineering",
      ],
    },
  },

  {
    title: "Copper Fittings",
    description:
      "Premium copper fittings and industrial piping accessories.",
    icon: Cable,
    image: "/Product/Product15.jpg",

    specs: {
      materials: ["Copper"],
      applications: [
        "HVAC",
        "Industrial Piping",
        "Engineering",
      ],
    },
  },

  {
    title: "Pressure Gauges",
    description:
      "Industrial pressure gauges and instrumentation monitoring systems.",
    icon: Gauge,
    image: "/Product/Product16.jpg",

    specs: {
      types: [
        "Pressure Gauge",
        "Digital Gauge",
        "Industrial Gauge",
      ],
    },
  },

  {
    title: "Temperature Gauges",
    description:
      "Accurate industrial temperature gauges for monitoring and process control.",
    icon: Thermometer,
    image: "/Product/Product17.jpg",

    specs: {
      types: [
        "Dial Thermometer",
        "Digital Temperature Gauge",
        "Industrial Thermometer",
      ],
    },
  },

  {
    title: "Gauge Accessories",
    description:
      "Gauge accessories and instrumentation support products for industries.",
    icon: Gauge,
    image: "/Product/Product18.jpg",

    specs: {
      products: [
        "Gauge Cock",
        "Syphon",
        "Needle Valve",
        "Connectors",
      ],
    },
  },

  {
    title: "Bearings",
    description:
      "Industrial bearings for heavy-duty engineering and machinery systems.",
    icon: Cog,
    image: "/Product/Product19.jpg",

    specs: {
      types: [
        "Ball Bearing",
        "Roller Bearing",
        "Industrial Bearing",
      ],
    },
  },

  {
    title: "Bushings",
    description:
      "Precision industrial bushings for engineering and machine applications.",
    icon: Cog,
    image: "/Product/Product20.jpg",

    specs: {
      applications: [
        "Machinery",
        "Industrial Equipment",
        "Engineering",
      ],
    },
  },

  {
    title: "Threaded Rod",
    description:
      "Heavy-duty threaded rods for industrial fastening applications.",
    icon: Drill,
    image: "/Product/Product21.jpg",

    specs: {
      materials: [
        "S.S.",
        "M.S.",
        "Alloy Steel",
      ],
    },
  },

  {
    title: "Rivets",
    description:
      "Industrial rivets and fastening solutions for fabrication industries.",
    icon: Bolt,
    image: "/Product/Product22.jpg",

    specs: {
      types: [
        "Blind Rivets",
        "Solid Rivets",
        "Industrial Rivets",
      ],
    },
  },

  {
    title: "Wire Products",
    description:
      "Industrial wire products and metal wire engineering solutions.",
    icon: ShieldCheck,
    image: "/Product/Product23.jpg",

    specs: {
      materials: [
        "S.S. Wire",
        "Copper Wire",
        "Industrial Wire",
      ],
    },
  },
];