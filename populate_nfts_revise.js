const { Revise } = require("revise-sdk");
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI1NjhlOTNhLTAzNzktNGQ4OS1iZDA2LWVmNjhjMWRjODYwYSIsImtleSI6Im5hMWVlZWV5IiwiaWF0IjoxNjcwMDQ1ODE5fQ.JaOAoLXkZOPnvalD4j7C4hmGUyI0GQOJcGdbi-VnAvc"; //this needs to be replaced by the AUTH TOKEn you generate
const revise = new Revise({auth: AUTH_TOKEN});


async function run(inp) {

  let lott_collection="Revise Lottery";
    let lott_coll_id=0;
    const coll = await revise.fetchCollections();
    
   for(let i=0;i<coll.length;i++)
   {
    console.log(coll[i].collectionName);

    if(coll[i].collectionName==lott_collection)
    {
        console.log("the id is",coll[i].id);
        lott_coll_id=coll[i].id;

    }
   }
k=lott_coll_id;
    
    
      // Collection Name : Use any name you want for your collection (this gets shown in the marketplace))
      // Collection_URI  : Use a unique name (no spaces or special characters)
      //                   this will generate a unique link for your collection
      //                   for e.g. if you choose "myuniquecollection"
      //                   your baseURI wil be "myuniquecollection.revise.link"
    

      const prop={
        image:
          "https://drive.google.com/file/d/1Z-soFuJ221lShg_uv9VYOhZaIViY1owv/view?usp=share_link",
        name: "Revise Lottery",
        tokenId:"1",
        description: "Here is your lottery to Revise lottery draw",
      };
      prop.tokenId=inp.toString();
      console.log(prop);
      const nft = await revise.addNFT(
        prop,
        [{ status: "Waiting For Draw" }],
        k
      );
    
      console.log(nft);
}

for (let i = 2; i <=5; i++)
{
run(i);
}