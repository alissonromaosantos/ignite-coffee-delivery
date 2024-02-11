import cafeAmericanoImg from './assets/americano.svg'
import cafeArabeImg from './assets/arabe.svg'
import cafeComLeiteImg from './assets/cafe-com-leite.svg'
import cafeGeladoImg from './assets/cafe-gelado.svg'
import capuccinoImg from './assets/capuccino.svg'
import chocolateQuenteImg from './assets/chocolate-quente.svg'
import cafeCubanoImg from './assets/cubano.svg'
import expressoCremosoImg from './assets/expresso-cremoso.svg'
import cafeExpressoImg from './assets/expresso.svg'
import cafeHavaianoImg from './assets/havaiano.svg'
import cafeIrlandesImg from './assets/irlandes.svg'
import cafeLatteImg from './assets/latte.svg'
import cafeMacchiatoImg from './assets/macchiato.svg'
import cafeMochaccinoImg from './assets/mochaccino.svg'
import { v4 as uuidv4 } from 'uuid'

export const coffeesData = [
  {
    id: uuidv4(),
    img: cafeExpressoImg,
    categories: ['Tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    quantity: 0,
    price: 5.9,
  },
  {
    id: uuidv4(),
    img: cafeAmericanoImg,
    categories: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    quantity: 0,
    price: 7.8,
  },
  {
    id: uuidv4(),
    img: expressoCremosoImg,
    categories: ['Tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    quantity: 0,
    price: 15.0,
  },
  {
    id: uuidv4(),
    img: cafeGeladoImg,
    categories: ['Tradicional', 'Gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    quantity: 0,
    price: 18.0,
  },
  {
    id: uuidv4(),
    img: cafeComLeiteImg,
    categories: ['Tradicional', 'Com Leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    quantity: 0,
    price: 6.0,
  },
  {
    id: uuidv4(),
    img: cafeLatteImg,
    categories: ['Tradicional', 'Com Leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    quantity: 0,
    price: 17.9,
  },
  {
    id: uuidv4(),
    img: capuccinoImg,
    categories: ['Tradicional', 'Com Leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    quantity: 0,
    price: 20.0,
  },
  {
    id: uuidv4(),
    img: cafeMacchiatoImg,
    categories: ['Tradicional', 'Com Leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    quantity: 0,
    price: 22.5,
  },
  {
    id: uuidv4(),
    img: cafeMochaccinoImg,
    categories: ['Tradicional', 'Com Leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    quantity: 0,
    price: 29.99,
  },

  {
    id: uuidv4(),
    img: chocolateQuenteImg,
    categories: ['Especial', 'Com Leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    quantity: 0,
    price: 17.0,
  },
  {
    id: uuidv4(),
    img: cafeCubanoImg,
    categories: ['Especial', 'Alcoólico', 'Gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    quantity: 0,
    price: 49.99,
  },
  {
    id: uuidv4(),
    img: cafeHavaianoImg,
    categories: ['Especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    quantity: 0,
    price: 45.99,
  },
  {
    id: uuidv4(),
    img: cafeArabeImg,
    categories: ['Especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    quantity: 0,
    price: 47.99,
  },
  {
    id: uuidv4(),
    img: cafeIrlandesImg,
    categories: ['Especial', 'Alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlândes, açúcar e chantilly',
    quantity: 0,
    price: 50.99,
  },
]
