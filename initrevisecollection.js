const { Revise } = require("revise-sdk");
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI1NjhlOTNhLTAzNzktNGQ4OS1iZDA2LWVmNjhjMWRjODYwYSIsImtleSI6Im5hMWVlZWV5IiwiaWF0IjoxNjcwMDQ1ODE5fQ.JaOAoLXkZOPnvalD4j7C4hmGUyI0GQOJcGdbi-VnAvc"; //this needs to be replaced by the AUTH TOKEn you generate
const revise = new Revise({auth: AUTH_TOKEN});

async function run() {

    const collection = await revise.addCollection({
        name: "Revise Lottery",
        uri: "reviselottery",
      });
    
      // Collection Name : Use any name you want for your collection (this gets shown in the marketplace))
      // Collection_URI  : Use a unique name (no spaces or special characters)
      //                   this will generate a unique link for your collection
      //                   for e.g. if you choose "myuniquecollection"
      //                   your baseURI wil be "myuniquecollection.revise.link"
    
      const nft = await revise.addNFT(
        {
          image:
            "https://drive.google.com/file/d/1Z-soFuJ221lShg_uv9VYOhZaIViY1owv/view?usp=share_link",
          name: "Revise Lottery",
          tokenId: "1",
          description: "Here is your lottery to Revise lottery draw",
        },
        [{ status: "Waiting For Draw" }],
        collection.id
      );
    
      console.log(nft);
}
run()