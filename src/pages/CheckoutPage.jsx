import React from 'react'


function CheckoutPage() {
  return (
    <div>
        <div>
            <h2 className='py-2 mx-auto w-[80%]'><span className='text-sm text-stone-400'>Shopping Bag /</span> <span className='text-[0.7rem]'>Checkout</span></h2>
            <form action="" >
                <h1 className='font-bold text-lg mx-auto w-[80%] pb-2'>Checkout</h1>
                <div className='flex flex-col gap-3 md:flex-row md:justify-between md:mx-auto md:w-[80%]'>
                    <div className='space-y-3 md:w-[50%]'>
                        <div className='flex flex-col w-[80%] mx-auto gap-2 md:mx-0'>
                            <p className='font-semibold text-sm '>Shipping Information</p>
                            <label htmlFor="fullname" className='text-[0.8rem] font-semibold'>Name</label>
                            <input type="text" className='border border-stone-500 rounded-sm text-sm p-1.5 outline-stone-700' name='fullname' placeholder='Full Name' required />
                            <label htmlFor="address" className='text-[0.8rem] font-semibold'>Address</label>
                            <input type="text" className='border border-stone-500 rounded-sm text-sm p-1.5 outline-stone-700' name='address' placeholder='Street Address' required />
                            <label htmlFor="city" className='text-[0.8rem] font-semibold'>City</label>
                            <input type="text" className='border border-stone-500 rounded-sm text-sm p-1.5 outline-stone-700' name='city' placeholder='City' required />
                            <div className='flex justify-between md:gap-3'>
                                <div className='flex flex-col w-[48%] gap-1 md:w-[50%]'>
                                    <label htmlFor="state" className='text-[0.8rem] font-semibold'>State</label>
                                    <input type="text" className='border border-stone-500 rounded-sm text-sm p-1.5 outline-stone-700' name='state' placeholder='State' required />
                                </div>
                                <div className='flex flex-col w-[48%] gap-1 md:w-[50%]'>
                                    <label htmlFor="zipcode" className='text-[0.8rem] font-semibold'>Zip Code</label>
                                    <input type="tel" className='border border-stone-500 rounded-sm text-sm p-1.5 outline-stone-700' name='zipcode' placeholder='Zip Code' />
                                </div>
                            </div>
                        </div>
                        <div className='w-[80%] mx-auto flex flex-col gap-2 md:mx-0 md:pb-4'>
                            <p className='font-semibold text-sm '>Payment Information</p>
                            <label className='text-[0.8rem] font-semibold' htmlFor="creditCardNumber">Credit Card Number</label>
                            <input type="tel" className='border border-stone-500 rounded-sm text-sm p-1.5 outline-stone-700' name='creditCardNumber' placeholder='**** **** **** ****' required />
                            <div  className='flex justify-between md:gap-3'>
                                <div  className='flex flex-col w-[48%] gap-1 md:w-[50%]'>
                                    <label className='text-[0.8rem] font-semibold' htmlFor="expirationDate">Expiration Date</label>
                                    <input type="text" className='border border-stone-500 rounded-sm text-sm p-1.5 outline-stone-700' name='expirationDate' placeholder='MM/YY' required />
                                </div>
                                <div  className='flex flex-col w-[48%] gap-1 md:w-[50%]'>
                                    <label className='text-[0.8rem] font-semibold' htmlFor="cvv">CVV</label>
                                    <input type="tel" className='border border-stone-500 rounded-sm text-sm p-1.5 outline-stone-700' name='cvv' placeholder='CVV' required  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[80%] mx-auto space-y-3 py-2 md:py-1 md:w-[50%] md:mx-0'>
                        <h1 className='font-semibold p-0 md:font-bold'>Order Summary</h1>
                        <div className='flex justify-between'>
                            <div>
                                <img src="" alt="" className='w-[20%]' />
                                <div className='space-y-0'>
                                    <p>name</p>
                                    <p>price</p>
                                </div>
                            </div>
                            <div>
                                <p>price</p>
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-between'>
                            <p>Subtotal</p>
                            <p>Price</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Shipping</p>
                            <p>Price</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Tax</p>
                            <p>Price</p>
                        </div>
                        <hr />
                        <div className='flex justify-between'>
                            <p>Total</p>
                            <p>Price</p>
                        </div>
                        <button type='button' className="w-full py-2 bg-amber-500 text-black rounded-sm font-semibold md:cursor-pointer md:py-2.5">Place Order</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CheckoutPage