import { BrowserRouter } from 'react-router-dom';
import Router from './routes'
import { RecoilRoot } from 'recoil';


function App() {
    return (
        <>
            <RecoilRoot>
                <BrowserRouter> 
                    <Router/>
                </BrowserRouter>
            </RecoilRoot>
        </>
    )
}


export default App