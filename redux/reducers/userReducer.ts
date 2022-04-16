import { createSlice } from "@reduxjs/toolkit"

// 타입 정의할 때는 파스칼

// 몽고DB 스키마
export interface UserType{
    userid: string;
    password: string;  
    email: string;
    name: string;  
    phone: string;
    birth: string;
    address: string;
}

export interface UserState{
    loading: boolean;
    data: UserType[];
    error: any;
}


const initialState: UserState = {
    loading: false,
    data: [],
    error: null
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        joinRequest(state: UserState, payload){
            // 컨슈머 형태, 아직 리듀서가 되지 않아서
            // 액션이 투입되면 리듀서가됨
            alert('진행 2: 리듀서 내부 ') 
            state.loading = true; 
        },
        joinSuccess(state: UserState, {payload}){ 
            state.data = [...state.data, payload]
            state.loading = false;
            
        },
        joinFailure(state: UserState, {payload}){ 
            state.data = payload;
            state.loading = false;
        }
    }
})
const { reducer, actions } = userSlice
export const userActions = actions
export default reducer