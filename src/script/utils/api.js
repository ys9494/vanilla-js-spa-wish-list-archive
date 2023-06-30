
const baseUrl = 'http://127.0.0.1:8001'

async function post (endpoint, data) {
    const bodyData = JSON.stringify(data);

    console.log(`POST요청 : ${endpoint}`);
    console.log(`POST요청 데이터: ${bodyData}`);

    const response = await fetch(`${baseUrl + endpoint}`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: bodyData
    })

    
	// if (!response.ok) {
	// 	throw new Error(`HTTP error! : ${response.json()}`);
	// }

    const result = await response.json()
    return result;
}

export {post} 