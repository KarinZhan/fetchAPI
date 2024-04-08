export async function load(){
    const response = await fetch('https://api.squiggle.com.au/?q=teams')

if(!response.ok){
    return {success:false}
}
const myData = await response.json()
return { success: true, myData:myData }
}