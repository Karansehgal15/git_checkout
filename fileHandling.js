const fh=require('fs')

names="karan sehgal satpal sehgal charu sehgal sapna sehgal"
names=names+" "+names
eh_w=function(err)
{
    if(err)
    throw err
    console.log("writting completed")
}

eh_r=function(err,data)
{
    if(err)
    throw err
    content=data.toString();
    console.log("reading completed")
    obj={}
    list=content.split(" ")
    let l=list.length
    for(let i=0;i<l;i++){
            if(obj[list[i]]==undefined)
            obj[list[i]]=1;
            else
            obj[list[i]]++;
    }
    content=""
    for (let [key, value] of Object.entries(obj)) {
        content=content+key+":"+value+" ";
      }
      console.log("formatting completed")
      fh.writeFile("new file.text",content,eh_w)     
}

fh.writeFile("new file.text",names,eh_w)     
fh.readFile("new file.text",eh_r)
