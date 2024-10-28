import inquirer from "inquirer"

class student{
    static counter = 10000;
id : number;
name : string;
coures: string[];
balance: number;

constructor(name:string){
    this.id = student.counter++;
    this.name = name;
    this.coures = [];
    this.balance = 100;
}
enroll_courese(courese: string){
  this.coures.push(courese)
}

view_balance(){
    console.log(`balance for ${this.name} : $${this.balance}`);
    
}

pay_fee(amount: number){
    this.balance -=amount;
    console.log(` $${amount} fees paid successfuly for ${this.name}`);
    console.log(`Remaning balance :$${this.balance}`);
    
    

}

show_status(){
    console.log(`ID: ${this.id} `);
    console.log(`NAME: ${this.name} `);
    console.log(`COURESE: ${this.coures} `);
    console.log(`BALANCE: ${this.balance} `);
    
}

}

class student__manager{
    Student : student[]

    constructor(){
        this.Student = [];
    }

    add_student(name: string){
        let Student = new student(name);
        this.Student.push(Student) ;
        console.log(`student ${name} added successfully.student  ID ${Student.id}`);
        

    }

    enroll_student(student_id: number, coures: string){
     let student = this.find_student(student_id)
     if(student){
        student.enroll_courese(coures)
        console.log(`${student.name} enrolled in ${coures}  successfully`);
        
     }

    }

    view_student_balance(student_id: number){
        let student = this.find_student(student_id)
        if(student){
            student.view_balance();

        }
        else {
            console.log(`student not dound please Enter a correct a student ID `);
            
        }
        

    }

    pay_student_fess(student_id: number, amount: number ){
        let student = this.find_student(student_id)
        if(student){
            student.pay_fee(amount);
        }
        else{
            console.log(`student not found . please enter  a correct student ID `);
            
        }



    }

    show_student_status(student_id: number){
        let student = this.find_student(student_id)
        if(student){
            student.show_status();
        }
    }

    find_student(student_id: number){
        return this.Student.find(std => std.id === student_id);
    }

    
}

//main function to run the program?

async function main(){
    console.log(`Welcome to "CodewithAli" - student manangement system` );
    console.log("-".repeat(50));
    
    let studentmanager = new student__manager();
    while(true){
         
        let choice = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "select an option",
                choices:[
                    "Add Student",
                    "Enroll student",
                    "view student balance",
                    "pay fees",
                    "show status",
                    "Exit"
                ]
            }
        ]);
        //using swicth case statement 
        switch(choice.choice){
            case"Add Student":
            let name_input = await inquirer.prompt([
                {
                    name: "name",
                    type: "input",
                    message: "Enter a student name",
                }
            ]);
            studentmanager.add_student(name_input.name);
            break;

            case "Enroll student":
                let course_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message:"Enter a student ID",
                    },
                    {
                        name: "course",
                        type : "input",
                        message : "Enter a course name",
                    }
                ]);
                studentmanager.enroll_student(course_input.student_id, course_input.course);
                break;


                case "view student balance":
                    let balance_input = await inquirer.prompt([
                        {
                            name: "student_id",
                            type: "number",
                            message: "Enter a student ID",
                        }
                    ]);
                    studentmanager.view_student_balance(balance_input.student_id);
                    break;

                    case "pay fees":
                        let fess_input = await inquirer.prompt([
                            {
                                name: "student_id",
                                type: "number",
                                message: "Enter a student ID",
                            },{
                                name: "amount",
                                type: "number",
                                message: "Enter the amount to pay$",
                            }
                        ]);
                studentmanager.pay_student_fess(fess_input.student_id, fess_input.amount)
                break;

                case "show status":
                let status_input = await inquirer.prompt([
                    {
                        name : "student_id",
                        type: "number",
                        message: "Enter a student ID",
                    }
                ]);

                studentmanager.show_student_status(status_input.student_id);
                break;

                case "Exit":
                    console.log("Exiting.....");
                    process.exit();
                    
        }
        
    }
}

main();