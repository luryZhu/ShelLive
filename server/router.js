const express=require('express')
const router=express.Router()
const homehot=require('./data/home/homehot')
// const searchResult=require('./data/search/index')
const datails=require('./data/details/index')
const url=require("url")
const Mock = require('mockjs')
const details = require('./data/details/index')
const Random=Mock.Random

router.get('/home/hot1',(req,res)=>{
    const cityName=url.parse(req.url,true).query.cityName
    
    const dataHot1 = new Array(4).fill(0).map(()=>{
        return Mock.mock({
                "id": '@integer(0, 100)',
                "title": cityName + Random.ctitle(1,2),
                "img": Random.image('71x71', Random.color(), '#FFF', "ShelLive"),
                "link": "https://luryzhu.github.io/"
        })
    })
   
    res.send({
        status: 200,
        // result: homehot["北京"].hot1
        result: dataHot1
    })
  
    
})

router.get('/home/hot2',(req,res)=>{
    const cityName=url.parse(req.url,true).query.cityName
    const dataHot2 = new Array(4).fill(0).map(()=>{
        return Mock.mock({
                "id": '@integer(0, 100)',
                "title": cityName + Random.ctitle(1,2),
                "img": Random.image('71x71', Random.color(), '#FFF', "ShelLive"),
                "link": "https://luryzhu.github.io/"
        })
    })
    res.send({
        status: 200,
        // result: homehot["北京"].hot2
        result: dataHot2
        // result: []
    })
})

router.get('/home/hot3',(req,res)=>{
    const cityName=url.parse(req.url,true).query.cityName
    const dataHot3 = new Array(10).fill(0).map(()=>{
        return Mock.mock({
                "id": Random.id(),
                "title": cityName + Random.ctitle(6,12),
                "houseType": "17/19层| 4室1厅 - 273.97 ㎡",
                "price": Random.integer(10,30)*100,
                "rentType": "整租",
                "img": Random.image(`200x${Random.integer(150,200)}`, Random.color(), '#FFF', 'ShelLive')
        })
    })
    res.send({
        status: 200,
        // result: homehot["北京"].hot2
        result: dataHot3
        // result: []
    })
})


router.get('/search',(req,res)=>{
    const keywords=url.parse(req.url,true).query.keywords
    // console.log(req.url);
    console.log(keywords);
    const data=new Array(5).fill(0).map(()=>{
        return Mock.mock({
            "id": Random.id(),
            "title": Random.ctitle(3,5)+keywords,
            "houseType": "17/19层| 4室1厅 - 273.97 ㎡",
            "price": "<h3>130000</h3>",
            "rentType": "整租",
            "img": Random.image('800x600', Random.color(), '#FFF', 'ShelLive')
        })
    })
    const dataSearch=Mock.mock({
        
        // "hasMore": Random.boolean(),
        "hasMore": true,
        "data": data
               
    })
    res.send({
        status: 200,
        result: dataSearch
    })

})

router.get('/details',(req, res)=>{
    const id=url.parse(req.url,true).query.id
    console.log(id);
    res.send({
        status: 200,
        result: details
    })
})

router.post('/login',(req, res)=>{
    // console.log(req.body);
    const {username, password }=req.body
    console.log(username, password);
    if (username && password) {
        res.send({
            status: 200,
            token: "kjhklsfaugdfigdbds.sfhdksfldgsigfydgshdb",
            nickname: username+"nick"
        })
    } else {
        res.send({
            status: 400,
            msg: "用户名或密码错误"
        })
    }
})

router.get('/mock',(req,res)=>{
    res.send(Random.image('70x70', '#ccc', '#FFF', 'ShelLive'))
})

module.exports=router