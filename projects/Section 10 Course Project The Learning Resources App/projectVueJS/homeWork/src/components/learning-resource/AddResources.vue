<template>
    <div>
    <base-dialog v-if="inputIsInvalid" title="Invalid input">
        <template #default>
            <p>moi ban nhap vao o trong!</p>
        </template>
        <template #actions>
            <button @click="comfirmError">ok</button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input ref="titleInput" type="text" name="title" id="title">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea ref="desInput" name="description" id="description"  rows="3"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input ref="linkInput" type="url" name="link" id="link">
            </div>
            <div>
                <button type="submit">Add resource</button>
            </div>
        </form>
    </base-card>
    </div>
</template>
<script>
import BaseDialog from '../UI/BaseDialog.vue';
export default {
  components: { BaseDialog },
    name:'add-resources',
    data(){
        return{
            inputIsInvalid:false,
        }
    },
    inject:['addResource'],
    methods:{
       submitData(){
        const enterTitle = this.$refs.titleInput.value;
        const enterDes = this.$refs.desInput.value;
        const enterLink = this.$refs.linkInput.value;
        if(enterTitle.trim()==='' || enterDes.trim()==='' || enterLink.trim()===''){
            this.inputIsInvalid = true;
            return;
        }
        this.addResource(enterTitle,enterDes,enterLink);
       },
       comfirmError(){
           this.inputIsInvalid = false;
       }
    },
}
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>