const aku:string = "yanuar";
const nama = ():string => {
    return "yanuar"
}

const me  =  (sekolah:string,callback:Function):any => {
    let result = `aku ${sekolah} di ${ callback()}`;
    return result;
}

console.log(me('pnc',nama))