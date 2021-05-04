import {useEffect} from 'react'
import MainLayout from "../../components/MainLayout";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getScreen} from "../../redux/actions/screen.actions";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function Screen(){
    const router = useRouter();
    const dispatch = useDispatch();
    const {screen} = useSelector(state => state.screens)
    useEffect(() => {
        dispatch(getScreen(router.query.id))
    }, [router.query.id])

    console.log(screen)
    return <MainLayout>
        <div className={'container'} style={{minHeight: '80vh', paddingTop: 100, display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <div style={{position: 'absolute', top: 100, left: 50, cursor: 'pointer'}} onClick={() => router.back()}>
                <i className="fas fa-arrow-left" style={{fontSize: 24}}/>
            </div>
            <Zoom>
                <img src={screen?.file_url} alt="" style={{width: '100%', height: '100%'}}/>
            </Zoom>
        </div>
    </MainLayout>
}
