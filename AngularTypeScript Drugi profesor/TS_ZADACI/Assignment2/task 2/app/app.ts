abstract class Department {
    constructor(public name: string) {
        console.log(`Department is: '${name}'`);
    }
    abstract printMeeting(subDept: string): void;
}
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting Department');
    }
    printMeeting(subDept: string): void {
        console.log(`You have a meeting with the ${subDept} department at 08:00 IST`);
    }
    returnMeeting(subDept: string): string {
        return `<p>You have a meeting with the ${subDept} department at 08:00 IST</p>`;
    }
}
class BioTechnologyDepartment extends Department {
    constructor() {
        super('BioTechnology and Genetics Department');
    }
    printMeeting(subDept: string): void {
        console.log(`You have a meeting with the ${subDept} department at 14:00 IST`);
    }
    returnMeeting(subDept: string): string {
        return `<p>You have a meeting with the ${subDept} department at 14:00 IST</p>`;
    }
}

let accounting = new AccountingDepartment();
let biotech = new BioTechnologyDepartment();

let btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('show');
let mydisplay: HTMLDivElement = <HTMLDivElement>document.getElementById('display');
btn.addEventListener('click', (): void => {
    let container: string = '';
    container += accounting.returnMeeting('Finance');
    container += biotech.returnMeeting('Cellbiology');
    mydisplay.innerHTML = container;
})

accounting.printMeeting('Finance');
biotech.printMeeting('Cellbiology');
