import { useEffect, useState } from "react"
import { Student } from "../api/students/type"

const Listar = () =>{

  const [students, setStudents] = useState<Student[] | null>(null) 
  const [active, setActive] = useState(false)

  useEffect(() =>{
    fetch('http://localhost:8007/student').then((response) => response.json()).then((data) => setStudents(data))
  }, [])

  const func = (ira: number) =>{
    if(ira < 7){
      return 'red'
    }
    else{
      return 'blue'
    }
  }

  const media = () =>{
    let soma = 0
    students?.map((item) =>{
      soma += item.ira
    })

    if(students?.length === undefined){
      return 0
    }
    else{
      return soma/students?.length
    }
  }

  return(
    <>
      {
        students == null ? (
          <div>
            <p>Carregando...</p>
          </div>
        )
        :
        <div
          style={{
            height: 'fit-content',
            width: '90vw',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            fontSize: '2rem',
            flexDirection: 'column',
            margin: '0 auto',
          }}
        >
          
          {
            students.map((item) =>{
              return(
                <>
                  <div key={item.id} 
                    style={{
                      height: '100px',
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      alignItems: 'center',
                      border: '1px solid black',
                      borderRadius: '10px',
                      margin: '10px',
                      backgroundColor: active ? func(item.ira) : 'white'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                      }}    
                    >
                      <p>Nome: {item.name}</p>
                      <p>Curso: {item.major}</p>
                      <p>IRA: {item.ira}</p>
                    </div>
                  </div>
                </>
              )
            })
          }
          <div
            style={{
              height: '100px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid black',
              borderRadius: '10px',
              padding: '10px',
              backgroundColor: 'pink'
            }}
          >
            <h1>Média dos alunos: {media()}</h1>
          </div>
        </div>
      }
      <button 
        onClick={() => setActive(!active)}
        style={{
          width: '200px',
          margin: '10px auto',
          display: 'block',
        }}
      >
        Destacar Alunos
      </button>
    </>
  )
}
export default Listar