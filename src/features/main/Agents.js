import React from "react"
import { Row, Col } from 'antd';
import AgentCard from "../../components/main/agents/AgentCard";
import { useState } from 'react'
import axios from 'axios';

function Agents() {
    const [agentList,setAgentList] = useState([{displayName:"",fullPortrait:"",description:"",abilities:{displayName: "",displayIcon:""},role:{displayName:""}}])
    const getData = async () => {
        const res = await axios.get('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
        setAgentList(res.data.data)
        console.log(res)
    }

    return(
        <>
            <Row>
                {agentList.map((agent,id) => {
                    return <Col span={8} key={id}><AgentCard agent={agent}/></Col>

                })}

            </Row>
            <button onClick={getData}> Bas</button>
        </>
    )
}
export default Agents