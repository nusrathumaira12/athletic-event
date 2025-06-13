import React from 'react';

const sponsors = [
  {
    name: 'BEXIMCO',
    logo: 'https://images.seeklogo.com/logo-png/36/1/beximco-logo-png_seeklogo-365566.png',
  },
  {
    name: 'PRAN-RFL',
    logo: 'https://images.seeklogo.com/logo-png/25/1/rfl-logo-png_seeklogo-250040.png',
  },
  {
    name: 'Square Group',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Seal_of_Square_Group.svg/1200px-Seal_of_Square_Group.svg.png',
  },
  {
    name: 'ACI Limited',
    logo: 'https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2022/10/26/aci-logo.jpg',
  },
  {
    name: 'Grameenphone',
    logo: 'https://logos-world.net/wp-content/uploads/2022/07/Grameenphone-Logo.png',
  },
  {
    name: 'Walton',
    logo: 'https://images.seeklogo.com/logo-png/25/1/walton-logo-png_seeklogo-251022.png',
  },
  {
    name: 'Robi Axiata',
    logo: 'https://images.seeklogo.com/logo-png/30/1/robi-axiata-logo-png_seeklogo-303503.png',
  },
  {
    name: 'BRAC',
    logo: 'https://www.brac.net/images/brac-logo-big.png',
  },
];

const Sponsors = () => {
  return (
    <section className="bg-[#f7f5f3] py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-orange-600 uppercase tracking-wide text-sm font-semibold mb-2">
          ||ATHLOFY Official Sponsors ||
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="text-black">SUPPORTED BY OUR TRUSTED </span><br />
          <span className="text-orange-600">OFFICIAL SPONSORS.</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 items-center justify-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-300"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-16 mx-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
