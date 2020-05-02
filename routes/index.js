import Saturn from '../views/pages/Saturn'
import Neptune from '../views/pages/Neptune'
import BlackHoles from '../views/pages/BlackHoles'
import Home from '../views/pages/Home'

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/saturn',
    component: Saturn,
  },
  {
    path: '/neptune',
    component: Neptune,
  },
  {
    path: '/blackhole',
    component: BlackHoles,
  },
]
