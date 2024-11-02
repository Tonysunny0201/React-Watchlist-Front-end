import { useEffect, useState } from "react";
import { Button, IconButton, } from "@mui/material";
import { getDetailsApi, removeDetailApi } from "./services/allApi";
import Employeedit from "./Employeedit";
import { Link, useNavigate } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);
  const [alldetails, setalldetails] = useState([]);
  const navigate = useNavigate()

  const getAllDetails = async () => {
    try {
      const response = await getDetailsApi();
      setalldetails(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllDetails();
  }, [alldetails]);

  const deleteDetail = async (id) => {
    const result = await removeDetailApi(id)
    // setDeleteVideoResponse(result)
  }
  return (
    <>
      <div style={{ height: "100vh" }}>
        <div
          style={{ minHeight: "100vh" }}
          className="flex justify-center items-center"
        >
          <div className=" bg-white rounded p-5">
            <div className="flex space-x-5 items-center justify-between">
              <h3 className="text-center font-bold text-2xl">Watch List Details </h3> <span><Link to={"/Add"} className="bg-blue-600 text-white p-2 rounded shadow-md">Add Movies</Link></span>
            </div>
            <table className="p-5 ">
              <thead>
                <tr>
                  <th className="p-4">SL No.</th>
                  <th className="p-4">Movie Name</th>
                  {/* <th className="p-4">Email</th> */}
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {alldetails && alldetails.length > 0 ? (
                  alldetails.map((detail) => (
                    <tr key={detail?.id}>
                      <td className="p-4">{detail?.Id}</td>
                      <td className="p-4">{detail?.Name} </td>
                      {/* <td className="p-4"> {detail?.Email}</td> */}
                      <td className="p-4">{detail?.status}</td>
                      <td className="p-2">
                        {/* <Link to={"/Edit"}  className="bg-green-600 text-white p-2 m-2 rounded shadow-md">Edit</Link> */}
                        <Button onClick={() => navigate(`/Edit/${detail?.id}`)} variant="contained" color="success"  >
                          Edit
                        </Button>
                      </td>
                      <td>

                        <Button onClick={() => deleteDetail(detail?.id)} variant="contained" color="error" >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <div></div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
