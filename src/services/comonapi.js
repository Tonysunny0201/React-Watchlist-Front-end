import axios from "axios";
import SERVERURL from "./serverurl";

const commonApi=async(httpMethod,url,reqBody)=>{
const requestConfig={
    method:httpMethod,
    url,
    data:reqBody
}
return await axios(requestConfig).then((res)=>{
    return res
}).catch(err=>{
    return err
})
}
export default commonApi