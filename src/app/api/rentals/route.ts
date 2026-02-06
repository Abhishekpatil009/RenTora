// import { NextResponse } from 'next/server'
// import { createClient } from '@supabase/supabase-js'

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
// )

// export async function GET() {
//   const { data, error } = await supabase
//     .from('rentals')
//     .select('*')

//   // 🔹 Console the result (SERVER SIDE)
//   console.log('Supabase rentals data:', data)
//   console.log('Supabase error:', error)

//   if (error) {
//     return NextResponse.json(
//       { error: error.message },
//       { status: 500 }
//     )
//   }

//   return NextResponse.json(data, { status: 200 })
// }



import { NextResponse } from 'next/server';
import { MOCK_ITEMS } from '@/dataForDetails/rentalDetails.data';

export async function GET() {
  try {
    return NextResponse.json(MOCK_ITEMS, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch rentals' },
      { status: 500 }
    );
  }
}
