<template>
    <div class="">
      <h1>회원목록</h1>
      <ul>
        <li v-for="(member, index) in members " :key="index">
          <p> {{index}}. 이름 : {{member.name}} , 나이 : {{member.age}}, 직업: {{member.job}} 
            <button @click="removeMember(index)">삭제</button>
          </p>
        </li>
      </ul>
    </div>
    <div>
      이름:<input type="text" v-model="editName" placeholder="이름"><br>
      나이:<input type="text" v-model="editAge" placeholder="나이"><br>
      직업:<input type="text" v-model="editJob" placeholder="직업"><br>
      <button @click='addMember'>추가</button>
  
    </div>
  </template>
  
  <script>
  import {useStore} from 'vuex';
  import {computed, ref} from 'vue';
  export default {
    name: 'MemberView',
    setup(){
      const store = useStore();
      const members = computed( ()=> store.state.members );
  
      const editName = ref('');
      const editAge  = ref('');
      const editJob  = ref('');
  
      const addMember = ()=> {
        const data = {
          name: editName.value, 
          age : editAge.value,
          job : editJob.value,
        }
  
        store.commit('addMember', data);
        editName.value = '';
        editAge.value = '';
        editJob.value = '';
  
        console.log('회원목록 => ' + store.state.members.name);
        
      };
  
      const removeMember = (index) =>{
        store.commit('removeMember',index);
      }
  
  
      return {members, addMember, removeMember, editName,editAge,editJob};
  
  
  
  
    }
  };
  </script>
  
  <style scoped>
  /* 스타일을 추가하세요 */
  </style>