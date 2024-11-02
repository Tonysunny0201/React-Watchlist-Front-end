import commonApi from "./comonapi"
import SERVERURL from "./serverurl"

export const uploadDetailsApi=async(details)=>{
  return  await commonApi("POST",`${SERVERURL}`,details)

}
export const getDetailsApi=async()=>{
    return  await commonApi("GET",`${SERVERURL}`,"")
  
  }


export const removeDetailApi=async (id)=>{
  return await commonApi("DELETE",`${SERVERURL}/${id}`,'')
}
// Update employee API call
export const updateEmployeeAPI = async (id, empDetails) => {
  return await commonApi("PUT", `${SERVERURL}/${id}`, empDetails);
};


// Get a single employee by ID - called by Edit component
export const getEmployeeByIdAPI = async (id) => {
return await commonApi("GET",`${SERVERURL}/${id}`, "");
};
