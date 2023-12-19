import React from 'react'

function ProjectContainer(props) {
 
  return (
    <article className='w-fit h-96 bg-medium-purple-900 bg-opacity-70 rounded-3xl mx-auto shadow-sm border-solid border-orange-400/100'>
        <div className=' mx-auto px-6 py-4 rounded-xl bg-hopbush-600'>
            <img src={props.image} width={500} height={150} alt="Imagen ilustrativa" />
        </div>
        <div className='flex flex-row '>
            {props.type.map(tipo=>{
                    return <h2 key={props.type.indexOf(tipo)} className='mx-5 rounded-xl border-solid border-medium-purple-950 '>{tipo} </h2>
            })}
        </div>
        <div>
            Description
        </div>
    </article>
  )
}

export default ProjectContainer