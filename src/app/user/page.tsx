async function Userpage(){
const url="https://jsonplaceholder.typicode.com/users";
const fetchData=await fetch(url);
const response=await fetchData.json();
console.log(response);
return(
    <div>
        <h1 style={{color:"blue",fontSize:"50px",fontWeight:"bold",textAlign:"center",padding:"20px",margin:"20px"}}>Data Integration</h1>
        {/**Data integration refers to the process of combining data from different sources to provide a unified view. It involves collecting, transforming, and merging data from various databases, applications, or systems to enable users to access, analyze, and use the information more effectively.

In web development or software projects, data integration is often required when:

You are connecting a frontend with multiple backend services (e.g., APIs, databases).
Merging datasets from different platforms into a single dashboard or view.
Consolidating data from multiple microservices in a single application. */}
<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{response[1].username}</h1 >
<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{response[6].company.bs}</h1>
<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{response[9].phone}</h1>
<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{response[5].address.suite}</h1 >

    </div>
)

}
export default Userpage