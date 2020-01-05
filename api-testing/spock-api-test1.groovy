package com.test.third.spock

import groovy.json.JsonOutput
import groovyx.net.http.HTTPBuilder
import spock.lang.Specification
import groovy.time.TimeCategory
import java.text.SimpleDateFormat

class spockTesting2 extends Specification {

    def "Testing currency converter REST API with Spock"(){
        given:
        def client = new HTTPBuilder("https://currency-converter5.p.rapidapi.com")
        client.headers['x-rapidapi-host'] = "currency-converter5.p.rapidapi.com";
        client.headers['x-rapidapi-key'] = "792bc5d42amsh1268eeda0edeb35p125cb9jsn17df54611ad3";
        def queryParams = ['to':"INR", 'from':"GBP"];

        def now = new Date();
        SimpleDateFormat f = new SimpleDateFormat("YYYY-MM-dd");
        def date = f.format(now);
        def lastYear;

        use (TimeCategory){
            lastYear = f.format(now - 1.year);
        }

        when:
        def resp = client.get(path: "/currency/historical/".plus(lastYear), query: queryParams);
        def rate = resp.rates.INR.rate.toString().toFloat();

        def json = JsonOutput.toJson(resp)
        def pretty = JsonOutput.prettyPrint(json)


        then:
        print(pretty)
        //resp.amount == "1.0000";
        rate < 100.0000
    }
}