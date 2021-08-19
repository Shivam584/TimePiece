let a,c,f, d;
// let timeZones=[-12.0,-11.0,-10.0,-9.30,-9.0,-8.0,-7.0,-6.0,-5.0,-4.0,-3.30,-3.0,-2.0,-1.0,0.0,1.0,2.0,3.0,3.3,4.0,4.3,5.0,5.3,5.45,6.0,6.3,7.0,8.0,8.45,9.0,9.30,10.0,10.30,11.0,12.0,12.45,13.0,14.0];

const countryByOptions = {
    'INDIA': +5.50,
    'CHINA': +8.0,
    'RUSSIA': +3.0,
    'UNITED STATES': -4.0,
    'UNITED KINGDOM': +1.0,
    'NEW ZEALAND': +12.0
}
let localdate, localtime, utc;
let selected, selectOption;
setInterval(() => {
    localdate = new Date();
    localtime = localdate.getTime();
    utc = localtime + (localdate.getTimezoneOffset() * 60000);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let g = document.getElementsByClassName('insidecontainer');
    create_elem = document.createElement('h1');
    selectOptions = document.getElementById("Country");
    selected = selectOptions.options[selectOptions.selectedIndex].text;
    let offset = countryByOptions[selected];
    console.log(selected);
    a = new Date(utc + (3600000 * offset));


    if (a.getHours() >= 10)
        c = a.getHours();
    else
        c = '0' + a.getHours();


    if (a.getMinutes() >= 10)
        c += ':' + a.getMinutes();
    else
        c += ':0' + a.getMinutes();


    if (a.getSeconds() >= 10)
        c += ':' + a.getSeconds();
    else
        c += ':0' + a.getSeconds();


    d = a.toLocaleDateString(undefined, options);
    document.getElementById('Date').innerText = d;
    f = document.getElementById("TT").innerText = "Current Time  is : " + ' ' + c;
}, 1000);