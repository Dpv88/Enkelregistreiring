// model
const model = {
    personer: [
        {
            navn: 'Glenn',
            bosted: 'Holmestrand',
            alder: '32',
            yndlingspill: 'Football Manager'
        },{
            navn: 'Åge',
            bosted: 'Horten',
            alder: '25',
            yndlingspill: 'Fortnite'
    },{
            navn: 'Vegard',
            bosted: 'Oslo',
            alder: '21',
            yndlingspill: 'League of Legends'
    }],
    inputs: {
        navn: '',
        bosted: '',
        alder: '',
        yndlingspill: ''
    }

};

//view
show();
function show(){
    let html = '';

    html += `<div id='inpt'>
                    <label for="navn">navn</label>
                <input id="navn" type='text' oninput="model.inputs.navn = this.value" >
                <label for="bosted">bosted</label>
                <input id="bosted" type='text' oninput="model.inputs.bosted = this.value" >
                 <label for="alder">alder</label>
                <input id="alder" type='number' oninput="model.inputs.alder = this.value" >
                 <label for="spill">yndlingspill</label>
                <input id="spill" type='text' oninput="model.inputs.yndlingspill = this.value" >
                <button class="knapp" onclick='leggtilperson()'>submit</button></div></br>
                `;

    for (let i = 0; i < model.personer.length; i++) {
        html += `<li>Navn:${model.personer[i].navn} Bosted: ${model.personer[i].bosted} Alder: ${model.personer[i].alder} Favorittspill: ${model.personer[i].yndlingspill} </li>\n`
    };
    document.getElementById('app').innerHTML = html;


};
// controller
function leggtilperson() {
    model.personer.push(model.inputs)
    show()
}

