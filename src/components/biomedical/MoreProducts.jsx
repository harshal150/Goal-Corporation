import React from "react";
import product1 from '../../assets/BioProducts/product1.jpg';
import product2 from '../../assets/BioProducts/product2.jpg';
import product3 from '../../assets/BioProducts/product3.jpg';
import product4 from '../../assets/BioProducts/product4.jpg';
import product5 from '../../assets/BioProducts/product5.jpg';
import product6 from '../../assets/BioProducts/product6.jpg';


import product7 from '../../assets/BioProducts/product7.jpg';
import product8 from '../../assets/BioProducts/product8.jpg';
import product9 from '../../assets/BioProducts/product9.jpg';
import product10 from '../../assets/BioProducts/product10.jpg';
import product11 from '../../assets/BioProducts/product11.jpg';
import product12 from '../../assets/BioProducts/product12.jpg';

const MoreProducts = () => {
  const products = [
    {
      id: "BOD001",
      title: "B.O.D. INCUBATOR WITH ELECTRONIC DIGITAL TEMP. CONTROLLER – INDICATOR (SUPER DELUXE MODEL)",
      description:
        "Double walled, with the temp. Range 5°C to 50°C ± 1°C. Inside chamber and shelves of stainless steel and outside of mild steel sheet. Fitted with two air circulating fans and acrylic transparent door inside.",
      image: product1,
    },
    {
      id: "AUTO001",
      title: "AUTOCLAVE (PORTABLE STERILIZER)",
      description:
        "The body constructed of jointless thick aluminium sheet Lid and Ring made of aluminium silicon alloy die casting. Provided with compound pressure and vacuum gauge, self ejecting immersion heater. Pressure adjustable from 5 to 15 PSI, but tested up to 20-25 PSI. Complete with double safety-steam release valve, inner vessel, iron stand, plug connector to work on 220 Volts AC Mains.",
      image: product2,
    },
    {
      id: "PHM001",
      title: "MUFFLE FURNACE RECTANGULAR LABORATORY MODEL (LIGHT WEIGHT) – WITH DIGITAL REGULATOR",
      description:
        "This water bath is designed to meet almost all the requirements of pathological, microbiological, chemical, physical and other laboratories.  Inner chamber is made of Stainless Steel sheet and outer body of mild steel. stove enamelled.  A thermostat controls the temperature at any point from 5°C above room temperature to 85°C.  The control accuracy upto 60°C is ±2°.  A pilot lamp is provided.The controls are all housed in a recess at one end of the bath.  From top to perforated false bottom it is about 125mm.  The supply required is 230 Volts AC. Single phase.",
      image: product3,
    },
    {
      id: "PHM002",
      title: "OVEN DELUXE WITH TIMER",
      description:
        'Double walled cabinet with 4” insulation stuffed with glasswool. Inner chamber of thick gauge stainless steel and outer body of mild steel, beautifully painted with two coats of super white enamel, after a coat of red oxide rust proofing primer. Temperature control by superior quality thermostat and fitted with built-in L-shaped thermometer. Upto 250°C. Castor wheels fitted at bottom for portability. Fitted with timer making it convenient for time bound operation. With two/three stainless shelves. All panels and fittings are of Stainless Steel, except hinges, lock & latch. Life Long Service. Temp. Range : 5°C above ambient to 250°C.',
      image: product4,
    },
    {
      id: "PHM003",
      title: "PH Meter",
      description:
        'pH meters range from simple and inexpensive pen-like devices to complex and expensive laboratory instruments with computer interfaces and several inputs for indicator and temperature measurements to be entered to adjust for the variation in pH caused by temperature. Specialty meters and probes are available for use in special applications, harsh environments, etc. There are also holographic pH sensors, which allow pH measurement calorimetrically',
      image: product5,
    },
    {
      id: "PHM004",
      title: "Conductivity Meter",
      description:
        'The  Conductometer is an easy-to-use measuring instrument for routine operation in the laboratory and on the road. It can be used for conductivity measurements and for determining TDS or salinity and temperature. Important information such as charge state, user, IDs can also be clearly seen at a glance. A PIN-protected expert mode protects the instrument against unintentional changes of different parameters by routine users. In order to permit mobile use, the  Conductometer has an accumulator that can be charged both in the laboratory using the power supply unit and on the road via 12 V connector in a car. The meter naturally also satisfies the requirements of IP67. A stand plate allows the mobile meter to be easily converted into a laboratory meter and vice versa. The measured value memory can hold up to 10,000 data sets.',
      image: product6,
    },
    {
      id: "PHM005",
      title: "Ultrasonic Cleaners",
      description:
        'This line of ultrasonic cleaners include five models with sizes ranging from 1/2 gallons, 3/4 gallons, 1-1/2 gallons, 2-1/2 gallons and 5-1/2 gallons. Each model is constructed using durable industrial style 40kHz transducers. These provide increased cleaning power along with built in sweep frequency to ensure uniform cleaning activity throughout the bath. The 1/2 and 3/4 gallon models have a molded dip in their rims to facilitate emptying of solution from the tank. The three larger sizes have built in drains and are supplied with tank drain kits. Each model can be purchased in three different configurations -- with a Mechanical Timer (MT), with a Mechanical Timer plus Heat (MTH) and with Digital Control, plus Heat and Timer (DTH)',
      image: product7,
    },
    {
      id: "PHM006",
      title: "Analytical Balance",
      description:
        'Analytical balances for weighing up to 520 g maximum with 0.1 or 0.01 mg resolution. Cubis® provides max. weighing performance, security and full network capability. Equipped with a touch screen, it is also suitable for customised workflows (Q-Apps). Secura® guarantees high reliability and security in regulated areas for the most common weighing ranges. Quintix® is convenience in operation, calibration and data transfer. Practum® features weighing technology at the highest quality level.',
      image: product8,
    },
    {
      id: "PHM007",
      title: "Ice Flacker Machine",
      description:
        'This product features a power-saving design with a totally safe and stainless steel body, offering perfect shapes and self-standing capability, while maintaining water content control. Its space-saving structure and integrated sprayers ensure maximum efficiency, complemented by an auto stop and start functionality and low noise operation for a seamless experience.',
      image: product9,
    },
    {
      id: "PHM008",
      title: "Lab Oven",
      description:
        'Laboratory Oven that are easy in maintenance, durable, simple in use and cost efficiency. Available in various technical specifications, these ovens can also be customized as per the specifications detailed by our valued clients. Our range of laboratory ovens includes memmert ovens, oven gmp model, high temperature ovens, round vacuum ovens, rectangular vacuum oven and vacuum oven',
      image: product10,
    },
    {
      id: "PHM009",
      title: "Incubator",
      description:
        'The exterior is constructed from sheet steel finished in an easy clean powder coated paint. The interior chamber is made from mild steel coated with aluminium (CLAD) with a stainless steel chamber available as an option. Fitted with fixed shelf runners and removable chrome plated wire grid shelves. The top vent is fitted with a clip to hold a glass immersion thermometer. The vertical style units are fitted with the controls below the door, the horizontal style units with the controls fitted on the side.The incubators have a solid steel door as standard or as an alternative a door with an integral viewing window (VIS) can be fitted. As an option a double door, comprising steel outer with an inner glass door is also available',
      image: product11,
    },
    {
      id: "PHM0010",
      title: "Rotary Shaker",
      description:
        'These Shakers are ideal for mixing and development of cultures, chemicals, solvents, and assays etc. The Unit has base assembly fabricated from heavy mild steel sections. Brushless Induction drive motor with frequency drive makes the unit suitable for continuous non-stop operation. Step less electronic frequency control ensures gentle start and maintains preset speed. Compact counter balanced drive mechanism ensures high stability and reliability even in continuous operation & uneven load distribution.',
      image: product12,
    },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition-shadow duration-300"
          >
            {/* Product Image */}
            <div className="w-1/3  p-4 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.id}
                className="w-32 h-40 object-contain rounded-md"
              />
            </div>

            {/* Product Details */}
            <div className="w-2/3 p-4 flex flex-col justify-center">
              <h2 className="text-sm capitalize font-semibold text-blue-700 mb-2">
                {product.title}
              </h2>
              <p className="text-gray-600 text-[12px] leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreProducts;
