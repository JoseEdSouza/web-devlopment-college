import { useEffect, useState } from "react"
import { Student } from "../api/students/type"

const ListarCurso = () =>{

  const [students, setStudents] = useState<Student[] | null>(null) 
  const [active, setActive] = useState(false)

  const cursos = ["ES", "CC", "EC", "DD", "SI", "RC"]

  useEffect(() =>{
    fetch('http://localhost:8007/student').then((response) => response.json()).then((data) => setStudents(data))
  }, [])

  const func = (ira: number) =>{
    if(ira >= 7){
      return 'green'
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
            cursos.map((item) =>{
              return(
                <>
                  <h1>{item}</h1>
                  {students?.filter((student) => student.major === item).map((student) =>{
                    return(
                      <>
                        <div key={student.id} 
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
                            backgroundColor: active ? func(student.ira) : 'white'
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
                            <p>Nome: {student.name}</p>
                            <p>Curso: {student.major}</p>
                            <p>IRA: {student.ira}</p>
                          </div>
                        </div>
                      </>
                    )
                  })}
                </>
              )
            })
          }
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

export default ListarCurso