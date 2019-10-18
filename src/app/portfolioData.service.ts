import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {JSONRoot} from "./samples.model";
import {Sample} from "./samples.model";

// all services need this decorator function
@Injectable()
export class PortfolioDataService {

    // the http service to be injected
    private http:HttpClient;
    // request url of Web API to retrieve JSON
    private readonly RETRIEVE_SCRIPT:string = "http://www.seanmorrow.ca/_lessons/portfolioData_JSON.php";
    // samples array of JSON data
    public samples:Sample[];
    // has the data loaded?
    public loaded:boolean = false;

    // currently selected sample for PortfolioSelectedComponent
    public selected:Sample;

    // injecting Http service into PortfolioDataService
    constructor(myHttp:HttpClient){
        this.http = myHttp;
    }   
    
    public load():void {
        console.log("loading data!");
        this.http.get<JSONRoot>(this.RETRIEVE_SCRIPT).subscribe(
            data => {
                // success :)
                //console.log(JSON.stringify(data));
                // get JSON root object
                let json:JSONRoot = data;
                // set public property to samples array of json
                this.samples = json.samples;
                console.log("test: " + this.samples.length);

                // set to first sample object by default to match dropdown
                this.selected = this.samples[0];

                // this is done loading!
                this.loaded = true;
            },
            err => {
                console.log("Error retrieving portfolio data :(");
            }
        );        
    }

}