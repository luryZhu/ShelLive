export default function loadImageAsync(url){
    
    return new Promise((resolve,reject)=>{
        let img=new Image()
        img.src=url
        img.onload=()=>resolve(url)
        img.onerror=()=>reject("加载失败")
    })
}