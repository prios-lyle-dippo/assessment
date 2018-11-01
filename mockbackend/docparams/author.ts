import { TemplateParams } from "../generate-docs";
import { Author } from "../models";

const requiredAuthorParams: Array<keyof Author> = ["jobTitle", "name"];
const optionalAuthorParams: Array<keyof Author> = ["todos"];
const requiredAuthorUpdateParams: Array<keyof Author> = [
  "id",
  "jobTitle",
  "name",
  "todos"
];
const optionalAuthorUpdateParams: Array<keyof Author> = [];
type AuthorParamsType = { [K in keyof Author]: string };
class AuthorParams implements AuthorParamsType {
  id = "string";
  jobTitle = "string";
  name = "string";
  authors = "Array<string>";
}

const createAuthor: TemplateParams<Author> = {
  dataParams: new AuthorParams(),
  errorResponse: {
    description: "an err response",
    response: {
      message: "Could not create",
      error: {
        kind: "DecoderError",
        input: {
          title: "Take out the trash"
        },
        at: "input",
        message: "the key 'author' is required but was not present"
      }
    },
    statusCode: 500
  },
  method: "POST",
  requiredParams: requiredAuthorParams,
  optionalParams: optionalAuthorParams,
  successResponse: {
    description: "success",
    response: {
      message: "Created successfully",
      data: {
        title: "Take out the trash",
        author: "0000-0000-0000-0001"
      }
    },
    statusCode: 200
  },
  title: {
    header: "Create a author",
    description: "This method creates a author in our backend"
  },
  url: "/authors/create"
};

const updateAuthor: TemplateParams<Author> = {
  dataParams: new AuthorParams(),
  errorResponse: {
    description: "an err response",
    response: {
      message: "Could not update",
      error: {
        kind: "DecoderError",
        input: {
          id: "4420944c-45ba-4399-a7e7-0b9ecb9ad25d",
          title: "Take out the trash",
          completed: true
        },
        at: "input",
        message: "the key 'author' is required but was not present"
      }
    },
    statusCode: 500
  },
  method: "POST",
  requiredParams: requiredAuthorUpdateParams,
  optionalParams: optionalAuthorUpdateParams,
  successResponse: {
    description: "success",
    response: {
      message: "Updated Successfully",
      data: {
        id: "9787a400-6517-4028-873f-f504401ef598",
        name: "Lilla Leffler",
        todos: ["0000-0000-0000-0001"]
      }
    },
    statusCode: 200
  },
  title: {
    header: "Update a author",
    description: "This method updates a author in our backend"
  },
  url: "/authors/update/:authorId",
  urlParams: [{ authorId: "string" }]
};

const deleteAuthor: TemplateParams<Author> = {
  dataParams: new AuthorParams(),
  errorResponse: {
    description: "an err response",
    response: {
      message: "Could not delete"
    },
    statusCode: 500
  },
  method: "POST",
  requiredParams: requiredAuthorUpdateParams,
  optionalParams: optionalAuthorUpdateParams,
  successResponse: {
    description: "success",
    response: {
      message: "Deleted Successfully"
    },
    statusCode: 200
  },
  title: {
    header: "Delete a author",
    description: "This method updates a author in our backend"
  },
  url: "/authors/delete/:authorId",
  urlParams: [{ authorId: "string" }]
};

const getAuthor: TemplateParams<Author> = {
  dataParams: new AuthorParams(),
  errorResponse: {
    description: "an err response",
    response: {
      message: "Could not get authors"
    },
    statusCode: 500
  },
  method: "GET",
  successResponse: {
    description: "success",
    response: [
      {
        id: "23924ff5-5a94-48ba-8a68-2e00c5bcd12a",
        name: "Nikki Greenholt",
        todos: [
          "9e4d5d8f-d27b-4dc4-b510-aa72003f807d",
          "78e569cd-747d-4236-b434-8d097431ca1c",
          "657ccfce-312f-43d8-870d-4e38e340c318",
          "7e1aced5-1268-4152-9436-94bdc027c3af"
        ],
        meta: {
          revision: 4,
          created: 1541079145492,
          version: 0,
          updated: 1541079146502
        },
        $loki: 1
      },
      {
        id: "5b5b1569-5d0c-47d5-b670-2499dcfafe79",
        name: "Freida Rempel",
        todos: [
          "4f0a8d82-3762-4cac-bcf5-61e6c54d1ee4",
          "e7e7e13a-f3af-4d0d-85c8-343d20f56bf7",
          "ef0cab2c-02fd-42e1-a83e-ce04c310db25",
          "15b58c6c-f365-4622-aa16-bb75633d6fc2",
          "1a08e46e-59d1-4bcd-b664-8fd6de2cde53"
        ],
        meta: {
          revision: 5,
          created: 1541079145492,
          version: 0,
          updated: 1541079145499
        },
        $loki: 2
      },
      {
        id: "dc083011-9f7d-43c6-be02-eec2fab0a967",
        name: "Cletus Altenwerth",
        todos: [
          "1abbebe0-e079-480a-a16f-35a5fe8b9430",
          "acb0c2c3-6158-45fb-b31a-b4da3f500f96",
          "fcff279e-dade-49d8-ae7b-1daa5df245ee",
          "25e93dab-96f5-407f-8a5c-4695873868cc",
          "dbf11984-3293-40ca-be40-85f284a2e6c9"
        ],
        meta: {
          revision: 5,
          created: 1541079145492,
          version: 0,
          updated: 1541079145499
        },
        $loki: 3
      },
      {
        id: "2e25fb78-3a31-48b3-a534-66d17610fb94",
        name: "Kellie Beier",
        todos: [
          "746d776a-5e28-4c00-8800-904efa2f5df7",
          "ba86e667-0ecb-4f6b-85eb-528c343e33bb",
          "26f223db-35f4-44e7-8c7a-4d0c94eaa041",
          "1e2db964-ce2d-4fa6-8f6a-5b1dca2f8c5d",
          "f61d0795-4b53-4db7-ba09-805441c663ce"
        ],
        meta: {
          revision: 5,
          created: 1541079145492,
          version: 0,
          updated: 1541079145499
        },
        $loki: 4
      },
      {
        id: "26b74799-6801-468c-b114-bf47685c5469",
        name: "Hannah Erdman",
        todos: [
          "3f743d9e-5fc9-4fbe-b1a9-7edf29368aaf",
          "acee8fae-62e5-49bf-88d2-7cba0235725c",
          "320d1c84-1060-4637-9fd8-3190ae297f81"
        ],
        meta: {
          revision: 3,
          created: 1541079145492,
          version: 0,
          updated: 1541079147505
        },
        $loki: 5
      },
      {
        id: "9787a400-6517-4028-873f-f504401ef598",
        name: "Lilla Leffler",
        todos: [],
        meta: {
          revision: 0,
          created: 1541079146502,
          version: 0
        },
        $loki: 6
      }
    ],
    statusCode: 200
  },
  title: {
    header: "Get all authors",
    description: "This method gets all authors in our backend"
  },
  url: "/authors"
};

export default [getAuthor, createAuthor, deleteAuthor, updateAuthor];
