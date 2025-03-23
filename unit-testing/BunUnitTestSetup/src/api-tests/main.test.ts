import { describe, expect, test } from "bun:test";
import { XMLParser } from "fast-xml-parser";

describe("SOAP API Tests", () => {
  test("should convert number to words", async () => {
    const response = await fetch("https://www.dataaccess.com/webservicesserver/NumberConversion.wso", {
      method: "POST",
      headers: { "Content-Type": "text/xml" },
      body: `
        <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
          <soap:Body>
            <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">
              <ubiNum>42</ubiNum>
            </NumberToWords>
          </soap:Body>
        </soap:Envelope>`
    });

    expect(response.status).toBe(200);

    const xmlText = await response.text();
    const parser = new XMLParser();
    const result = parser.parse(xmlText);

    console.log("\nParsed Result:");
    console.log(JSON.stringify(result, null, 2));

    // Assert on the parsed XML document
    expect(result).toBeDefined();
    expect(result['soap:Envelope']['soap:Body']['m:NumberToWordsResponse']['m:NumberToWordsResult']).toBe("forty two");
  });
});
