export default{
   registerCoach(context,data){
        const userId = context.rootGetters.userId;
        const coachData ={
            firstName : data.first,
            lastName : data.last,
            description : data.desc,
            hourlyRate : data.rate,
            areas : data.areas
        };

  const response =  fetch(`https://vue-http-demo-67c17-default-rtdb.firebaseio.com/coaches/${userId}.json`,{
            method:'PUT',
            body:JSON.stringify(coachData)
        });
    // const responseData = await response.json();
    if(!response.ok){
        //error...

    }
        context.commit('registerCoach',{
            ...coachData,
            id:userId
        });
    },
     loadCoaches(context,payload){
        if(!payload.forceRefresh && !context.getters.shouldUpdate){
            return ;
        }

     fetch('https://vue-http-demo-67c17-default-rtdb.firebaseio.com/coaches.json')
     .then(response => response.json())
     .then(responseData =>{
        const coaches = [];
        for(const key in responseData){
            const coach = {
                id:key,
                firstName : responseData[key].firstName,
                lastName : responseData[key].lastName,
                description : responseData[key].description,
                hourlyRate : responseData[key].hourlyRate,
                areas : responseData[key].areas
            };
            coaches.push(coach);
        }
        context.commit('setCoaches',coaches);
        context.commit('setFetchTimesData');
     }); 
    
    }

}