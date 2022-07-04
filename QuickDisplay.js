import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {
    const renderMeal = ({quickData}) => {
        if(quickData){
            return quickData.map((item) => {
                return(
                    
                        <div className="movie">
                            <div className="top">
                                <image src={item.movie_image} alt="imagemovie"/>
                            </div>
                            <div className="bootom">
                                <span>Name:{item.Name_movie}</span><br/>
                                <span>Rating:{item.Rating_movie}</span><br/>
                                <span>Type of movie:{item.Type_movie}</span>
                            </div>
                        </div>
                    
                )
            })
        }
    }

    return(
        <>
            {renderMeal(props)}
        </>
    )

}
export default QuickDisplay;