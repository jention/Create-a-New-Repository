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
    fildata(data,key,hndn = 'selNavJson',reNum){
        var item = data;
        for(var i=0;i<data.length;i++){
            if(item[i].path == key){
                vtp.set(hndn,item[i]);
                reNum = i;
            }else{
                if(item[i].children != undefined ){vtp.fildata(item[i].children,key); }
            }
        }
        return [vtp.get(hndn),hndn,reNum];
        // vtp.get('selNavJson')
    },
    str(o){
        return JSON.stringify(o);
    },
    par(o){
        return JSON.parse(o);
    },
    getAfterStr(o,s,isb = 0,ifs = 1){   //S：是否去掉-/  ，isb ，ifs 是否数组
        o = ifs ? o[isb] : o ;
        return s ? o.substring(o.lastIndexOf("/")) : o.substring(o.lastIndexOf("/")).split('/')[1];
    },
    getBeforeStr(o){
        return o.substring(0,o.lastIndexOf("/"));
    },
    returnRootPathStr(o){
        let d = vtp.getBeforeStr(o);
        if(d == ""){d = o}
        return d;
    },
    removeStr(o){
        return o.split('/')[1];
    }

}

export default vtp;
