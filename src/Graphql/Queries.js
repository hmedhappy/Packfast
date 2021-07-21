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

export const GET_OPERATIONS = gql`
   query{
  getOperations {
    _id
    info_enlevement{expedieur num_tel pays ville cite code_postal adresse complement_adresse}
    info_livraison{fullname num_tel pays gouvernorat ville cite code_postal adresse complement_adresse}
    info_colis{type_colis designation montant_a_reception reference nbr_piece volume poid echange}
  }
}
`
