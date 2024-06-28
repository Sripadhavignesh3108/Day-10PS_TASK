function arrayofobject()
{
    const array=[
        
           book1={
            "title":"harrypotter",
            "author":"J.K Rowling",
            "year":"1997"
            },

        book2={
            "title":"game of thrones",
            "author":"john paul",
            "year":"1982"
        },
        book3={
            "title":"Ramayan",
            "author":"valmeeki",
            "year":"Unknown"
        }
    
    ]
    let anr=array.splice(1,1)
    return(anr)
}
console.log(arrayofobject())