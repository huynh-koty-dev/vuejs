export default{
    addRequest(context,data){
        const reqData = {  
            userEmail: data.email,
            message : data.message
        };
        const response = fetch(`https://vue-http-demo-67c17-default-rtdb.firebaseio.com/requests/${data.coachId}.json`,{
            method:'POST',
            body:JSON.stringify(reqData)
        })
        .then(response => response.json())
        .then(responseData =>{
            
            reqData.id = responseData.name;
            reqData.coachId = data.coachId;
        })
        
        
        context.commit('addRequest',reqData);
    },
    fetchRequests(context){
        const coachId =  context.rootGetters.userId;
        fetch(`https://vue-http-demo-67c17-default-rtdb.firebaseio.com/requests/${coachId}.json`)
        .then(response => response.json())
        .then(responseData=>{
            const requests = [];
            for(const key in responseData){
                const req = {
                    id:key,
                    coachId: coachId,
                    userEmail: responseData[key].userEmail,
                    message: responseData[key].message
                };
                requests.push(req);
            };
            context.commit('setRequests',requests);
        })
    }
}