import React, { useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCropsAsync, getCropsByCategoryAsync } from '../cropSlice';
import Animation from '../../common/Animation';

const CropCalendar = () => {
    const crops = useSelector((state) => state.crops.crops);
    const isLoading = useSelector((state) => state.crops.isLoading);
    const dispatch = useDispatch();

    const noCropsImage = "https://example.com/no-data-found-image"; // Replace with actual URL

    useEffect(() => {
        dispatch(getAllCropsAsync());
    }, []);

    return (
        <div className="container crop-calendar-container mb-4 mb-md-5">
            <div className="p-2">
                <h1 className="text-center p-2">Crop Calendar and Management</h1>
            </div>
            <div className="p-2 d-flex flex-wrap justify-content-center align-items-center">
                <button onClick={() => dispatch(getAllCropsAsync())} className="btn btn-secondary m-1">All</button>
                <button onClick={() => dispatch(getCropsByCategoryAsync("fruits"))} className="btn btn-secondary m-1">Fruits</button>
                <button onClick={() => dispatch(getCropsByCategoryAsync("vegetables"))} className="btn btn-secondary m-1">Vegetables</button>
                <button onClick={() => dispatch(getCropsByCategoryAsync("cereals"))} className="btn btn-secondary m-1">Cereals</button>
                <button onClick={() => dispatch(getCropsByCategoryAsync("pulses"))} className="btn btn-secondary m-1">Pulses</button>
            </div>
            <div className="crop-content px-2">
                {
                    crops &&
                    crops.map((crop) => (
                        <div key={crop.id} className="px-1 d-flex center-text overflow-hidden">
                            <Link className="text-dark" style={{ textDecoration: "none" }} to={`/crop/${crop._id}`}>
                                <div className="card my-1">
                                    <img className="img-fluid" src={crop.image.url} alt="Crop" />
                                    <div className="card-body">
                                        <h4 className="card-title">{crop.cropName}</h4>
                                        <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>Planting Date</p>
                                        <p className="card-text">{new Date(crop.plantingDate).toLocaleDateString()}</p>
                                        <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>Tasks</p>
                                        <p className="card-text">{crop.tasks.join(", ")}</p>
                                        <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>Ratings</p>
                                        <p className="card-text">
                                            <Rating initialValue={3 + Math.random() * 2} readonly={true} size={20} allowFraction={true} />
                                            <small style={{ position: "relative", top: "4px" }}>{crop.noOfRatings}</small>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <div className="w-100">
                {
                    crops.length === 0 &&
                    <div className="d-flex justify-content-center">
                        <div>
                            <div className="row">
                                <div className="img d-flex justify-content-center">
                                    <img src={noCropsImage} style={{ maxHeight: "60vh" }} alt="No crops found" className="img-fluid" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="d-flex flex-column align-items-center">
                                    <h3 className="h3" style={{ fontFamily: "cursive" }}>No Crops Found</h3>
                                    <Link onClick={() => window.location.reload()}><i className="fa fa-refresh"></i> Refresh Your Page</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            {
                isLoading && <Animation />
            }
        </div>
    );
};

export default CropCalendar;
