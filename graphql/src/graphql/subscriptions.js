/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
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
export const onCreateSubTask = /* GraphQL */ `
  subscription OnCreateSubTask {
    onCreateSubTask {
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
export const onUpdateSubTask = /* GraphQL */ `
  subscription OnUpdateSubTask {
    onUpdateSubTask {
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
export const onDeleteSubTask = /* GraphQL */ `
  subscription OnDeleteSubTask {
    onDeleteSubTask {
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
