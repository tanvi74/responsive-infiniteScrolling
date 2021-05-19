import React, { useReducer, useRef } from 'react';
import Navbar from '../components/Navbar'
import pageReducer from '../reducers/pageReducer';
import imgReducer from '../reducers/imgReducer';
import useFetch from '../Hooks/useFetch';
import useInfiniteScroll from '../Hooks/useInfiniteScroll';

export default function Landing() {

    const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0 })
    const [imgData, imgDispatch] = useReducer(imgReducer, { images: [], fetching: true, })

    let bottomBoundaryRef = useRef(null);
    useFetch(pager, imgDispatch);
    useInfiniteScroll(bottomBoundaryRef, pagerDispatch);

    return (
        <div>
             <Navbar/>
             <div id='images' style={{marginTop: 80}}>
                <div className="row">
                {imgData.images.length ? imgData.images.map((data, key) => {
                    return (
                        <>
                            {
                                data.data.map((img,index)=>{
                                    return(
                                        <div key={`${key}_${index}`} className="col s12 m4 l3">
                                            <div className="card">
                                                <div className="card-image">
                                                        <img
                                                        alt={img.title}
                                                        src={img.feature_img}
                                                        />
                                                        
                                                </div>
                                                <div className="card-content">
                                                        <div className="card-title">{img.category[0]}</div>
                                                        <a href={`https://www.scoopwhoop.com/${img.slug}/?ref=read_fresh`} className="linkText">{img.title}</a>
                                                        <div style={{marginTop: 20}}>{img.auth_display.display_name}</div>
                                                        <div>{img.pub_date}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>
                        )
                })
            : null
            }
                </div>
            </div>


            {imgData.fetching && (
                    <div className="text-center bg-secondary m-auto p-3">
                    <p className="m-0 text-white">Getting images</p>
                    </div>
                )}
            <div id='page-bottom-boundary' style={{ border: '1px solid red' }} ref={bottomBoundaryRef}></div>

        </div>
    )
}
