<template>
  <div id="app">
   <div>
      <ul>
       <friend-contact
       v-for="friend in friends" :key="friend.id"
       :id="friend.id"
       :name="friend.name"
       :phone="friend.phone"
       :email="friend.email"
       :isFavourite="friend.isFavourite"
       @favourite-toggle="favouriteToggle"
       @deleteHandle="deleteHandle"
      />
    </ul>
   </div>
   <div class="formData">
     <add-friends
        @AddFriend="AddFriend"
      />
   </div>
  </div>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
import AddFriends from './components/AddFriends.vue';
export default {
  name: 'app',
  methods:{
    AddFriend(name,phone,email){
      
      const addContact = {
        id:new Date().toISOString(),
        name:name,
        phone:phone,
        email:email,
        isFavourite:false
      }
      this.friends.push(addContact);
    },
    favouriteToggle(friendId){
      const identifiedFriend = this.friends.find(friend => friend.id === friendId);
      identifiedFriend.isFavourite=!identifiedFriend.isFavourite;
    },
    deleteHandle(friendID){
      this.friends = this.friends.filter(friend => friend.id !== friendID) 
    }
  },
  data () {
    return {
      friends:[
        {
        id:'0',
        name:'huynh',
        phone:'0123456789',
        email:'a@gmail.com',
        isFavourite:false
      },
      {
        id:'1',
        name:'trang',
        phone:'9876543210',
        email:'b@gmail.com',
        isFavourite:false
      }
      ]
    }
  },
  components:{
    FriendContact,
    AddFriends,
  }
}
</script>

<style>
#app{
  display: flex;
margin: 20px;
padding:20px;
}
li{
  padding: 20px;
  list-style-type: none;
  border: 1px solid #333;
  margin-bottom: 15px;
  text-align: center;
  width: 500px;
  box-sizing: border-box;
}
.formData{
  margin:20px;
  padding:20px;
}
</style>
