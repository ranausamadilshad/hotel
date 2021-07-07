import React,{Component} from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa";

export default  class Services extends Component {
     state={
            services:[
                {
                    icon:<FaCocktail></FaCocktail>,
                    title:"free Cocktail",
                    info:'You can enjoy free cocktail.It is very hot and spicy.You would love it. '
                },
                {
                    icon:<FaHiking></FaHiking>,
                    title:"Endless Hiking",
                    info:'You can enjoy free cocktail.It is very hot and spicy.You would love it. '
                },
                {
                    icon:<FaShuttleVan></FaShuttleVan>,
                    title:"Free Shuttle van",
                    info:'You can enjoy free cocktail.It is very hot and spicy.You would love it. '
                },
                {
                    icon:<FaBeer></FaBeer>,
                    title:"Free Beer",
                    info:'You can enjoy free cocktail.It is very hot and spicy.You would love it. '
                },
            ]
        



     }




    render(){
    return (
        <section className="services">
           <Title title='Services'/>
           <div className="services-center">
               {this.state.services.map((item,index)=>{
                    return(
                          <article key={index} className="service">
                               <span>{item.icon}</span>
                               <h6>{item.title}</h6>
                               <p>{item.info}</p>
                          </article>
                    );
         })}
           </div>
        </section>
    )}
}

