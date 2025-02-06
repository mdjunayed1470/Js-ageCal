function AgeCal(age){
    this.age = age;
    this.peopleAge = function(calAge){
        if(this.age >= 0 && this.age <= 12){
            return `You are now children`;
        }else if(this.age >= 13 && this.age <= 19){
            return `You are Teenager`;
        }else if(this.age >= 20 && this.age <= 59){
            return `You are young people`;
        }else if(this.age >= 60){
            return `You are old people`;
        }else{
            return `invalid age`;
        }
    }
}
const userAge = Number(prompt(`Enter you'r age`));
const ageCal = new AgeCal(userAge);
alert(ageCal.peopleAge());