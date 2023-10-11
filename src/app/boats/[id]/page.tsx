import { getClient } from '@/lib/client'
import { gql } from '@apollo/client'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

async function getData(id: number) {
  const client = getClient()
  const { data } = await client.query({
    query: gql`
      query Boat {
        boat(id : ${id}) {
            boat
            description
            features {
            boat_id
            feature
            id
            }
            image
        }
        }
    `,
    
  })
  return data
}

const Page = async ({ params }: { params: { id: number } }) => {
    const data = await getData(params.id)
    console.log(data)
    return <div>
        <div className="flex mt-5">
            <div className='w-1/2'>
                <Image className='rounded-xl' src={`/assets/boats/${data.boat.image}`} width='1519' height='1187' alt={data.boat.boat}/>
            </div>
            <div className='w-1/2 p-5'>
            <div className='text-xl mb-2 font-semibold'>{data.boat.boat}</div>
            <div className='mb-3'>{data.boat.description}</div>
            <div>
                <ul>
                {
                    data.boat.features.map((item) => {                        
                            return (<li className=' border-b-2 py-2'>{item.feature}</li>)                        
                    })
                }
                </ul>
            
            </div>
        </div>       
            
       </div>
       
    </div>
}

export default Page