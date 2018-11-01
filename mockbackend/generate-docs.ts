import fs from "fs";
import { docParams } from "./docparams";
interface HeaderWithDesc {
  header?: string;
  description?: string;
}

interface Title extends HeaderWithDesc {}
type Method = "GET" | "POST" | "DELETE" | "PUT";
type URLParams = Array<{ [key: string]: string }>;
type RequiredParams<T> = Array<keyof T>;
type OptionalParams<T> = Array<keyof T>;
interface DataParams {
  [key: string]: string;
}
interface SuccessResponse extends HeaderWithDesc {
  statusCode: number;
  response: any;
}
interface ErrorResposne extends HeaderWithDesc {
  statusCode: number;
  response: any;
}
interface TemplateParams<D> {
  title: Title;
  url: string;
  method: Method;
  urlParams?: URLParams;
  dataParams?: D;
  requiredParams?: RequiredParams<D>;
  optionalParams?: OptionalParams<D>;
  successResponse: SuccessResponse;
  errorResponse: ErrorResposne;
}
const template = <D>({
  dataParams,
  method,
  errorResponse,
  optionalParams,
  requiredParams,
  successResponse,
  title,
  url,
  urlParams
}: TemplateParams<D>) => `
**${title.header}**
----
  ${title.description}

* **URL**

  ${url}

* **METHOD:**
  
  ${method}
  
*  **URL Params**

   ${urlParams ? urlParams.map(p => `+ ${p}`) : "None"}

* **Data Params**

   \`${JSON.stringify(dataParams, null, 4)}\`

   **Required:**
 
  ${requiredParams ? requiredParams.map(p => `+ ${p}`) : "None"}

   **Optional:**
 
   ${optionalParams ? optionalParams.map(p => `+ ${p}`) : "None"}



* **Success Response:**
  
  ${successResponse.description}

  * **Code:** ${successResponse.statusCode} <br />
    **Content:** \`${JSON.stringify(successResponse.response, null, 4)}\`
 
* **Error Response:**

  ${errorResponse.description}

  * **Code:** ${errorResponse.statusCode} <br />
    **Content:** \`${JSON.stringify(errorResponse.response, null, 4)}\`
`;

export type CreateDocsParams = Array<TemplateParams<any>>;
const createDocs = (params: CreateDocsParams) => {
  const markdown = params.map(p => template(p));
  const aggregateDocs = markdown.reduce(
    (acc, cur) => acc.concat("\n\n" + cur),
    ""
  );
  fs.writeFileSync("./test.md", aggregateDocs, { encoding: "utf-8" });
};

createDocs(docParams);
