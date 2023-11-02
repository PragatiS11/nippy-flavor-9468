import React, { useEffect, useState } from 'react';
import { GrSearch } from 'react-icons/gr';
import { Select } from '@chakra-ui/react'
import Navbar from "../Components/Navbar";
const DonationPage = () => {
     const [search, setSearch] = useState("");
     console.log(setSearch)
    // const [oemSpecs, setOemSpecsData] = useState([]);

    // useEffect(() => {
    //     const debounceTimer = setTimeout(() => {
    //         if (search !== "") {
    //             axios
    //                 .get(`https://attryb-backend-blond.vercel.app/oem/specs?q=${search}`)
    //                 .then((res) => {
    //                     console.log(res.data);
    //                     setOemSpecsData(res.data.specification);
    //                 })
    //                 .catch((err) => console.log(err));
    //         }
    //     }, 500);

    //     return () => {
    //         clearTimeout(debounceTimer);
    //     };
    // }, [search]);


    return (

        <div>
            <div>
                <Navbar />
            </div>

            <div >
                <h1 style={{ fontSize: '32px', display: 'flex', justifyContent: 'center' }}>
                    Search fundraisers on BeCharity
                </h1>
            </div>
            <br />
            <div style={{ display: 'flex', margin: "auto", justifyContent: "center" }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: "1px solid black",
                        width: "30%",
                        height: "40px",
                        borderRadius: "20px",
                    }}
                >
                    <GrSearch style={{ marginLeft: "20px" }} />
                    <input
                        style={{
                            border: 'none',
                            outline: 'none',
                            paddingLeft: "10px",
                            width:"86%"
                        }}
                        onChange={(e) => setSearch(e.target.value)}
                        name="name"
                        type="search"
                        placeholder="Search here..."
                    />
                    {/* {search === "" ? (
                        ""
                    ) : (
                        <div className="search-div">
                            {oemSpecs?.map((el) => (
                                <div
                                    key={el._id}
                                    className="card"
                                    onClick={() => {
                                        setModel(`${el.model_name}, ${el.year}, ${el.colors}`);
                                        setCar({ ...car, oemSpecs: el._id });
                                        setSearch("");
                                    }}
                                >
                                    <p>{`${el.model_name}, ${el.year}, ${el.colors}`}</p>
                                </div>
                            ))}
                        </div>
                    )} */}
                </div>

                <div style={{ display: "flex", marginLeft: "30px" }}>
                    <Select placeholder='Select Category'>
                        <option value="education">Education</option>
                        <option value="medical">Medical</option>
                        <option value="food">Food</option>
                        <option value="water">Water</option>
                    </Select>

                </div>
            </div>
            <div>
                <button>Filter</button>
                <button>Location</button>
                <button>Category</button>
                <button>Reset Filters</button>
            </div>

        </div>
    );
};

export default DonationPage;
