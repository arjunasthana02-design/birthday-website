import FloatingPhotos from "../components/FloatingPhotos";

function Home({openMoods}){

return(

<FloatingPhotos
goBack={()=>setPage("brownie")}
openMoods={()=>setPage("moods")}
/>

)

}

export default Home;