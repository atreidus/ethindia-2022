const { Revise } = require("revise-sdk");
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI1NjhlOTNhLTAzNzktNGQ4OS1iZDA2LWVmNjhjMWRjODYwYSIsImtleSI6Im5hMWVlZWV5IiwiaWF0IjoxNjcwMDQ1ODE5fQ.JaOAoLXkZOPnvalD4j7C4hmGUyI0GQOJcGdbi-VnAvc"; //this needs to be replaced by the AUTH TOKEn you generate
const revise = new Revise({auth: AUTH_TOKEN});
let tkn_chain_id=randomNumber(1,5);  //winner_tkn id
let tkn_revise_id=0;

async function setwinner() {
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
   const nfts = await revise.fetchNFTs(lott_coll_id.toString());
   for(let i=0;i<nfts.length;i++)
   {
    if(nfts[i].tokenId==tkn_chain_id)
    {
        console.log("the winner token id is",nfts[i].id);
        tkn_revise_id=nfts[i].id;

    }

   }
   const nft = await revise.fetchNFT(tkn_revise_id.toString());
   const result = await revise.nft(nft)
                       .setProperty('status', 'Winner!!!')
                       .setImage('https://drive.google.com/file/d/13e62Ke4u3bCtjI5LHTloGfqqOOlhuOAK/view?usp=share_link')
                       .save();


}
function randomNumber(min, max) {
	return Math.floor((Math.random() * (max - min) + min));
}
setwinner();