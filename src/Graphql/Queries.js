import {gql} from '@apollo/client'


export const LOGIN = gql`
   query Login($data : LoginVars) {
  Login(data: $data){
    _id
    email
    password
    date_naissance
    
  }
}
`
