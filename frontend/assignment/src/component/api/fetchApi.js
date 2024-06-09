const fetchImages = async () => {
    const response=await fetch("http://localhost:4000/api/img/images",{
        method:"GET"
    })
    const images=await response.json()
    return images;
   
  };
  
  export default fetchImages;

  export const getImageById=async(id)=>{
  const response = await fetch(`http://localhost:4000/api/img/${id}`,{
    method:"GET"
  })
  const img=await response.json()
  return img;
  }
  