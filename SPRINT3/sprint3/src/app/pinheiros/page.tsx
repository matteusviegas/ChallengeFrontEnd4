import Link from "next/link"


const Pinheiros= () => {
return(

<>
<div className=" w-[70%] mx-auto mt-[10%]">
<h1>PINHEIROS</h1>
<p>acesso as linhas: 9 e 4</p>

<div className="flex ">
  <div className="flex-col gap-16">
    <Link href="/horariofuncionamento">
    <img className="h-[98px] " src="/img_Icons/image_form.png " alt="" />
    <h1>Horario de Funcionameto</h1>

    </Link>


    <Link href="/denuncie">
    <img className="h-[98px]" src="/img_Icons/Denuncie.png " alt="img_Denuncie" />
    <h1>Denúncie</h1>
    </Link>

   
    <Link href="/acessibilidade">
    <img className="h-[98px]" src="/img_Icons/Acessibilidade.png " alt="" />

    <h1>Acessibilidade</h1>
    </Link>
  
  </div>
   
   
    
</div>
</div>


</>

)
}
export default Pinheiros