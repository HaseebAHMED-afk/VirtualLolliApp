import 'bootstrap/dist/css/bootstrap.min.css';
import './src/styles/global.css'


import { globalHistory } from '@reach/router'

export const onInitialClientRender = () => {
    globalHistory._onTransitionComplete();
}
