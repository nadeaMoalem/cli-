"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nationalize = void 0;
const axios = require('axios');
const countryData = require("../src/country_code.json");
class Nationalize {
    constructor(name) {
        this.name = name;
    }
    getNationality() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://api.nationalize.io?name=${this.name}`;
            try {
                const response = yield axios.get(url);
                const percentage = [];
                const countries = [];
                response.data.country.forEach((element) => {
                    countries.push(countryData[element.country_id]);
                    percentage.push((element.probability * 100).toFixed(2) + "%");
                });
                return countries.map((country, index) => ({
                    country,
                    probability: percentage[index]
                }));
            }
            catch (error) {
                console.error(`Error making the request: ${error.message}`);
                return null;
            }
        });
    }
}
exports.Nationalize = Nationalize;
