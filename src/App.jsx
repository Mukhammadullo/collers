// Mui
import Button from '@mui/material/Button';  
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './App.css'
import Card1 from './components/Card1';
import Card2 from './components/Card2';
function App() {
  return (
  <div>

<div >
  {/* header */}
  <header className='flex justify-between p-[2%]'>
    <p className='text-[rgb(120,53,15)] font-bold text-[30px]'>Collers</p>
   
    <div className='flex w-[60%]  justify-around md:inline-flex mob:hidden'>
    <ul className='text-[#78350F] flex justify-between items-center w-[70%] font-medium'>
      <li>Products</li>
      <li>Solutions</li>
      <li>Pricing</li>
      <li>Resources</li>
      <li>Log In</li>
    </ul>
    <Button variant="outlined">Sign up now</Button>

    </div>
  <img src="src/assets/menu-scale.svg" className='mob:block md:hidden' alt="" />
  </header>
</div>

{/* section1 */}
<section>
 
 <div className='md:flex justify-around items-center'>
  {/* left */}
  <div className='md:w-[50%] p-[2%]'>
    <p className='text-[50px] font-bold'>Collectible Sneakers</p>
    <p className='font-medium py-5'>Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
    <Button variant="outlined" sx={{color:"#78350F"}}>Sign up now</Button>
    <Button variant="text" sx={{color:"#78350F"}}>Watch Demo</Button>
  </div>
  {/* right */}
  <div className='md:flex justify-end md:w-[50%] p-[2%]'>
    <img src="src/assets/Col.svg" alt="" />
  </div>
  </div>

<div className='md:flex justify-around p-[2%]'>
  
  <div className='md:w-[30%]'>
    <img src="src/assets/trophy.svg" alt="" />
    <h1 className='font-bold py-3'>Nibh viverra</h1>
    <p className='md:w-[80%]'>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
  </div>
  <div className='md:w-[30%]'>
    <img src="src/assets/Icon.svg" alt="" />
    <h1 className='font-bold py-3'>Cursus amet</h1>
    <p className='md:w-[80%]'>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
  </div>
  <div className='md:w-[30%]'>
    <img src="src/assets/tv.svg" alt="" />
    <h1 className='font-bold py-3'>Ipsum fermentum</h1>
    <p className='md:w-[80%]'>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
  </div>
</div>
</section>


{/* section2 */}
<section className='bg-[#0F172A] text-[white] p-[2%]'>
  <div className='md:flex justify-around'>
  
    <div className='md:w-[25%] shadow-lg py-5 shadow-indigo-500/50'>
      <img src="src/assets/Picture.svg" alt="" />
      <p className='font-medium text-[30px] p-4'>Title</p>
      <p className='p-4'>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
      <Button variant="outlined" sx={{width:"350px" , color:"white", marginLeft:"10px"  , marginBottom:"20px"}}> <ShoppingCartIcon></ShoppingCartIcon>  Buy Now </Button>
    </div>
  
    <div className='md:w-[25%] shadow-lg py-5 shadow-indigo-500/50'>
      <img src="src/assets/Picture (1).svg" alt="" />
      <p className='font-medium text-[30px] p-4'>Title</p>
      <p className='p-4'>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
      <Button variant="outlined" sx={{width:"350px" , color:"white", marginLeft:"10px"  , marginBottom:"20px"}}> <ShoppingCartIcon></ShoppingCartIcon>  Buy Now </Button>
     </div>
  
    <div className='md:w-[25%] shadow-lg py-5 shadow-indigo-500/50'>
      <img src="src/assets/Picture (2).svg" alt="" />
      <p className='font-medium text-[30px] p-4'>Title</p>
      <p className='p-4'>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
      <Button variant="outlined" sx={{width:"350px" , color:"white", marginLeft:"10px"  , marginBottom:"20px"}}> <ShoppingCartIcon></ShoppingCartIcon>  Buy Now </Button>
    </div>
</div>
</section>


{/* section3 */}
<section>

<div className='md:flex justify-around items-center shadow-xl m-[4%] p-[3%] rounded-[12px]'>
  {/* left */}
  <div>
    <h1 className='font-bold py-5 text-[40px]'>Why join us</h1>
    <p className='font-medium py-2'>Est et in pharetra magna adipiscing ornare aliquam.</p>
    <p className='font-medium py-2'>Tellus arcu sed consequat ac velit ut eu blandit.</p>
    <p className='font-medium py-2'>Ullamcorper ornare in et egestas dolor orci.</p>
    <Button variant="outlined" sx={{color:"#78350F"}}>Sign up now</Button>
    
  </div>
  {/* right */}
  <div className='section3CardRight md:w-[50%] flex justify-center items-center md:h-[50vh] '>
<img src="src/assets/Video.svg" alt="" />
  </div>
</div>

</section>

{/* section4 Swiper */}
<section>
  <p className='text-[50px] text-center'> Swiper in JS ANd From MUi and INstall!</p>
</section>



{/* section5 */}
<section>
  {/* top */}
  <div>
    <p className='text-[50px] font-bold p-[4%]'>Grow your collection</p>
    <p className='p-[3%] text-[20px]'>Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.</p>
  </div>


<div className='md:flex m-[1%] justify-around'>
  {/* left */}
<div>
  <input type="text" placeholder='Bibendum tellus' className='border-[1px]  border-solid border-black p-[3%]'   />

  <div className='flex'>
    <img src="src/assets/shield-check.svg" alt="" />
    <p className='font-bold py-3'>Cras eget</p>
  </div>

<div className='flex'>
  <img src="src/assets/Vector.svg" alt="" />
  <p className='font-bold py-3'>Amet, fringilla</p>
</div>

<div className='flex'>
  <img src="src/assets/ww.svg" alt="" />
  <p className='font-bold py-3'>Amet nibh</p>
</div>

<div className='flex'>
  <img src="src/assets/settings-alt.svg" alt="" />
  <p className='font-bold py-3'>Amet nibh</p>
</div>



</div>
{/* right */}
<div>
  <img src="src/assets/photo_2024-01-09_14-25-27.jpg" alt="" />
</div>
</div>

<div className='bg-[#78350F] p-[2%]'>
<img src="src/assets/Picture (3).svg" className='m-[5%]' alt="" />
<p className='text-[50px] font-bold text-[white] text-center'>11,658,467</p>
<p className='text-[50px] font-bold text-[white] text-center'>Shoes Collected</p>
</div>

</section>


{/* section6 */}
<section>
<div className='flex justify-between items-center m-[2%]'>
  <p className='font-bold md:text-[50px] mob:text-[30px]'>Articles by Collectors</p>
  <p className='text-[#78350F] font-mono'>More Articles</p>
</div>

{/* cards */}
<div className='md:flex justify-around'>
  <Card1 img={'src/assets/Picture (4).svg'} title={'Congue velit risus'} txt={'Nunc gravida semper tellus neque scelerisque eget tincidunt in.'}></Card1>
  <Card1 img={'src/assets/Picture (5).svg'} title={'Ut mauris'} txt={'Nunc gravida semper tellus neque scelerisque eget tincidunt in.'}></Card1>
  <Card1 img={'src/assets/Picture (6).svg'} title={'Aliquam tortor nunc'} txt={'Nunc gravida semper tellus neque scelerisque eget tincidunt in.'}></Card1>
  <Card1 img={'src/assets/Picture (7).svg'} title={'Fusce non morbi'} txt={'Nunc gravida semper tellus neque scelerisque eget tincidunt in.'}></Card1>
</div>

</section>

{/* section7 */}
<section>
<div className='flex justify-between items-center m-[2%]'>
  <p className='font-bold text-[50px]'>Amazing events</p>
  <p className='text-[#78350F] font-mono'>More Articles</p>
</div>

{/* Card2COmponent */}

<div className='md:flex justify-around'>
  <Card2 title={'Ipsum'} txt={'Varius est diam'} img={'src/assets/Picture (8).svg'}></Card2>
  <Card2 title={'Purus'} txt={'Diam felis tempus'} img={'src/assets/Picture (9).svg'}></Card2>
  <Card2 title={'Urna'} txt={'Vel nulla varius'} img={'src/assets/Picture (10).svg'}></Card2>
  <Card2 title={'Vitae'} txt={'Amet tristique a'} img={'src/assets/Picture (11).svg'}></Card2>
</div>

<div className='flex justify-between items-center m-[2%]'>
  <p className='font-bold text-[40px]'>Collect More Sneakers Today</p>
  <Button variant="outlined" sx={{color:"#78350F"}}>Sign up now</Button>
    </div>
</section>


{/* footer8 */}
<footer className='bg-[#0F172A] text-[white] p-[4%]'>


<hr className='py-5' />

<div className='flex flex-wrap justify-around m-[5%]'>
<ul>
  <li className='py-2'>Product</li>
  <li className='py-2'>Pricing</li>
  <li className='py-2'>Overview</li>
  <li className='py-2'>Browse</li>
  <li className='py-2'>Accessibility</li>
  <li className='py-2'>Five</li>
</ul>

<ul>
  <li className='py-2'>Solutions</li>
  <li className='py-2'>Brainstorming</li>
  <li className='py-2'>Ideation</li>
  <li className='py-2'>Wireframing</li>
  <li className='py-2'>Research</li>
  <li className='py-2'>Design</li>
</ul>

<ul>
  <li className='py-2'>Support</li>
  <li className='py-2'>Contact Us</li>
  <li className='py-2'>Developers</li>
  <li className='py-2'>Documentation</li>
  <li className='py-2'>Integrations</li>
  <li className='py-2'>Reports</li>
</ul>

<div className='flex flex-col  justify-around '>
  <p>
  Get the App
  </p>
  <img src="src/assets/Button.svg" alt="" />
  <img src="src/assets/Google Play.svg" alt="" />

  <p>Follow Us</p>
  <img src="src/assets/Social Icons.svg" alt="" />
</div>
</div>



{/*  */}
<hr className='py-5' />
<div className='flex justify-between'>
  <p>Collers @ 2023. All rights reserved.</p>

<ul className='flex'>
  <li className='m-[2%]'>Terms</li>
  <li className='m-[2%]'>Privacy</li>
  <li className='m-[2%]'>Contact</li>
  <li className='m-[2%]'>EN</li>
</ul>

</div>


</footer>



  </div>
    )
}

export default App
