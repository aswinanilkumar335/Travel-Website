import React from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'


const Data = [
  {
    id: 1,
    imgSrc: 'https://i.postimg.cc/2SjpFcvx/bora.jpg',
    desTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora is an island group in the Leeward Islands. The Leeward Islands comprise the western part of the Society Islands of French Polynesia, which is an overseas collectivity of the French Republic in the Pacific Ocean. '
  },
  {
    id: 2,
    imgSrc: 'https://i.postimg.cc/mkrMSGLs/machu-picchu.jpg',
    desTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain ridge. '
  },
  {
    id: 3,
    imgSrc: 'https://i.postimg.cc/mZMh0Dn5/great-barrier-reef.jpg',
    desTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The Great Barrier Reef is the world largest coral reef system composed of over 2,900 individual reefs and 900 islands stretching for over 2,300 kilometres (1,400 mi) over an area of approximately 344,400 square kilometres (133,000 sq mi). '
  },
  {
    id: 4,
    imgSrc: 'https://i.postimg.cc/QCXL40ws/Cappadocia.jpg',
    desTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'Cappadocia or Capadocia, is a historical region in Central Anatolia, Turkey. It largely is in the provinces Nevsehir, Kayseri, Aksaray, Kirsehir, Sivas and Niğde. '
  },
  {
    id: 5,
    imgSrc: 'https://i.postimg.cc/YCN6kRyT/guanajatu.jpg',
    desTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'Guanajuato, officially the Free and Sovereign State of Guanajuato (Spanish: Estado Libre y Soberano de Guanajuato), is one of the 32 states that make up the Federal Entities of Mexico '
  },
  {
    id: 6,
    imgSrc: 'https://i.postimg.cc/nh6hRfkJ/Cinque-Terre.jpg',
    desTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'The Cinque Terre is a coastal area within Liguria, in the northwest of Italy. '
  },
  {
    id: 7,
    imgSrc: 'https://i.postimg.cc/mD0rqfRM/angkor-wat.jpg',
    desTitle: 'Angkor wat',
    location: 'Combodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: 'Angkor Wat, is a temple complex in Cambodia and is the largest religious monument in the world, on a site measuring 162.6 hectares (1,626,000 m2; 402 acres). '
  },
  {
    id: 8,
    imgSrc: 'https://i.postimg.cc/XYTDpsVL/Taj-Mahal.jpg',
    desTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'The Taj Mahal is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. '
  },
  {
    id: 9,
    imgSrc: 'https://i.postimg.cc/RZfLb4B1/Bali-Island.jpg',
    desTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. '
  }
]


function Main() {
  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 className='title'>
          Most visited destinations
        </h3>
      </div>
      <div className='secContent grid'>

          {
            Data.map(({id,imgSrc,desTitle,location,grade,fees,description})=>{
              return(
                <div key={id} className='singleDestination'>
                    <div className='imageDiv'>
                        <img src={imgSrc} alt={desTitle}/>
                    </div>
                    <div className='cardInfo'>
                      <h4 className='destTitle'>{desTitle}</h4>
                      <span className='continent flex'>
                        <HiOutlineLocationMarker className='icon'/>
                        <span className='name'>{location}</span>
                      </span>
                      <div className='fees flex'>
                          <div className='grade'>
                            <span>{grade} <small>+1</small></span>
                          </div>
                          <div className='price'>
                            <h5>{fees}</h5>
                          </div>
                      </div>
                      <div className='desc'>
                          <p>{description}</p>
                      </div>
                      <button className='btn flex'>
                        DETAILS <HiOutlineClipboardCheck className='icon'/>
                      </button>
                    </div>
                </div>
              )
            })
          }

      </div>
    </section>
  )
}

export default Main