import fs from "fs";
import docParams from "./docparams";
interface HeaderWithDesc {
  header?: string;
  description?: string;
}

interface Title extends HeaderWithDesc {}
type Method = "GET" | "POST" | "DELETE" | "PUT";
type URLParams = Array<{ [key: string]: string }>;
type RequiredParams<T> = Array<keyof T>;
type OptionalParams<T> = Array<keyof T>;
type DataParams<T> = { [K in keyof T]: string };
interface SuccessResponse extends HeaderWithDesc {
  statusCode: number;
  response: any;
}
interface ErrorResposne extends HeaderWithDesc {
  statusCode: number;
  response: any;
}
export interface TemplateParams<D> {
  title: Title;
  url: string;
  method: Method;
  urlParams?: URLParams;
  dataParams?: DataParams<D>;
  requiredParams?: RequiredParams<D>;
  optionalParams?: OptionalParams<D>;
  successResponse: SuccessResponse;
  errorResponse: ErrorResposne;
}

const reduceListTpl = <T>(arr: T[]) =>
  arr.reduce((acc, cur) => acc.concat(`- ${JSON.stringify(cur)}\n`), "\n");
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

   ${urlParams ? reduceListTpl(urlParams) : "None"}

* **Data Params**

\`\`\`js
${JSON.stringify(dataParams, null, 4)}
\`\`\`

**Required:**
 
  ${requiredParams ? reduceListTpl(requiredParams) : "None"}

**Optional:**
 
   ${optionalParams ? optionalParams.map(p => `+ ${p}`) : "None"}



* **Success Response:**
  
  ${successResponse.description}

  * **Code:** ${successResponse.statusCode} <br />
    **Content:**
\`\`\`js
${JSON.stringify(successResponse.response, null, 4)}
\`\`\`    
 
* **Error Response:**

  ${errorResponse.description}

  * **Code:** ${errorResponse.statusCode} <br />
    **Content:** 
\`\`\`js
${JSON.stringify(errorResponse.response, null, 4)}
\`\`\`
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
