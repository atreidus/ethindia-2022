Documentation of NFT-Lottery
----------------------------


initrevisecollection.js--Initializes a lottery collection and first nft lottery of the collection.(into revise network)s


populate_nfts_revise.js--We assume there are only five lotteries in a draw, so remaining four are populated into revise network.

The NFTs are populated with a default value for "image" and "status" property is set as "Waiting For Draw" for all NFTs.

run_draw.js--select a random winner from lottery holders, and change metadata of winner.The "status" property is changed to "winner" and "image" of NFT is changed to indicated the win.


