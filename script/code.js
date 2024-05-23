

function pull(){
    let idNum = document.querySelector('[idNum]').value;

    let year = idNum.substring(0, 2)
    let month = idNum.substring(2, 4)
    let day = idNum.substring(4, 6)

    let gender = idNum.substring(6, 10)

    if (gender >= 5000){
        gender = 'Male'
    } else {
        gender = 'Female'
    }
    
    switch (month){
        case '01':
            month = 'January'
        break
        case '02':
            month = 'February'
        break
        case '03':
            month = 'March'
        break
        case '04':
            month = 'April'
        break
        case '05':
            month = 'May'
        break
        case '06':
            month = 'June'
        break
        case '07':
            month = 'July'
        break
        case '08':
            month = 'August'
        break
        case '09':
            month = 'September'
        break
        case '10':
            month = 'October'
        break
        case '11':
            month = 'November'
        break
        case '12':
            month = 'December'
        break

        default:
        alert('kkk')
        break
    }
  
    
    console.log(year)
    console.log(month)
    console.log(day)
    console.log(gender)

}