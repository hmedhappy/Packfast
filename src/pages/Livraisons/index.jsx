import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { ADD_OPERATION } from '../../Graphql/Mutations';
import notify from '../../utils/Notifier/Notifier';
import InfoColis from './InfoColis'
import { DisappearedLoading} from 'react-loadingg'


import InfoEnlevement from './InfoEnlevement'
import InfoLivraison from './InfoLivraison'

export default function Index() {
  const [operation, setoperation] = useState({
    info_enlevement:{},
    info_livraison : {},
    info_colis : {}
  }) ;

  const [AddOperation , {loading,data}] =useMutation(ADD_OPERATION) 

  
  
  useEffect(() => {
    if (data?.AddOperation) {
      if (data.AddOperation._id) {
        notify('Votre Commande a eté enregistrer',1)
        window.location.pathname ="/historique"
      }else{
        notify('Erreur Serveur')
      }
    }
  }, [data])
  if (loading) return <div style={{textAlign:"center"}}>Connexion...<DisappearedLoading style={{position:"inherit !important",margin:'auto'}}  /></div>;
    return (
        <>
          <div className="col-12">
          <form onSubmit={(e)=>{e.preventDefault();AddOperation({variables:{data:operation}})}} >

            {/* Enlevemment   */}
                <InfoEnlevement operation={operation} setoperation={setoperation} />
            {/* Livraison   */}
                <InfoLivraison  operation={operation}  setoperation={setoperation} />
            {/* Colis   */}
                <InfoColis operation={operation} setoperation={setoperation}/>

        </form>
      </div>
       
        </>
    )
}
