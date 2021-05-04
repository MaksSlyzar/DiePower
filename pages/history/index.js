import React, {useEffect} from "react";
import Masonry from 'react-masonry-css'
import MainLayout from "../../components/MainLayout";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {deleteScreen, getScreens} from "../../redux/actions/screen.actions";


export default function Screens() {
    const dispatch = useDispatch()
    const {data, loading, error} = useSelector(state => state.screens)
    const {token} = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(getScreens())
    }, [token])


    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    const deleteItem = (id) => {
        let result = confirm('Are you sure?')
        if(result){
            dispatch(deleteScreen(id))
        }
    }

    return (
        <MainLayout>
            <div className={'container'} style={{minHeight: '80vh', paddingTop: 100}}>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {data.map(el => <div key={el.id} style={{position: 'relative'}}>
                        <div className='trash-icon'>
                            <i className="far fa-trash-alt" style={{cursor: 'pointer'}} onClick={() => deleteItem(el.code)}/>
                        </div>
                        <Link href={'/history/[id]'} as={"/history/" + el.code}>
                            <a>
                                <img src={el.file_url} alt="" style={{width: '100%', height: '100%'}}/>
                            </a>
                        </Link>
                    </div>)}
                </Masonry>
            </div>
        </MainLayout>
    );
}
