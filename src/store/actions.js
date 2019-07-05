import {RECEIVE_LIST} from './mutations-type'
import listData from '../datas/list-data'
export default {
  getList({commit}){
    //触发对应的mutation
    console.log(action)
    commit(RECEIVE_LIST, listData)
  }
}