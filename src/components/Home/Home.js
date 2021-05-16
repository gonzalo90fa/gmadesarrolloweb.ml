"use strict"
import Header from "../Header/Header.js";
import CoverPage from "../Blocks/CoverPage/CoverPage.js";
import Motivation from "../Blocks/Motivation/Motivation.js";
import OurPoints from "../Blocks/OurPoints/OurPoints.js"
import Services from "../Blocks/Services/Services.js";
import ContactUs from "../Blocks/ContactUs/ContactUs.js";
import OurClients from "../Blocks/OurClients/OurClients.js";
import Footer from "../Footer/Footer.js";

var sc;//SITE CONFIGURATION
var header;
var coverPage;
var motivation;
var ourPoints;
var services;
var contactUs;
var ourClients;
var footer;
export default class Home{
    constructor(SiteConfig){
        sc = SiteConfig;
        header = new Header(sc);
        coverPage = new CoverPage();
        motivation = new Motivation();
        ourPoints = new OurPoints();
        services = new Services();
        contactUs = new ContactUs();
        ourClients = new OurClients();
        footer = new Footer(sc);

        this.html = `
            ${header.html}
            ${coverPage.html}
            ${motivation.html}
            ${ourPoints.html}
            ${services.html}
            ${contactUs.html}
            ${ourClients.html}
            ${footer.html}
        `;
    }
    run(){
        header.run();
        coverPage.run();
    }
}