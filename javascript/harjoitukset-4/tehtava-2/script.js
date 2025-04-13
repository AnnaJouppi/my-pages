var hcpdata = [{ "name": "Ari", "hcp": 54 },
               { "name": "Pasi", "hcp": 5 },
               { "name": "Seppo", "hcp": 20 }];

function doList() {
    for(let i = 0; i < hcpdata.length; i++) {
        let ulnode = document.getElementById("hcplist");
        let linode = document.createElement('li');
        let litext = document.createTextNode(hcpdata[i].name + ' : ' + hcpdata[i].hcp);
        linode.appendChild(litext);
        ulnode.appendChild(linode);
    }
    hcpdata = [];
}