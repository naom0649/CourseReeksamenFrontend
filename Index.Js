
async function createTeacher (){
    
    const name =document.getElementById('TeacherName').value;
    const email =document.getElementById('Email').value;
    const teacher = {
        'name': name,
        'emailAddress': email
    }
    const objectToJson = JSON.stringify(teacher)
    const respons = await fetch ('http://localhost:8080/addTeacher', {
        method: 'POST',
        headers:{
            "Content-type":"application/json"
        },
        body:objectToJson
    });
    return respons
} 



async function findAllTeachers(){

   

    const respons = await fetch ('http://localhost:8080/findAllTeachers')
    const teachers = await respons.json() 
    const allTeachersId = document.getElementById('allTeachers');

    for(const teacher of teachers){
        newDiv = document.createElement("div")
        console.log(teacher)
     newDiv.innerHTML=`${teacher.name}`

    allTeachersId.appendChild(newDiv)
    }
    



    return teachers
}


async function findTeacherById(){
    

    const id =document.getElementById('teachersId').value;


    const respons= await fetch (`http://localhost:8080/findById/${id}`).then(res=>res.json())
    alert(respons)
    console.log(respons.name)

    newDiv = document.createElement("div")
    newDiv.innerHTML=`${respons.name},${respons.emailAddress} `

    const teachersDiv = document.getElementById('ShowTeacher');
    teachersDiv.appendChild(newDiv)

    

}