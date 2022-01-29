import React from "react";
import CollectionsSearchResult from "./CollectionsSearchResult";
import './CollectionsFilter.css'
import sampleImg from './sample.png'
const CollectionsFilter = () => {
    return (
        <div>
            <div className="container">
                <div className="search-box">
                    <input type="text" className="search-input" placeholder="Search.." />
                    <CollectionsSearchResult name={"Super liquids"} floorPrice={"0.0001123"} src={sampleImg} />
                    <CollectionsSearchResult name={"Super liquids"} floorPrice={"0.0001123"} src={sampleImg} />
                    <CollectionsSearchResult name={"Super liquids"} floorPrice={"0.0001123"} src={sampleImg} />
                    <CollectionsSearchResult name={"Super liquids"} floorPrice={"0.0001123"} src={sampleImg} />
                </div>
            </div>
        </div>
    )
}


export default CollectionsFilter;