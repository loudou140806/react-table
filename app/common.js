let common = {
    j:1,
    getData (){
        let data= [];
        let account = ['ubunut','root','admin','Administrator','sa'];
        let osArray = ['Windows2003','Windows2008','Windows2012','OSX','ubuntu'];
            data.push({
                id:this.j,
                ip:"200.210.33."+Math.floor(Math.random()*255),
                hostName:'HostName'+this.j,
                os:osArray[Math.floor(Math.random()*5)],
                account:account[Math.floor(Math.random()*5)],
                port:Math.floor(Math.random()*100),
            });
        this.j++;
        return data;
    }
}

export default common;