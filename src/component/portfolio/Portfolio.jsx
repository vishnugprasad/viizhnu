import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG8 from "../../assets/portfolio8.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Ethereum Token (ERC-20)',
    github: 'https://github.com/vishnugprasad/EthereumERC20-GP',
    demo: 'https://github.com/vishnugprasad/EthereumERC20-GP'
  },
  {
    id: 2,
    image: IMG2,
    title: 'ROAM AROUND EARTH',
    github: 'https://github.com/vishnugprasad/traveltime',
    demo: 'https://roamaroundearth.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'OFFICE SEATBOOKING',
    github: 'https://github.com/vishnugprasad/Hours-subsidary-',
    demo: 'https://seatbookinghours.netlify.app/'
  },
  {
    id: 4,
    image: IMG8,
    title: 'META CART',
    github: 'https://github.com/vishnugprasad/shoppingCart',
    demo: 'https://metacartgp.netlify.app/'
  },
  {
    id: 5,
    image: IMG4,
    title: 'Yellow Doggy NFT collection',
    github: '',
    demo: 'https://opensea.io/collection/yellow-doggy'
  },
  {
    id: 6,
    image: IMG5,
    title: 'IPL Analytics',
    github: 'https://github.com/vishnugprasad/IPL-Klutchh',
    demo: 'https://ipl-klutchh.netlify.app/' 
  },
  {
    id: 7,
    image: IMG6,
    title: 'Web3 Game',
    github: 'https://github.com/vishnugprasad/web3.0game',
    demo: 'https://app.netlify.com/sites/web3hoppergame/settings/general'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className="btn" target="_blank">Github</a>
          <a href={demo} className="btn btn-primary"target="_blank">Demo</a>
          </div>
        </article>
            )
          })
        }

      </div>
    </section>
  );
};

export default Portfolio;
