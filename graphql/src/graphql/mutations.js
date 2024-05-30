/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
export const createSubTask = /* GraphQL */ `
  mutation CreateSubTask(
    $input: CreateSubTaskInput!
    $condition: ModelSubTaskConditionInput
  ) {
    createSubTask(input: $input, condition: $condition) {
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
export const updateSubTask = /* GraphQL */ `
  mutation UpdateSubTask(
    $input: UpdateSubTaskInput!
    $condition: ModelSubTaskConditionInput
  ) {
    updateSubTask(input: $input, condition: $condition) {
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
export const deleteSubTask = /* GraphQL */ `
  mutation DeleteSubTask(
    $input: DeleteSubTaskInput!
    $condition: ModelSubTaskConditionInput
  ) {
    deleteSubTask(input: $input, condition: $condition) {
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
