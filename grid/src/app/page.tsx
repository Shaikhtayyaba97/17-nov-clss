

import Image from "next/image"
export default function Home(){

  const products = [
    {
      id: 1,
      product_name: 'Chair',
      price: '20$'
    },
    {
      id: 2,
      product_name: 'Chair2',
      price: '20$'
    },
    {
      id: 3,
      product_name: 'Chair3',
      price: '20$'
    },
  ]

  return(
    <div >
      {
        products.map((item)=>{
          return(
            <div key={item.id} className="border-2 p-4 border-black">
              <p>{item.product_name}</p>
              <p>{item.price}</p>
            </div>
          )
        })
      }
      <Image className="w-full h-full sm:h-96 md:h-[500px]  lg:h-[600px]" src="/home.jpg" alt="home cover picture fill"   width={500} height={500}  />
    </div>
  );
}