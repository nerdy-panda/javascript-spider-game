import {nerdStringInstance } from "../../Helpers/Factories.js";

export default class AnimalModelBaseFactory {
    static getDependencies() {
        return [ nerdStringInstance() ];
    }
}