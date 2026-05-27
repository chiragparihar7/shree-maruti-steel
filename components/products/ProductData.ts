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
} from "lucide-react";

export const products = [
  {
    title: "Stainless Steel Pipes",
    description:
      "Premium stainless steel welded & seamless pipes confirming to ASTM A312 / A213 standards.",
    icon: Cylinder,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop",
    specs: {
      size: '1/2" to 24"',
      grades: ["304", "304L", "309", "316", "316L"],
      make: ["Venus", "Remi", "Sumitoma Nippon", "Suraj", "Ratnamani"],
    },
  },

  {
    title: "M.S. / G.I. ERW Pipes",
    description:
      "Industrial ERW pipes including square & rectangular pipes as per IS standards.",
    icon: Cylinder,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
    specs: {
      size: '1/2" to 36"',
      standards: ["IS1239", "IS3589", "ISS4923", "ASTM A500"],
      make: ["Tata", "Asian", "Zenith", "Jindal", "Bhushan", "Apollo"],
    },
  },

  {
    title: "C.S. Seamless Pipes",
    description:
      "Carbon steel ERW & seamless boiler tubes for heavy-duty industrial applications.",
    icon: Cylinder,
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1600&auto=format&fit=crop",
    specs: {
      size: '1/2" to 36"',
      standards: ["A106 Grade B", "SA179", "DIN17175", "A333", "API-5L"],
      make: ["MSL", "ISMT", "JSL"],
    },
  },

  {
    title: "Alloy Steel Seamless Pipes",
    description:
      "Premium alloy steel seamless pipes suitable for IBR & non-IBR applications.",
    icon: Cylinder,
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1600&auto=format&fit=crop",
    specs: {
      size: '1/2" to 18"',
      grades: ["P11", "P12", "P22"],
      standards: ["ASTM A335"],
    },
  },

  {
    title: "Stainless Steel Plates",
    description:
      "Industrial stainless steel sheets, coils and heavy-duty plates.",
    icon: LayoutPanelTop,
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1600&auto=format&fit=crop",
    specs: {
      thickness: "1mm to 100mm",
      grades: ["304", "304L", "316", "316L", "321", "309", "310S"],
    },
  },

  {
    title: "M.S. / Boiler Steel Plates",
    description:
      "Boiler quality plates, channels, beams and structural steel products.",
    icon: LayoutPanelTop,
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1600&auto=format&fit=crop",
    specs: {
      thickness: "3mm to 150mm",
      grades: ["IS2062", "IS2002-62", "ASTM A516 Gr.70/60"],
    },
  },

  {
    title: "M.S. / IBR & Non IBR Materials",
    description:
      "Pipe fittings, flanges and industrial piping materials for IBR & non-IBR use.",
    icon: Cog,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600&auto=format&fit=crop",
    specs: {
      size: '1" to 20"',
    },
  },

  {
    title: "C.S. Pipe Fittings & Flanges",
    description:
      "Carbon steel fittings, flanges and welded industrial connection solutions.",
    icon: Settings2,
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
    specs: {
      standards: ["A234", "A105", "IS2062"],
      types: ["SORF", "SOFF", "BLRF", "SW", "Weld Neck"],
    },
  },

  {
    title: "S.S. Pipe Fittings & Flanges",
    description:
      "Stainless steel welded & seamless fittings confirming to A403 / A182F.",
    icon: Settings2,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    specs: {
      grades: ["304", "316"],
      standards: ["A403", "A182F", "A240"],
    },
  },

  {
    title: "Industrial Valves",
    description:
      "Ball valves, gate valves, globe valves, safety valves and check valves.",
    icon: CircleGauge,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    specs: {
      materials: ["S.S.", "M.S.", "Brass"],
    },
  },

  {
    title: "Nut Bolt & Washer",
    description:
      "Industrial fasteners including washers, bolts, threaded rods and rivets.",
    icon: Bolt,
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=1600&auto=format&fit=crop",
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
    title: "Industrial Raw Materials",
    description:
      "Manufacturing stockist & suppliers of industrial raw materials and metals.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    specs: {
      materials: [
        "Carbon Steel",
        "Nickel Alloy",
        "Copper",
        "Brass",
        "Aluminum",
      ],
    },
  },

  {
    title: "Fire Safety Equipment",
    description:
      "Industrial fire protection, PPE safety gear and emergency safety solutions.",
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "Hand Tools & Engineering Tools",
    description:
      "Professional industrial hand tools, engineering tools and workshop equipment.",
    icon: HardHat,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "Pressure Gauges",
    description:
      "Industrial pressure gauges, temperature gauges and gauge accessories.",
    icon: Gauge,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "Copper Fittings",
    description:
      "Premium copper fittings and industrial piping accessories.",
    icon: Cable,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22731d8b09?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "Brass Fittings",
    description:
      "Industrial brass fittings for piping and engineering applications.",
    icon: Pipette,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22731d8b09?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "Fire Hydrant Valves",
    description:
      "Industrial fire hydrant valves, hose pipes and fire safety accessories.",
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "Bearing & Bushings",
    description:
      "Industrial bearings, bushings and precision engineering components.",
    icon: Cog,
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "Threaded Rods & Rivets",
    description:
      "Heavy-duty threaded rods, rivets and industrial fastening components.",
    icon: Drill,
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=1600&auto=format&fit=crop",
  },

  {
    title: "Industrial Storage Supply",
    description:
      "Bulk industrial inventory, warehouse storage and supply chain solutions.",
    icon: Warehouse,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop",
  },
];