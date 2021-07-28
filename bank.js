const arguments = process.argv.slice(2);
 

// class adress{
//     constructor(city, country)
//        {
// 		    this.city = city;
// 		    this.country = country;
//        }
//     }

// let adress1 = new adress(arguments[0],arguments[1]);

// console.log(adress1);

class bank{
    constructor(bankAccountNumber,bankName, money ){
        this.bankName=bankName;
        this.money = money;
        this.bankAccountNumber=bankAccountNumber;
    }
//çekilmek istenen para
    checkmoney(amount){
        if(amount> this.money){
         console.log("amount cannot bigger than money")
        }
        else{
 console.log("current money is: " + (this.money+amount))
        }
      
    }
//yatırılan para
    addMoney(amount){
        this.money+=amount;
        console.log("current money is:" + this.money);
    }    
}

class person{
    constructor( firstName,  lastName){
        this.firstName = firstName;
		this.lastName = lastName;
    }


}
personIndex=[];
if(arguments[0]=='createPerson'){
    let person1 = new person(arguments[1],arguments[2]);
    console.log(person1);
     
    // personIndex.push(person1);
    let count = personIndex.push(person1);
}

else if(arguments[0]=='createBank'){
    let bank1 = new bank(arguments[1],arguments[2], arguments[3]*1); //bankAccountNumber, bankName, money

    let flag = true;
    

    for(let i=0; i<=this.count; i++){ //eger eklenen kişinin indexsi bankAccount eşitse öyle işlem yap
        if(i!=arguments[1]*1){
            flag=false;
        }
    }
        if(flag){
            if(arguments[4]=='addMoney'){ //addMoney amount
                bank1.addMoney(arguments[5]*1);
                // console.log(bank1);
            }

            else if(arguments[4]=='checkMoney'){  //checkmoney amount
                bank1.checkmoney(arguments[5]*1);
                // console.log(bank1);
            }

        }
           
    
 

}

 
