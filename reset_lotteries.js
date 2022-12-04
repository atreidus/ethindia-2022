const { Revise } = require("revise-sdk");
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI1NjhlOTNhLTAzNzktNGQ4OS1iZDA2LWVmNjhjMWRjODYwYSIsImtleSI6Im5hMWVlZWV5IiwiaWF0IjoxNjcwMDQ1ODE5fQ.JaOAoLXkZOPnvalD4j7C4hmGUyI0GQOJcGdbi-VnAvc"; //this needs to be replaced by the AUTH TOKEn you generate
const revise = new Revise({auth: AUTH_TOKEN});

let tkn_revise_id=0;

async function resetlotto() {
    let lott_collection="Revise Lottery";
    let lott_coll_id=0;
    const coll = await revise.fetchCollections();
    
   for(let i=0;i<coll.length;i++)
   {
    console.log(coll[i].collectionName);

    if(coll[i].collectionName==lott_collection)
    {
        console.log("the collection id is",coll[i].id);
        lott_coll_id=coll[i].id;

    }
   }
   const nfts = await revise.fetchNFTs(lott_coll_id.toString());
   for(let i=0;i<nfts.length;i++)
   {
    
        tkn_revise_id=nfts[i].id;

    

   
   const nft = await revise.fetchNFT(tkn_revise_id.toString());
   const result = await revise.nft(nft)
                       .setProperty('status', 'Waiting For Draw')
                       .setImage('https://drive.google.com/file/d/1Z-soFuJ221lShg_uv9VYOhZaIViY1owv/view?usp=share_link')
                       .save();


}
}
resetlotto();