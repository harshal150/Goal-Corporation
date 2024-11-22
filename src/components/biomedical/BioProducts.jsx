import React from "react";
import image1 from '../../assets/BioProducts/GM001.jpg'
import image2 from '../../assets/BioProducts/GM002.jpg'

import gb01 from '../../assets/BioProducts/GB01.jpg'
import gb02 from '../../assets/BioProducts/GB02.jpg'
import gb03 from '../../assets/BioProducts/GB03.jpg'

import gt01 from '../../assets/BioProducts/GT01.jpg'
import gt02 from '../../assets/BioProducts/GT02.jpg'

import gf01 from '../../assets/BioProducts/GF01.jpg'

const Bioproducts = () => {
  const products = [
    {
      id: "GM001",
      title: "MONOCULAR MICROSCOPE",
      details: [
        { label: "Total Magnification", value: "40-1600X" },
        { label: "Wide Field Eyepiece", value: "WF10X, H16X Achromatic Objectives DIN 4X, 10X, 40X, 100x, Oil (SL)" },
        { label: "Illumination System", value: "Built in Illumination 12V/20W" },
        { label: "Focusing Range", value: "Coarse & Fine Focusing System" },
        { label: "Working Stage", value: "Mechanical Stage with stage micrometer" },
        { label: "Condenser", value: "Abbe Type N.A 1.25 with IRIS Diaphragm" },
      ],
      image: image1, // Replace with actual image URL
    },
    {
      id: "GM002",
      title: "MONOCULAR MICROSCOPE",
      details: [
        { label: "Total Magnification", value: "40-1000X" },
        { label: "Wide Field Eyepiece", value: "WF10X" },
        { label: "Achromatic Objective", value: "DIN 4X, 10X, 40X, 100X, Oil (SL)" },
        { label: "Illumination System", value: "Built in illumination 6V/20W" },
        { label: "Focusing Range", value: "Co-axial Coarse and fine adjustment Range 13mm fine division 0.002mm with tension control" },
        { label: "Working Stage", value: "Double layer Mechanical Stage 120 x 120mm" },
        { label: "Moving Stage", value: "60 x 30 mm" },
        { label: "Condenser", value: "Abbe NA 1.25 with IRIS Diaphragm & Filter" },
      ],
      image: image2, // Replace with actual image URL
    },
    {
        id: "GB010",
        title: "BINOCULAR MICROSCOPE WITH BATTERY BACKUP",
        details: [
          { label: "Total Magnification", value: "40-1600X" },
          { label: "Wide Field Eyepiece", value: "WF 10x, H16X Pair, Pointer eyepiece with Eye Guard 10x" },
          { label: "Nosepiece", value: "Quadruple Nose piece" },
          { label: "Objectives", value: "Semi Plan objectives DIN 4x, 10x, 40x (Oil)" },
          { label: "Illumination System", value: "LED Light" },
          { label: "Focusing Range", value: "Co-axial Coarse and fine adjustment" },
          { label: "Double Stage", value: "Double Layer Mechanical stage 140 x 140 mm" },
          { label: "Moving Stage", value: "75 x 50 mm" },
          { label: "Condenser", value: "Abbe type N.A 1.25 with IRIS Diaphragm & Filter" },
        ],
        image: gb01, // Replace with the actual image URL for GB010
      },
      {
        id: "GB011",
        title: "BINOCULAR MICROSCOPE WITH BATTERY BACKUP",
        details: [
          { label: "Total Magnification", value: "40-1600X" },
          { label: "Wide Field Eyepiece", value: "Pair 10X/20mm with Eye Guard" },
          { label: "Objective", value: "Semi Plan 4X, 10X, 40X, SL 100X (Oil)" },
          { label: "Illumination System", value: "Built-in Illumination, LED Light" },
          { label: "Focusing Range", value: "Co-axial Coarse and fine focusing system" },
          { label: "Nose Piece", value: "Quadruple Nose piece" },
          { label: "Stage", value: "Mechanical Stage 140 x 140 mm" },
          { label: "Moving Range", value: "75 x 50 mm" },
          { label: "Condenser", value: "Abbe type N.A 1.25" },
          { label: "Features", value: "High Level Microscope with high Resolution and Transmission" },
        ],
        image: gb02, // Replace with the actual image URL for GB011
      },
      {
        id: "GT021",
        title: "BINOCULAR MICROSCOPE",
        details: [
          { label: "Eyepiece", value: "Wide Field Eyepiece WF 10x/20mm with Eye Guard" },
          { label: "Objective", value: "Infinity Semi Plan 4x, 10x, 40x, 100x" },
          { label: "Nosepiece", value: "Quadruple Nosepiece" },
          { label: "Stage", value: "Double Layer Mechanical Stage 140mm x 140mm/75mm x 50mm" },
          { label: "Condenser", value: "Sliding-in centerable condenser N.A 1.25" },
          { label: "Focusing", value: "Coaxial Coarse and Fine adjustment, Moving range 20mm" },
          { label: "Illumination", value: "6V/20W Halogen Lamp, Brightness adjustable" },
        ],
        image: gb03, // Replace with the actual image URL for GT021
      },
      {
        id: "GT022",
        title: "TRINOCULAR RESEARCH MICROSCOPE",
        details: [
          { label: "Total Magnification", value: "40-1000X" },
          { label: "Eyepiece", value: "Pair EWF 10X/22, with Eye Guard" },
          { label: "Objectives", value: "Infinity Plan Achromatic 4X, 10X, 40X, 100X (Oil)" },
          { label: "Nosepiece", value: "Quintuple" },
          { label: "Working Stage", value: "Double Layer Mechanical Stage 185 x 142mm/75 x 55mm" },
          { label: "Focusing Range", value: "Co-axial Coarse and fine focusing system. Fine adjustment 0.002mm" },
          { label: "Illumination System", value: "External Illumination 6V/30W, Aspherical Collector with Kohler Illumination" },
          { label: "Condenser", value: "Swing Condenser/Dual Condenser N.A 0.90/1.25 Center Adjustable" },
          { label: "Options", value: "Fluorescent, Dark Field, Phase Contrast, Polarizing, CCD Camera, Digital Camera, and Software" },
        ],
        image: gt01, // Replace with the actual image URL for GT022
      },
      {
        id: "GP030",
        title: "PENTA HEAD MICROSCOPE",
        details: [
          { label: "Type", value: "Multi Viewing Microscope" },
          { label: "Description", value: "The Microscope is Equipped with five heads for 5 persons observing at the same time." },
          { label: "Eyepiece", value: "Extra wide field eyepiece EW10X/22, Eyepiece Tube with Eyeguard" },
          { label: "Features", value: "With the features of Infinite optical system, Effective Illumination LED Pointer and Images Coherence, it is widely used in clinic Research and Teaching Demonstration" },
          { label: "Objectives", value: "Infinite Plan Achromatic Objective 4x, 10x, 40x, 100x" },
          { label: "Focusing", value: "Co-axial Coarse & Fine Focus Adjustment, Fine Division 0.002MM" },
          { label: "Stage", value: "Double Layer Mechanical Stage 185 x 142 MM, Moving range 75 x 55mm" },
          { label: "Pointer", value: "Green LED Pointer, Brightness Adjustable" },
          { label: "Illumination System", value: "External Illumination 6V/30W, Aspherical Collector with Kohler Illumination" },
          { label: "Condenser", value: "Swing Condenser/Dual Condenser N.A 0.90/1.25 center Adjustable" },
        ],
        image: gt02, // Replace with the actual image URL for GP030
      },
      {
        id: "GF042",
        title: "EPI FLUORESCENCE MICROSCOPE",
        details: [
          { label: "Total Magnification", value: "40-1000X" },
          { label: "Eyepiece", value: "Pair EWF 10X/22, with Eye Guard" },
          { label: "Objectives", value: "Infinity Plan Achromatic 4X, 10X, 40X, 100X (Oil)" },
          { label: "Nosepiece", value: "Quintuple" },
          { label: "Working Stage", value: "Double Layer Mechanical Stage 185 x 142mm/75 x 55mm" },
          { label: "Focusing Range", value: "Co-axial Coarse and fine focusing system. Fine adjustment Fine 0.002 mm" },
          { label: "Illumination System", value: "External illumination 6V/30W, Aspherical Collector with Kohler illumination" },
          { label: "Condenser", value: "Swing Condenser/Dual Condenser N.A 0.90/0.25 Center Adjustable" },
        ],
        attachments: [
          { label: "EIP-FLUORESCENT ATTACHMENT", value: "" },
          { label: "Reflected Light Source", value: "Blue excitation BP460-490, DM500, BA520, Green excitation BP-510-550, DM570, BA590" },
          { label: "Lamp", value: "100WHBO ultra Hi-voltage Spherical Mercury Lamp" },
          { label: "Power Supplier", value: "Power Supplier NFP-110V/220W with Digital Display and Timer" },
          { label: "Objectives", value: "Infinite Plan Fluorescent 4X, 10X, 40X, 100X" },
          { label: "Optional", value: "U (Ultraviolet) V (Violet) Exiting Light Filter System (Rs.1,00,000/- Extra), CCD Camera Software" },
        ],
        image:gf01, // Replace with the actual image URL for GF042
      },
  ];

  return (
    <div className="p-4 space-y-8 lg:mt-8">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 border-b pb-6">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <img src={product.image} alt={product.id} className="w-48 h-48 object-contain border p-2" />
            <p className="text-center text-sm font-semibold mt-2">{product.id}</p>
          </div>

          {/* Product Details Table */}
          <div className="flex-1">
            <h2 className="text-lg font-bold uppercase mb-4">{product.title}</h2>
            <table className="w-full text-sm border">
              <tbody>
                {product.details.map((detail, index) => (
                  <tr key={index} className="border-b">
                    <td className="font-semibold py-1 px-2 w-1/3">{detail.label}:</td>
                    <td className="py-1 px-2">{detail.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bioproducts;
