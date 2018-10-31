
interface HeaderWithDesc {
    header: string;
    description: string;
}

interface Title extends HeaderWithDesc {}
interface URL extends HeaderWithDesc {}
interface Method extends HeaderWithDesc {
    method: 'GET' | 'POST' | 'DELETE' | 'PUT';
}
interface URLParams extends HeaderWithDesc {}
type RequiredParams<T> = Partial<T>;
type OptionalParams<T> = Partial<T>;
interface DataParams {
    [key: string]: any
}
interface SuccessResponse extends HeaderWithDesc {}
interface ErrorResposne extends HeaderWithDesc {}
const template = <D>(title: Title, url: URL, method: Method, urlParams: URLParams, dataParams: D, requiredParams: RequiredParams<D>, optionalParams: OptionalParams<D>, successResponse: SuccessResponse, errorResponse: ErrorResposne) => `
**Title**
----
  <_Additional information about your API call. Try to use verbs that match both request type (fetching vs modifying) and plurality (one vs multiple)._>

* **URL**

  ${url.description}

* **${method.header}:**
  
  ${method.description}

  ${method.method}
  
*  **URL Params**

   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._> 

   **Required:**
 
   `id=[integer]`

   **Optional:**
 
   `photo_id=[alphanumeric]`

* **Data Params**

  <_If making a post request, what should the body payload look like? URL Params rules apply here too._>

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** `{ id : 12 }`
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Email Invalid" }`

* **Sample Call:**

  <_Just a sample call to your endpoint in a runnable format ($.ajax call or a curl request) - this makes life easier and more predictable._> 

* **Notes:**

  <_This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here._> 
`