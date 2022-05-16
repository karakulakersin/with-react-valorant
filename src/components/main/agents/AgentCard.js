import React from "react"

function AgentCard({agent}) {
    return (
        <div>

            <div className=" justify-center dark:bg-slate-500  m-4 rounded-md">
                <div><img className="w-full rounded-md "
                          src={agent.fullPortrait}
                          alt="sd"/></div>
                <div className="flex flex-col items-center p-8 ">
                    <p className="text-4xl"> {agent.displayName}</p>
                    <p> {agent.role.displayName} </p>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-4xl"> Abilities</p>
                        <div className="flex">
                          {/*  {agent.abilities.map((ability,id) => {
                               return <div key={id} className="flex flex-col items-center">
                                    <p>
                                        {ability.displayName}
                                    </p>
                                    <img src={ability.displayIcon} alt="sd"/>
                                </div>
                            })}*/}



                        </div>
                    </div>
                    <p>{agent.description} </p>
                </div>
            </div>
        </div>
    )
}

export default AgentCard