import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root';
import Adicionar from '../pages/Adicionar';
import Editar from '../pages/Editar';
import Remover from '../pages/Remover';
import Listar from '../pages/Listar';
import ListarCurso from '../pages/ListarCurso';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/add',
        element: <Adicionar/>
      },
      {
        path: '/edit',
        element: <Editar/>
      },
      {
        path: '/remove',
        element: <Remover/>
      },
      {
        path: '/list',
        element: <Listar/>
      },
      {
        path: '/listCurso',
        element: <ListarCurso/>
      }
    ]
  }
])


export default router