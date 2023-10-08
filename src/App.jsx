import React from 'react'
import './App.css'
import { TbHomeHeart } from "react-icons/tb";
import { VscPerson } from "react-icons/vsc";
import { RiBubbleChartLine } from "react-icons/ri";
import { MdOutlineContactPhone } from "react-icons/md";
import { GiTechnoHeart } from "react-icons/gi";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { LiaFileMedicalAltSolid } from "react-icons/lia";
import { FaAmbulance } from "react-icons/fa";
import { RiHeartAddLine } from "react-icons/ri";
import { AiOutlineFieldTime } from "react-icons/ai";
import { TbWorldStar } from "react-icons/tb";
import { GiHospital } from "react-icons/gi";
import { BsCalendar2Heart } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";



function App() {

  return (
    <>
      <header className='Header'>

        <h2>CENTRO MÉDICO</h2>
        <ul className='BNavegacion'>
          <li><span className='iconHeader'><TbHomeHeart/></span> <p>Home</p> </li>
          <li><span className='iconHeader'><VscPerson/></span>About us</li>
          <li><span className='iconHeader'><RiBubbleChartLine/></span>Features</li>
          <li><span className='iconHeader'><MdOutlineContactPhone/></span>Contact</li>
        </ul>
      </header>

      <div className='Portada'>
        <img  className='imgPortada' src="https://images.unsplash.com/photo-1625134673337-519d4d10b313?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="portadadoctores" />
      </div>

      <div>
        <ul className='spaceCards'>
          <li>
            <span className='iconCards'><GiTechnoHeart/></span>
            <span className='tituloCards'>Tecnologia Avanzada</span>
            <p>Infraestructura de última tecnologia para su bienestar</p>
            <button><RiHeartAddLine/></button>
          </li>

          <li>
            <span className='iconCards'><LiaFileMedicalAltSolid/></span>
            <span className='tituloCards'>Atencion Primaria</span>
            <p>Atención de calidad como base de la salud</p>
            <button><RiHeartAddLine/></button>
          </li>

          <li>
            <span className='iconCards'><MdOutlineMedicalInformation/></span>
            <span className='tituloCards'>Doctores Experimentados</span>
            <p>Profesionales médicos altamente calificados y experimentados</p>
            <button><RiHeartAddLine/></button>
          </li>

          <li>
            <span className='iconCards'><FaAmbulance/></span>
            <span className='tituloCards'>Disponibilidad 24/7</span>
            <p>Cuidado médico accesible y disponible en todo momento</p>
            <button><RiHeartAddLine/></button>
          </li>
        </ul>
      </div>
      
      
      <main>
        <section className='section1'>
          <div className='section1left'>           
            <span className='tituloSection1'>Clinica médica en la que puedes confiar</span>
            <p>En nuestra clínica, hemos construido una sólida reputación a lo largo de los años como un lugar en el que puedes confiar plenamente para tu atención médica. Nuestro compromiso con la excelencia, la dedicación de nuestro equipo de profesionales de la salud y la calidad de nuestros servicios hacen que seamos la elección confiable para tu bienestar y el de tu familia.</p>
            
            <div className='section1Info'>
              <span className='icon icon1Section1'><AiOutlineFieldTime/></span>
              <span className='icon icon2Section1'><TbWorldStar/></span>
              <span className='icon icon3Section1'><GiHospital/></span>

              <div>
                <span className='tituloInfo1'>Servicios de salud las 24 horas</span>
                <p>Cuidado medico disponible en todo momento</p> 
              </div>

              <div>
                <span className='tituloInfo1'>Estandares internacionales</span>
                <p>Cumplimos con los mas altos estandares medicos a nivel global</p> 
              </div>

              <div>
                <span className='tituloInfo1'>Centro de excelencia</span>
                <p>Destacamos en ofrecer una atencion medica de calidad excepcional</p> 
              </div>

            </div>
          </div>
          
          <div className='section1right'>
            <img className='imgDoctor' src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600" alt="doctor" />
          </div>         
        </section>


        <section className='section2'>
          <ul className='spaceCardssection2'>
            <li>
              <span className='iconCardssection2'><BsCalendar2Heart/></span>
              <span className='tituloCardssection2'>10 +</span>
              <p>Años de experiencia</p>
              
            </li>

            <li>
              <span className='iconCardssection2'><FaUsers/></span>
              <span className='tituloCardssection2'>8 450 +</span>
              <p>Pacientes satisfechos</p>
              
            </li>

            <li>
              <span className='iconCardssection2'><FaUserMd/></span>
              <span className='tituloCardssection2'>1000 +</span>
              <p>Doctores y personal</p>
              
            </li>

            <li>
              <span className='iconCardssection2'><FaAmbulance/></span>
              <span className='tituloCardssection2'>500 +</span>
              <p>Habitaciones de hospital</p>
              
            </li>
          </ul>
        </section>


        <section>
          <h2>Sección 3</h2>
          <p>Contenido de la tercera sección.</p>
        </section>
      </main>
      <aside>
        <h2>Aside</h2>
        <p>Contenido del aside en el lado derecho.</p>
      </aside>
      <footer>
        <p>Pie de página</p>
      </footer>
    </>
  )
}

export default App
