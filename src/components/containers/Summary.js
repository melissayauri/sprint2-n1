import React from 'react';
import  '../styles/summary.css'
import users from '../../assets/img/users.png'
import companies from '../../assets/img/companies.png'
import incidents from '../../assets/img/incidents.png'
import category from '../../assets/img/category.png'
import description from '../../assets/img/description.png'
class Summary extends React.Component{

render(){
    return(
      <div>
      <div className="summary">
        <div className="summary__tile">
          <span className="">Resumen de solicitud</span>
          <span className="">ESP</span>
        </div>
        <div className="summary__container">
          <div className="summary_information">
          <img src={users} alt="summary" className="responsive-img" ></img>
             
            <div>
              <p className="mb-0 mt-0">Usuario solicitante</p>
              <p className="mt-0 mb-0">Cluadia suarez dias</p>
            </div>
          </div>
          <div className="summary_information">
          <img src={companies} alt="summary" className="responsive-img" ></img>
            <div>
              <p className="mb-0 mt-0">Empresa</p>
              <p className="mt-0 mb-0">Canvia</p>
            </div>
          </div>
          <div className="summary_information">
          <img src={incidents} alt="summary" className="responsive-img" ></img>
            <div>
              <p className="mb-0 mt-0">Incidencia principal</p>
              <p className="mt-0 mb-0">Laptop no enciende</p>
            </div>
          </div>
          <div className="summary_information">
          <img src={category} alt="summary" className="responsive-img" ></img>
            <div>
              <p className="mb-0 mt-0">Problema</p>
              <p className="mt-0 mb-0">Equipos y accesorios</p>
            </div>
          </div>
          <div className="summary_information">
          <img src={description} alt="summary" className="responsive-img" ></img>
            <div>
              <p className="mb-0 mt-0">Descripción</p>
              <p className="mt-0 mb-0">Encendi la laptop pero no responde, la pantalla esta negra </p>
            </div>
          </div>

        </div>
       
       
      </div>
   
       </div>
    )
}



}

export default Summary;