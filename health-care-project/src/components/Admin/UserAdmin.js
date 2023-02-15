import React, {useState, useEffect} from "react";
import TableAdmin from "./TableAdmin";
import DrawerForm from "./Drawer";
import * as db from "../../services/createUserService"
import * as dbBan from "../../services/bannedService"


export default function UserAdmin(props) {
  const { detail } = props;
  const [dataFull, setDataFull] = useState([]);
  const [bannedList, setbannedList] = useState([]);
  const [vipList, setvipList] = useState([]);
  let element = "";
  useEffect(()=>{
    db.getUser().then((user)=>setDataFull(user.data));
  },[dataFull]);
  useEffect(()=> {
    dbBan.getUser().then((user)=> setbannedList(user.data));
  },[bannedList]);

  if (detail.id == 1) {
    element = <TableAdmin list={dataFull} lock={false}/>
  } else if (detail.id == 2) {
    element = <TableAdmin list={bannedList} lock={true}/>
  } else {
    element = <TableAdmin list={vipList} lock={true}/>
  }
  
  const checkInfo = ()=> {
    db.getUser().then((user)=>console.log(user.data));
    console.log(dataFull, "here");
    console.log(detail);
  }
  return (
    <>
        {element}
        <DrawerForm/>
    </>
  );
}
