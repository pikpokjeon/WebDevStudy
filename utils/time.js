const newDate = ( timestamp, e , calcTime) => 
{
    const measurement = e.toLowerCase();
    let value;

    if(!timestamp && calcTime)
    {
        switch(measurement)
        {
            case 'now':
                value = new Date(Date.now())
            case 'hour':
                value = new Date().getHours()
            case 'min':
                value = new Date().getminutes()
            case 'year':
                value = new Date().getFullYear()
            default :
                break;
        }
    }
    else{

    }
    return value
}

console.log(newDate(0,'now',0))

