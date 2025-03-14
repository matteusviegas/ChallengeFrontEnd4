const HorarioFuncionamento = () => {
    return (
      <div className="bg-[#D9D9D9] min-h-screen flex justify-center items-center">
        <div className="bg-white rounded-[3%]  font-bold sm:w-[55%] md:w-[44%] p-5">
          <h1 className="text-center text-3xl mb-5  decoration-violet-50">Horario de  <span className="text-[#42807D]"> Funcionamento</span>  </h1>
          <div className="bg-white p-3 mx-auto w-[90%] rounded-2xl">
            <ul className="flex flex-col gap-7 mt-5 w-full mx-auto text-2xl">
              <li className="bg-[#D9D9D9] p-2 rounded-lg">
                 Das 4h até a meia-noite
              </li> 
              <li className="bg-[#D9D9D9] p-2 rounded-lg">
               <span className="text-[#42807D]">Sábados: </span>  Das 4h até a meia-noite
              </li>
              <li className="bg-[#D9D9D9] p-2 rounded-lg">
              <span className="text-[#42807D]"> Domingos e Feriados: </span>  Das 4h até meia-noite
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default HorarioFuncionamento;
  