import { gql } from '@apollo/client';

export const REGISTER = gql`
mutation Register($data : RegisterVars) {
 Register(data: $data){
 _id
 email
 password
 date_naissance
 
}
}
`


export const ADD_OPERATION = gql`
mutation AddOperation($data : OperationVars) {
    AddOperation(data: $data){
 _id
}
}
`