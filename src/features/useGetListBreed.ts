import useUserStore from "@/stores/userStore";

const useGetListBreed = async(animal: string) => {
const user = useUserStore();
try{
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/animaltype/${animal}`);
    if (!res.ok) {
        if (res.status === 401) {
          console.debug('because refresh')
          await user.refresh()
          return await useGetListBreed(animal)
        }
        throw new Error(`Request failed with status ${res.status}`)
    }
    return await res.json().then(object => object.animal_type)
  } catch(err){
    console.error('Breed list error:', err)
    throw err
  }
}

export default useGetListBreed
