/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      clientId
      name
      description
      completed
      subTasks {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clientId
        name
        description
        completed
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSubTask = /* GraphQL */ `
  query GetSubTask($id: ID!) {
    getSubTask(id: $id) {
      id
      note {
        id
        clientId
        name
        description
        completed
        createdAt
        updatedAt
        __typename
      }
      clientId
      description
      completed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSubTasks = /* GraphQL */ `
  query ListSubTasks(
    $filter: ModelSubTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clientId
        description
        completed
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
