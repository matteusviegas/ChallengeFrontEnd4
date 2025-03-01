const Sugestoes =()=>{
    return (
        <>
        <h1 className="mx-auto mt-6 mb-8 w-[26%] text-center font-bold text-6xl">ENVIE SUA   <span className="text-[#42807D] ">SUGESTÃO</span> </h1>
<div className="bg-[#42807D] w-[50%] mx-auto p-4 rounded-2xl ">
    <p className="text-white text-2xl w-[60%] text-center mx-auto mt-4">Sua sugestão é importante para trazermos melhorias benéficas!</p>

    <div className="mx-auto w-[53%]">
    <input className="p-[35%] rounded-2xl mt-[8%] bg-white text-top" type="text" name="nome" />
    <div className="flex mt-[5%] h-[60px] mx-auto">
    <img src="img_icons/imagess.png" alt="" />
    <img src="img_icons/Sua informação estará protegida!.png" alt="" />
    </div>
 
    </div>
</div>
        </>
    )
    }
    
    export default  Sugestoes ;
;