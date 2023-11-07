const axios = require('axios');
const countryData = require("./country_code.json")

export class Nationalize {

  private name:string

  constructor(name:string) {
    this.name = name;
  }

  async getNationality() {
    const url = `https://api.nationalize.io?name=${this.name}`;

    try {
      const response = await axios.get(url);
      const percentage:string[] = []
      const countries:string[] = []
      
      response.data.country.forEach((element:any) => {
        countries.push(countryData[element.country_id])
        percentage.push((element.probability * 100).toFixed(2) + "%")
      })

      return countries.map((country, index) => ({
        country,
        probability: percentage[index]
      }))

    } catch (error: any) {
      console.error(`Error making the request: ${error.message}`);
      return null;
    }
  }
}