export const dynamic = 'force-dynamic'
import Image from 'next/image'
import { getClient } from '@/lib/client'
import { gql } from "@apollo/client"
import Link from 'next/link'

export const metadata = {
  title: "BOATS",
  description: "Boat Listing"
}

export default async function Page() {
  const client = getClient()
  const { data } = await client.query({
    query: gql`
      
        query Boats {
          boats(first: 10) {
            data {
              boat
              description
              id
              image
            }
          }
        }
     `
  })
  
  return  (
    <div className="mt-5 px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl uppercase font-semibold leading-3 text-gray-900">Boats</h1>
          <p className="mt-2 text-lg text-gray-700">
            A list of boats which is top sale in the market today.
          </p>
        </div>
      
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    &nbsp;
                  </th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    &nbsp;
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Boat
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Description
                  </th>
                  
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.boats.data.map((boat) => (
                  <tr key={boat.id}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-medium">{boat.id}</td>
                    <td>
                      <div className='mx-5'><Image src={`/assets/boats/${boat.image}`} className='rounded' width='623' height='574' alt={boat.boat} /></div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-medium">{boat.boat}</td>
                    <td className="px-3 py-4 text-sm text-gray-500"><div className='line-clamp-3'>{boat.description}</div></td>
                    
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <Link href={`/boats/${boat.id}`}><button className=' text-white py-1 px-3 rounded bg-[#674186]'>Details</button></Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
