import React, { Component } from "react";
import { Input, Button, Form, FormGroup } from "reactstrap";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { ListSubTasks } from "./graphql/queries";
import { OnCreateSubTask, OnUpdateSubTask } from "./graphql/subscriptions";
