// import React from "react";
// import { id } from "zod/locales";
import Heart from "../assets/Heart.svg";
import Baby from "../assets/Baby.svg";
import Health from "../assets/Health.svg";
import Bone from "../assets/Bone.svg";
import Obgyn from "../assets/OB-GYN.svg";
import Eye from "../assets/Eye.svg";

export const AuthDepartmentItem = [
  {
    id: 1,
    name: "Cardiology",
    description:
      "Heart and cardiovascular care. Specialized diagnostics and treatment for heart health.",
    specialists: 5,
    icon: Heart,
    Link: "/",
  },
  {
    id: 2,
    name: "Neurology",
    description:
      "Brain and nervous system care. Advanced neurological assessment and management.",
    specialists: 5,
    icon: Health,
    Link: "/",
  },
  {
    id: 3,
    name: "Pediatrics",
    description:
      "Healthcare for children and adolescents. Compassionate care for our youngest patients.",
    specialists: 5,
    icon: Baby,
    Link: "/",
  },
  {
    id: 4,
    name: "Ophthalmology",
    description:
      "Focuses on the diagnosis and treatment of eye and vision problems. Handles conditions like vision.",
    specialists: 5,
    icon: Eye,
    Link: "/",
  },
  {
    id: 5,
    name: "Orthopedics",
    description:
      "Bones, joints and mobility care. Advanced orthopedic surgery and rehabilitation.",
    specialists: 5,
    icon: Bone,
    Link: "/",
  },
  {
    id: 6,
    name: "OB-GYN",
    description: "Focuses on women's reproductive health and pregnancy care.",
    specialists: 5,
    icon: Obgyn,
    Link: "/",
  },
];
