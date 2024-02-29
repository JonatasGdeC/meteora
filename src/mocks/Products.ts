import Products from '../models/Product'

import camisaConforto from '../assets/imagesProducts/shirt.png'
import calcaAlfaiataria from '../assets/imagesProducts/pants.png'
import tenisChunky from '../assets/imagesProducts/shoes.png'
import jaquetaJeans from '../assets/imagesProducts/jacket.png'
import oculosRedondo from '../assets/imagesProducts/glasses.png'
import bolsaCoringa from '../assets/imagesProducts/handbag.png'

export const products: Products[] = [
  {
    id: 1,
    image: camisaConforto,
    title: 'Camisa Conforto',
    description:
      'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.',
    price: 70
  },
  {
    id: 2,
    image: calcaAlfaiataria,
    title: 'Calça Alfaiataria',
    description:
      'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!',
    price: 180
  },
  {
    id: 3,
    image: tenisChunky,
    title: 'Tênis Chunky',
    description:
      'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
    price: 250
  },
  {
    id: 4,
    image: jaquetaJeans,
    title: 'Jaqueta Jeans',
    description:
      'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
    price: 150
  },
  {
    id: 5,
    image: oculosRedondo,
    title: 'Óculos Redondo',
    description:
      'Armação metálica em grafite com lentes arredondadas. Sem erro!',
    price: 120
  },
  {
    id: 6,
    image: bolsaCoringa,
    title: 'Bolsa coringa',
    description:
      'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
    price: 120
  }
]
