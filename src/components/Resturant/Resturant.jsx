import React, { useState } from "react";
import Rdata from "../RestursntDetail.json";
import RestursntCard from "./RestursntCard";
import RangeInputWithMarks from "./Range";

export default function Resturant() {
  const [ResturantData, setResturantData] = useState(Rdata);
  const[rating,setrating] =useState(1);
  const[Resname,setResname] = useState('')
  const NameSearch = (e) => {
    let search = e.target.value;
    // console.log(search);
    // console.log(Rdata);
    const filterData = Rdata.filter((ele) => {
      return (ele.name.toLowerCase().includes(search.toLowerCase()) && (rating <= ele.rating));
    });
    // console.log(filterData);

    setResturantData(filterData);
    setResname(search)
  };
  const ratingHandler= (val)=>{
    
    const filterData = Rdata.filter((ele) => {
       return (ele.name.toLowerCase().includes(Resname.toLowerCase()) && (val <= ele.rating));
    });
    setResturantData(filterData);
    setrating(val);
  }

  return (
    <div className="mt-16">
      <div className="px-16 flex  items-center justify-between">
        <input
          type="text"
          className=" border-2"
          onChange={NameSearch}
        />
        <RangeInputWithMarks ch={ratingHandler}></RangeInputWithMarks>
      </div>

      <div className="mt-14 p-14 flex flex-wrap gap-10 justify-center w-full flex-shrink-0">
        {ResturantData.map((ele, index) => {
          return (
            <RestursntCard
              key={ele.id + index}
              data={{ ...ele }}
            ></RestursntCard>
          );
        })}
      </div>
    </div>
  );
}
