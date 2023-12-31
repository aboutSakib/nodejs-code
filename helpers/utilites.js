//module scafolding
const crypto = require("crypto");
const environments = require("./environments");
const utilites = {};

//parse JSON object to string
utilites.parseJSON = (jsonString) => {
  let output;
  try {
    output = JSON.parse(jsonString);
  } catch {
    output = {};
  }
  return output;
};
//hash string
utilites.hash = (str) => {
  if (typeof str === "string" && str.length > 0) {
    console.log(environments, process.env.NODE_ENV);
    const hash = crypto
      .createHmac("sha256", environments.secretKey)

      .update("str")

      .digest("hex");
    return hash;
  }
  return false;
};

module.exports = utilites;
