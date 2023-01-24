const Countries = [
  { name: "USA" },
  { name: "India" },
  { name: "Japan" },
  { name: "Germany" },
  { name: "France" },
  { name: "Default" },
];

const CountryCodes = {
  USA: "US",
  India: "IN",
  Japan: "JP",
  France: "FR",
  Germany: "DE",
  Default: "None",
};

const Popularity = [
  { name: "High", minRate: 85, maxRate: 100 },
  { name: "Medium", minRate: 55, maxRate: 84 },
  { name: "Low", minRate: 0, maxRate: 54 },
  { name: "None", minRate: 0, maxRate: 0 },
];

export { Countries, Popularity, CountryCodes };
