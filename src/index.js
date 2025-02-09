// Entry
class Entry {
    constructor(date, amount, description){
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount() {
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description){
        super(date, amount, description);
        this.date = date;
        this.amount = amount;
        this.description = description;
        this.type = "income"
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid){
        super(date, amount, description);
        this.date = date;
        this.amount = amount;
        this.description = description;
        this.paid = paid;
        this.type = "expense";
    }

    getFormattedAmount(){
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = [];
    }

    addEntry(entry){
        this.entries.push(entry)
    }

    getCurrentBalance(){
            let incomeList = 0;
            let expenseList = 0;
        if (this.entries.length == 0){
            return 0
        } else {
            this.entries.forEach(function(entry){
                if (entry.type == "income") {
                    incomeList += entry.amount
                }
                else if (entry.type == "expense") {
                    expenseList += entry.amount
                }
            })
        }
    let balance = incomeList - expenseList;
    return balance}

    getFormattedEntries(){
        let formattedEntries = [];
        this.entries.forEach(function(entry){
            if (entry.type == "income") {
                formattedEntries.push(`${entry.date} | ${entry.description} +${entry.amount}€`)
            }
            else if (entry.type == "expense") {
                formattedEntries.push(`${entry.date} | ${entry.description} -${entry.amount}€`)
            }})
    return formattedEntries
        }
}
