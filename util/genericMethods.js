
class GenericMethods {
    async dateFormatter (dateInput) {
        const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            let current_datetime = dateInput;
            let formatted_date = current_datetime.getDate() + "-" + months[current_datetime.getMonth()] + "-" + current_datetime.getFullYear()
            return formatted_date
    }
};

module.exports = new GenericMethods();