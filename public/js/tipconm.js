var vtp = {
    set(key,data){
        localStorage.setItem(key,JSON.stringify(data));
    },get(key){
        return JSON.parse(localStorage.getItem(key));
    },rem(key){
       localStorage.removeItem(key);
    },
    winHei(o = 0){
        return document.documentElement.clientHeight - o;
    },
    fildata(data,key){
        var item = data;
        for(var i=0;i<data.length;i++){
            if(item[i].path == key){
                vtp.set('selNavJson',item[i]);
            }else{
                if(item[i].children != undefined ){vtp.fildata(item[i].children,key); }
            }
        }
        return [vtp.get('selNavJson'),'selNavJson'];
        // vtp.get('selNavJson')
    },
    str(o){
        return JSON.stringify(o);
    },
    par(o){
        return JSON.parse(o);
    }

}

export default vtp;
